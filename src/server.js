const express = require('express');

const app = express();

app.get('*', (req, res) => {
	console.log(req.url)

	res.write(`
		<!DOCTYPE html>
		<html lang="es">
			<head>
				<meta charset="UTF-8">
				<title>PLatzi Video</title>
			</head>
			<body>
				<div id="home-container"> Hola mundo! desde ${req.url}</div>
				<div id="modal-container"></div>
				<script src="http://localhost:9000/js/app.js"></script>
			</body>
		</html>
	`)
	res.end()
})

app.listen(3000)

console.log(`El servidor se prendió en el puerto 3000`);