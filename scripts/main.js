let seasons = document.querySelectorAll('.season'); // get all seasons
let i = 0; // counter

seasons.forEach(season => {
    i++;
    season.classList.add('season-' + i); // to each seasin element add new class called 'season-' and counter i

    let btn = document.querySelector('.' + season.classList[1] + ' .season-btn'); // get btn with class .season-i .season-btn
    let sub = document.querySelector('.' + season.classList[1] + ' .season-sub'); // get sub with class .season-i .season-btn
    let arrowIcon = document.querySelector('.' + season.classList[1] + ' .season-btn i');

    let toggle = true; // toggle boolen

    btn.addEventListener('click', function() {
        if (toggle == true) {
            arrowIcon.style.transform = "translate(-50%, -50%) rotate(180deg)";
            sub.style.display = "block";
            toggle = false;
        } else {
            arrowIcon.style.transform = "translate(-50%, -50%) rotate(0deg)";
            sub.style.display = "none"
            toggle = true;
        }

    })
})

//hover effect searchbar
const searchBarInput = document.querySelector('.search-bar-input');
const searchBarBtn = document.querySelector('.search-bar-btn');

searchBarBtn.addEventListener('mouseover', function() {
    searchBarBtn.style.width = "40%";
    searchBarInput.style.width = "60%";
})

searchBarBtn.addEventListener('mouseleave', function() {
    searchBarBtn.style.width = "25%";
    searchBarInput.style.width = "75%";
})