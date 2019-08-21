const express = require('express');

const server = express();

// understands requests with body as json
server.use(express.json());

// query params: ?name=arthur
// route params: /users/1
// request body: { name: arthur, password: 'abc' }

const users = ['arthur', 'diego'];

// similar to python annotation 
function checkUserExists(req, res, next) {
	if (!req.body.name) {
		return res.status(400).json({ error: 'name property of user not found on request body!' });
	}

	return next();
}

// called on routes that need user index
function checkUserInArray(req, res, next) {
	const { index } = req.params;
	const user = users[index];
	req.user = user;

	if (!user) {
		return res.status(400).json({ error: 'user does not exist!' });
	}

	return next();
}

// defines global middleware (called before the route itself)
server.use((req, res, next) => {
	console.log(`method: ${req.method} - url: ${req.url}`);

	// measures req middleware execution time
	console.time('request');
	next();
	console.timeEnd('request');
});

// INSOMNIA['get-users'] => e.g.: localhost:3000/users
server.get('/users', (req, res) => {
	return res.json(users);
});

// INSOMNIA['get-user-by-index'] => e.g.: localhost:3000/users/666
server.get('/users/:index', checkUserInArray, (req, res) => {
	const queryParams = req.query;
	// const { index } = req.params;
	// console.log('teste');

	return res.json({ queryParams, user: req.user });
});

// INSOMNIA['create-user'] => e.g.: localhost:3000/users with body as JSON
server.post('/users', checkUserExists, (req, res) => {
	const { name } = req.body;

	users.push(name);

	return res.json(users);
});

// INSOMNIA['update-user'] => e.g.: localhost:3000/users/userindex with body as JSON
server.put('/users/:index', checkUserExists, checkUserInArray, (req, res) => {
	const { index } = req.params;
	const { name } = req.body;

	users[index] = name;

	return res.json(users);
});

// INSOMNIA['update-user'] => e.g.: localhost:3000/users/userindex
server.delete('/users/:index', checkUserInArray, (req, res) => {
	const { index } = req.params;

	users.splice(index, 1);

	return res.json(users);
});

server.listen(3000);