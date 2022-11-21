const { Videogame, Genre }  = require('../../db');

const getDbVideogame = async (id) => {
    
    const response = await Videogame.findByPk(id, {
        include: [Genre]
    }); 

    return response;
}

module.exports = getDbVideogame;