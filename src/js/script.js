function activateKey(ev) {
    const KEY = ev.code;
    const KEYS = {
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
    const KEY_SOUND = KEYS[KEY];

    if (!KEY_SOUND) return;

    const KEY_ELEMENT = document.getElementById(KEY_SOUND.id);

    KEY_ELEMENT.classList.add('key-active');

    const removeActiveClass = () => KEY_ELEMENT.classList.remove('key-active');
    window.addEventListener('keyup', removeActiveClass, { once: true });

    const AUDIO = new Audio(KEY_SOUND.path);
    AUDIO.play();
}

window.addEventListener('keydown', (ev) => {
    activateKey(ev);
});
