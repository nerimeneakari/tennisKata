function TennisGame(playerOne, playerTwo) {
  this.playerOneScore = 0;
  this.playerTwoScore = 0;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

TennisGame.prototype.playerWithBestScore = function() {
  if (this.playerOneScore > this.playerTwoScore) {
    // console.log("Player 1 has BEST score.");
    return this.playerOne;
  } else {
    // console.log("Player 2 has BEST score.");
    return this.playerTwo;
  }
};

TennisGame.prototype.hasWinner = function() {
  if (this.playerTwoScore > 40 && this.playerOneScore < 40) {
    // console.log("Player 2 has WINNER");
    return true;
  }

  if (this.playerOneScore > 40 && this.playerTwoScore < 40) {
    // console.log("Player 1 has WINNER");
    return true;
  }

  if (this.playerOneScore > 55 && this.playerTwoScore === 40) {
    return true;
  }

  if (this.playerTwoScore > 55 && this.playerOneScore === 40) {
    return true;
  }

  return false;
};

TennisGame.prototype.hasAdvantage = function() {
  if (this.playerTwoScore > 40 && this.playerOneScore === 40) {
    // console.log("Player 2 has ADVANTAGE");
    return true;
  }

  if (this.playerOneScore > 40 && this.playerTwoScore === 40) {
    // console.log("Player 1 has ADVANTAGE");
    return true;
  }

  return false;
};

TennisGame.prototype.deuce = function() {
  // console.log("DEUCE");
  if (
    this.playerOneScore === 40 &&
    this.playerTwoScore === this.playerOneScore
  ) {
    return true;
  } else if (this.playerOneScore === 55 && this.playerTwoScore === 55) {
    this.playerOneScore = 40;
    // console.log(this.playerOneScore)
    this.playerTwoScore = 40;
    // console.log(this.playerTwoScore)
    return true;
  } else {
    return false;
  }
};

TennisGame.prototype.playerOneScores = function() {
  this.playerOneScore !== 30
    ? (this.playerOneScore += 15)
    : (this.playerOneScore += 10);
  // console.log("Player 1 SCORE : " + (this.playerOneScore += 15));
};

TennisGame.prototype.playerTwoScores = function() {
  // console.log("Player 2 SCORE : " + (this.playerTwoScore += 15));
  this.playerTwoScore !== 30
    ? (this.playerTwoScore += 15)
    : (this.playerTwoScore += 10);
};

TennisGame.prototype.scoreName = function(score) {
  switch (score) {
    case 0:
      return "Love";
    case 15:
      return "Fifteen";
    case 30:
      return "Thirty";
    case 40:
      return "Forty";
  }
};

TennisGame.prototype.getScore = function() {
  if (this.hasWinner()) {
    // console.log(this.playerWithBestScore() + " wins!");
    return this.playerWithBestScore() + " wins!";
  }

  if (this.hasAdvantage()) {
    // console.log("Advantage " + this.playerWithBestScore());

    return "Advantage " + this.playerWithBestScore();
  }

  if (this.deuce()) {
    // console.log("Deuce!");
    return "Deuce!";
  }

  if (this.playerOneScore === this.playerTwoScore) {
    return this.scoreName(this.playerOneScore) + " all";
  }

  return (
    this.scoreName(this.playerOneScore) +
    "," +
    this.scoreName(this.playerTwoScore)
  );
};

// tennisGame = new TennisGame("salut", "toi");
// tennisGame.getScore();
// tennisGame.playerOneScores();
// tennisGame.playerTwoScores();
// tennisGame.playerOneScores();
// tennisGame.playerTwoScores();
// tennisGame.playerOneScores();
// tennisGame.playerTwoScores();
// tennisGame.playerOneScores();
// tennisGame.playerTwoScores();
// tennisGame.playerTwoScores();
// tennisGame.playerOneScores();
// tennisGame.playerOneScores();
// tennisGame.getScore();
