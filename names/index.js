const name = require("../country/state/city/index");
const uname = require("../utilities/utils");

const getPeopleInCity = (name) => {
  return uname(name);
};
module.exports = getPeopleInCity;
