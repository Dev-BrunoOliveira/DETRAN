import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { CTB_AUDIO_TRACKS, CtbAudioTrack } from '../audios';

interface AudioContextType {
  tracks: CtbAudioTrack[];
  currentTrackIndex: number;
  currentTrack: CtbAudioTrack;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  playbackRate: number;
  volume: number;
  isMuted: boolean;
  autoPlayNext: boolean;
  isPlayerVisible: boolean;
  isMinimized: boolean;
  isPlaylistOpen: boolean;
  
  // Actions
  playTrack: (index: number) => void;
  togglePlayPause: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  seekTo: (seconds: number) => void;
  skipTime: (seconds: number) => void;
  setPlaybackRate: (speed: number) => void;
  setVolume: (vol: number) => void;
  toggleMute: () => void;
  setAutoPlayNext: (enabled: boolean | ((prev: boolean) => boolean)) => void;
  setIsPlayerVisible: (visible: boolean) => void;
  setIsMinimized: (minimized: boolean | ((prev: boolean) => boolean)) => void;
  setIsPlaylistOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const tracks = CTB_AUDIO_TRACKS;
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playbackRate, setPlaybackRateState] = useState<number>(1.0);
  const [volume, setVolumeState] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [autoPlayNext, setAutoPlayNext] = useState<boolean>(true);
  const [isPlayerVisible, setIsPlayerVisible] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    audio.preload = 'metadata';

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      // Auto play next in sequence if enabled
      if (autoPlayNext) {
        setCurrentTrackIndex((prev) => {
          const nextIndex = (prev + 1) % tracks.length;
          return nextIndex;
        });
      }
    };

    const handleError = (e: Event) => {
      console.error('Audio playback error:', e);
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [autoPlayNext, tracks.length]);

  // Handle track source change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const track = tracks[currentTrackIndex];
    if (track && track.src) {
      const wasPlaying = isPlaying;
      audio.src = track.src;
      audio.playbackRate = playbackRate;
      audio.volume = isMuted ? 0 : volume;
      setCurrentTime(0);

      if (wasPlaying) {
        audio.play().catch((err) => {
          console.warn('Autoplay prevented or failed:', err);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrackIndex]);

  // Synchronize playback rate
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Synchronize volume and mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const playTrack = (index: number) => {
    if (index < 0 || index >= tracks.length) return;
    setIsPlayerVisible(true);
    if (currentTrackIndex === index && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
      }
    } else {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
      // Small timeout to allow src setting in useEffect, then play
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
        }
      }, 50);
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    setIsPlayerVisible(true);
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
      }
    }, 50);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
      }
    }, 50);
  };

  const seekTo = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = seconds;
      setCurrentTime(seconds);
    }
  };

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      const newTime = Math.min(Math.max(audioRef.current.currentTime + seconds, 0), duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const setPlaybackRate = (speed: number) => {
    setPlaybackRateState(speed);
  };

  const setVolume = (vol: number) => {
    setVolumeState(vol);
    if (vol > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const currentTrack = tracks[currentTrackIndex] || tracks[0];

  return (
    <AudioContext.Provider
      value={{
        tracks,
        currentTrackIndex,
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        playbackRate,
        volume,
        isMuted,
        autoPlayNext,
        isPlayerVisible,
        isMinimized,
        isPlaylistOpen,
        playTrack,
        togglePlayPause,
        nextTrack,
        prevTrack,
        seekTo,
        skipTime,
        setPlaybackRate,
        setVolume,
        toggleMute,
        setAutoPlayNext,
        setIsPlayerVisible,
        setIsMinimized,
        setIsPlaylistOpen,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within an AudioProvider');
  }
  return context;
};
