const express = require('express')
const app = express()

app.use('/res', express.static('res'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/res/index.html');
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`lp-expressjs app listening on port ${port}!`))
