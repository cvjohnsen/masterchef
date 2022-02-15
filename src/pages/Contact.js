import logo from '../masterchef.png'
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div style={fonts}>
            <Link to="/"><img src={logo} width="100px"/></Link>
            <h1>Contact</h1>

            <div>
                <form>
                    <label htmlFor='firstName'/>
                    <input type='text' name='firstName' placeholder='First Name' value=''/> <br/>

                    <label htmlFor='lastName'/>
                    <input type='text' name='lastName' placeholder='Last Name' value=''/> <br/>

                    <label htmlFor='email'/>
                    <input type='email' name='lastName' placeholder='Email' value=''/> <br/>


                    <input type='submit'/>
                </form>
            </div>
        </div>
    )
}

const fonts={
    fontFamily: 'Architects Daughter',
    color: '#F56A34',
    fontSize: '20pt',

}






export default Contact;