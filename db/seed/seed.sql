\c urbnb;

COPY owners (name,photo, isSuperHost)
FROM '/Users/martinhan/Desktop/bookingWidgetAndUnitInfo/db/seed/seedOwners.csv' DELIMITER ',' CSV HEADER;

COPY units (owner_id, title, streetAddress, aptOrSuite, country, city, state, zipCode, partOfUnitFromRent, guestsAllowed, numberOfRoomsGuestsMayUse, numberOfBedsGuestsMayUse, numberOfBathroomsGuestsMayUse, numberOfReviews, averageStarRating, summaryDescription, aboutYourUnit, whatGuestsCanAccess, yourInteractionWithGuests, otherThingsToNote, dateAvailableFrom, dateAvailableTo, pricePerNight, cleaningFee, serviceFee, isBooked, hasEssentials, hasWifi, hasShampoo, hasClosetDrawers, hasTv, hasHeat, hasAirConditioning, hasBreakfastCoffeeTea, hasDeskWorkSpace, hasFirePlace, hasIron, hasHairDryer, hasPrivateEntrance, hasSmokeDetector, hasCarbonMonoxideDetector, hasFirstAidKit, hasFireExtinguisher, hasLockOnBedroomDoor, hasPool, hasKitchen, hasLaundryWasher, hasLaundryDryer, hasParking, hasElevator, hasHotTub)
FROM '/Users/martinhan/Desktop/bookingWidgetAndUnitInfo/db/seed/seedUnits.csv' DELIMITER ',' CSV HEADER;
