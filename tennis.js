var TennisGame = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
};

TennisGame.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame.prototype.getScoreName = function(tempScore) {
    return ['Love', 'Fifteen', 'Thirty', 'Forty'][tempScore];
};

TennisGame.prototype.getEqualScoreName = function() {
    return ['Love-All', 'Fifteen-All', 'Thirty-All'][this.m_score1] || 'Deuce';
};

TennisGame.prototype.getAdvantageName = function(minusResult) {
    if(minusResult === 1) {
        return 'Advantage player1';
    }
    return 'Advantage player2';
};

TennisGame.prototype.getWinner = function(minusResult) {
    if (minusResult >= 2) {
        return 'Win for player1';
    }
    return 'Win for player2';
};

TennisGame.prototype.isAdvantage = function(minusResult) {
    return minusResult === 1 || minusResult === -1;
};

TennisGame.prototype.getOverFour = function() {
    var minusResult = this.m_score1 - this.m_score2;
    return this.isAdvantage(minusResult) ? this.getAdvantageName(minusResult) : this.getWinner(minusResult);
};

TennisGame.prototype.getScore = function() {
    if (this.m_score1 === this.m_score2) {
        return this.getEqualScoreName();
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        return this.getOverFour();
    }
    return this.getScoreName(this.m_score1) + "-" + this.getScoreName(this.m_score2);
};

export default TennisGame;