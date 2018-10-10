import React, { Component } from "react";
import { firebaseMatches } from "../../../Firebase";
import { firebaseLooper, reverseArray } from "../../UI/Misc";
import MatchesBlock from "../../UI/MatchesBlock";
import { Slide } from "react-reveal";

class Blocks extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot);
        this.setState({ matches: reverseArray(matches) });
      });
  }

  showMatches = matches =>
    matches
      ? matches.map(match => (
          <Slide bottom key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchesBlock match={match} />
              </div>
            </div>
          </Slide>
        ))
      : null;

  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;