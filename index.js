const express = require('express');

const app = express();
const PORT = 3005;

app.get('/', (req, res) => {
    res.send('Welcome to my application!');
});

app.post('/fork', (req, res) => {
    try {
        res.send('Repository forked successfully!');
    } catch (error) {
        res.status(500).send('Error forking repository: ' + error.message);
    }
});

app.post('/pull-request', (req, res) => {
    try {
        res.send('Pull request successfully created!');
    } catch (error) {
        res.status(500).send('Error creating pull request: ' + error.message);
    }
});

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;