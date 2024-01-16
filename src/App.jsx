import {Routes, BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.scss'

const api_key="5ca1cc0b91d08521e542a4a219f4a31e"
const token="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2ExY2MwYjkxZDA4NTIxZTU0MmE0YTIxOWY0YTMxZSIsInN1YiI6IjY1ODk5MmIzNDc3MjE1NWE2YTQ0MDlhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z3Ep-4wFijk9oO3zuCyz8OfupTlGkZ52C6AVIQSdMMU"

function App() {

  return (
   <BrowserRouter>

    <Navbar />
    <Home />
      <Routes>
          
      </Routes>
   
   </BrowserRouter>
  )
}

export default App
