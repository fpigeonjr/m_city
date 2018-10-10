import React, { Component } from "react";
import Stripes from "../../../Resources/images/stripes.png";
import { Tag } from "../../UI/Misc";

class MeetPlayers extends Component {
  state = {};
  render() {
    return (
      <div
        className="home_meetplayers"
        style={{ background: `#ffffff url(${Stripes})` }}
      >
        <div className="container">
          <div className="home_meetplayers_wrapper">
            <div className="home_card_wrapper">
              <h1>CARD</h1>
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
    );
  }
}

export default MeetPlayers;
