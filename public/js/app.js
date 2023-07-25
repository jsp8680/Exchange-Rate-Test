// public/js/app.js
const apiKey = '52a3c3c7704171311bbfd9a6';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const conversionRates = data.conversion_rates;
        const resultDiv = document.getElementById('result');
        let htmlContent = '<ul>';
        for (const currency in conversionRates) {
            htmlContent += `<li>${currency}: ${conversionRates[currency]}</li>`;
        }
        htmlContent += '</ul>';
        resultDiv.innerHTML = htmlContent;
    })
    .catch(error => {
        console.error('Error fetching data:', error.message);
        // Handle the error gracefully, e.g., show a friendly error message to the user
    });
