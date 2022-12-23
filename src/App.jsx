import Header from "./components/Header"
import MoviesBanner from "./components/Banner"
import { Cartelera } from "./components/Cartelera"

function App() {

  return (
    <div className="App">
      <Header/>
      <MoviesBanner />
      <Cartelera />
    </div>
  )
}

export default App
