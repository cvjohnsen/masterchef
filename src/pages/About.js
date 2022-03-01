import logo from "../masterchef.png";
import { Link } from "react-router-dom";
import { Component } from "react";
import Recipes from "../components/Recipes";

class About extends Component {
  state = {
    data: "",
  };

  componentDidMount = async () => {
    console.log("Hello from ComDidMount");
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      this.setState({ data: data.meals[0] });
      console.log(this.state.data);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div style={fonts}>
        <Link to="/">
          <img src={logo} width="100px" />
        </Link>

        <h1>Recipes</h1>
        {/* {this.state.data && this.state.data.strInstructions} */}
        {/* Ternary and no Map!! */}
        <div>{this.state.data && <Recipes recipe={this.state.data} />}</div>
      </div>
    );
  }
}

const fonts = {
  fontFamily: "Architects Daughter",
  color: "#F56A34",
  fontSize: "20pt",
};

export default About;
