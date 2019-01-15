import React from 'react';
import ShowAmensList from './ShowAmensList.jsx';
import styles from '../styles/showAllAmens.css';

class ShowAmens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: [],
      facilities: [],
      dining: [],
      bedAndBath: [],
      safetyFeatures: [],
      notIncluded: [],
    };

    this.mapAmenSentences = {
      hasAirConditioning: 'Air conditioning',
      hasBreakfastCoffeeTea: 'Breakfast',
      hasCarbonMonoxideDetector: 'Carbon monoxide detector',
      hasClosetDrawers: 'Closet drawers',
      hasDeskWorkSpace: 'Laptop friendly workspace',
      hasElevator: 'Elevator',
      hasEssentials: 'Essentials',
      hasFireExtinguisher: 'Fire Extinguisher',
      hasFirePlace: 'Fire place',
      hasFirstAidKit: 'First aid kit',
      hasHairDryer: 'Hair dryer',
      hasHeat: 'Heating',
      hasHotTub: 'Hot tub',
      hasIron: 'Iron',
      hasKitchen: 'Kitchen',
      hasLaundryDryer: 'Dryer',
      hasLaundryWasher: 'Washer',
      hasLockOnBedroomDoor: 'Lock on bedroom door',
      hasParking: 'Free parking on premises',
      hasPool: 'Pool',
      hasPrivateEntrance: 'Private entrance',
      hasShampoo: 'Shampoo',
      hasSmokeDetector: 'Smoke Detector',
      hasTv: 'TV',
      hasWifi: 'Wifi',
    };
    this.updateBasic = this.updateBasic.bind(this);
    this.updateFacilities = this.updateFacilities.bind(this);
    this.updateDining = this.updateDining.bind(this);
    this.updateBedAndBath = this.updateBedAndBath.bind(this);
    this.updateSafetyFeatures = this.updateSafetyFeatures.bind(this);
    this.updateNotIncluded = this.updateNotIncluded.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { unitData } = this.props;
    this.updateBasic(unitData);
    this.updateFacilities(unitData);
    this.updateDining(unitData);
    this.updateBedAndBath(unitData);
    this.updateSafetyFeatures(unitData);
    this.updateNotIncluded(unitData);
  }

  updateBasic(data) {
    const dataKeys = Object.keys(data);
    const basic = [];
    for (let i = 0; i < dataKeys.length; i += 1) {
      if (data[dataKeys[i]] && dataKeys[i] === 'haswifi') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasessentials') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hastv') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasdeskworkspace') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasiron') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'haslaundrywasher') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'haslaundrydryer') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasairconditioning') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasheat') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasclosetdrawers') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
    }
    this.setState({
      basic,
    });
  }

  updateFacilities(data) {
    const dataKeys = Object.keys(data);
    const facilities = [];
    for (let i = 0; i < dataKeys.length; i += 1) {
      if (data[dataKeys[i]] && dataKeys[i] === 'hasparking') {
        facilities.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'haspool') {
        facilities.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hashottub') {
        facilities.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'haselevator') {
        facilities.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasprivateentrance') {
        facilities.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasfireplace') {
        facilities.push(this.mapAmenSentences[dataKeys[i]]);
      }
    }
    this.setState({
      facilities,
    });
  }
  
  updateDining(data) {
    const dataKeys = Object.keys(data);
    const dining = [];
    for (let i = 0; i < dataKeys.length; i += 1) {
      if (data[dataKeys[i]] && dataKeys[i] === 'hasparking') {
        dining.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasbreakfastcoffeetea') {
        dining.push(this.mapAmenSentences[dataKeys[i]]);
      }
    }
    this.setState({
      dining,
    });
  }

  updateBedAndBath(data) {
    const dataKeys = Object.keys(data);
    const bedAndBath = [];
    for (let i = 0; i < dataKeys.length; i += 1) {
      if (data[dataKeys[i]] && dataKeys[i] === 'hashairdryer') {
        bedAndBath.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasshampoo') {
        bedAndBath.push(this.mapAmenSentences[dataKeys[i]]);
      }
    }
    this.setState({
      bedAndBath,
    });
  }

  updateSafetyFeatures(data) {
    const dataKeys = Object.keys(data);
    const safetyFeatures = [];
    for (let i = 0; i < dataKeys.length; i += 1) {
      if (data[dataKeys[i]] && dataKeys[i] === 'hascarbonmonoxidedetector') {
        safetyFeatures.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasfireextinguisher') {
        safetyFeatures.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hassmokedetector') {
        safetyFeatures.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasfirstaidkit') {
        safetyFeatures.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'haslockonbedroomdoor') {
        safetyFeatures.push(this.mapAmenSentences[dataKeys[i]]);
      }
    }
    this.setState({
      safetyFeatures,
    });
  }

  updateNotIncluded(data) {
    const dataKeys = Object.keys(data);
    const notIncluded = [];
    for (let i = 0; i < dataKeys.length; i += 1) {
      if (!data[dataKeys[i]] && dataKeys[i] !== 'isbooked') {
        notIncluded.push(this.mapAmenSentences[dataKeys[i]]);
      }
    }
    this.setState({
      notIncluded,
    });
  }

  handleClick(e) {
    const { close } = this.props;
    console.log(e.target.id);
    if (e.target.id === '_modalParent') {
      close();
    }
  }

  render() {
    return (
      <div id="_modalParent" onClick={this.handleClick} className={styles.parentContainer}>
        <ShowAmensList
          basic={this.state.basic}
          facilities={this.state.facilities}
          dining={this.state.dining}
          bedAndBath={this.state.bedAndBath}
          safetyFeatures={this.state.safetyFeatures}
          notIncluded={this.state.notIncluded}
          close={this.props.close}
        />
      </div>
    );
  }
}

export default ShowAmens;
