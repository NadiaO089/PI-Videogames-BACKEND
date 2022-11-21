const { Videogame, Genre } = require('../../db.js');

const create = async (body, genres) => {

    const videogame = await Videogame.create(body);
    var genreArray = genres.map(g => {
         videogame.addGenre(g.id);
    })
    await Promise.all(genreArray);

    return videogame;
}

module.exports = create;