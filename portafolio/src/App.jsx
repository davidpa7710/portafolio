import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesIndex from './routes/index'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <RoutesIndex />
        <Footer />
      </Router>
    </>
  )
}

export default App

