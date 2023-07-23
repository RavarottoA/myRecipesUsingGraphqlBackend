import app from './app.js';
import morgan from 'morgan';
import {sequelize} from './database/database.js';
import router from './routes/recipes.routes.js';

app.use(morgan('dev'));

app.use(router);

async function main() {
    try {
        await sequelize.sync();
        app.listen(4000);
        console.log('Server on port 4000');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
};

main();
