const Hapi = require('@hapi/hapi');
const routes = require('./routes');

//menginisialisasi server
const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost',
    });

    //mengatur route
    server.route(routes);

    //menjalankan server
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();