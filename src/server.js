const express = require('express');
import React from 'react';
const App = require('../dist/ssr/app');
const { StaticRouter } = require('react-router');
import reactDOMServer from 'react-dom/server';

const app = express();

app.use(express.static('dist'));
app.use('images', express.static('images'));

app.get('*', (req, res) => {
	console.log(req.url)
	const html = reactDOMServer.renderToString(
		<StaticRouter
			location={req.url}
			context={{
				name: 'leonidas'
			}}
		>
			<App/>
		</StaticRouter>
	)

	res.write(`
		<!DOCTYPE html>
		<html lang="es">
			<head>
				<meta charset="UTF-8">
				<link rel=stylesheet" href="/css/app.css">
				<title>Platzi Video</title>
			</head>
			<body>
				<div id="home-container">${html}</div>
				<div id="modal-container"></div>
				<!--<script src="http://localhost:9000/js/app.js"></script> -->
				<script src="/js/app.js"></script>
			</body>
		</html>
	`)
	res.end()
})

app.listen(3000)

console.log(`El servidor se prendió en el puerto 3000`);