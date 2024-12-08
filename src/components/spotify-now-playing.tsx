"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import Image from "next/image";

interface SpotifyData {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumImageUrl?: string;
  songUrl?: string;
}

export function SpotifyNowPlaying() {
  const [data, setData] = useState<SpotifyData>({ isPlaying: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/spotify', {
          next: { revalidate: 30 },
        });
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error('Failed to fetch Spotify data:', error);
        setData({ isPlaying: false });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading || !data.isPlaying) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 bg-zinc-900/90 backdrop-blur-sm p-2 pr-4 rounded-lg max-w-sm w-full mt-6 -mb-2"
    >
      <div className="flex items-center gap-2">
        <div className="relative w-12 h-12 rounded-md overflow-hidden bg-zinc-800 flex-shrink-0">
          {data.albumImageUrl && (
            <Image
              src={data.albumImageUrl}
              alt={`${data.title} album art`}
              width={48}
              height={48}
              className="object-cover"
            />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sm text-zinc-100 hover:underline truncate block"
          >
            {data.title}
          </a>
          <p className="text-xs text-zinc-400 truncate">{data.artist}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-[#1DB954] flex items-center justify-center">
          {data.isPlaying ? (
            <Pause className="w-4 h-4 text-black" />
          ) : (
            <Play className="w-4 h-4 text-black" />
          )}
        </div>

      </div>
    </motion.div>
  );
} 