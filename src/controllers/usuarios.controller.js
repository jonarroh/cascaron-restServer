import { response, request } from 'express';

export const getUser = (req = request, res = response) => {
	const { q, nombre, apikey } = req.query;

	res.status(200).json({
		msj: 'get user',
		q,
		nombre,
		apikey
	});
};

export const putUser = (req, res = response) => {
	const { id } = req.params;
	res.status(200).json({
		msj: 'put user',
		id
	});
};

export const postUser = (req, res = response) => {
	const { nombre } = req.body;

	res.status(201).json({
		msj: 'post user',
		nombre
	});
};

export const deleteUser = (req, res = response) => {
	res.status(200).json({
		msj: 'delete user'
	});
};
