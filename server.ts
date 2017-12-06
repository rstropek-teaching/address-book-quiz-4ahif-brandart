import {createServer, plugins} from 'restify';


import {getAll} from './get';
import {post} from './post';
import {deleteSingle} from './delete';
(() => {
    const server = createServer();

    // Add bodyParser plugin for parsing JSON in request body
    server.use(plugins.bodyParser());

    // Add routes
    server.get('/api/contacts', getAll);
    server.post('api/contacts', post)
    server.del('/api/contacts/:id', deleteSingle);

    server.listen(8080, () => console.log('API is listening'));
})();