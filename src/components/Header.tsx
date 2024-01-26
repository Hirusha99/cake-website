
import { Link } from 'react-router-dom'
import './css/Header.css'

const Header = () => {



  return (
   <>
   <div className="bc">
   <ul className="nav justify-content-center text-light">
  <li className="nav-item text-light">
    {/* <a className="nav-link active text-light" aria-current="page" href="#">Home</a> */}
    <Link  className="nav-link active text-light" to="/">Home</Link>     
  </li>
  <li className="nav-item">
  <Link className="nav-link text-light" to="/cake">Cake</Link>  
  </li>
  <li className="nav-item">
  <Link className="nav-link text-light" to="/about">About us</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link text-light" to="/contact">Contact</Link>
  </li>
</ul>
   </div>
  
   </>
  )
}

export default Header