export function startSlider() {

    const img = document.querySelector(".img-cap");
    const leftZone = document.querySelector(".click-zone.left");
    const rightZone = document.querySelector(".click-zone.right");

    const slides = [
        { src: './img/vampire.jpg', alt: 'Дневники вампира' },
        { src: './img/from.png', alt: 'Извне' },
        { src: './img/dark.png', alt: 'Тьма' },
        { src: './img/fate.jpg', alt: 'Сага: Винкс' }
    ];

    let index = 0;

    function showSlide(newIndex) {
        img.classList.add("fade");

        setTimeout(() => {
            index = newIndex;

            img.src = slides[index].src;
            img.alt = slides[index].alt;

            img.classList.remove("fade");
        }, 400);
    }

    function nextSlide() {
        showSlide((index + 1) % slides.length);
    }

    function prevSlide() {
        showSlide((index - 1 + slides.length) % slides.length);
    }

    rightZone.addEventListener("click", nextSlide);
    leftZone.addEventListener("click", prevSlide);

    setInterval(nextSlide, 12600);
}



export function initGallery() {

    const track = document.querySelector(".track");

    let position = 0;

    function animate() {

        position += 0.5; // 👉 ВОТ ЭТО ДЕЛАЕТ ДВИЖЕНИЕ СЛЕВА → ВПРАВО

        track.style.transform = `translateX(${position}px)`;

        // когда ушло слишком вправо — возвращаем назад
        if (position >= 0) {
            position = -track.scrollWidth / 2;
        }

        requestAnimationFrame(animate);
    }

    // стартуем с левого края
    position = -track.scrollWidth / 2;

    animate();
}