const messages = ["Oscar", "Miguel", "Nocolay", "Ana", "Maria", "Angel", "Celeste", "Ruth", "Leslie", "Leticia"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];

  console.log(message);
};

module.exports = { randomMsg };
