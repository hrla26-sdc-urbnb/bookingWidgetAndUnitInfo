const fs = require('fs');
const { generateOwnersData, generateUnitsData } = require('./generateData');

// units
const unitsFile = fs.createWriteStream('./db/seed/seedUnits.csv');

const writeNUnits = (writer, encoding, n) => {
  let i = n;
  const start = Date.now();
  const sampleUnits = generateUnitsData();

  function write() {
    let ok = true;
    do {
      i -= 1;
      if (i === n) { // write header for first row
        const row = 'id, owner_id, title, streetAddress, aptOrSuite, country, city, state, zipCode, partOfUnitFromRent, guestsAllowed, numberOfRoomsGuestsMayUse, numberOfBedsGuestsMayUse, numberOfBathroomsGuestsMayUse, numberOfReviews, averageStarRating, summaryDescription, aboutYourUnit, whatGuestsCanAccess, yourInteractionWithGuests, otherThingsToNote, dateAvailableFrom, dateAvailableTo, pricePerNight, cleaningFee, serviceFee, isBooked, hasEssentials, hasWifi, hasShampoo, hasClosetDrawers, hasTv, hasHeat, hasAirConditioning, hasBreakfastCoffeeTea, hasDeskWorkSpace, hasFirePlace, hasIron, hasHairDryer, hasPrivateEntrance, hasSmokeDetector, hasCarbonMonoxideDetector, hasFirstAidKit, hasFireExtinguisher, hasLockOnBedroomDoor, hasPool, hasKitchen, hasLaundryWasher, hasLaundryDryer, hasParking, hasElevator, hasHotTub\n';
        writer.write(row, encoding);
      } else {
        const j = n % sampleUnits.length;
        let row = '';
        row += `"${sampleUnits[j].id.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].owner_id.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].title.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].streetAddress.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].aptOrSuite.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].country.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].city.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].state.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].zipCode.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].partOfUnitFromRent.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].guestsAllowed.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].numberOfRoomsGuestsMayUse.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].numberOfBedsGuestsMayUse.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].numberOfBathroomsGuestsMayUse.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].numberOfReviews.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].averageStarRating.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].summaryDescription.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].aboutYourUnit.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].whatGuestsCanAccess.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].yourInteractionWithGuests.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].otherThingsToNote.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].dateAvailableFrom.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].dateAvailableTo.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].pricePerNight.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].cleaningFee.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].serviceFee.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].isBooked.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasEssentials.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasWifi.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasShampoo.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasClosetDrawers.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasTv.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasHeat.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasAirConditioning.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasBreakfastCoffeeTea.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasDeskWorkSpace.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasFirePlace.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasIron.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasHairDryer.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasPrivateEntrance.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasSmokeDetector.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasCarbonMonoxideDetector.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasFirstAidKit.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasFireExtinguisher.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasLockOnBedroomDoor.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasPool.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasKitchen.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasLaundryWasher.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasLaundryDryer.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasParking.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasElevator.toString().replace(',', '')}", `;
        row += `"${sampleUnits[j].hasHotTub.toString().replace(',', '')}"\n`;

        if (i < 0) {
          ok = writer.write(row, encoding); // see if we should continue, or wait
        } else if (i === 0) {
          writer.write(row, encoding, () => { // last time! invoke cb
            writer.end();
            const end = Date.now();
            console.log(`Total time two write ${n} CSV records: ${end - start}ms`);
          });
        }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write); // had to stop early! write some more once it drains
    }
  }

  write();
};

writeNUnits(unitsFile, 'utf-8', 10000000);

