import { Routes } from "./routes/routes"
import { MoviesContextProvider } from "./Context/moviesContext"

function App() {

  return (
    <div className="App">
      <MoviesContextProvider>
         <Routes />
      </MoviesContextProvider>
    </div>
  )
}

export default App
