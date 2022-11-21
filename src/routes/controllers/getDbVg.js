const { Videogame, Genre } = require('../../db.js');
const { Op } = require ('sequelize');

const getDbVideogames = async (name) => {
    let response = {};

    if(name) {
        response = await Videogame.findAll({
            attributes: ['id', 'name', 'background_image'],
            where: {
                name: {
                    [Op.iLike] : `%${name}%`
                }
            },
            include: [Genre],
        });
      
    }
    else {

        response = await Videogame.findAll({
            attributes: ['id', 'name', 'background_image', 'rating'],
            include: [Genre]
        });
    }
        return response;
}

module.exports = getDbVideogames;