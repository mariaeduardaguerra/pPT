import React, { Component } from 'react';
import './App.css';

import pedraImage from './assets/pedra.jpg';
import papelImage from './assets/papel.jpg';
import tesouraImage from './assets/tesoura.jpg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: '',
      computerChoice: '',
      result: '',
    };

    this.choices = ['pedra', 'papel', 'tesoura'];
  }

  handleUserChoice = (choice) => {
    const computerChoice = this.getRandomChoice();
    const result = this.determineWinner(choice, computerChoice);

    this.setState({
      userChoice: choice,
      computerChoice: computerChoice,
      result: result,
    });
  };

  getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * this.choices.length);
    return this.choices[randomIndex];
  }

  determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Empate';
    } else if (
      (userChoice === 'pedra' && computerChoice === 'tesoura') ||
      (userChoice === 'papel' && computerChoice === 'pedra') ||
      (userChoice === 'tesoura' && computerChoice === 'papel')
    ) {
      return 'Você venceu!';
    } else {
      return 'O computador venceu!';
    }
  }

  render() {
    return (
      <div className="App">
        <h1>pedra, papel e tesoura</h1>
        <div className="choices">
          <img className="pedra"
            src={pedraImage}
            alt="Pedra"
            onClick={() => this.handleUserChoice('pedra')}
          />
          <img className="papel"
            src={papelImage}
            alt="Papel"
            onClick={() => this.handleUserChoice('papel')}
          />
          <img className="tesoura"
            src={tesouraImage}
            alt="Tesoura"
            onClick={() => this.handleUserChoice('tesoura')}
          />
        </div>
        {this.state.userChoice && (
          <div className="result">
            <p>Você escolheu: {this.state.userChoice}</p>
            <p>O computador escolheu: {this.state.computerChoice}</p>
            <p>{this.state.result}</p>
          </div>
        )}
      </div>
    );
  }
  
}

export default App;