// for (let n = 0; n < 10; n += 1) {
//   for (let i = 0; i < sampleUnits.length; i += 1) {
//     unitsFile.write(`"${sampleUnits[i].id.toString().replace(',', '')}", "${sampleUnits[i].owner_id.toString().replace(',', '')}", "${sampleUnits[i].title.toString().replace(',', '')}", "${sampleUnits[i].streetAddress.toString().replace(',', '')}", "${sampleUnits[i].aptOrSuite.toString().replace(',', '')}", "${sampleUnits[i].country.toString().replace(',', '')}", "${sampleUnits[i].city.toString().replace(',', '')}", "${sampleUnits[i].state.toString().replace(',', '')}", "${sampleUnits[i].zipCode.toString().replace(',', '')}", "${sampleUnits[i].partOfUnitFromRent.toString().replace(',', '')}", "${sampleUnits[i].guestsAllowed.toString().replace(',', '')}", "${sampleUnits[i].numberOfRoomsGuestsMayUse.toString().replace(',', '')}", "${sampleUnits[i].numberOfBedsGuestsMayUse.toString().replace(',', '')}", "${sampleUnits[i].numberOfBathroomsGuestsMayUse.toString().replace(',', '')}", "${sampleUnits[i].numberOfReviews.toString().replace(',', '')}", "${sampleUnits[i].averageStarRating.toString().replace(',', '')}", "${sampleUnits[i].summaryDescription.toString().replace(',', '')}", "${sampleUnits[i].aboutYourUnit.toString().replace(',', '')}", "${sampleUnits[i].whatGuestsCanAccess.toString().replace(',', '')}", "${sampleUnits[i].yourInteractionWithGuests.toString().replace(',', '')}", "${sampleUnits[i].otherThingsToNote.toString().replace(',', '')}", "${sampleUnits[i].dateAvailableFrom.toString().replace(',', '')}", "${sampleUnits[i].dateAvailableTo.toString().replace(',', '')}", "${sampleUnits[i].pricePerNight.toString().replace(',', '')}", "${sampleUnits[i].cleaningFee.toString().replace(',', '')}", "${sampleUnits[i].serviceFee.toString().replace(',', '')}", "${sampleUnits[i].isBooked.toString().replace(',', '')}", "${sampleUnits[i].hasEssentials.toString().replace(',', '')}", "${sampleUnits[i].hasWifi.toString().replace(',', '')}", "${sampleUnits[i].hasShampoo.toString().replace(',', '')}", "${sampleUnits[i].hasClosetDrawers.toString().replace(',', '')}", "${sampleUnits[i].hasTv.toString().replace(',', '')}", "${sampleUnits[i].hasHeat.toString().replace(',', '')}", "${sampleUnits[i].hasAirConditioning.toString().replace(',', '')}", "${sampleUnits[i].hasBreakfastCoffeeTea.toString().replace(',', '')}", "${sampleUnits[i].hasDeskWorkSpace.toString().replace(',', '')}", "${sampleUnits[i].hasFirePlace.toString().replace(',', '')}", "${sampleUnits[i].hasIron.toString().replace(',', '')}", "${sampleUnits[i].hasHairDryer.toString().replace(',', '')}", "${sampleUnits[i].hasPrivateEntrance.toString().replace(',', '')}", "${sampleUnits[i].hasSmokeDetector.toString().replace(',', '')}", "${sampleUnits[i].hasCarbonMonoxideDetector.toString().replace(',', '')}", "${sampleUnits[i].hasFirstAidKit.toString().replace(',', '')}", "${sampleUnits[i].hasFireExtinguisher.toString().replace(',', '')}", "${sampleUnits[i].hasLockOnBedroomDoor.toString().replace(',', '')}", "${sampleUnits[i].hasPool.toString().replace(',', '')}", "${sampleUnits[i].hasKitchen.toString().replace(',', '')}", "${sampleUnits[i].hasLaundryWasher.toString().replace(',', '')}", "${sampleUnits[i].hasLaundryDryer.toString().replace(',', '')}", "${sampleUnits[i].hasParking.toString().replace(',', '')}", "${sampleUnits[i].hasElevator.toString().replace(',', '')}", "${sampleUnits[i].hasHotTub.toString().replace(',', '')}"\n`);
//   }
// }

// owners
// const sampleOwners = generateOwnersData();
// const ownersFile = fs.createWriteStream('./db/seed/seedOwners.csv');

// ownersFile.write('id, name, photo, isSuperHost\n');

// for (let n = 0; n < 10; n += 1) {
//   for (let i = 0; i < sampleOwners.length; i += 1) {
//     let row = `${sampleOwners[i].id.toString().replace(',', '')}, `;
//     row += `"${sampleOwners[i].name.toString().replace(',', '')}", `;
//     row += `"${sampleOwners[i].photo.toString().replace(',', '')}", `;
//     row += `${sampleOwners[i].isSuperHost.toString().replace(',', '')}\n`;
//     ownersFile.write(row);
//   }
// }
