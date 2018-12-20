const Sequelize = require('sequelize');

const sequelize = new Sequelize('airBnb', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorsAliases: false,
});

// lets define the models...

const Owners = sequelize.define('owners', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  photo: Sequelize.TEXT,
  isSuperHost: Sequelize.INTEGER,
});

const Units = sequelize.define('units', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: Sequelize.STRING,
  streetAddress: Sequelize.STRING,
  aptOrSuite: Sequelize.STRING,
  country: Sequelize.STRING,
  state: Sequelize.STRING,
  zipCode: Sequelize.STRING,
  partOfUnitFromRent: Sequelize.STRING,
  guestsAllowed: Sequelize.INTEGER,
  numberOfRoomsGuestsMayUse: Sequelize.INTEGER,
  numberOfBedsGuestsMayUse: Sequelize.INTEGER,
  numberOfBathroomsGuestsMayUse: Sequelize.FLOAT,
  numberOfReviews: Sequelize.INTEGER,
  averageStarRating: Sequelize.INTEGER,
  summaryDescription: Sequelize.TEXT,
  aboutYourUnit: Sequelize.TEXT,
  whatGuestsCanAccess: Sequelize.TEXT,
  yourInteractionWithGuests: Sequelize.TEXT,
  otherThingsToNote: Sequelize.TEXT,
  dateAvailableFrom: Sequelize.DATEONLY,
  dateAvailableTo: Sequelize.DATEONLY,
  pricePerNight: Sequelize.FLOAT,
  cleaningFee: Sequelize.FLOAT,
  serviceFee: Sequelize.FLOAT,
  isBooked: Sequelize.INTEGER,
});

const Amenities = sequelize.define('amenities', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
});

const UnitsAmenities = sequelize.define('units_amenities', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});


// define foreign keys...

Units.belongsTo(Owners, { foreignKey: 'owner_id' });
Units.belongsToMany(Amenities, { through: UnitsAmenities, as: 'amenity_id', foreignKey: 'amenities_id' });
Amenities.belongsToMany(Units, { through: UnitsAmenities, as: 'unit_id', foreignKey: 'units_id' });


// lets sync it all...

Owners.sync({ force: false })
  .then(() => {
    console.log('owners table synced!');
  })
  .catch((err) => {
    console.log('error syncing owners table ', err);
  });

Units.sync({ force: false })
  .then(() => {
    console.log('units table synced!');
  })
  .catch((err) => {
    console.log('error syncing units table ', err);
  });

Amenities.sync({ force: false })
  .then(() => {
    console.log('amenities table synced!');
  })
  .catch((err) => {
    console.log('error syncing amenities table ', err);
  });

UnitsAmenities.sync({ force: false })
  .then(() => {
    console.log('units_amenities table synced!');
  })
  .catch((err) => {
    console.log('error syncing units_amenities table ', err);
  });

sequelize.authenticate()
  .then(() => {
    console.log('successfully connected to db!');
  })
  .catch((err) => {
    console.log('error connecting to db db/index ', err);
  });


module.exports = {
  Owners,
  Units,
  Amenities,
  UnitsAmenities,
};
