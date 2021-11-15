// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import React, {useReducer} from 'react'

function countReducer(prevCount, newCount) {
  return newCount
}
function stepReducer(prevStep, newStep) {
  console.log(prevStep, newStep)
  return newStep
}

function Counter({initialCount = 0, initialStep = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [count, setCount] = useReducer(countReducer, initialCount)
  const [step, setStep] = useReducer(stepReducer, initialStep)

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => setCount(count + step)
  const handleChangeStep = e =>
    setStep(
      !Object.is(Number(e.target.value), NaN) ? Number(e.target.value) : 0,
    )
  return (
    <>
      <button onClick={increment}>{count}</button>
      <input onChange={handleChangeStep} />
    </>
  )
}

function App() {
  return <Counter />
}

export default App
