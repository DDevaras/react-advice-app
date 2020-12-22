import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
    state = {advice: '' };


    fetchAdvice = async () => {
    const id = Math.floor(Math.random() * 100) - 1;
    try {
      const response = await axios.get(
        `https://api.adviceslip.com/advice/${id}`
      );
      const data = JSON.parse(response.data + "}");
      const { advice } = data.slip;
      this.setState({ advice });
    } catch (error) {
      console.log("id", id);
      console.log(error);
    }
  };

  componentDidMount() {
        this.fetchAdvice();
    }

    render() {
        const { advice } = this.state;

        if (!advice) {
          return null;
    }

        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give me advice!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;