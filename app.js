document.addEventListener("DOMContentLoaded", () => {
  const buttonElement = document.getElementById("rollButton");

  buttonElement.addEventListener("click", function (event) {
    event.preventDefault();

    const playerDiv = document.getElementById("player");
    playerDiv.innerHTML = ""; // Vider le conteneur avant d'ajouter les nouveaux dés

    const diceCount = document.querySelector('input[type="number"]').value; // Récupérer la valeur de l'input

    for (let i = 0; i < diceCount; i++) {
      const dice = document.createElement("div");
      dice.classList.add("dice");

      const diceNumber = getRandomDice(1, 6);
      const backgroundShift = -(diceNumber - 1) * 100;
      dice.style.backgroundPositionX = `${backgroundShift}px`;

      playerDiv.appendChild(dice);
    }
  });
});

function getRandomDice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // Générer un nombre entre 1 et 6
}
