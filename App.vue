<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
@import "@/styles/iconfont.css";
@import "@/styles/common.css";
/*每个页面公共css */
    html,
	page {
		height: 100%;
		width: 100%;
		background-color: #f1f1f1;
	}
</style>
