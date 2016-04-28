/**
 * Created by clboyd on 4/4/16.
 */

function area(radius) {
  return radius * radius * Math.PI;
}

function circumference(radius) {
  return 2 * Math.PI * radius;
}

module.exports = {
  area: area,
  circumference: circumference
};
