// --- Local Shared Notes System ---

// Load notes from localStorage
function loadNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

// Save notes to localStorage
function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Add a new note (used by teachers)
function addNote(title, description, uploader) {
  const notes = loadNotes();
  const newNote = {
    title,
    description,
    uploader,
    date: new Date().toLocaleString()
  };
  notes.push(newNote);
  saveNotes(notes);
}
