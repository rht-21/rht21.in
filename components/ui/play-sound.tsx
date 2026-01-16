import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Kbd, KbdGroup } from "./kbd";

const FADE_DURATION = 600; // ms
const TARGET_VOLUME = 0.1;
const NOTIFICATION_DISPLAY_TIME = 4000; // ms

const PlaySound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeRef = useRef<number | null>(null);
  const notificationTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const audio = new Audio("/sounds/song.mp3");
    audio.volume = 0;
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const fadeVolume = (from: number, to: number, onEnd?: () => void) => {
    if (!audioRef.current) return;

    const steps = 20;
    const stepTime = FADE_DURATION / steps;
    const delta = (to - from) / steps;
    let current = from;

    clearInterval(fadeRef.current!);

    fadeRef.current = window.setInterval(() => {
      if (!audioRef.current) return;

      current += delta;
      audioRef.current.volume = Math.max(0, Math.min(1, current));

      if ((delta > 0 && current >= to) || (delta < 0 && current <= to)) {
        audioRef.current.volume = to;
        clearInterval(fadeRef.current!);
        fadeRef.current = null;
        onEnd?.();
      }
    }, stepTime);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    setIsPlaying((prev) => {
      const next = !prev;

      if (!next) {
        // stopping
        setShowNotification(false);
        if (notificationTimeoutRef.current) {
          clearTimeout(notificationTimeoutRef.current);
        }

        fadeVolume(audioRef.current!.volume, 0, () => {
          audioRef.current?.pause();
        });
      } else {
        // starting
        setShowNotification(true);

        if (notificationTimeoutRef.current) {
          clearTimeout(notificationTimeoutRef.current);
        }
        notificationTimeoutRef.current = window.setTimeout(() => {
          setShowNotification(false);
        }, NOTIFICATION_DISPLAY_TIME);

        audioRef.current!.play();
        fadeVolume(audioRef.current!.volume, TARGET_VOLUME);
      }

      return next;
    });
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // ignore typing contexts
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      if (e.key.toLowerCase() === "m") {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="relative inline-block">
          <button
            className="nav-buttons"
            aria-label="Toggle sound"
            onClick={togglePlay}
          >
            <span
              className={`vinyl-spin inline-block transition-colors will-change-transform ${
                isPlaying ? "text-primary" : "text-foreground"
              }`}
              style={{
                animationPlayState: isPlaying ? "running" : "paused",
              }}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M7.40381 16.5967C4.8654 14.0583 4.8654 9.94271 7.40381 7.4043M16.5962 7.4043C17.6103 8.41836 18.2192 9.68413 18.4231 11.0005M16.5962 16.5967C17.0785 16.1144 17.4692 15.5751 17.7682 15.0005"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>

          {/* Song notification */}
          <div
            className={`absolute top-8 -left-14 z-50 mt-2 -translate-x-1/2 rounded-lg bg-black/80 px-3 py-2 whitespace-nowrap backdrop-blur-sm transition-opacity duration-500 ${
              showNotification
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <span className="block text-[10px] tracking-wide text-gray-400 uppercase">
              Now Playing
            </span>
            <Link
              href="https://www.youtube.com/watch?v=O3ZIALj3EO8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-sm text-white duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              TRIVEA - Tropic Treasure
            </Link>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent className="flex items-center justify-center">
        <KbdGroup>
          <p>Toggle Music</p>
          <Kbd>M</Kbd>
        </KbdGroup>
      </TooltipContent>
    </Tooltip>
  );
};

export default PlaySound;
