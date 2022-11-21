const express = require('express');
const router = express.Router();
const getDbGenres = require ('./controllers/getDbGenres.js');
const getApiGenres = require ('./controllers/getApiGenres.js');

router.get('/', async (req, res) => {
    try{
        var allGenres = await getDbGenres();
        console.log('db')
        if(!allGenres.length) {
            allGenres = await getApiGenres();
            console.log('api')
        }

        return res.status(200).send(allGenres);
    }
    catch(e) {
        console.log(e)
        return res.status(500).send('Something went wrong');
    }
});

module.exports = router;