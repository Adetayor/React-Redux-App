import { components } from 'react';


function App() {
  state = {
      counter: 0
  }

  increment = () => (
      this.setState({counter: 5})
  )
  return (
    <>
      <div className='App'>
        <button onClick={() => this.increment()}> Button </button>
          <div>
              Div 1 {this.state.counter}
          </div>
          <div>
              Div 2
          </div>
          <div>
              Div 3
          </div>
      </div>
    </>
  )
}


export default App
