export function searchMovie() {

    const searchInput = document.querySelector('.film__name');
    const cardFilm = document.querySelectorAll('.card__film');
    const hero = document.querySelector(".hero-slider");
    const sliderLink = document.querySelector(".slider__link");

    console.log(cardFilm);

    searchInput.addEventListener("input", () => {

        const text = searchInput.value.toLowerCase();

        if (text !== "") {
            hero.style.display = "none";
            sliderLink.style.display = "none";
        } else {
            hero.style.display = "block";
            sliderLink.style.display = "block";
        }

        // поиск...
        cardFilm.forEach(function (card) {

            const title = card.querySelector('h4').textContent.toLowerCase();

            if (title.includes(text)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}