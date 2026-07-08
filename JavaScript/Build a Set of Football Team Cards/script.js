const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      isCaptain: false,
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false,
    },
  ],
};

const team = document.getElementById("team");
const year = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersSelect = document.getElementById("players");

// Display team information
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;
headCoach.textContent = footballTeam.headCoach;

// Function to display players
function displayPlayers(players) {
  playerCards.innerHTML = "";

  players.forEach((player) => {
    playerCards.innerHTML += `
      <div class="player-card">
        <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
        <p>Position: ${player.position}</p>
      </div>
    `;
  });
}

// Show all players initially
displayPlayers(footballTeam.players);

// Filter players by position
playersSelect.addEventListener("change", () => {
  const selected = playersSelect.value;

  if (selected === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      (player) => player.position === selected,
    );

    displayPlayers(filteredPlayers);
  }
});
