export function searchGenre() {

    const genreLinks = document.querySelectorAll('.group a');
    const movies = document.querySelectorAll('.card__film');

    const sliderImg = document.querySelector('.hero-slider');
    const sliderLink = document.querySelector('.slider__link');

    genreLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const genre = link.dataset.genre;

            console.log(genre);

            if (genre === 'all') {

                movies.forEach(movie => {
                    movie.style.display = 'block';
                });

                sliderImg.style.display = 'block';
                sliderLink.style.display = 'block';

                return;
            }

            sliderImg.style.display = 'none';
            sliderLink.style.display = 'none';


            movies.forEach(movie => {
                const movieGenres = movie.dataset.genre.split(" ");

                if (movieGenres.includes(genre)) {
                    movie.style.display = 'block';
                } else {
                    movie.style.display = 'none';
                }
            });

        });
    });
}


export function seriesAll() {

    const buttonSeries = document.querySelector('.btn__series');
    const cards = document.querySelectorAll('.card__film');

    const hero = document.querySelector(".hero-slider");
    const sliderLink = document.querySelector(".slider__link");

    let isFiltered = false;

    buttonSeries.addEventListener("click", (event) => {
        event.preventDefault();

        // 👉 если уже фильтр включен — вернуть всё
        if (isFiltered) {

            hero.style.display = 'block';
            sliderLink.style.display = 'block';

            cards.forEach(card => {
                card.style.display = "block";
            });

            isFiltered = false;
            return;
        }

        // 👉 если фильтр выключен — включить его
        cards.forEach(card => {
            if (card.dataset.type === "series") {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        hero.style.display = 'none';
        sliderLink.style.display = 'none';

        isFiltered = true;
    });
}


export function newFilm() {

    const films = document.querySelectorAll('.card__film');
    const buttonNew = document.querySelector('.btn__new');

    let isNewFilms = false;

    buttonNew.addEventListener("click", (event) => {
        event.preventDefault();

        if (isNewFilms) {
            films.forEach(film => {
                film.style.display = 'block';
            });

            isNewFilms = false;
            return;
        }

        films.forEach(film => {
            if (film.dataset.new === 'true') {
                film.style.display = 'block';
            } else {
                film.style.display = 'none';
            }
        });

        isNewFilms = true;
    });
}

export function popularFilm() {

    const popFilms = document.querySelectorAll('.card__film');
    const popularBtn = document.querySelector('.btn__popular');

    let popularMovie = false;

    popularBtn.addEventListener("click", (event) => {
        event.preventDefault();

        if (popularMovie) {
            popFilms.forEach(pop => {
                pop.style.display = 'block';
            });

            popularMovie = false;
            return;
        }

        popFilms.forEach(pop => {
            if (pop.dataset.popular === 'true') {
                pop.style.display = 'block';
            } else {
                pop.style.display = 'none';
            }
        });

        popularMovie = true;
    });
}

export function cartoonFilms() {
    const cartoons = document.querySelectorAll('.card__film');
    const cartoonBtn = document.querySelector('.btn__cartoon');

    const hero = document.querySelector(".hero-slider");
    const sliderLink = document.querySelector(".slider__link");

    let showCartoons = false;

    cartoonBtn.addEventListener("click", (event) => {
        event.preventDefault();

        if (showCartoons) {

            hero.style.display = 'block';
            sliderLink.style.display = 'block';

            cartoons.forEach(cartoon => {
                cartoon.style.display = 'block';
            });

            showCartoons = false;
            return;
        }

        cartoons.forEach(cartoon => {
            if (cartoon.dataset.type === "cartoon") {
                cartoon.style.display = 'block';
            } else {
                cartoon.style.display = 'none';
            }
        });

        hero.style.display = 'none';
        sliderLink.style.display = 'none';

        showCartoons = true;
    });
}