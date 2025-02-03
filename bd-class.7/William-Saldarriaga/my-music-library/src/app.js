
const express = require('express');

const { sequelize } = require('./bd/sequelize.js');
const env = require('./config/env');



const artistRoutes = require('./routes/artist.routes.js');
const songRoutes = require('./routes/song.routes.js');




async function main () {

    const port = env.port;
    const app = express();
    app.use(express.json());

    app.use(artistRoutes);
    app.use(songRoutes);


    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        
        app.listen(port, () => {
            console.log('listening on port ' + port);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
   
    
}


main();