import express from 'express';
import cors from 'cors';
import { __dirname } from '../../dirname.js';
import userRoute from '../routes/user.routes.js';

class Server {
	constructor() {
		this.port = process.env.PORT;
		this.app = express();

		//middleware
		this.middleware();

		//rutas
		this.routes();
	}

	middleware() {
		//cors
		this.app.use(cors());
		//body parser
		this.app.use(express.json());
		//directorio publico
		this.app.use(express.static('src/public'));
	}

	routes() {
		this.app.use('/api/user', userRoute);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`${this.port}`);
		});
	}
}

export default Server;
