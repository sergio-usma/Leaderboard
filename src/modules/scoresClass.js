import printList from './printList.js';

class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
    this.getScores = localStorage.getItem('recentScores')
      ? JSON.parse(localStorage.getItem('recentScores'))
      : [];
  }

  addScore() {
    if (this.name && this.score) {
      this.getScores.push({
        index: this.getScores.length + 1,
        name: this.name,
        score: this.score,
      });
      printList(this.getScores);
      this.saveScores();
    }
  }

  saveScores() {
    localStorage.setItem('recentScores', JSON.stringify(this.getScores));
  }
}

export default Scores;
