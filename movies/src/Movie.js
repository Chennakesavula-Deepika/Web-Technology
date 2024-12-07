function Movie ()
{
    let value = 10;
    return (
        <div>
          
            <img src="https://www.theloadout.com/wp-content/sites/theloadout/2022/07/multiversus-tom-jerry-combos.jpg" width="300px" height="150px" alt="Movie1"/>
            <h2>Tom & Jerry</h2>
          <img src="https://c8.alamy.com/comp/2JD8BK5/tomjerry-tom-and-jerry-the-movie-1992-2JD8BK5.jpg" width="300px" height="150px" alt="Movie2"/> 
            <h2>Tom & Jerry</h2>

            <p>{value+1}</p>
      </div>
  )
}
export default Movie;