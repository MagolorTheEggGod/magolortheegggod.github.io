const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'accueil.html'));
});

// Démarrer le serveur comme ça le site il fonctionne
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});

app.get('/check-answer', (req, res) => {
    const question = req.query.question;
    const answer1 = req.query.answer1;
    const answer2 = req.query.answer2;
    const correctAnswer = req.query.correctAnswer;

    // Vérification de la réponse correcte pour le quiz
    const isCorrect = (correctAnswer === '1') ? true : false;

    res.send(`
        <html>
            <head>
                <title>Résultat de la vérification</title>
            </head>
            <body>
                <h1>Résultat de la vérification</h1>
                <p>Question: ${question}</p>
                <p>Réponse 1: ${answer1}</p>
                <p>Réponse 2: ${answer2}</p>
                <p>Réponse correcte: ${correctAnswer}</p>
                <p>La réponse est ${isCorrect ? 'correcte' : 'incorrecte'}.</p>
                <p><a href="/">Retour à l'accueil</a></p>
            </body>
        </html>
    `);
});