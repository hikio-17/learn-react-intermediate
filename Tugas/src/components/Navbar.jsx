import { Link } from "react-router-dom"

function Navbar() {
   return (
      <nav>
         <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/new'>New</Link></li>
            <li><Link to='/new'>Arsip</Link></li>
         </ul>
      </nav>
   )
}

export default Navbar