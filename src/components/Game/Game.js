import React, { Component } from "react";
import Container from "../Container";
import CharCard from "../CharCard";
import Spacer from "../Spacer";
import Header from "../Header";
import data from "../../data";

class Game extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  };

  // On mount //
  componentDidMount() {
    this.setState({ data: this.shuffleDeck(this.state.data) });
  }
  // New Game //
  wrongGuess = newData => {
    this.setState({
      data: this.resetDeck(newData),
      score: 0
    });
  };

  // Reset //
  resetDeck = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));

    return this.shuffleDeck(resetData);
  };

  // Shuffle //
  shuffleDeck = data => {
    let newData = data.sort(function(a, b) {
      return 0.5 - Math.random();
    });
    return newData;
  };

  // Checks Guess //
  correctGuess = newData => {
    let newScore = this.state.score;
    newScore++;
    let newTopScore = Math.max(newScore, this.state.topScore);

    this.setState({
      data: this.shuffleDeck(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  gameCardClick = id => {
    let guessedCorrectly = false;

    const newData = this.state.data.map(item => {
      if (item.id === id) {
        if (!item.clicked) {
          item.clicked = true;
          guessedCorrectly = true;
        }
      }
      return item;
    });

    guessedCorrectly ? this.correctGuess(newData) : this.wrongGuess(newData);
  };

  render() {
    return (
      <div className="In">
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Spacer message={this.state.message} />
        <Container>
          {this.state.data.map(item => (
            <div className="Out">
              <CharCard
                key={item.id}
                id={item.id}
                image={item.image}
                show={!this.state.score && this.state.topScore}
                clicked={item.clicked}
                handleClick={this.gameCardClick}
              />
            </div>
          ))}
        </Container>
      </div>
    );
  }
}

export default Game;
