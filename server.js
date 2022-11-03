const express = require('express');
const app = express();

app.listen(3000, () => {
	console.log('listening to port 3000')
});

app.get('/:greeting', (request, response) => {
	response.send(`What's up ${request.params.greeting}`)
});
