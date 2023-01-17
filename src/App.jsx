import { Route, Routes } from 'react-router-dom'
import './styles/reset.scss'
import './app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import GamePage from './pages/GamePage/GamePage'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
					<Route path='/:name' element={<GamePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
