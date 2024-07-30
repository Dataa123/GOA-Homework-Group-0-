import Count from './Components/Count.jsx'

const App = () => {
  
  return (
    <div>
      <Count startingValue={5} incrementBy={2} />
      <br />
      <Count />
      <br />
      <Count />
      <br />
      <Count />
      <br />
      <Count />
    </div>
    
  )
}

export default App