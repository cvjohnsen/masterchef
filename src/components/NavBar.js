import { Link } from "react-router-dom";
import logo from '../masterchef.png'

const NavBar = () => {
    return(
        <nav style={container}>
            <div>
            <Link to="/"><img src={logo} width="30px"/></Link>    
            </div>
              
            <Link to="/" style={{color: 'white'}}>Home</Link>
            <Link to="/about" style={{color: 'white'}}>About</Link>
            <Link to="/contact" style={{color: 'white'}}>Contact</Link>
        </nav>
  )
}

const container ={
    display:'flex',
    justifyContent:'space-around',
    backgroundColor:'#5FC3B1',
    color:'white',
    height:'30px',
    fontFamily: 'Architects Daughter',    

}


export default NavBar