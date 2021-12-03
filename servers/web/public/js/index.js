const socket = io();
const buttonNewGame = document.getElementById('new_game');
const buttonJoin = document.getElementById('join');
const buttonChoice = document.getElementsByName('choice');

if (buttonNewGame)
    buttonNewGame.addEventListener('click', function (e) {
        socket.emit('new_game');
    });

if (buttonJoin)
    buttonJoin.addEventListener('click', function (e) {
        socket.emit('join');
    });

if (buttonChoice)
    Array.from(buttonChoice).forEach(btn => {
        btn.addEventListener('click', function (e) {
            socket.emit('choice_option', btn.value);
        });
    });

socket.on('connect_error', err => {
    console.error(err.message);
});
socket.on('new_game', () => {
    window.location.reload();
});
socket.on('choice_option', () => {
    window.location.reload();
});
socket.on('join', () => {
    window.location.reload();
});
socket.onAny((event, ...args) => {
    console.log(event, args);
});