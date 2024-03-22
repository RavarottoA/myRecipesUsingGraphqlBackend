import app from './app.js';
import morgan from 'morgan';
import {sequelize} from './database/database.js';

const PORT = 8080;
app.use(morgan('dev'));

async function main() {
    try {
        await sequelize.sync();
        app.listen({port: PORT}, () => {
            console.log(`GraphQL endpoint: http://localhost:${PORT}/graphql`);
        })
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
};

main();
