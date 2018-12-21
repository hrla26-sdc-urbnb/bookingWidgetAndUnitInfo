import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      unit: {},
      amenities: [],
    };
  }

  render() {
    return (
      <div className="modules">
          This is still react...

          <div className="unitInfo container">
            this is for unit info

            <div className="ownerUnit container">

              this is where the owner and unit title go

              <div className="unitTitle container">
                <div>part available</div>
                <div>unit title</div>
                <div>city name</div>
              </div>

              <div className="owner container">
                <div>owner img</div>
                <div>owner badge</div>
                <div>owner name</div>
              </div>

            </div>

            <div className="specs container">

              this is where the unit specs go

              <div className="item container">
                <div>emoji img</div>
                <div>item title</div>
                <div>item text</div>
              </div>

            </div>

            <div className="descript container">

              this is where the description will go

              <div>
                description div id
                <div>descript title</div>
                <div>descript text</div>
              </div>

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
