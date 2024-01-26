import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from '../components/Header'
import Fotter from '../components/Fotter'
import App from "../App"
import About from "../components/About"
import Cake from "../components/Cake"
import Contact from "../components/Contact"


const Router = () => {
  return (
    
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path="/" element={<App/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/cake" element={<Cake/>} />
  <Route path="/contact" element={<Contact/>} />

  </Routes>

  <Fotter/>
  </BrowserRouter>
  )
}

export default Router
