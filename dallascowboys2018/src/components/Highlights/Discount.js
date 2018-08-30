import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButtons";

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 99
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 20);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>Win</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Chance of Winning</h3>
              <p>
                I think this team is going to shock a lot of people this year. I
                think they are going to come out of the gate firing on opponents
                and begin a great run to the playoffs.
              </p>
              <MyButton
                text="DC Schedule"
                bck="blue"
                color="silver"
                link="https://www.dallascowboys.com/schedule/"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
