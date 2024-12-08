import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 180; // Cache for 3 minutes

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

async function getAccessToken() {
  if (!refresh_token) {
    throw new Error(`No refresh token available. Environment check: 
      CLIENT_ID: ${client_id ? 'Set' : 'Not Set'},
      CLIENT_SECRET: ${client_secret ? 'Set' : 'Not Set'},
      REFRESH_TOKEN: ${refresh_token ? 'Set' : 'Not Set'}`
    );
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    }),
  });

  return response.json();
}

export async function GET() {
  try {
    const { access_token } = await getAccessToken();
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: {
        revalidate: 180 // Cache for 3 minutes
      }
    });

    if (response.status === 204 || response.status > 400) {
      return NextResponse.json({ isPlaying: false }, {
        headers: {
          'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=60'
        }
      });
    }

    const song = await response.json();

    if (!song.item) {
      return NextResponse.json({ isPlaying: false }, {
        headers: {
          'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=60'
        }
      });
    }

    return NextResponse.json({
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((artist: { name: string }) => artist.name).join(', '),
      albumImageUrl: song.item.album.images[0].url,
      songUrl: song.item.external_urls.spotify,
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=60'
      },
    });
  } catch (error) {
    console.error('Error fetching Spotify data:', error);
    return NextResponse.json({ 
      isPlaying: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=180, stale-while-revalidate=60'
      }
    });
  }
}