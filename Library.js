// ---------------------------
// 📚 House of Science Library
// Fetches real books from Google Books API
// ---------------------------

// DOM Elements
const gallery = document.getElementById("book-gallery");
const searchBar = document.getElementById("searchBar");

// Default topic (you can change this)
let currentTopic = "science";

// Fetch books from Google Books API
async function fetchBooks(topic) {
  gallery.innerHTML = `<p class="loading">Loading books about "${topic}"...</p>`;
  
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${topic}&maxResults=20`);
    const data = await response.json();

    if (!data.items) {
      gallery.innerHTML = `<p class="no-results">No books found for "${topic}". Try another search.</p>`;
      return;
    }

    const books = data.items.map(item => ({
      title: item.volumeInfo.title || "Untitled",
      author: (item.volumeInfo.authors && item.volumeInfo.authors.join(", ")) || "Unknown Author",
      image: (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail) || "images/placeholder.jpg",
      description: item.volumeInfo.description
        ? item.volumeInfo.description.substring(0, 120) + "..."
        : "No description available.",
      link: item.volumeInfo.infoLink || "#"
    }));

    displayBooks(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    gallery.innerHTML = `<p class="no-results">Error loading books. Please check your internet connection.</p>`;
  }
}

// Function to display book cards
function displayBooks(bookArray) {
  gallery.innerHTML = "";

  bookArray.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <div class="book-info">
        <h3>${book.title}</h3>
        <p><b>Author:</b> ${book.author}</p>
        <p>${book.description}</p>
        <a href="${book.link}" target="_blank" class="read-btn">View Book</a>
      </div>
    `;
    gallery.appendChild(card);
  });
}

// Handle search input
searchBar.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  if (query.length > 2) {
    fetchBooks(query);
  } else if (query.length === 0) {
    fetchBooks(currentTopic);
  }
});

// Load initial set of books when page opens
document.addEventListener("DOMContentLoaded", () => {
  fetchBooks(currentTopic);
});
