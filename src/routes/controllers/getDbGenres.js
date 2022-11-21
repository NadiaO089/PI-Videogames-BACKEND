const { Genre }= require('../../db');


const getDbGenres = async () => {

    var allGenres = await Genre.findAll();

    return allGenres;
}

module.exports = getDbGenres;