import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('birdStore')
@observer
class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const bird = this.bird.value;
    this.props.birdStore.addBird(bird);
    this.bird.value = '';
  }

  render() {
    const { birdStore } = this.props;

    return (
      <div className="App">
        <h2>You have {birdStore.birdCount} birds</h2>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter bird" ref={input => this.bird = input} />
          <button>Add bird</button>
        </form>

        <ul>
          {
            birdStore.birds.map(bird => (
              <li key={bird}>{bird}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
