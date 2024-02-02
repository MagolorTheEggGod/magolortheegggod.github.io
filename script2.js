console.log("Script pour la création de quiz chargé (youhou) !");

function createQuiz() {
    const question = document.getElementById("question").value;
    const answer1 = document.getElementById("answer1").value;
    const answer2 = document.getElementById("answer2").value;
    const correctAnswer = document.getElementById("correctAnswer").value;

    if (!question || !answer1 || !answer2 || !["1", "2"].includes(correctAnswer)) {
        console.error("Données de formulaire invalides. (zut, faut changer le code)");
        return;
    }

    const quizData = {
        question,
        options: [answer1, answer2],
        correctAnswer: parseInt(correctAnswer),
    };
    localStorage.setItem("quizData", JSON.stringify(quizData));

    window.location.href = "accueil.html";
}