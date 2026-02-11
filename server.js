const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer(function(req, res) {
    if (req.url === '/style.css') {

        fs.readFile('style.css', function(err, data) {
    
            if (err) {
                res.writeHead(500);
                res.end("Error loading CSS");
                return;
            }
    
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    
        return;
    }
    

    if (req.url === '/home') {

        fs.readFile('home.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });

    }

    else if (req.url === '/about') {

        fs.readFile('about.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });

    }

    else if (req.url === '/contact') {

        fs.readFile('contact.html', function(err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });

    }

    else {

        fs.readFile('404.html', function(err, data) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });

    }

});

server.listen(port, function() {
    console.log("Server running on port 3000");
});
