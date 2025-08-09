import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  // Extract YouTube video ID or playlist ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    
    // Handle YouTube playlist URLs
    const playlistMatch = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    if (playlistMatch) {
      return { type: 'playlist', id: playlistMatch[1] };
    }
    
    // Handle different YouTube video URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^#&?]*)/,
      /youtube\.com\/v\/([^#&?]*)/,
      /youtube\.com\/watch\?.*v=([^#&?]*)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1] && match[1].length === 11) {
        return { type: 'video', id: match[1] };
      }
    }
    
    return null;
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
    } else {
      setIsLoading(true);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const videoData = getYouTubeVideoId(videoUrl);
  const isPlaylist = videoData?.type === 'playlist';
  const videoId = videoData?.id;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/20 backdrop-blur-sm transition-opacity"
      onMouseDown={(e) => {
        // Close when clicking outside the player box
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-white/90 backdrop-blur rounded-xl shadow-[0_8px_28px_rgba(0,0,0,0.25)] w-full max-w-5xl max-h-[95vh] overflow-hidden border border-[#136457]/20 animate-scaleIn">
        {/* Accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#136457] via-[#0f4f45] to-[#136457]" />
        {/* Modal Header */}
        <div className="flex justify-between items-center px-3 py-2 sm:px-5 sm:py-3 bg-[#136457]/10">
          <h2 className="text-sm sm:text-lg font-semibold text-[#0f4f45] leading-snug truncate pr-4">
            {title || (isPlaylist ? 'Video Playlist' : 'Video Lecture')}
          </h2>
          <button
            onClick={onClose}
            className="text-[#136457] hover:text-[#0e4a3f] transition-colors p-1 flex-shrink-0 rounded focus:outline-none focus:ring focus:ring-[#136457]/30"
            aria-label="Close modal"
          >
            <IoClose size={26} />
          </button>
        </div>
        {/* Video Container */}
        <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
          {isLoading && videoId && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0f4f45] bg-opacity-70">
              <div className="text-center text-white">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-white/30 border-t-white mx-auto mb-3" />
                <p className="tracking-wide text-sm">Loading video...</p>
              </div>
            </div>
          )}
          {videoId ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={isPlaylist
                ? `https://www.youtube.com/embed/videoseries?list=${videoId}&autoplay=1&rel=0&modestbranding=1&color=white&playsinline=1`
                : `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&fs=1&cc_load_policy=1&iv_load_policy=3&playsinline=1&color=white`}
              title={title || (isPlaylist ? 'Video Playlist' : 'Video Lecture')}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              onLoad={() => setIsLoading(false)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center text-gray-500 px-4">
                <div className="mb-4">
                  <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-lg font-medium">Invalid Video URL</p>
                <p className="text-sm">Please check the video link</p>
                {videoUrl && (
                  <p className="text-xs mt-2 text-gray-400 break-all">{videoUrl}</p>
                )}
              </div>
            </div>
          )}
        </div>
        {/* Modal Footer */}
        <div className="px-3 py-2 sm:px-5 sm:py-3 bg-[#136457]/5 border-t border-[#136457]/20">
          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-[#0f4f45] hover:text-white bg-white hover:bg-[#136457] border border-[#136457]/40 rounded-md transition-colors text-sm font-medium shadow-sm"
            >
              Close
            </button>
            {videoId && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#136457] text-white rounded-md hover:bg-[#0e4a3f] transition-colors text-center text-sm font-medium shadow-sm"
              >
                Open in YouTube
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
