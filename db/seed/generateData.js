const faker = require('faker');


// helpers for specific fake data generation

function randomBooleanValue(num) {
  return num % 2 === 0;
}

function generateRandomNumberBetween(beg, end) {
  return Math.floor((Math.random() * (end - beg + 1)) + beg);
}

function partForRent() {
  const index = generateRandomNumberBetween(0, 2);
  const parts = ['Entire Place', 'Private Room', 'Shared Room'];
  return parts[index];
}

// creates sample owners data...

function generateOwnersData() {
  const sampleOwners = [];

  // we want 100 unique owners..
  for (let i = 0; i < 100; i += 1) {
    const owner = {};
    const randomBool = randomBooleanValue(i);

    //  give our owners the appropriate properties...
    owner.name = faker.name.findName();
    owner.id = i;
    owner.photo = faker.image.imageUrl();
    owner.isSuperHost = randomBool;
    sampleOwners.push(owner);
  }
  return sampleOwners;
}

// creates sample units data...

function generateUnitsData() { 
  const sampleUnits = [];

  // we need 100 units...

  for (let i = 11111; i < 11211; i += 1) {
    const unit = {
      id: i,
      owner_id: generateRandomNumberBetween(0, 99),
      title: faker.company.catchPhraseDescriptor(),
      streetAddress: faker.address.streetAddress(),
      aptOrSuite: faker.address.secondaryAddress(),
      country: faker.address.country(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      partOfUnitFromRent: partForRent(),
      guestsAllowed: generateRandomNumberBetween(1, 16),
      numberOfRoomsGuestsMayUse: generateRandomNumberBetween(0, 50),
      numberOfBedsGuestsMayUse: generateRandomNumberBetween(0, 50),
      numberOfBathroomsGuestsMayUse: generateRandomNumberBetween(0, 50),
      numberOfReviews: generateRandomNumberBetween(0, 500),
      averageStarRating: generateRandomNumberBetween(0, 5),
      summaryDescription: faker.lorem.paragraph(),
      aboutYourUnit: faker.lorem.paragraph(),
      whatGuestsCanAccess: faker.lorem.sentences(),
      yourInteractionWithGuests: faker.lorem.sentences(),
      otherThingsToNote: faker.lorem.sentences(),
      dateAvailableFrom: faker.date.future(),
      dateAvailableTo: faker.date.future(),
      pricePerNight: generateRandomNumberBetween(1, 1000),
      cleaningFee: generateRandomNumberBetween(1, 200),
      serviceFee: generateRandomNumberBetween(1, 200),
      isBooked: randomBooleanValue(i),
    };
    sampleUnits.push(unit);
  }
  return sampleUnits;
}

// will populate the Amenities mapping table...

const amenities = [
  {
    id: 1,
    name: 'hasEssentials',
  },
  {
    id: 2,
    name: 'hasWifi',
  },
  {
    id: 3,
    name: 'hasShampoo',
  },
  {
    id: 4,
    name: 'hasClosetDrawers',
  },
  {
    id: 5,
    name: 'hasTv',
  },
  {
    id: 6,
    name: 'hasHeat',
  },
  {
    id: 7,
    name: 'hasAirConditioning',
  },
  {
    id: 8,
    name: 'hasBreakfastCoffeeTea',
  },
  {
    id: 9,
    name: 'hasDeskWorkSpace',
  },
  {
    id: 10,
    name: 'hasFirePlace',
  },
  {
    id: 11,
    name: 'hasIron',
  },
  {
    id: 12,
    name: 'hasHairDryer',
  },
  {
    id: 13,
    name: 'hasPrivateEntrance',
  },
  {
    id: 14,
    name: 'hasSmokeDetector',
  },
  {
    id: 15,
    name: 'hasCarbonMonoxideDetector',
  },
  {
    id: 16,
    name: 'hasFirstAidKit',
  },
  {
    id: 17,
    name: 'hasFireExtinguisher',
  },
  {
    id: 18,
    name: 'hasLockOnBedroomDoor',
  },
  {
    id: 19,
    name: 'hasPool',
  },
  {
    id: 20,
    name: 'hasKitchen',
  },
  {
    id: 21,
    name: 'hasLaundryWasher',
  },
  {
    id: 22,
    name: 'hasLaundryDryer',
  },
  {
    id: 23,
    name: 'hasParking',
  },
  {
    id: 24,
    name: 'hasElevator',
  },
  {
    id: 25,
    name: 'hasHotTub',
  },
];

// this will populate our join table...

function generateUnitsAmenitiesJoinData() {
  const sampleJoinData = [];

  // 1 loop for each unit, thats 100...

  for (let i = 0; i < 100; i += 1) {
    const numberOfAmenities = generateRandomNumberBetween(0, 24);
    const unitId = generateRandomNumberBetween(11111, 11211);

    // each unit needs a random number of amenities

    for (let j = 0; j < numberOfAmenities; j += 1) {
      const join = {};
      join.unitId = unitId;
      join.amenityId = amenities[generateRandomNumberBetween(0, 24)].id;
      sampleJoinData.push(join);
    }
  }
  return sampleJoinData;
}

module.exports = {
  generateOwnersData,
  generateUnitsData,
  amenities,
  generateUnitsAmenitiesJoinData,
};
