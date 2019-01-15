-- DROP DATABASE IF EXISTS urbnb;

-- CREATE DATABASE urbnb;

\c urbnb;

CREATE TABLE units (
  id SERIAL PRIMARY KEY,
  owner_id INT,
  title VARCHAR(255),
  streetAddress VARCHAR(255),
  aptOrSuite VARCHAR(255),
  country VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zipCode VARCHAR(255),
  partOfUnitFromRent VARCHAR(255),
  guestsAllowed INT,
  numberOfRoomsGuestsMayUse INT,
  numberOfBedsGuestsMayUse INT,
  numberOfBathroomsGuestsMayUse INT,
  numberOfReviews INT,
  averageStarRating INT,
  summaryDescription TEXT,
  aboutYourUnit TEXT,
  whatGuestsCanAccess TEXT,
  yourInteractionWithGuests TEXT,
  otherThingsToNote TEXT,
  dateAvailableFrom VARCHAR(255),
  dateAvailableTo VARCHAR(255),
  pricePerNight INT,
  cleaningFee INT,
  serviceFee INT,
  isBooked BOOLEAN,
  hasEssentials BOOLEAN,
  hasWifi BOOLEAN,
  hasShampoo BOOLEAN,
  hasClosetDrawers BOOLEAN,
  hasTv BOOLEAN,
  hasHeat BOOLEAN,
  hasAirConditioning BOOLEAN,
  hasBreakfastCoffeeTea BOOLEAN,
  hasDeskWorkSpace BOOLEAN,
  hasFirePlace BOOLEAN,
  hasIron BOOLEAN,
  hasHairDryer BOOLEAN,
  hasPrivateEntrance BOOLEAN,
  hasSmokeDetector BOOLEAN,
  hasCarbonMonoxideDetector BOOLEAN,
  hasFirstAidKit BOOLEAN,
  hasFireExtinguisher BOOLEAN,
  hasLockOnBedroomDoor BOOLEAN,
  hasPool BOOLEAN,
  hasKitchen BOOLEAN,
  hasLaundryWasher BOOLEAN,
  hasLaundryDryer BOOLEAN,
  hasParking BOOLEAN,
  hasElevator BOOLEAN,
  hasHotTub BOOLEAN
);

CREATE TABLE owners (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255), 
  photo VARCHAR(255),
  isSuperHost BOOLEAN
);
