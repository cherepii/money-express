import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.cashu.kz/public/payment-schedule/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;
