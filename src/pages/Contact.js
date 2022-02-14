import logo from '../masterchef.png'
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div style={fonts}>
            <Link to="/"><img src={logo} width="100px"/></Link>
            <h1>Contact</h1>
        </div>
    )
}

const fonts={
    fontFamily: 'Architects Daughter',
    color: '#F56A34',
    fontSize: '20pt'

}




export default Contact;