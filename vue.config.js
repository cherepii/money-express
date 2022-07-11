const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: true,
	publicPath: '/money-express/',
	devServer: {
		proxy: 'https://api.cashu.kz/',
	},
});
