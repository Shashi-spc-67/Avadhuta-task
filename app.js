
const encodeURL = (longURL) => {

    const shortCode = generateShortCode(longURL);
    const shortURL = `https://myntra.com/${shortCode}`;
    const urlMap = {};
    urlMap[shortCode] = longURL;
    return shortURL;
  };
  const generateShortCode = (longURL) => {
    const hash = hashFunction(longURL);
    return hash.substring(0, 6); 
  };
  const hashFunction = (str) => {
    let hash = 0;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; 
    }
    return hash.toString();
  };

  const longURL = "https://www.myntra.com/very/long/url";
  const shortURL = encodeURL(longURL);
 
  console.log(`Original URL: ${longURL}`);
  console.log(`Shortened URL: ${shortURL}`)
  document.write(`Original URL: ${longURL}<br>`)
  document.write(`Shortened URL: ${shortURL} <br>`)
