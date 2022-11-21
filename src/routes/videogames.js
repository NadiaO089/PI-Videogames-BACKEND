const express = require('express');
const router = express.Router();

const getApiVideogames = require ('./controllers/getApiVg.js');
const getDbVideogames = require ('./controllers/getDbVg.js');
const create = require ('./controllers/create');

router.get('/', async (req, res) => {

    const { name } = req.query;

        try {
            const apiResponse = await getApiVideogames(name);
            const dbResponse = await getDbVideogames(name);
            
           if(name && apiResponse.length === 0 && dbResponse.length === 0) {
                return res.status(404).send('Videogame not Found');
           } 

           return res.status(200).send(dbResponse.concat(apiResponse));
            
    
        } catch(e) {
            console.log(e);
            return res.status(500).send('Something went wrong');
        }
    });

     router.post('/', async (req, res) => {
        try {
            const { name, description, platforms, genres } = req.body;
            console.log(req.body)
           
            if(!name || !description || !platforms.length) {
                
                return res.status(400).send('Required data is missing');
            }

            const createVg = await create(req.body, genres);
            console.log(createVg)
            return res.status(201).send(createVg);

        } catch(e) {
            console.log(e)
            return res.status(500).send('Something went wrong');
        }
    });


module.exports = router;

