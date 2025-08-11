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
        res.end('<h1>Home Page</h1>')
        break
    case '/about':
        res.end('<h1>About Page</h1>')
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

