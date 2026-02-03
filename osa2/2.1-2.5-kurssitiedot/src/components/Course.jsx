const Course = ( {courses} ) => {
    
    return (
    <>
    {courses.map(course => <Part key={course.id} course={course} />)}
    </>
    )
    }

    const Part = ({course}) => {
      return(
        <>
        <h3>{course.name}</h3>
        {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        <b>total of {course.parts.reduce( (s,p) => {return s+p.exercises;}, 0)} parts</b>
        </>
      )
    } 

export default Course