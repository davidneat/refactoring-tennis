var Player = function() {
    this.score = 0;
};

Player.prototype.getScore = function() {
    return this.score;
};

Player.prototype.incrementScore = function() {
    this.score++;
};

var TennisGame = function() {
    this.player1 = new Player();
    this.player2 = new Player();
};

TennisGame.prototype.wonPoint = function(playerName) {
    playerName === "player1" ? this.player1.incrementScore() : this.player2.incrementScore();
};

TennisGame.prototype.getScoreName = function(scorePlayer) {
    return ['Love', 'Fifteen', 'Thirty', 'Forty'][scorePlayer];
};

TennisGame.prototype.getEqualScoreName = function() {
    return ['Love-All', 'Fifteen-All', 'Thirty-All'][this.player1.getScore()] || 'Deuce';
};

TennisGame.prototype.getAdvantageName = function(minusResult) {
    return minusResult === 1 ? 'Advantage player1' : 'Advantage player2';
};

TennisGame.prototype.getWinnerName = function(minusResult) {
    return minusResult >= 2 ? 'Win for player1' : 'Win for player2';
};

TennisGame.prototype.getOverFourName = function() {
    var minusResult = this.player1.getScore() - this.player2.getScore();
    return this.isAdvantage(minusResult) ? this.getAdvantageName(minusResult) : this.getWinnerName(minusResult);
};

TennisGame.prototype.isAdvantage = function(minusResult) {
    return minusResult === 1 || minusResult === -1;
};

TennisGame.prototype.isOverFour = function() {
    return this.player1.getScore() >= 4 || this.player2.getScore() >= 4;
};

TennisGame.prototype.isEqualScore = function() {
    return this.player1.getScore() === this.player2.getScore();
};

TennisGame.prototype.getScore = function() {
    if (this.isEqualScore()) {
        return this.getEqualScoreName();
    } else if (this.isOverFour()) {
        return this.getOverFourName();
    }
    return this.getScoreName(this.player1.getScore()) + "-" + this.getScoreName(this.player2.getScore());
};

export default TennisGame;