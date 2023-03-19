const urls = [
    "https://www.linkedin.com/in/john-doe_123",
    "https://www.linkedin.com/in/jane-doe",
    "https://www.linkedin.com/in/joe-doe-123abc",
    "https://www.linkedin.com/in/123-john-doe",
    "https://www.linkedin.com/in/john_doe",
    "https://www.linkedin.com/in/john_doe-123_abc",
    "https://www.linkedin.com/in/johndoe",
    "https://www.linkedin.com/in/1234567890123456789012345678901"
  ];
  
  const linkedinUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
  urls.forEach(url => {
    if (linkedinUrlRegex.test(url)) {
      console.log(`"${url}" is a valid LinkedIn profile URL.`);
    } else {
      console.log(`"${url}" is not a valid LinkedIn profile URL.`);
    }
  });
  