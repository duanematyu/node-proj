const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.end('Welcome to our homepage');
    }
    else if (req.url === '/about')
    {
        res.end('This is our story');
    }
    else
    {
        res.end(`
            <h1>This page doesn't exist</h1>
                <a href ="/">Go home</a>`);
    }
})

server.listen(5000);