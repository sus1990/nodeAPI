const moment = require('moment');

exports.getNow = function() {
	let time = Date.now();
	return moment.unix(time / 1000).format("YYYY-MM-DD HH:mm:ss");
}
