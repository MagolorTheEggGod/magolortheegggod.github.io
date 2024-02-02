console.log("Script pour la page de quiz chargé (bravo) !");

function displayQuiz() {
    console.log("Affichage du quiz... (test console pour les bugs :p)");

    const storedQuizData = localStorage.getItem("quizData");
    const quizData = JSON.parse(storedQuizData);

    if (!quizData || !quizData.question || !quizData.options || quizData.options.length < 2 || isNaN(quizData.correctAnswer)) {
        console.error("Données de quiz invalides. (oups faut changer le code)");
        return;
    }

    const quiz = document.createElement("div");
    quiz.classList.add("quiz");

    const quizTitle = document.createElement("h2");
    quizTitle.textContent = quizData.question;
    quiz.appendChild(quizTitle);

    const answerContainer = document.createElement("div");
    answerContainer.classList.add("answer-container");

    for (let i = 0; i < quizData.options.length; i++) {
        const answerButton = document.createElement("button");
        answerButton.textContent = quizData.options[i];
        answerButton.classList.add("answer-button");

        answerButton.addEventListener("click", function () {
            checkAnswer(i, quizData.correctAnswer, answerButton);
        });

        answerContainer.appendChild(answerButton);
    }

    quiz.appendChild(answerContainer);

    document.getElementById("quiz-container").innerHTML = "";
    document.getElementById("quiz-container").appendChild(quiz);
}

function checkAnswer(selectedIndex, correctIndex, answerButton) {
    const adjustedSelectedIndex = selectedIndex + 1;

    if (adjustedSelectedIndex === correctIndex) {
        // Réponse correcte
        answerButton.style.background = "#008000"; // Couleur verte pour indiquer que c'est juste (bien joué)
        displayResult(true);
    } else {
        // Réponse incorrecte
        answerButton.style.background = "#e74c3c"; // Couleur rouge pour dire que c'est faux (dommage)
        displayResult(false);
    }

    const answerButtons = document.querySelectorAll(".answer-button");
    answerButtons.forEach(button => {
        button.disabled = true;
    });
}

function displayResult(isCorrect) {
    const resultContainer = document.createElement("div");
    resultContainer.classList.add("result-container");

    const resultText = document.createElement("p");
    resultText.style.fontWeight = "bold"; // Texte en gras

    if (isCorrect) {
        // Victoire (Youpi :D)
        resultText.textContent = "Bravo!";
        resultText.style.textDecoration = "underline"; // Souligner le texte pour effet super cool
        resultText.style.color = "#00ffcc"; // Couleur vert fluo super flashy
        const bravoGif = document.createElement("img");
        bravoGif.src = "https://pa1.aminoapps.com/6937/2fef151f94dc1398d25619635df64b1fd3bd2b29r1-635-350_hq.gif"; // Gif heureux pour l'écran de victoire
        resultContainer.appendChild(bravoGif);
    } else {
        // Défaite (Oh non D:)
        resultText.textContent = "Oh non, dommage!";
        resultText.style.color = "#ff6666"; // Couleur rouge clair pour effet dramatique triste (bou-hou)
        const sadGif = document.createElement("img");
        sadGif.src = "https://media1.tenor.com/m/vSV3yJkKXCUAAAAC/baby-bowser.gif"; // Gif triste pour écran de défaite
        resultContainer.appendChild(sadGif);
    }

    resultContainer.appendChild(resultText);
    document.getElementById("quiz-container").appendChild(resultContainer);
}

// Ca c'est pour faire apparaitre le quiz initialement faut pas y toucher :O
displayQuiz();