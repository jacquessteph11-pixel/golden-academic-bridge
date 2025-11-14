const events = [
    {
        title: "Science Fair 2025",
        date: "Nov 20, 2025",
        description: "Explore innovative science projects by students.",
        image: "images/event1.jpg",
        link: "https://example.com/science-fair"
    },
    {
        title: "Astronomy Night",
        date: "Dec 10, 2025",
        description: "Observe stars and planets with telescopes.",
        image: "images/event2.jpg",
        link: "https://example.com/astronomy-night"
    },
    {
        title: "Chemistry Workshop",
        date: "Jan 15, 2026",
        description: "Hands-on experiments with professional chemists.",
        image: "images/event3.jpg",
        link: "https://example.com/chemistry-workshop"
    },
    {
        title: "Biology Seminar",
        date: "Feb 12, 2026",
        description: "Interactive lectures on ecosystems and life sciences.",
        image: "images/event4.jpg",
        link: "https://example.com/biology-seminar"
    }
];

const gallery = document.getElementById('events-gallery');

events.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <img src="${event.image}" alt="${event.title}">
        <h3>${event.title}</h3>
        <p class="date">${event.date}</p>
        <p>${event.description}</p>
        <a href="${event.link}" target="_blank">Read More</a>
    `;
    gallery.appendChild(card);
});
