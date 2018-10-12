import React, { Component } from "react";
import Stripes from "../../../Resources/images/stripes.png";
import { Tag } from "../../UI/Misc";
import { Reveal } from "react-reveal";
import HomeCards from "./HomeCards";

class MeetPlayers extends Component {
  state = { show: false };
  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({ show: true });
        }}
      >
        <div
          className="home_meetplayers"
          style={{ background: `#ffffff url(${Stripes})` }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper">
                <HomeCards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag
                    bck="#0e1731"
                    color="#ffffff"
                    size="100px"
                    add={{ display: "inline-block", marginBottom: "20px" }}
                  >
                    Meet
                  </Tag>
                  <Tag
                    bck="#0e1731"
                    color="#ffffff"
                    size="100px"
                    add={{ display: "inline-block", marginBottom: "20px" }}
                  >
                    The
                  </Tag>
                  <Tag
                    bck="#0e1731"
                    color="#ffffff"
                    size="100px"
                    add={{ display: "inline-block", marginBottom: "20px" }}
                  >
                    Players
                  </Tag>
                  <div>
                    <Tag
                      bck="#ffffff"
                      color="#0e1731"
                      size="27px"
                      link
                      linkTo="team"
                      add={{
                        display: "inline-block",
                        marginBottom: "27px",
                        border: "1px solid #0e1731"
                      }}
                    >
                      Meet them here
                    </Tag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
