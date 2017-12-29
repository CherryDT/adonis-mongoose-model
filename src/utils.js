'use strict'

module.exports.isString = function (x) {
  return Object.prototype.toString.call(x) === "[object String]"
}

module.exports.splitOnCaps = function (x) {
  return x.split(/(?=[A-Z])/)
}

module.exports.firstLowerCase = function (string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

module.exports.nowAddDays = function(days, date = new Date()) {
  date.setDate(date.getDate() + days);
  return date;
}
