const express = require('express')
const app = express();
const port = 3000;
const routes = require('./routes/routesManager')

app.use('/api', routes)

const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root))

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});