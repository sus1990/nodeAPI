const moment = require('moment');

exports.getNow = function() {
	let time = moment.unix(Date.now() / 1000).format("YYYY-MM-DD HH:mm:ss");
	return time;
}
