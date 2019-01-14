const fs = require('fs');
const { getOwner } = require('./generateData');

const ownersFile = fs.createWriteStream('./db/seed/seedOwners.csv');

const writeNOwners = (writer, encoding, n) => {
  let i = n;
  const start = Date.now();

  const write = () => {
    let ok = true;
    do {
      i -= 1;
      if (i === n - 1) { // write header for first row
        const row = 'name, photo, isSuperHost\n';
        writer.write(row, encoding);
      } else {
        const owner = getOwner();
        let row = '';
        row += `"${owner.name.toString().replace(',', '')}", `;
        row += `"${owner.photo.toString().replace(',', '')}", `;
        row += `${owner.isSuperHost.toString().replace(',', '')}\n`;

        if (i > 0) {
          ok = writer.write(row, encoding); // see if we should continue, or wait
        } else if (i < 0) {
          writer.write(row, encoding, () => { // last time! invoke cb
            writer.end();
            const end = Date.now();
            console.log(`Total time two write ${n} owner CSV records: ${end - start}ms`);
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

writeNOwners(ownersFile, 'utf-8', 10000000);
