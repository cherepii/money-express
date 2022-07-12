const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: true,
	publicPath:
		process.env.VUE_APP_NODE_ENV === 'production' ? '/money-express/' : '/',
	devServer: {
		proxy: 'https://api.cashu.kz/',
	},
});
