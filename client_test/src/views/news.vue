<template>

	<iframe :src="url" height="100%" width="100%"></iframe>
</template>
<script>
	export default {
		data() {
			return {
				details: {},
				// url: 'https://www.135editor.com/wx_msgs/spview/7489981/3752513/NWRmOTRmMGFhOWJlMWZiMTJhYzI5ZTAxMjNkMGIwNzM2YTExMjY4YTI3Njk0NzFlODk1MzczMGQzYzgwNTUyYZbt3+sGZweEZM6j4mvzT2L0H8g+fJRPBlKyXvuY6aB8',
				url: 'http://1d7fc878.wiz03.com/wapp/pages/view/share/s/0tvYxU0R5A__2PO4-O1nuqt-1ra34j3WI4Wq2XJhG_2lZczg'



			}
		},
		created() {
			// this.getURL();
		},
		methods: {

			getURL() {
				let url = this.url;
				let http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
				let realurl = http + '//cors-anywhere.herokuapp.com/' + url;
				let that = this;

				// console.log(realurl)
				this.$axios({
					type: 'get',
					url: realurl,
					success: function(res) {
						console.log(res)
						if (res) {
							let data = res;
							data = data.replace(/data-src/g, 'src');
							let htmlSrc = 'data:text/html;charset=utf-8,' + data; // 解析码解决乱码
							that.url = htmlSrc;
						}
					},
					error: function(err) {
						console.log(err);
						Toast('好像出错了...');
					}
				});


				//            axios.get(realurl).then(res=>{
				//                console.log(res);
				//            },rej=>{
				//                let data = rej.data;
				//                data=data.replace(/data-src/g, "src");
				//                let html_src = 'data:text/html;charset=utf-8,' + data; //解析码解决乱码
				//                this.url = html_src;
				//            })
			}
		}
	}
</script>

<style>
</style>
