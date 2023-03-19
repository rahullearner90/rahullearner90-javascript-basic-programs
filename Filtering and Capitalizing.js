const books = [
    { title: "Book One", author: "john smith", year: 2005 },
    { title: "Book Two", author: "jane doe", year: 2015 },
    { title: "Book Three", author: "joe bloggs", year: 2012 },
  ];
  
  const filteredBooks = books.filter((book) => book.year >= 2010);
  
  const capitalizedBooks = filteredBooks.map((book) => {
    if (book.author.includes(" ")) {
      const [firstName, lastName] = book.author.split(" ");
      book.author = firstName + " " + lastName.toUpperCase();
    } else {
      book.author = book.author.toUpperCase();
    }
    return book;
  });
  
  console.log(capitalizedBooks);

  
//   Match valid URLs using regex
const urls = [
    "http://example.com",
    "https://www.example.com",
    "ftp://example.com",
    "http://example.com/path/to/file.html",
    "https://www.example.com/index.html",
    "http://localhost:3000",
    "https://example.com/?q=test&sort=desc",
  ];
  
  const validUrls = urls.filter((url) => /^(https?):\/\/[^\s/$.?#].[^\s]*$/i.test(url));
  
  console.log(validUrls);
  