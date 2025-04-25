// ✅ For toolkit.html (Save and Show Tasks)
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');

if (taskForm) {
    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const task = document.getElementById('taskInput').value;

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskForm.reset();
        displayTasks();
    });

    displayTasks(); // Show tasks on page load
}

function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = ''; // Clear old list
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}


// ✅ For notes.html (Save and Display Notes)
const noteForm = document.getElementById('noteForm');
const notesList = document.getElementById('notesList');

if (noteForm) {
    noteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const subject = document.getElementById('subject').value;
        const content = document.getElementById('content').value;

        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push({ subject, content });
        localStorage.setItem('notes', JSON.stringify(notes));

        noteForm.reset();
        displayNotes();
    });

    displayNotes();
}

function displayNotes() {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notesList.innerHTML = '';
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = `Subject: ${note.subject} — Note: ${note.content}`;
        notesList.appendChild(li);
    });
}

// ✅ For fun.html (Play/Pause Music)
function playMusic() {
    const music = document.getElementById("AllTheStars");
    music.play();
}

function pauseMusic() {
    const music = document.getElementById("AllTheStars");
    music.pause();
}

// ✅ For fun.html (Suggest Random Movie)
function getMovie() {
    const movies = [
        "3 Idiots", 
        "Inside Out", 
        "The Pursuit of Happyness", 
        "Zindagi Na Milegi Dobara", 
        "Bajrangi Bhaijaan", 
        "Good Will Hunting",
        "Kumbalangi Nights",
        "Godha",
        "Sudani from Nigeria",
        "Banglore Days"
    ];
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    document.getElementById("movieBox").textContent = randomMovie;
}
