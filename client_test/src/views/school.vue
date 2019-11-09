<template>
	<div class="fillcontain">
		<el-table :data="tableData" style="width: 100%" max-heigh="450" border>

			<el-table-column label="序号" type="index" width="180" align="center">
			</el-table-column>

			<el-table-column label="创建时间" width="250" align="center">
				<template slot-scope="scope">
					<i class="el-icon-time"></i>
					<span style="margin-left: 10px">{{ scope.row.create_at | filterData }}</span>
				</template>
			</el-table-column>

			<el-table-column label="学校名称" width="180" align="center">
				<template slot-scope="scope">
					<span style="margin-left: 10px">{{ scope.row.school_name }}</span>
				</template>
			</el-table-column>

			<el-table-column label="学校地址" width="180" align="center">
				<template slot-scope="scope">
					<span style="margin-left: 10px;color:#00d503">{{ scope.row.address }}</span>
				</template>
			</el-table-column>

			<el-table-column label="联系人" width="180" align="center">
				<template slot-scope="scope">
					<span style="margin-left: 10px">{{ scope.row.contact_name }}</span>
				</template>
			</el-table-column>

			<el-table-column label="联系人电话" width="180" align="center">
				<template slot-scope="scope">
					<span style="margin-left: 10px">{{ scope.row.contact_mobile }}</span>
				</template>
			</el-table-column>

			<el-table-column label="备注" width="180" align="center">
				<template slot-scope="scope">
					<span style="margin-left: 10px">{{ scope.row.info }}</span>
				</template>
			</el-table-column>

			<el-table-column label="操作" align="center" fixed="right">
				<template slot-scope="scope">
					<el-button type="warning" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>

		</el-table>
	</div>
</template>

<script>
	import helper from '../../common/helper'
	export default {
		name: 'school',
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}]
			}
		},
		filters: {
			// 过滤器时间 mongdb带时区的时间，转换为不带时区的。
			filterData(value) {
				if (!value) {
					return ''
				};
				let time = helper.getTimeString(value);
				return time;
			},
			// 过滤器
			filterAddress(value, val1, val2) {

				let address = value + '省' + val1 + '省' + val1 + '省' + value + '省';
				return time;
			}

		},
		created() {
			this.getSchoolData();
		},
		methods: {
			// 获取数据
			getSchoolData() {
				const postData = {
					'Scode': this.$config.Scode,
					'size': 10,
					'page': 1
				};
				this.$axios.post('/api/school/school_list_page', postData)
					.then(res => {

						let result = res.data;
						if (result.msg === 'ok' && result.info === 'got_it') {
							this.tableData = result.data;
						} else {
							this.$message.error(JSON.stringify(result.data));
						}

					})

			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			}
		}
	}
</script>

<style scoped>
	.fillcontain {
		width: 100%;
		height: 100%;
		padding: 16px;
		box-sizing: border-box;
	}

	.btnRight {
		float: right;
	}

	.pagination {
		text-align: right;
		margin-top: 10px;
	}
</style>
