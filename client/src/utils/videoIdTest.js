// Test file to verify YouTube video ID extraction
// This demonstrates how the VideoModal extracts IDs from various YouTube URL formats

// Test file to verify YouTube video ID extraction
// This demonstrates how the VideoModal extracts IDs from various YouTube URL formats

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

// Test URLs from your assets.js file
const testUrls = [
  'https://youtu.be/zAsSkYhDxGM?si=lsZ9ogQ9UaRIdqD5',
  'https://youtu.be/qBBhTkIdToY?si=vXpKy-dqhnJhNkZm',
  'https://youtu.be/B4h6OkQ0ZJ8?si=w0qVfgq2YTadfiC2',
  'https://youtu.be/gXveJraU7hc?si=jKrascQPQtW82O7q',
  'https://youtu.be/iggxjHSQiOI?si=A2BYXzBnYRjHQx1D',
  'https://www.youtube.com/watch?v=cfhw2TC4k0Y',
  'https://www.youtube.com/watch?v=XYi2-LPrwm4',
  'https://www.youtube.com/playlist?list=PL8p2I9GklV454LdGfDOw0KkNazKuA-6B2'
];

console.log('=== YouTube Video ID Extraction Test ===');
console.log('');

testUrls.forEach((url, index) => {
  const videoData = getYouTubeVideoId(url);
  console.log(`Test ${index + 1}:`);
  console.log(`URL: ${url}`);
  console.log(`Type: ${videoData?.type || 'FAILED'}`);
  console.log(`Extracted ID: ${videoData?.id || 'No ID found'}`);
  
  if (videoData?.type === 'playlist') {
    console.log(`Embed URL: https://www.youtube.com/embed/videoseries?list=${videoData.id}`);
  } else if (videoData?.type === 'video') {
    console.log(`Embed URL: https://www.youtube.com/embed/${videoData.id}`);
  } else {
    console.log(`Embed URL: Cannot create embed URL`);
  }
  console.log('---');
});

// Export for use in React components
export { getYouTubeVideoId };
