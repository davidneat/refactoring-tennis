var TennisGame = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
};

TennisGame.prototype.wonPoint = function(playerName) {
    playerName === "player1" ? this.m_score1 += 1 : this.m_score2 += 1;
};

TennisGame.prototype.getScoreName = function(tempScore) {
    return ['Love', 'Fifteen', 'Thirty', 'Forty'][tempScore];
};

TennisGame.prototype.getEqualScoreName = function() {
    return ['Love-All', 'Fifteen-All', 'Thirty-All'][this.m_score1] || 'Deuce';
};

TennisGame.prototype.getAdvantageName = function(minusResult) {
    return minusResult === 1 ? 'Advantage player1' : 'Advantage player2';
};

TennisGame.prototype.getWinnerName = function(minusResult) {
    return minusResult >= 2 ? 'Win for player1' : 'Win for player2';
};

TennisGame.prototype.isAdvantage = function(minusResult) {
    return minusResult === 1 || minusResult === -1;
};

TennisGame.prototype.getOverFourName = function() {
    var minusResult = this.m_score1 - this.m_score2;
    return this.isAdvantage(minusResult) ? this.getAdvantageName(minusResult) : this.getWinnerName(minusResult);
};

TennisGame.prototype.isOverFour = function() {
    return this.m_score1 >= 4 || this.m_score2 >= 4;
};

TennisGame.prototype.isEqualScore = function() {
    return this.m_score1 === this.m_score2;
};

TennisGame.prototype.getScore = function() {
    if (this.isEqualScore()) {
        return this.getEqualScoreName();
    } else if (this.isOverFour()) {
        return this.getOverFourName();
    }
    return this.getScoreName(this.m_score1) + "-" + this.getScoreName(this.m_score2);
};

export default TennisGame;