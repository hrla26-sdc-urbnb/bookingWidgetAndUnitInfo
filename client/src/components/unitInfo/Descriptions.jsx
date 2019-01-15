import React from 'react';
import ReadMore from './ReadMore.jsx';
import AboutUnit from './AboutUnit.jsx';
import GuestAccess from './GuestAccess.jsx';
import GuestInteraction from './GuestInteraction.jsx';
import OtherNote from './OtherNotes.jsx';


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
      aboutyourunit,
      whatguestscanaccess,
      yourinteractionwithguests,
      otherthingstonote,
    } = this.props.unitData;

    let about = <AboutUnit about={aboutyourunit}/>
    let access = <GuestAccess access={whatguestscanaccess}/>
    let interaction = <GuestInteraction interaction={yourinteractionwithguests}/>
    let other = <OtherNote notes={otherthingstonote}/>
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
