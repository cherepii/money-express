import axios from 'axios';

const instance = axios.create({
	baseURL: 'public/payment-schedule/',
	headers: {
		'Content-Type': 'application/json',
	},
});

instance.interceptors.request.use((config) => {
	if (config.headers) {
		config.headers.Authorization =
			'Basic aGVzZmludGVjaDo1ZThmMTAxOC1mNjVhLTRlMjAtYWU2OS0xZjE4MTJmNmY2Zjc';
		return config;
	}
});

instance.interceptors.response.use(
	(config) => {
		config.headers['Access-Control-Allow-Origin'] =
			'http://localhost:8080/money-express/';

		return config;
	},
	(error) => {
		throw error;
	}
);

export default instance;
