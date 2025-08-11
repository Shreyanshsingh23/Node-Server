const http = require('http')

const myServer =  http.createServer((req, res) => {
        console.log('New Request');
        res.end('New Response Sent')
    })

myServer.listen(8000, () => {
    console.log('Server is listening on port 8000')
})

