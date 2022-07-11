import axios from 'axios';

const instance = axios.create({
	baseURL: '/public/payment-schedule/',
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

export default instance;
