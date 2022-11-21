require('dotenv').config();
const axios = require ('axios');
const { API_KEY } = process.env;
const { Genre }= require('../../db');

const getApiGenres = async () => {

    const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);

        var allGenresArray = response.data.results.map(g => Genre.create({
            id: g.id,
            name: g.name
        })
        );

       let allGenres = await Promise.all(allGenresArray);
       return allGenres;
}

module.exports = getApiGenres;