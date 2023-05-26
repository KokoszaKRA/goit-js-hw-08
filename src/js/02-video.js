import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const player = new Player('vimeo-player');


const timeCounter = throttle( event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
    console.log(localStorage);
    }, 1000);

    //zapisuje do local storage czas, sprawdzamy go co 1s = 1000 

player.on('timeupdate',  timeCounter);
//zapisuje ilosc sekund ktore uplynely do LS


player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));


// console.log(localStorage)