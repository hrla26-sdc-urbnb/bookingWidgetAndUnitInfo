// function1 that returns an array of 1000 objects matching the Owners table properties
const femaleNames = ['Hannah', 'Madison', 'Ashley', 'Sarah', 'Alexis', 'Samantha', 'Jessica', 'Elizabeth', 'Taylor', 'Lauren', 'Alyssa', 'Kayla', 'Abigail', 'Brianna', 'Olivia', 'Emma', 'Megan', 'Grace', 'Victoria', 'Rachel', 'Anna', 'Sydney', 'Destiny', 'Morgan', 'Jennifer', 'Jasmine', 'Haley', 'Julia', 'Kaitlyn', 'Nicole', 'Amanda', 'Katherine', 'Natalie', 'Hailey', 'Alexandra', 'Savannah', 'Chloe', 'Rebecca', 'Stephanie', 'Maria', 'Sophia', 'Mackenzie', 'Allison', 'Isabella', 'Amber', 'Mary', 'Danielle', 'Gabrielle', 'Jordan', 'Brooke', 'Michelle', 'Sierra', 'Katelyn', 'Andrea', 'Madeline', 'Sara', 'Kimberly', 'Courtney', 'Erin', 'Brittany', 'Vanessa', 'Jenna', 'Jacqueline', 'Caroline', 'Faith', 'Makayla', 'Bailey', 'Paige', 'Shelby', 'Melissa', 'Kaylee', 'Christina', 'Trinity', 'Mariah', 'Caitlin', 'Autumn', 'Marissa', 'Breanna', 'Angela', 'Catherine', 'Zoe', 'Briana', 'Jada', 'Laura', 'Claire', 'Alexa', 'Kelsey', 'Kathryn', 'Leslie', 'Alexandria', 'Sabrina', 'Mia', 'Isabel', 'Molly', 'Leah', 'Katie', 'Gabriella', 'Cheyenne', 'Cassandra', 'Tiffany'];
const maleNames = ['Michael', 'Matthew', 'Joshua', 'Christopher', 'Nicholas', 'Andrew', 'Joseph', 'Daniel', 'Tyler', 'William', 'Brandon', 'Ryan', 'John', 'Zachary', 'David', 'Anthony', 'James', 'Justin', 'Alexander', 'Jonathan', 'Christian', 'Austin', 'Dylan', 'Ethan', 'Benjamin', 'Noah', 'Samuel', 'Robert', 'Nathan', 'Cameron', 'Kevin', 'Thomas', 'Jose', 'Hunter', 'Jordan', 'Kyle', 'Caleb', 'Jason', 'Logan', 'Aaron', 'Eric', 'Brian', 'Gabriel', 'Adam', 'Jack', 'Isaiah', 'Juan', 'Luis', 'Connor', 'Charles', 'Elijah', 'Isaac', 'Steven', 'Evan', 'Jared', 'Sean', 'Timothy', 'Luke', 'Cody', 'Nathaniel', 'Alex', 'Seth', 'Mason', 'Richard', 'Carlos', 'Angel', 'Patrick', 'Devin', 'Bryan', 'Cole', 'Jackson', 'Ian', 'Garrett', 'Trevor', 'Jesus', 'Chase', 'Adrian', 'Mark', 'Blake', 'Sebastian', 'Antonio', 'Lucas', 'Jeremy', 'Gavin', 'Miguel', 'Julian', 'Dakota', 'Alejandro', 'Jesse', 'Dalton', 'Bryce', 'Tanner', 'Kenneth', 'Stephen', 'Jake', 'Victor', 'Spencer', 'Marcus', 'Paul', 'Brendan'];
const imageUrl = 'https://fakeimg.pl/250x100/';

function getRandomNumberBetween(beg, end) {
  return (Math.floor(Math.random() * (end - beg + 1)) + beg);
}

function randomBooleanValue(num) {
  return num % 2 === 0;
}

function generateOwners() {
  const sampleOwners = [];
  // we want 100 unique owners..

  for (let i = 0; i < 100; i += 1) {
    const owner = {};

    // lets get some funky name combos!
    const index1 = getRandomNumberBetween(i, 99);
    const index2 = getRandomNumberBetween(i, 99);

    // init rand bool for superhost
    const randomBool = randomBooleanValue(i);

    //  give our owners the appropriate properties...

    owner.name = femaleNames[index1] + ' ' + maleNames[index2];
    owner.id = i;
    owner.photo = imageUrl;
    owner.isSuperHost = randomBool;


    sampleOwners.push(owner);
  }
  return sampleOwners;
}

// function3 that returns an array of 1000 objects matching the Units table properties
// init a new array
// run a loop of 100
// init a new object
// if the

// function2 that returns an array of 1000 objects matching the Amenities table properties


// function4 that iterates over the 1000 unitIds and assigns each unit a random number of
// amenities. Return an array of objects that contain a unitId prop whos value is a unitId, 
// and an ameities prop with an array containing a random number of amenityIds that will be
// associated with each unit...


console.log(generateOwners());
