const team = {

  _players: [["mihail","tal",36],["user1name","user1lastname",15],["user2name","user2lastname",18]],
  _games: [["bjk",55,35],["gs",10,55],["fb",25,55]],
  get players()  {
    return this._players;
  },
  get games()  {
    return this._games;
  },
  addPlayer : function(newFirstName, newLastName, newAge) {
    let newplayer = [newFirstName, newLastName, newAge]
    this._players.push(newplayer)
  },
   addGame : function(newOpponent, newTeamPoints, newOpponentPoints) {
    let newgame = [newOpponent, newTeamPoints, newOpponentPoints]
    this._games.push(newgame) 
}};

team.addPlayer("Bugs", "Bunny", 76)
console.log(team)
team.addGame("Titans", "100", 98)
console.log(team)
