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


// open the video layer 
let theLayer = document.querySelector('.video-layer');
let contentBoxes = document.querySelector('.main-content-boxes');

function showEpisode(event) {
    let episode = event.target.innerHTML.replace(/\s/g, '').slice(2); // delete white characters (spaces) and the first two chars in case of not allowed chars 
    console.log(episode);

    theLayer.classList.add(episode);
    contentBoxes.style.display = "none";
    document.querySelector('.' + episode).style.display = "block"
}


//show live bar on phone
let liveBarToggle = true;
const liveBar = document.querySelector('.live-bar');

function showLiveBar() {

    if (liveBarToggle == true) {
        liveBar.style.height = "40vh";
        liveBarToggle = false;  
    } else {
        liveBar.style.height = "10vh";
        liveBarToggle = true;
    }
}


// toggle navigation on a phone
let navigationToggle = true;
const navigation = document.querySelector('.nav-scroll');

function toggleNav() {

    if (navigationToggle == true) {
        navigation.style.display = "block";
        liveBar.style.display = "none";
        navigationToggle = false;
    } else {
        navigation.style.display = "none";
        liveBar.style.display = "block";
        navigationToggle = true;
    }
}