const Header = (params) => {
  return (
    <h1>{params.title}</h1>
  )
}

const Part = (params) =>{
  return (
    <p>
      {params.part.title} {params.part.numberExercises}
    </p>
  )
}

const Content = (params) => {
  return (
    <div>
      <Part part={ params.parts[0] }/>
      <Part part={ params.parts[1] }/>
      <Part part={ params.parts[2] }/>
    </div>
  )
}

const Total = (params) => {
  return (
    <p>Number of exercises {params.exercises1 + params.exercises2 + params.exercises3}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    title: 'Fundamentals of React',
    numberExercises: 10
  }
  const part2 = {
    title: 'Using props to pass data',
    numberExercises: 7
  }
  const part3 = {
    title: 'State of a component',
    numberExercises: 14
  }

  const parts = [ part1, part2, part3 ]

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total exercises1={part1.numberExercises} exercises2={part2.numberExercises} exercises3={part3.numberExercises}/>
    </div>
  )
}

export default App