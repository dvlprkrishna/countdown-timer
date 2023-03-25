// Dom Elements Selections
const dateTimeEl = document.getElementById('dateTime');
const headerText = document.getElementById('header-txt')
const diwaliEl = document.getElementById('cards-diwali')
const holiEl = document.getElementById('cards-holi')
const newyearEl = document.getElementById('cards-newyear')
const body = document.body
const countEl = document.getElementsByClassName('big-text')
const dateFromLocale = localStorage.getItem('myDate');
let newYear = dateFromLocale ? dateFromLocale :'1 Jan 2024'
const resetEl = document.getElementById('reset')


// Calculate Time duration from a specific Date
function countdown(){
    const newYearDate = new Date(newYear)
    const currentDate = new Date();
    let daysEl = document.getElementById('days')
    let hoursEl = document.getElementById('hours')
    let minsEl = document.getElementById('mins')
    let secsEl = document.getElementById('secs')

    let totalSeconds = (newYearDate - currentDate) / 1000;

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600 )% 24;
    let mins = Math.floor(totalSeconds / 60 )% 60;
    let secs = Math.floor(totalSeconds) %60;

    // Set time in dom elements
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);
}

// Formats Empty Time and Date digit with a prepend '0'
function formatTime(time){
    return time < 10 && time > 0 ? (`0${time}`): time;
}


// Pre-Defined Popular Holiday dates
diwaliEl.addEventListener('click', function(e){
    newYear = '9 Nov 2023'
    headerText.innerText = 'Happy Diwali 🎆🪔'
    body.style.backgroundImage = 'url(./bg-diwali.jpg)'
    headerText.style.color = 'white'
    countEl.style.color = 'white'
})
holiEl.addEventListener('click', function(e){
    newYear = '8 Mar 2023'
    headerText.innerText = 'Holi Hai 💦🔫'
    body.style.backgroundImage = 'url(./bg-holi.jpg)'
    headerText.style.color = 'white'
})
newyearEl.addEventListener('click', function(e){
    newYear = '1 Jan 2024'
    headerText.innerText = 'New Years Eve 🎆🆕🎉'
    body.style.backgroundImage = 'url(./bg-newyear.jpg)'
    headerText.style.color = 'white'
})

// Date Selector
dateTimeEl.addEventListener('change', function(e){
    body.style.backgroundImage = 'url(./bg.jpg)'
    newYear = e.target.value;
    localStorage.setItem('myDate', newYear);
    headerText.innerText = 'Until new Beginning'
    headerText.style.color = 'black'
})

// Reset Date
resetEl.addEventListener('click', function(){
    localStorage.removeItem('myDate')
    newYear = '1 Jan 2024'
    headerText.innerText = 'New Years Eve 🎆🆕🎉'
    body.style.backgroundImage = 'url(./bg.jpg)'
    headerText.style.color = 'black'
})

// Initial Countdown Called
countdown()

// Updates Countdown every second
setInterval(countdown, 1000)


// Console.log Styles
console.group("%c Tech Used - ", 'background-color:yellow; color: #333333; font-size: 1.2em; border-radius: 3px; padding: 2px');
console.log( "- Vanilla JavaScript / CSS3 / HTML5" );
console.log( "- JavaScript Date Object" );
console.log( "- JavaScript Event Listeners" );
console.log( "- SetIntervals" );
console.log( "- LocalStorage" );
console.groupEnd();
console.log();
console.group("%c Contact - ", 'background-color:grey; color: white; font-size: 1em;  border-radius: 3px;padding: 2px');
console.log( "https://krishnasahu.in" );
console.groupEnd();
