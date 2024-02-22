// Import the express module
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World! Welcome ............'); // Send a response to the client
});

const port = 4000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});