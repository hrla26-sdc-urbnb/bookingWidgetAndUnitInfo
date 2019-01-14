const fs = require('fs');
const { getUnit } = require('./generateData');

const unitsFile = fs.createWriteStream('./db/seed/seedUnits.csv');

const writeNUnits = (writer, encoding, n) => {
  let i = n;
  const start = Date.now();

  const write = () => {
    let ok = true;
    do {
      i -= 1;
      if (i === n - 1) { // write header for first row
        const row = 'owner_id, title, streetAddress, aptOrSuite, country, city, state, zipCode, partOfUnitFromRent, guestsAllowed, numberOfRoomsGuestsMayUse, numberOfBedsGuestsMayUse, numberOfBathroomsGuestsMayUse, numberOfReviews, averageStarRating, summaryDescription, aboutYourUnit, whatGuestsCanAccess, yourInteractionWithGuests, otherThingsToNote, dateAvailableFrom, dateAvailableTo, pricePerNight, cleaningFee, serviceFee, isBooked, hasEssentials, hasWifi, hasShampoo, hasClosetDrawers, hasTv, hasHeat, hasAirConditioning, hasBreakfastCoffeeTea, hasDeskWorkSpace, hasFirePlace, hasIron, hasHairDryer, hasPrivateEntrance, hasSmokeDetector, hasCarbonMonoxideDetector, hasFirstAidKit, hasFireExtinguisher, hasLockOnBedroomDoor, hasPool, hasKitchen, hasLaundryWasher, hasLaundryDryer, hasParking, hasElevator, hasHotTub\n';
        writer.write(row, encoding);
      } else {
        const unit = getUnit();
        let row = '';
        row += `"${unit.owner_id.toString().replace(',', '')}", `;
        row += `"${unit.title.toString().replace(',', '')}", `;
        row += `"${unit.streetAddress.toString().replace(',', '')}", `;
        row += `"${unit.aptOrSuite.toString().replace(',', '')}", `;
        row += `"${unit.country.toString().replace(',', '')}", `;
        row += `"${unit.city.toString().replace(',', '')}", `;
        row += `"${unit.state.toString().replace(',', '')}", `;
        row += `"${unit.zipCode.toString().replace(',', '')}", `;
        row += `"${unit.partOfUnitFromRent.toString().replace(',', '')}", `;
        row += `"${unit.guestsAllowed.toString().replace(',', '')}", `;
        row += `"${unit.numberOfRoomsGuestsMayUse.toString().replace(',', '')}", `;
        row += `"${unit.numberOfBedsGuestsMayUse.toString().replace(',', '')}", `;
        row += `"${unit.numberOfBathroomsGuestsMayUse.toString().replace(',', '')}", `;
        row += `"${unit.numberOfReviews.toString().replace(',', '')}", `;
        row += `"${unit.averageStarRating.toString().replace(',', '')}", `;
        row += `"${unit.summaryDescription.toString().replace(',', '')}", `;
        row += `"${unit.aboutYourUnit.toString().replace(',', '')}", `;
        row += `"${unit.whatGuestsCanAccess.toString().replace(',', '')}", `;
        row += `"${unit.yourInteractionWithGuests.toString().replace(',', '')}", `;
        row += `"${unit.otherThingsToNote.toString().replace(',', '')}", `;
        row += `"${unit.dateAvailableFrom.toString().replace(',', '')}", `;
        row += `"${unit.dateAvailableTo.toString().replace(',', '')}", `;
        row += `"${unit.pricePerNight.toString().replace(',', '')}", `;
        row += `"${unit.cleaningFee.toString().replace(',', '')}", `;
        row += `"${unit.serviceFee.toString().replace(',', '')}", `;
        row += `"${unit.isBooked.toString().replace(',', '')}", `;
        row += `"${unit.hasEssentials.toString().replace(',', '')}", `;
        row += `"${unit.hasWifi.toString().replace(',', '')}", `;
        row += `"${unit.hasShampoo.toString().replace(',', '')}", `;
        row += `"${unit.hasClosetDrawers.toString().replace(',', '')}", `;
        row += `"${unit.hasTv.toString().replace(',', '')}", `;
        row += `"${unit.hasHeat.toString().replace(',', '')}", `;
        row += `"${unit.hasAirConditioning.toString().replace(',', '')}", `;
        row += `"${unit.hasBreakfastCoffeeTea.toString().replace(',', '')}", `;
        row += `"${unit.hasDeskWorkSpace.toString().replace(',', '')}", `;
        row += `"${unit.hasFirePlace.toString().replace(',', '')}", `;
        row += `"${unit.hasIron.toString().replace(',', '')}", `;
        row += `"${unit.hasHairDryer.toString().replace(',', '')}", `;
        row += `"${unit.hasPrivateEntrance.toString().replace(',', '')}", `;
        row += `"${unit.hasSmokeDetector.toString().replace(',', '')}", `;
        row += `"${unit.hasCarbonMonoxideDetector.toString().replace(',', '')}", `;
        row += `"${unit.hasFirstAidKit.toString().replace(',', '')}", `;
        row += `"${unit.hasFireExtinguisher.toString().replace(',', '')}", `;
        row += `"${unit.hasLockOnBedroomDoor.toString().replace(',', '')}", `;
        row += `"${unit.hasPool.toString().replace(',', '')}", `;
        row += `"${unit.hasKitchen.toString().replace(',', '')}", `;
        row += `"${unit.hasLaundryWasher.toString().replace(',', '')}", `;
        row += `"${unit.hasLaundryDryer.toString().replace(',', '')}", `;
        row += `"${unit.hasParking.toString().replace(',', '')}", `;
        row += `"${unit.hasElevator.toString().replace(',', '')}", `;
        row += `"${unit.hasHotTub.toString().replace(',', '')}"\n`;

        if (i > 0) {
          ok = writer.write(row, encoding); // see if we should continue, or wait
        } else if (i < 0) {
          writer.write(row, encoding, () => { // last time! invoke cb
            writer.end();
            const end = Date.now();
            console.log(`Total time two write ${n} units CSV records: ${end - start}ms`);
          });
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write); // had to stop early! write some more once it drains
    }
  };

  write();
};

writeNUnits(unitsFile, 'utf-8', 10000000);
