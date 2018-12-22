import React from 'react';
import axios from 'axios';

import OwnerUnit from './OwnerUnit';
import SpecList from './SpecList';
import Descriptions from './Descriptions';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      unitData: [],
      ownerData: [],
      amenities: [],
      amenitiesList: [],
    };
    this.fetchUnit = this.fetchUnit.bind(this);
    this.fetchAmenities = this.fetchAmenities.bind(this);
  }


  componentDidMount() {
    this.fetchUnit();
    this.fetchAmenities();
  }

  fetchUnit() {
    axios.get(`/api/units/${generateRandomNumberBetween(11111, 11211)}`)
    .then(({ data }) => {
      console.log('axios -->', data);
      const { unitData, ownerData, amenities } = data;
      this.setState({
        unitData: unitData[0],
        ownerData: ownerData[0],
        amenities: amenities[0],
      });
    })
    .catch((err) => {
      console.log('error fetching unit -->', err);
    });
  }

  fetchAmenities() {
    axios.get(`/api/units/${generateRandomNumberBetween(11111, 11211)}/amenities`)
    .then(({ data }) => {
      console.log('axios -->', data);
      let amenitiesList = [...data];
      this.setState({
        amenitiesList,
      });
    })
    .catch((err) => {
      console.log('error fetching unit -->', err);
    });
  }

  render() {
    return (
      <div className="modules">
          This is still react...

          <div className="unitInfo container">

            <div className="ownerUnit container">
              <OwnerUnit unitData={this.state.unitData} ownerData={this.state.ownerData}/>
            </div>

            <div className="specs container">
              <SpecList unitData={this.state.unitData} ownerData={this.state.ownerData}/>
            </div>

            <div className="descript container">
            
              <div className="summary">
                <div>{this.state.unitData.summaryDescription}</div>
              </div>

              <Descriptions unitData={this.state.unitData}/>

              <div className="readmore container">
                <div>readmore/hide anchor</div>
              </div>

              <div className="contact container">
                <div>contact host anchor</div>
              </div>

            </div>

            <div className="amen container">

              this is where the amenities will go

              <div>amenities title</div>
              <div className="amenItems container">
                <div>amenity title</div>
                <div>amenity text</div>
              </div>

              <div className="showAll container">
                <div>show all anchor</div>
              </div>

            </div>

          </div>

          <div className="bookingWidget container">
            this is for booking widget

            <div>booking</div>

            <div>
              snapshot
              <div>price</div>
              <div>reviews</div>
            </div>

            <div>
              dates container
              <div>checkin</div>
              <div>arrow</div>
              <div>checkout</div>
            </div>

            <div>
              guests container
              <div>guest text</div>
              <div>guests button</div>
            </div>

            <div>
              bookButton container
              <div>bookRequest button</div>
              <div>youWont text</div>
              </div>

            <div>
              report container
              <div>report anchor</div>
            </div>

            <div>calendar container</div>

          </div>
      </div>
    );
  }
}

export default App;

function generateRandomNumberBetween(beg, end) {
  return Math.floor((Math.random() * (end - beg + 1)) + beg);
}
