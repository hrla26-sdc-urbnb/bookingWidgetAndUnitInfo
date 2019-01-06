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
      if (data[dataKeys[i]] && dataKeys[i] === 'hasWifi') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasEssentials') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasTv') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasDeskWorkSpace') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasIron') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasLaundryWasher') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasLaundryDryer') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasAirConditioning') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasHeat') {
        basic.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasClosetDrawers') {
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
      if (data[dataKeys[i]] && dataKeys[i] === 'hasParking') {
        facilities.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasPool') {
        facilities.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasHotTub') {
        facilities.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasElevator') {
        facilities.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasPrivateEntrance') {
        facilities.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasFirePlace') {
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
      if (data[dataKeys[i]] && dataKeys[i] === 'hasParking') {
        dining.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasBreakfastCoffeeTea') {
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
      if (data[dataKeys[i]] && dataKeys[i] === 'hasHairDryer') {
        bedAndBath.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasShampoo') {
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
      if (data[dataKeys[i]] && dataKeys[i] === 'hasCarbonMonoxideDetector') {
        safetyFeatures.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasFireExtinguisher') {
        safetyFeatures.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasSmokeDetector') {
        safetyFeatures.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasFirstAidKit') {
        safetyFeatures.push(this.mapAmenSentences[dataKeys[i]]);
      }
      if (data[dataKeys[i]] && dataKeys[i] === 'hasLockOnBedroomDoor') {
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
      if (!data[dataKeys[i]] && dataKeys[i] !== 'isBooked') {
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
