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
  const course = {
    name: 'Half Stack application development',
    parts : [
      {
        title: 'Fundamentals of React',
        numberExercises: 10
      },
      {
        title: 'Using props to pass data',
        numberExercises: 7
      },
      {
        title: 'State of a component',
        numberExercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total exercises1={course.parts[0].numberExercises} exercises2={course.parts[1].numberExercises} exercises3={course.parts[2].numberExercises}/>
    </div>
  )
}

export default App