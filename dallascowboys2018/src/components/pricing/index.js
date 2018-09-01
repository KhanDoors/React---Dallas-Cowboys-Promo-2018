import React, { Component } from "react";
import MyButton from "../utils/MyButtons";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [16, 52, 32],
    positions: ["Games", "Players", "Cheerleaders"],
    desc: [
      "There are questions from expectations of Randy Gregory, rookie who makes the biggest impact, and the performances of Zeke, Dak and DeMarcus Lawrence, should be cool.",
      "The Cowboys got younger this summer. They had a well-received Draft, snagging linebacker Leighton Vander Esch, lineman Connor Williams, and receiver Michael Gallup. Should be exciting!",
      "You can watch them cheer for the Dallas Cowboys at AT&T Stadium, you can see their journey on CMT’s “Making The Team,” and now you can find them here at the Official Dallas Cowboys Pro Shop."
    ],
    linkto: [
      "https://www.dallascowboys.com/schedule/",
      "https://www.dallascowboys.com/team/players-roster/",
      "https://www.dallascowboys.com/cheerleaders/roster/"
    ],
    delay: [500, 0, 500]
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Cowboys"
                bck="blue"
                color="silver"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Dallas Cowboys</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
