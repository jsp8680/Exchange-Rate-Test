const express = require('express');
const app = express();
const port = 3000;

const fetch = require('node-fetch'); 

const apiKey = '52a3c3c7704171311bbfd9a6';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const conversionRates = data.conversion_rates;
            res.render('index', { conversionRates });
        })
        .catch(error => {
            console.error('Error fetching data:', error.message);
            res.render('error');
        });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
