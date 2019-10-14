<template>
	<div class="index">
		<HeaderNav></HeaderNav>
		<LeftMenu></LeftMenu>
		<router-view></router-view>
	</div>
</template>

<script>
	import HeaderNav from '../components/HeadNav'
	import LeftMenu from '../components/LeftMenu'
	export default {
		name: 'index',
		components: {
			HeaderNav,
			LeftMenu
		}
	}
</script>

<style scoped>
	.index {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
