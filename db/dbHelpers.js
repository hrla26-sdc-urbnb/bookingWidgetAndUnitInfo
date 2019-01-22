const pool = require('./index.js');

module.exports = {
  readUnit: (unitId) => {
    const query = `
      SELECT
        u.*,
        o.name,
        o.photo,
        o.issuperhost
      FROM units u
      JOIN owners o
        on u.owner_id = o.id
      WHERE u.id = ${unitId};
    `;

    return pool.then(client => client.query(query));
  },
  insertUnit: (newUnit) => {
    const {
      owner_id,
      title,
      streetaddress,
      aptorsuite,
      country,
      city,
      state,
      zipcode,
      partofunitfromrent,
      guestsallowed,
      numberofroomsguestsmayuse,
      numberofbedsguestsmayuse,
      numberofbathroomsguestsmayuse,
      numberofreviews,
      averagestarrating,
      summarydescription,
      aboutyourunit,
      whatguestscanaccess,
      yourinteractionwithguests,
      otherthingstonote,
      dateavailablefrom,
      dateavailableto,
      pricepernight,
      cleaningfee,
      servicefee,
      isbooked,
      hasessentials,
      haswifi,
      hasshampoo,
      hasclosetdrawers,
      hastv,
      hasheat,
      hasairconditioning,
      hasbreakfastcoffeetea,
      hasdeskworkspace,
      hasfireplace,
      hasiron,
      hashairdryer,
      hasprivateentrance,
      hassmokedetector,
      hascarbonmonoxidedetector,
      hasfirstaidkit,
      hasfireextinguisher,
      haslockonbedroomdoor,
      haspool,
      haskitchen,
      haslaundrywasher,
      haslaundrydryer,
      hasparking,
      haselevator,
      hashottub,
    } = newUnit;

    const query = `
      INSERT INTO units (owner_id, title, streetaddress, aptorsuite, country, city, state, zipcode, partofunitfromrent, guestsallowed, numberofroomsguestsmayuse, numberofbedsguestsmayuse, numberofbathroomsguestsmayuse, numberofreviews, averagestarrating, summarydescription, aboutyourunit, whatguestscanaccess, yourinteractionwithguests, otherthingstonote, dateavailablefrom, dateavailableto, pricepernight, cleaningfee, servicefee, isbooked, hasessentials, haswifi, hasshampoo, hasclosetdrawers, hastv, hasheat, hasairconditioning, hasbreakfastcoffeetea, hasdeskworkspace, hasfireplace, hasiron, hashairdryer, hasprivateentrance, hassmokedetector, hascarbonmonoxidedetector, hasfirstaidkit, hasfireextinguisher, haslockonbedroomdoor, haspool, haskitchen, haslaundrywasher, haslaundrydryer, hasparking, haselevator, hashottub, city_tsvector)
      VALUES (${owner_id}, '${title}', '${streetaddress}', '${aptorsuite}', '${country}', '${city}', '${state}', '${zipcode}', '${partofunitfromrent}', ${guestsallowed}, ${numberofroomsguestsmayuse}, ${numberofbedsguestsmayuse}, ${numberofbathroomsguestsmayuse}, ${numberofreviews}, ${averagestarrating}, '${summarydescription}', '${aboutyourunit}', '${whatguestscanaccess}', '${yourinteractionwithguests}', '${otherthingstonote}', '${dateavailablefrom}', '${dateavailableto}', ${pricepernight}, ${cleaningfee}, ${servicefee}, ${isbooked}, ${hasessentials}, ${haswifi}, ${hasshampoo}, ${hasclosetdrawers}, ${hastv}, ${hasheat}, ${hasairconditioning}, ${hasbreakfastcoffeetea}, ${hasdeskworkspace}, ${hasfireplace}, ${hasiron}, ${hashairdryer}, ${hasprivateentrance}, ${hassmokedetector}, ${hascarbonmonoxidedetector}, ${hasfirstaidkit}, ${hasfireextinguisher}, ${haslockonbedroomdoor}, ${haspool}, ${haskitchen}, ${haslaundrywasher}, ${haslaundrydryer}, ${hasparking}, ${haselevator}, ${hashottub}, to_tsvector('${city}'));
    `;

    return pool.then(client => client.query(query));
  },
  updateUnit: (updatedUnit, callback) => {
    const {
      id,
      owner_id,
      title,
      streetaddress,
      aptorsuite,
      country,
      city,
      state,
      zipcode,
      partofunitfromrent,
      guestsallowed,
      numberofroomsguestsmayuse,
      numberofbedsguestsmayuse,
      numberofbathroomsguestsmayuse,
      numberofreviews,
      averagestarrating,
      summarydescription,
      aboutyourunit,
      whatguestscanaccess,
      yourinteractionwithguests,
      otherthingstonote,
      dateavailablefrom,
      dateavailableto,
      pricepernight,
      cleaningfee,
      servicefee,
      isbooked,
      hasessentials,
      haswifi,
      hasshampoo,
      hasclosetdrawers,
      hastv,
      hasheat,
      hasairconditioning,
      hasbreakfastcoffeetea,
      hasdeskworkspace,
      hasfireplace,
      hasiron,
      hashairdryer,
      hasprivateentrance,
      hassmokedetector,
      hascarbonmonoxidedetector,
      hasfirstaidkit,
      hasfireextinguisher,
      haslockonbedroomdoor,
      haspool,
      haskitchen,
      haslaundrywasher,
      haslaundrydryer,
      hasparking,
      haselevator,
      hashottub,
    } = updatedUnit;

    const query = `
    UPDATE units
    SET
      id = ${id},
      owner_id = ${owner_id},
      title = '${title}',
      streetAddress = '${streetaddress}',
      aptOrSuite = '${aptorsuite}',
      country = '${country}',
      city = '${city}',
      state = '${state}',
      zipCode = '${zipcode}',
      partofunitfromrent = '${partofunitfromrent}',
      guestsallowed = ${guestsallowed},
      numberofroomsguestsmayuse = ${numberofroomsguestsmayuse},
      numberofbedsguestsmayuse = ${numberofbedsguestsmayuse},
      numberofbathroomsguestsmayuse = ${numberofbathroomsguestsmayuse},
      numberofreviews = ${numberofreviews},
      averagestarrating = ${averagestarrating},
      summarydescription = '${summarydescription}',
      aboutyourunit = '${aboutyourunit}',
      whatguestscanaccess = '${whatguestscanaccess}',
      yourinteractionwithguests = '${yourinteractionwithguests}',
      otherthingstonote = '${otherthingstonote}',
      dateavailablefrom = '${dateavailablefrom}',
      dateavailableto = '${dateavailableto}',
      pricepernight = ${pricepernight},
      cleaningfee = ${cleaningfee},
      servicefee = ${servicefee},
      isbooked = ${isbooked},
      hasessentials = ${hasessentials},
      haswifi = ${haswifi},
      hasshampoo = ${hasshampoo},
      hasclosetdrawers = ${hasclosetdrawers},
      hastv = ${hastv},
      hasheat = ${hasheat},
      hasairconditioning = ${hasairconditioning},
      hasbreakfastcoffeetea = ${hasbreakfastcoffeetea},
      hasdeskworkspace = ${hasdeskworkspace},
      hasfireplace = ${hasfireplace},
      hasiron = ${hasiron},
      hashairdryer = ${hashairdryer},
      hasprivateentrance = ${hasprivateentrance},
      hassmokedetector = ${hassmokedetector},
      hascarbonmonoxidedetector = ${hascarbonmonoxidedetector},
      hasfirstaidkit = ${hasfirstaidkit},
      hasfireextinguisher = ${hasfireextinguisher},
      haslockonbedroomdoor = ${haslockonbedroomdoor},
      haspool = ${haspool},
      haskitchen = ${haskitchen},
      haslaundrywasher = ${haslaundrywasher},
      haslaundrydryer = ${haslaundrydryer},
      hasparking = ${hasparking},
      haselevator = ${haselevator},
      hashottub = ${hashottub}
    WHERE id = ${id};
    `;

    pool.query(query, callback);
  },
  deleteUnit: (unitId, callback) => {
    pool.query(`
      DELETE FROM units
      WHERE id = ${unitId};
    `, callback);
  },
  readOwner: (ownerId) => {
    return client.query(`
      SELECT *
      FROM owners
      WHERE id = ${ownerId}
    `);
  },
};
