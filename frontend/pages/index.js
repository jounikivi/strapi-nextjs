import axios from 'axios'
import React from 'react'

function Home({movies}) {
  return (
    <div>
      <h1>{movies[0].title}</h1>
      <h1>{movies[1].title}</h1>
    </div>
  )
}
export default Home

export async function getStaticProps() {
  const movieRes = await axios.get("hhttp://localhost:1337/movies");

  return {
    props: {
      movies: movieRes
    }
  }

}