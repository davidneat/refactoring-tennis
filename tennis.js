var TennisGame = function(player1Name, player2Name) {
    this.scorePlayer1 = 0;
    this.m_score2 = 0;
};

TennisGame.prototype.wonPoint = function(playerName) {
    playerName === "player1" ? this.scorePlayer1 += 1 : this.m_score2 += 1;
};

TennisGame.prototype.getScoreName = function(tempScore) {
    return ['Love', 'Fifteen', 'Thirty', 'Forty'][tempScore];
};

TennisGame.prototype.getEqualScoreName = function() {
    return ['Love-All', 'Fifteen-All', 'Thirty-All'][this.scorePlayer1] || 'Deuce';
};

TennisGame.prototype.getAdvantageName = function(minusResult) {
    return minusResult === 1 ? 'Advantage player1' : 'Advantage player2';
};

TennisGame.prototype.getWinnerName = function(minusResult) {
    return minusResult >= 2 ? 'Win for player1' : 'Win for player2';
};

TennisGame.prototype.getOverFourName = function() {
    var minusResult = this.scorePlayer1 - this.m_score2;
    return this.isAdvantage(minusResult) ? this.getAdvantageName(minusResult) : this.getWinnerName(minusResult);
};

TennisGame.prototype.isAdvantage = function(minusResult) {
    return minusResult === 1 || minusResult === -1;
};

TennisGame.prototype.isOverFour = function() {
    return this.scorePlayer1 >= 4 || this.m_score2 >= 4;
};

TennisGame.prototype.isEqualScore = function() {
    return this.scorePlayer1 === this.m_score2;
};

TennisGame.prototype.getScore = function() {
    if (this.isEqualScore()) {
        return this.getEqualScoreName();
    } else if (this.isOverFour()) {
        return this.getOverFourName();
    }
    return this.getScoreName(this.scorePlayer1) + "-" + this.getScoreName(this.m_score2);
};

export default TennisGame;