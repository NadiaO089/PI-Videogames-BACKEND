const { Videogame, Genre }  = require('../../db');

const deleteVideogame = async (id) => {
    
    const response = await Videogame.destroy({
        where: {
            id: id
        }
    }); 

    return response;
}

module.exports = deleteVideogame;