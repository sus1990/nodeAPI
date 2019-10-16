<template>
	<el-table :data="tableData" style="width: 100%" max-heigh="450" border>

		<el-table-column label="序号" type="index" width="180" align="center" >
		</el-table-column>

		<el-table-column label="创建时间" width="180" align="center">
			<template slot-scope="scope">
				<i class="el-icon-time"></i>
				<span style="margin-left: 10px">{{ scope.row.date }}</span>
			</template>
		</el-table-column>


	</el-table>
</template>

<script>
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
		created() {
			this.getSchoolData();
			console.log(this.tableData)
		},
		methods: {
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

							// console.log(result.data)
							// this.tableData = result.data;

							console.log(this.tableData)
						} else {
							this.$message.error(JSON.stringify(result.data));
						}

					})


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
