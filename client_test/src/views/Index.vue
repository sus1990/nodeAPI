<template>
	<div class="index">
		<HeaderNav></HeaderNav>
		<router-view></router-view>
	</div>
</template>

<script>
	import HeaderNav from '../components/HeadNav'
	export default {
		name: 'index',
		components: {
			HeaderNav
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
