<template>
	<div class="login">
		<section class="form_container">
			<div class="manage_tip">
				<span class="title">小黄帽在线后台管理系统</span>


				<el-form :model="loginAdmin" :rules="rules" ref="loginForm" label-width="80px" class="loginForm">

					<el-form-item label="用户名" prop="name">
						<el-input v-model="loginAdmin.name" placeholder="请输入用户名"></el-input>
					</el-form-item>

					<el-form-item label="密码" prop="password">
						<el-input v-model="loginAdmin.password" placeholder="请输入密码"></el-input>
					</el-form-item>


					<el-form-item>
						<el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
					</el-form-item>


				</el-form>

			</div>
		</section>
	</div>
</template>

<script>
	import jwt_decode from 'jwt-decode'
	export default {
		name: 'login',
		data() {

			return {
				loginAdmin: {
					name: '',
					password: '',
					Scode: ''
				},
				rules: {
					name: [{
							required: true,
							message: '不能为空',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 16,
							message: '长度在2~16',
							trigger: 'blur'
						}
					],
					password: [{
							required: true,
							message: '不能为空',
							trigger: 'blur'
						},
						{
							min: 6,
							max: 10,
							message: '长度在6~10',
							trigger: 'blur'
						}
					],

				}
			}
		},
		components: {},
		methods: {
			// 提交登录admin数据
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.loginAdmin.Scode = this.$config.Scode;
						this.$axios
							.post('/api/admin/login', this.loginAdmin)
							.then(res => {
								let result = res.data;
								if (result.msg === 'ok' && result.info === 'got_it') {

									const {
										token
									} = result.data;

									// 保存token
									localStorage.setItem('token', token);

									// 解析token
									const decoded = jwt_decode(token);
									// console.log(decoded)

									// 存储数据到vuex
									this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decoded));
									this.$store.dispatch("setUser", decoded);

									// console.log(this.$store.getters.user);

									this.$message({
										message: '登录成功',
										type: 'success'
									})
									this.$router.push('./index')

									console.log(this.$store.getters.user);
								} else {
									this.$message.error(JSON.stringify(result.data));
								}

							})

					}

				});
			},

			// 测试
			test() {
				this.$axios.get('/api/admin/')
					.then(res => {
						let result = res.data;

						if (result.msg === 'ok' && result.info === 'recently_saved') {
							this.$message({
								message: '创建成功',
								type: 'success'
							})
						} else {
							this.$message.error(JSON.stringify(result.data));
						}

					})

				// this.$router.push('./login')
			},
			isEmpty(value) {
				return (
					value === undefined ||
					value === null ||
					(typeof value === "object" && Object.keys(value).length === 0) ||
					(typeof value === "string" && value.trim().length === 0)
				);
			}


		}
	}
</script>

<style scoped>
	.login {
		position: relative;
		width: 100%;
		height: 100%;
		background: url(../assets/img/bg.jpg) no-repeat center center;
		background-size: 100% 100%;
	}

	.form_container {
		width: 370px;
		height: 210px;
		position: absolute;
		top: 10%;
		left: 34%;
		padding: 25px;
		border-radius: 5px;
		text-align: center;
	}

	.form_container .manage_tip .title {
		font-family: "Microsoft YaHei";
		font-weight: bold;
		font-size: 26px;
		color: #fff;
	}

	.loginForm {
		margin-top: 20px;
		background-color: #fff;
		padding: 20px 40px 20px 20px;
		border-radius: 5px;
		box-shadow: 0px 5px 10px #cccc;
	}

	.submit_btn {
		width: 100%;
	}
</style>
