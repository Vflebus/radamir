require('dotenv').config();
const cors = require('cors');
const express = require('express');

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());

app.use('/v1', router);


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});