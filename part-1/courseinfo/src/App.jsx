const Header = (params) => {
  return (
    <h1>{params.title}</h1>
  )
}

const Content = (params) => {
  return (
    <p>
      {params.title} {params.numberExercises}
    </p>
  )
}

const Total = (params) => {
  return (
    <p>Number of exercises {params.exercises1 + params.exercises2 + params.exercises3}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content title={part1} numberExercises={exercises1} />
      <Content title={part2} numberExercises={exercises2} />
      <Content title={part3} numberExercises={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App