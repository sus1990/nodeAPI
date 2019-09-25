const isEmpty = require("./is-empty");
const isMobile = require("./is-mobile");
// const config = require('../config.js');


module.exports = function validatorData(plan_list, real_list) {

	let errors = {}; // 错误的原因
	let trueList = {}; // 整理后的数据会记录并返回的
	// plan_list 计划的参数
	// real_list 实际的参数

	// 0. 整理数据
	let data = {};

	for (let key in plan_list) {
		data[key] = {
			'value': real_list[key] === undefined ? '' : real_list[key], // 如果req.body中没有这个key，按照''处理
			'integral': plan_list[key] // 是否为必要参数
		}
	}

	// 1. 验证scode
	// post_Scode = data['Scode']['value'] === undefined ? '' : data['Scode']['value'].trim();
	// if (post_Scode != config.Scode) {
	// 	errors['Scode'] = 'Scode不合法';
	// 	trueList['Scode'] = post_Scode;
	// 	return {
	// 		errors: errors,
	// 		isValid: isEmpty(errors), // errors 无数据返回true ,errors 有数据返回 false
	// 		trueList
	// 	}
	// };

	// 2. 根据key的值和是否为必填去检查数据
	for (let key in data) {

		// 3. 可选参数，没有在post中提交，直接跳过
		if (data[key]['integral'] === false) {
			trueList[key] = '';
			continue;
		} else {
			
			// 4 必须参数，一定得验证。可选参数提交的话，也得验证
			if (isEmpty(data[key]['value'])) { // 4.1  验证数据真实性
				errors[key] = key + '不合法';
				// break;
			}
			if (key.includes('mobile')) { // 4.2 如果手机号，验证手机号
				if (!isMobile(data[key]['value'])) {
					errors[key] = key + '必须为11数字'
					break;
				}
			}
			trueList[key] = data[key]['value'].trim();
		}
	}

	return {
		errors: errors,
		isValid: isEmpty(errors), // errors 无数据返回true ,errors 有数据返回 false
		trueList
	}

}
