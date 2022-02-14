import logo from '../masterchef.png'

const Home = () => {

    return(
    <div style={fonts}>
        <img src={logo} width="100px"/>
        <h1>Welcome to Master Chef</h1>

        <div >
            <h2>Feature Chefs</h2>    
        </div>
        <div>
            <img src="https://images.squarespace-cdn.com/content/v1/5c881f812727be4b51cfb626/1633982959732-SOUSLPWK1VYC3EXWXKDQ/NEW+ART+FT.+gerron+-01.jpg?format=750w" width="600px"></img>    
        </div>
        <div>
             <iframe title="vimeo-player" src="https://player.vimeo.com/video/548159665?h=2bd5db4f0b" width="500" height="300" frameborder="0" allowfullscreen></iframe>
        </div> 
    </div>

    ) 
}

const fonts={
    fontFamily: 'Architects Daughter',
    color: '#F56A34',
    fontSize: '20pt'

}

export default Home;