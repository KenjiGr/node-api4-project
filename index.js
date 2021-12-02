const server = require('./server');
const port = 6000;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})