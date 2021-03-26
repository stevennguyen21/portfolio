const express = require('express');
const app = express();
const port = 3002;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
});