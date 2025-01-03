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
          next: { revalidate: 180 }, // Match the 3-minute cache
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
    // Update interval to match cache duration (3 minutes = 180000ms)
    const interval = setInterval(fetchData, 180000);

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
      className="flex items-center gap-4 dark:bg-zinc-900/90 bg-white/90 backdrop-blur-sm p-2 pr-4 rounded-lg w-[300px] mt-6 -mb-2 border dark:border-zinc-800 border-zinc-200"
    >
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <div className="relative w-12 h-12 rounded-md overflow-hidden dark:bg-zinc-800 bg-zinc-100 flex-shrink-0">
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
        <div className="min-w-0 flex-1 overflow-hidden">
          <a
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-sm dark:text-zinc-100 text-zinc-900 hover:underline block overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {data.title}
          </a>
          <p className="text-xs dark:text-zinc-400 text-zinc-500 overflow-hidden text-ellipsis whitespace-nowrap">
            {data.artist}
          </p>
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="w-6 h-6 rounded-full bg-[#1DB954] flex items-center justify-center">
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