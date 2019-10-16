<template>

	<el-row class="menu_page">

		<el-col>
			<el-menu class="el-menu-vertical-demo" background-color="#324057" text-color="#fff" active-text-color="#409eff">

				<!-- 首页 -->
				<router-link to="/home">
					<el-menu-item index="0">
						<i class="fa fa-margin fa-server"></i>
						<span slot="title">首页</span>
					</el-menu-item>
				</router-link>

				<!-- 其他分栏 -->
				<template v-for="item in items">
					<el-submenu v-if="item.children" :index="item.path" :key="item.path">
						
						<!-- 分栏标题 -->
						<template slot="title">
							<i :class="'fa fa-margin '+item.icon"></i>
							<span slot="title">{{item.name}}</span>
						</template>

						<!-- 分栏子项 -->
						<router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">
							<el-menu-item :index="citem.path">
								<span slot="title">{{citem.name}}</span>
							</el-menu-item>
						</router-link>
						
					</el-submenu>
				</template>

			</el-menu>
		</el-col>
	</el-row>


</template>

<script>
	export default {
		name: 'LeftMenu',
		data() {
			return {
				items: [{
						icon: 'fa-university',
						name: '学校管理',
						path: 'school',
						children: [
							{
								path: 'school',
								name: '学校管理'
							}
						]
					},
					{
						icon: 'fa-book',
						name: '班级管理',
						path: 'class',
						children: [{
								path: 'class_add',
								name: '添加班级'
							},
							{
								path: 'class_list',
								name: '查看班级'
							}
						]
					}
				]
			}
		}
	}
</script>

<style scoped>
	.menu_page {
		position: fixed;
		top: 71px;
		left: 0;
		min-height: 100%;
		background-color: #324057;
		z-index: 99;
	}

	.el-menu {
		border: none;
	}

	.fa-margin {
		margin-right: 5px;
	}

	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 180px;
		min-height: 400px;
	}

	.el-menu-vertical-demo {
		width: 35px;
	}

	.el-submenu .el-menu-item {
		min-width: 180px;
	}

	.hiddenDropdown,
	.hiddenDropname {
		display: none;
	}

	a {
		text-decoration: none;
	}
</style>
