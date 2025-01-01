function activateKey(ev) {
    const key = ev.code;
    const keys = {
        'KeyA': { id: 'KeyA', path: '/src/sounds/clap.mp3' },
        'KeyS': { id: 'KeyS', path: '/src/sounds/hihat.mp3' },
        'KeyD': { id: 'KeyD', path: '/src/sounds/kick.mp3' },
        'KeyF': { id: 'KeyF', path: '/src/sounds/openhat.mp3' },
        'KeyG': { id: 'KeyG', path: '/src/sounds/boom.mp3' },
        'KeyH': { id: 'KeyH', path: '/src/sounds/ride.mp3' },
        'KeyJ': { id: 'KeyJ', path: '/src/sounds/tom.mp3' },
        'KeyK': { id: 'KeyK', path: '/src/sounds/snare.mp3' },
        'KeyL': { id: 'KeyL', path: '/src/sounds/bass.mp3' },
    };
    const keySound = keys[key];

    if (!keySound) return;

    const keyElement = document.getElementById(keySound.id);

    keyElement.classList.add('key-active');

    window.addEventListener('keyup', (evt) => keyElement.classList.remove('key-active'), { once: true });

    const audio = new Audio(keySound.path);
    audio.play();
}

window.addEventListener('keydown', (ev) => {
    activateKey(ev);
});
