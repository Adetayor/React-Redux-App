import { components } from 'react'
import './App.css'
import * as styles from './styles'

function App() {
  const name = ' Gean'
  // const styles = {
  //     border: 'solid',
  //     textAlign: 'center',
  //     boxShadow: '2px 2px'
  // }

  return (
    <>
      
      <div>
        {/* <div style={styles.styles}>
            Gadus Styling
        </div>
        <button> Click Me </button>
        Happy Val!
       {name} */}
       {React.createElement(
        'button',
        {className: 'App'},
        'React'
       )}
      </div>
    </>
  )
}

const Appinstance = new App()

console.log(Appinstance)

export default App
