const http = require('http');
const {makeSecureRandom} = require("./ex1");

const server = http.createServer((req, res) => {
    if (req.url === '/api/securerandoms') {
        res.setHeader('Content-Type', 'application/json');
        async function testerParal() {
            try {
                const hex48 = makeSecureRandom(48);
                const hex40 = makeSecureRandom(40);
                const hex32 = makeSecureRandom(32);
                const hex24 = makeSecureRandom(24);
                const hex16 = makeSecureRandom(16);
                const hex8 = makeSecureRandom(8);
                const result = await Promise.all([hex48,hex40,hex32,hex24,hex16,hex8]);
                console.log(result);
                res.write(JSON.stringify(result));
                return res.end();
            } catch (err) {
                res.write(JSON.stringify(err));
                return res.end();
            }
        }
        
        testerParal();
    }
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/securerandoms</code></p>
    `);
        return res.end();
    }
});
server.on('connection', (sock) => {
    // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');

