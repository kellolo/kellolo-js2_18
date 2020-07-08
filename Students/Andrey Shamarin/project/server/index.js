// node js

const express = require('express'); // import по node js
const fs = require('fs');

const write = require('./utils/writer.js');
const logger = require('./utils/logger.js');
const Basket = require('./services/basket_service.js');

const server = express();
server.use(express.json());

server.listen(3000, () => {console.log('listen 3000...')});

server.get('/catalog', (req, res) => {
	fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
		if (!err) {
			res.send(data);
		}
	})
});

server.get('/basket', (req, res) => {
	fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
		if (!err) {
			res.send(data);
		}
	})
});
// запись нового товара в корзину
server.post('/basket', (req, res) => {
	// new item >> req.body
	fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
		if (!err) {
			let newCart = Basket.add(JSON.parse(data), req.body);
			write('./server/db/basket.json', newCart)
			.then(status => {
				if (status) {
					res.json({status});
				} else {
					res.sendStatus(500);
				}
			});
			let item = Basket.makeLogAdd(req.body);
			let message = 'Добавил в корзину ';
			logger('./server/logs/logger.log', message, item)
			.then(status => {
				if (status) {
					res.json({status});
				} else {
					res.sendStatus(500);
				}
			})
		}
	})
	
})

// изменение количества товара в корзине
server.put('/basket/:id', (req, res) => {
	fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
		if (!err) {
			let newCart = Basket.change(JSON.parse(data), req.params.id, req.body.amount);
			write('./server/db/basket.json', newCart)
			.then(status => {
				if (status) {
					res.json({status});
				} else {
					res.sendStatus(500);
				}
			});
			let item = Basket.makeLog(JSON.parse(data), req.params.id);
			let message = req.body.amount == 1 ? 'Увеличил количество ' : 'Уменьшил количество ';
			logger('./server/logs/logger.log', message, item)
			.then(status => {
				if (status) {
					res.json({status});
				} else {
					res.sendStatus(500);
				}
			})
		}
	})
})
// удаление товара из корзины
server.delete('/basket/:id', (req, res) => {
	fs.readFile('./server/db/basket.json', 'utf-8', (err, data) => {
		if (!err) {
			let newCart = Basket.delete(JSON.parse(data), req.params.id);
			write('./server/db/basket.json', newCart)
			.then(status => {
				if (status) {
					res.json({status});
				} else {
					res.sendStatus(500);
				}
			});
			let item = Basket.makeLog(JSON.parse(data), req.params.id);
			let message = 'Удалил из корзины ';
			logger('./server/logs/logger.log', message, item)
			.then(status => {
				if (status) {
					res.json({status});
				} else {
					res.sendStatus(500);
				}
			})
		}
	})
})



