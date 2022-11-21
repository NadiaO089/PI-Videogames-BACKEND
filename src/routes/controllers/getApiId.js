require('dotenv').config();
const axios = require ('axios');
const { API_KEY } = process.env;



const getVideogame = async (id) => {

   
            const videogame = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

            const genres = videogame.data.genres.map(g => {
                return {id: g.id, name: g.name};
            });
          
            const platforms = videogame.data.platforms.map(p => {
                return p.platform.name;
            })
        
            const response = {
                id : videogame.data.id,
                name: videogame.data.name,
                background_image: videogame.data.background_image,
                genres: genres,
                description: videogame.data.description,
                released: videogame.data.released,
                rating: videogame.data.rating,
                platforms: platforms
            };
 
   
        return response;

}

module.exports = getVideogame;