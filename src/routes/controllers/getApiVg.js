require('dotenv').config();
const axios = require ('axios');
const { API_KEY } = process.env;

const getApiVideogames = async (name) => {
    var allVideogames = {}
    var URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
    var data = [];

    while(URL !== `https://api.rawg.io/api/games?key=${API_KEY}&page=99`){
        
        allVideogames = await axios.get(URL);
            
        allVideogames.data.results.map(r => {
            data.push({
                id: r.id,
                name: r.name,
                background_image: r.background_image,
                rating: r.rating,
                genres: r.genres.map(g => {
                    return {name: g.name, id: g.id}
                })
            });
        })

        URL = allVideogames.data.next;
}

if (name) {
    let byName = data.filter(e => e.name.toLowerCase().includes(name.toLocaleLowerCase()))
    if(byName.length > 15) byName = byName.slice(0,14);
        return byName;
} else {
    data = data.slice(0,99);
    return data
}
    

}

module.exports = getApiVideogames;