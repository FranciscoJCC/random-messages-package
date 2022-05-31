const messages = [
    'Hola',
    'Bienvenido',
    '¿como estás?',
    'Mucho gusto',
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];

    console.log(message);
}

module.exports = { randomMsg };