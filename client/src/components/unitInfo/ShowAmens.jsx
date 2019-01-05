import React from 'react';

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

    this.map = {
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

    const { unitData } = this.props;
    const hasAmens = [];
    const missingAmens = [];

    for (let key in unitData) {
      if (typeof unitData[key] === 'boolean' && key != 'isBooked') {
       if (unitData[key]) {
         hasAmens.push(key);
       } else {
         missingAmens.push(key);
       }
      }
    }
    

  }

  render() {
    return (
      <div>
        this is the amens all...
      </div>
    );
  }
}

export default ShowAmens;
