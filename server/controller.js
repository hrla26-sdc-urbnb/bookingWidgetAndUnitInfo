
module.exports = {
  getUnitInfo: (req, res) => {
    res.status(200).send('you sent a get for unitInfo!');
  },
  getOwnerInfo: (req, res) => {
    res.status(200).send('you sent a get for ownerInfo!');
  },
};
