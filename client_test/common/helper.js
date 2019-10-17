// const stringRandom = require('string-random');
const moment = require('moment');


module.exports = {
	// 生成日期字符串YYYY-MM-DD HH:mm:ss
	getTimeString(value) {
		let time = moment.unix(value / 1000).format("YYYY-MM-DD HH:mm:ss");
		return time;
	}
};
