function handleFormSubm(e) {
    e.preventDefault()

    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const releaseYear = document.querySelector('#releaseYear').value;
    const range = document.querySelector('#range').value;
    // const isWatched = document.querySelector('#isWatched').checked;

    const film = {
        id: Date.now(),
        title,
        genre,
        releaseYear,
        range,
        isWatched: false,
    }

    addFilmToLocalStorage(film);
    e.target.reset();
    document.querySelector('#rangeValue').textContent = '0';
}

function editFilm(id) {
    const films = JSON.parse(localStorage.getItem('films')) || [];

    const filmToEdit = films.find(f => f.id === id);

    if(filmToEdit) {
        document.querySelector('#title').value = filmToEdit.title;
        document.querySelector('#genre').value = filmToEdit.genre;
        document.querySelector('#releaseYear').value = filmToEdit.releaseYear;
        document.querySelector('#range').value = filmToEdit.range;
        document.querySelector('#rangeValue').textContent = filmToEdit.range;

    }

    deleteFilm(id);
}

function deleteFilm(id) {
    let films = JSON.parse(localStorage.getItem('films')) || [];

    films = films.filter(film => film.id !==id);

    localStorage.setItem('films', JSON.stringify(films));

    deleteFilm(id);

    renderTable();
}

function addFilmToLocalStorage(film) {
    const films = JSON.parse(localStorage.getItem('films')) || [];
    films.push(film)
    localStorage.setItem('films', JSON.stringify(films));

    renderTable();
}

function renderTable() {
        const films = JSON.parse(localStorage.getItem('films')) || [];
        
        const filmTableBody = document.querySelector('#film-tbody');

        filmTableBody.innerHTML = ""

        films.forEach((film) => {
            const row = document.createElement('tr');
            row.classList.add('table-row');

            row.innerHTML =
                `<td>${film.title}</td>
                <td>${film.genre}</td>
                <td>${film.releaseYear}</td>
                <td>${film.range}</td>
                <td class="status-cell" onclick="toggleWatched(${film.id})">
                    ${film.isWatched ? 'Да' : 'Нет'}
                </td>
                <td><button class="edit" onclick="editFilm(${film.id})">⚙️</td>
                <td>
                    <button class="delete-btn" onclick="deleteFilm(${film.id})">🗑️</button>
                </td>`;

        filmTableBody.appendChild(row);
    });
}

function toggleWatched(id) {
    let films = JSON.parse(localStorage.getItem('films')) || [];

    films = films.map(film => {
        if(film.id === id) {
            film.isWatched = !film.isWatched;
        }
        return film;
    });
    localStorage.setItem('films', JSON.stringify(films));
    renderTable();
}

const slider = document.getElementById('range');
const output = document.getElementById('rangeValue');

slider.addEventListener('input', function() {
    output.textContent = this.value;
})

document.querySelector('#film-form'). addEventListener('submit', handleFormSubm)

renderTable();