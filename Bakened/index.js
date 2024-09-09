
const express = require('express');

const app = express();

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id:1,
            title: "First Joke",
            content: "Ye mera First Backened Project hai",
        },
        {
            id:2,
            title: "Second Joke",
            content: "Aur tmhara",
        },
        {
            id:3,
            title: "Third joke",
            content: "Chori krke banaya hu dukh mtt ho itna",
        },
        {
            id:4,
            title: "Fourth joke",
            content: "Khus ho jaa bsdk",
        },
        {
            id:5,
            title:"Fifth joke",
            content:"Ek tha raja ek thi rani dono marr gyi khatam kahani bye bye😂",
        }
    ];
    res.send(jokes); 
});

app.listen(3000, () => {
    console.log(`Successfully running on port 3000`);
});
