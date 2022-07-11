const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: true,
	publicPath: process.env.NODE_ENV === 'production' ? '/money-express/' : '/',
	devServer: {
		proxy: 'https://api.cashu.kz/',
	},
});