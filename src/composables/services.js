import axios from 'axios'

export const Api = async (url) => await axios
	.get(url)
	.then(response => response.data )
	.catch(error => {
		console.log('get error: ', error)
		return error
	})
