import React from 'react';
import ReadMore from './ReadMore';
import AboutUnit from './AboutUnit';
import GuestAccess from './GuestAccess';
import GuestInteraction from './GuestInteraction';
import OtherNote from './OtherNotes';
import styles from '../styles/descriptions.css';

class Descriptions extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      readMore: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // this changes the rendering of the descriptions
  handleClick(e) {
    e.preventDefault();
    let readMore = !(this.state.readMore);
    this.setState({
      readMore,
    });
  }

  render() {
    let {
      aboutYourUnit,
      whatGuestsCanAccess,
      yourInteractionWithGuests,
      otherThingsToNote,
    } = this.props.unitData;

    let about = <AboutUnit about={aboutYourUnit}/>
    let access = <GuestAccess access={whatGuestsCanAccess}/>
    let interaction = <GuestInteraction interaction={yourInteractionWithGuests}/>
    let other = <OtherNote notes={otherThingsToNote}/>
    let descript = <div>{about}{access}{interaction}{other}</div>
    
    if (!this.state.readMore) {
      descript = null;
    }
    return (
      <div>
        {descript}
        <ReadMore handleClick={this.handleClick} wantsMore={this.state.readMore}/>
      </div>
    );
  }
}


export default Descriptions;
