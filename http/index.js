const http = require('http')
const fs = require('fs')

const myServer =  http.createServer((req, res) => {
        let log = `${Date.now()} : ${req.url} New Request Received\n`
        fs.appendFile('log.txt', log, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Log Updated')
            }
        })
        switch(req.url) {
    case '/':
        fs.readFile('./pokemon.html', 'utf-8', (err, data)=> {if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end(err);
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });
            break;
    case '/about':
        fs.readFile('./about.html', 'utf-8',(err, data)=> {if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(err);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }})
        break
    case '/contact':
        res.end('<h1>Contact Page Data</h1>')
        break
    default:
        res.write('<h1>404 Page Not Found</h1>')
        break
}
    })


    



myServer.listen(8000, () => {
    console.log('Server is listening on port 8000')
})

