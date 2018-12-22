const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airBnb', {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('error connecting to db -->', err);
});
db.once('open', () => {
  console.log('successfully connected to db!');
});

const ownerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  photo: String,
  isSuperHost: Boolean,
});

const unitSchema = new mongoose.Schema({
  id: Number,
  owner_id: Number,
  title: String,
  streetAddress: String,
  aptOrSuite: String,
  country: String,
  city: String,
  state: String,
  zipCode: String,
  partOfUnitFromRent: String,
  guestsAllowed: Number,
  numberOfRoomsGuestsMayUse: Number,
  numberOfBedsGuestsMayUse: Number,
  numberOfBathroomsGuestsMayUse: Number,
  numberOfReviews: Number,
  averageStarRating: Number,
  summaryDescription: String,
  aboutYourUnit: String,
  whatGuestsCanAccess: String,
  yourInteractionWithGuests: String,
  otherThingsToNote: String,
  dateAvailableFrom: Date,
  dateAvailableTo: Date,
  pricePerNight: Number,
  cleaningFee: Number,
  serviceFee: Number,
  isBooked: Boolean,
  hasEssentials: Boolean,
  hasWifi: Boolean,
  hasShampoo: Boolean,
  hasClosetDrawers: Boolean,
  hasTv: Boolean,
  hasHeat: Boolean,
  hasAirConditioning: Boolean,
  hasBreakfastCoffeeTea: Boolean,
  hasDeskWorkSpace: Boolean,
  hasFirePlace: Boolean,
  hasIron: Boolean,
  hasHairDryer: Boolean,
  hasPrivateEntrance: Boolean,
  hasSmokeDetector: Boolean,
  hasCarbonMonoxideDetector: Boolean,
  hasFirstAidKit: Boolean,
  hasFireExtinguisher: Boolean,
  hasLockOnBedroomDoor: Boolean,
  hasPool: Boolean,
  hasKitchen: Boolean,
  hasLaundryWasher: Boolean,
  hasLaundryDryer: Boolean,
  hasParking: Boolean,
  hasElevator: Boolean,
  hasHotTub: Boolean,
});

const Owner = mongoose.model('Owner', ownerSchema);
const Unit = mongoose.model('Unit', unitSchema);


module.exports = {
  db,
  Owner,
  Unit,
};
