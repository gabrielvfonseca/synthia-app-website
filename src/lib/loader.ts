export default function imageLoader({ src, width, quality }) {
    return `https://try-synthia.com/${src}?w=${width}&q=${quality || 75}`
  }
  