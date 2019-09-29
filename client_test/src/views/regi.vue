<template>
	<div class="register">
		<section class="form_container">
			<div class="manage_tip">
				<span class="title">小黄帽在线后台管理系统</span>


				<el-form :model="regiAdmin" :rules="rules" ref="regiForm" label-width="80px" class="registerForm">

					<el-form-item label="用户名" prop="name">
						<el-input v-model="regiAdmin.name" placeholder="请输入用户名"></el-input>
					</el-form-item>

					<el-form-item label="密码" prop="password">
						<el-input v-model="regiAdmin.password" placeholder="请输入密码"></el-input>
					</el-form-item>

					<el-form-item label="确认密码" prop="password2">
						<el-input v-model="regiAdmin.password2" placeholder="请确认密码"></el-input>
					</el-form-item>

					<el-form-item label="选择角色" prop="role">
						<el-select v-model="regiAdmin.role" placeholder="选择角色">
							<el-option lable="总部管理员" value="总部管理员"></el-option>
							<el-option lable="总部员工" value="总部员工"></el-option>
							<el-option lable="区域管理员" value="区域管理员"></el-option>
							<el-option lable="区域员工" value="区域员工"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item>
						<el-button type="primary" class="submit_btn" @click="submitForm('regiForm')">注册</el-button>
					</el-form-item>

				</el-form>

			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'regi',
		data() {

			return {
				regiAdmin: {
					name: '',
					password: '',
					password2: '',
					role: ''
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
					]
				}
			}
		},
		components: {}
	}
</script>

<style scoped>
	.register {
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

	.registerForm {
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
