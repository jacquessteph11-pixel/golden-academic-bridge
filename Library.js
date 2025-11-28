const books = [
    {
        title: "Physics Fundamentals",
        category: "Physics",
        img: "images/book1.jpg",
        link: "https://example.com/physics-book"
    },
    {
        title: "Modern Chemistry",
        category: "Chemistry",
        img: "images/book2.jpg",
        link: "https://example.com/chemistry-book"
    },
    {
        title: "Astronomy Wonders",
        category: "Astronomy",
        img: "images/book4.jpg",
        link: "https://example.com/astronomy-book"
    }
];

const gallery = document.getElementById("book-gallery");
const searchInput = document.getElementById("searchInput");
const filter = document.getElementById("categoryFilter");

function displayBooks(list) {
    gallery.innerHTML = "";

    list.forEach(book => {
        gallery.innerHTML += `
        <div class="book-card">
            <img src="${book.img}" alt="${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>${book.category}</p>
                <a href="${book.link}" target="_blank">Read</a>
            </div>
        </div>`;
    });
}

// initial load
displayBooks(books);

// filter by search + category
searchInput.addEventListener("input", updateLibrary);
filter.addEventListener("change", updateLibrary);

function updateLibrary() {
    const search = searchInput.value.toLowerCase();
    const category = filter.value;

    const filtered = books.filter(b => {
        const matchesSearch = b.title.toLowerCase().includes(search);
        const matchesCategory = category === "all" || b.category === category;
        return matchesSearch && matchesCategory;
    });

    displayBooks(filtered);
}
