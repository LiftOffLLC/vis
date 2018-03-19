// first check if moment timezone.js is already loaded in the browser window, if so,
// use this instance. Else, load via commonjs.
if (typeof window !== 'undefined' && window['moment'] && window['moment'].tz) {
  module.exports = window['moment']
} else {
  module.exports = require('moment-timezone');
}
