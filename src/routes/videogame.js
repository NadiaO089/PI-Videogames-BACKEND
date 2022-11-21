const express = require('express');
const router = express.Router();

const getVideogame = require('./controllers/getApiId.js');
const getDbVideogame = require('./controllers/getDbId.js');
const deleteVideogame = require('./controllers/delete.js');


router.get('/:idVideogame', async (req, res) => {
    
    const { idVideogame } = req.params;
    let videogame = {};
    try{
        if (idVideogame.includes('-')){
            videogame = await getDbVideogame(idVideogame);

            if(videogame === null) return res.status(404).send('Videogame not Found');
        }
        else 
       {
             videogame = await getVideogame(idVideogame);
        }

        return res.status(200).send(videogame);

    } catch(e){
     
        if(e.message === `input syntax is invalid for uuid type: «${idVideogame}»`) return res.status(400).send('Invalid Id');
        if(e.message === 'Request failed with status code 404') return res.status(404).send('Videogame not Found');
     
        return res.status(500).send('Something went wrong');
    }
    
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

        try{
            let response = await deleteVideogame(id);
    
            res.send('Videogame Delete');
           
    
        } catch (e){
            return res.status(500).send('Something went wrong');
        }
    
    
});

module.exports = router;