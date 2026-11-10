document.addEventListener("DOMContentLoaded", function () {

    const questions = [

        {
            question: "In which year was Real Madrid founded?",
            options: ["1899", "1902", "1905", "1910"],
            answer: 1
        },

        {
            question: "How many Champions League titles had Real Madrid won by 2024?",
            options: ["10", "12", "14", "15"],
            answer: 3
        },

        {
            question: "Who scored the famous winning volley in the 2002 Champions League final?",
            options: ["Raúl", "Ronaldo", "Zinedine Zidane", "Roberto Carlos"],
            answer: 2
        },

        {
            question: "Who is Real Madrid's all-time leading goalscorer?",
            options: ["Raúl", "Cristiano Ronaldo", "Karim Benzema", "Alfredo Di Stéfano"],
            answer: 1
        },

        {
            question: "What is the name of Real Madrid's home stadium?",
            options: ["Camp Nou", "Wembley", "Santiago Bernabéu", "San Siro"],
            answer: 2
        },

        {
            question: "Which team did Real Madrid defeat in the 2014 Champions League final?",
            options: ["Barcelona", "Liverpool", "Atlético Madrid", "Juventus"],
            answer: 2
        },

        {
            question: "Who won the Ballon d'Or in 2018 while playing for Real Madrid?",
            options: ["Luka Modrić", "Sergio Ramos", "Karim Benzema", "Gareth Bale"],
            answer: 0
        },

        {
            question: "Which legendary player won five consecutive European Cups with Real Madrid?",
            options: ["Zinedine Zidane", "Alfredo Di Stéfano", "Raúl", "Iker Casillas"],
            answer: 1
        },

        {
            question: "What is Real Madrid's famous nickname?",
            options: ["The Blues", "The Reds", "Los Blancos", "The Citizens"],
            answer: 2
        },

        {
            question: "Who scored the winning goal in the 2022 Champions League final?",
            options: ["Vinícius Júnior", "Karim Benzema", "Luka Modrić", "Federico Valverde"],
            answer: 0
        }

    ];


    const quizQuestion = document.getElementById("quizQuestion");

    const quizOptions = document.getElementById("quizOptions");

    const quizNumber = document.getElementById("quizQuestionNumber");

    const quizScore = document.getElementById("quizScore");

    const quizFeedback = document.getElementById("quizFeedback");

    const nextButton = document.getElementById("nextQuestion");

    const progressBar = document.getElementById("quizProgress");

    const quizContainer = document.getElementById("quizContainer");

    const quizResult = document.getElementById("quizResult");

    const finalScore = document.getElementById("finalScore");

    const finalMessage = document.getElementById("finalMessage");

    const restartButton = document.getElementById("restartQuiz");


    let currentQuestion = 0;

    let score = 0;

    let answered = false;


    function showQuestion() {

        answered = false;

        const question = questions[currentQuestion];

        quizQuestion.textContent = question.question;

        quizNumber.textContent =
            "QUESTION " + (currentQuestion + 1) +
            " / " + questions.length;

        quizScore.textContent = "SCORE: " + score;

        quizFeedback.textContent = "";

        nextButton.disabled = true;

        nextButton.textContent =
            currentQuestion === questions.length - 1
                ? "SEE MY RESULT"
                : "NEXT QUESTION";

        progressBar.style.width =
            ((currentQuestion + 1) / questions.length * 100) + "%";

        quizOptions.innerHTML = "";

        question.options.forEach(function (option, index) {

            const button = document.createElement("button");

            button.className = "quiz-option";

            button.textContent = option;

            button.addEventListener("click", function () {

                checkAnswer(index, button);

            });

            quizOptions.appendChild(button);

        });

    }


    function checkAnswer(selectedIndex, selectedButton) {

        if (answered) return;

        answered = true;

        const correctIndex = questions[currentQuestion].answer;

        const optionButtons =
            quizOptions.querySelectorAll(".quiz-option");

        optionButtons.forEach(function (button, index) {

            button.disabled = true;

            if (index === correctIndex) {

                button.classList.add("correct");

            }

        });


        if (selectedIndex === correctIndex) {

            score++;

            quizFeedback.textContent = "Correct! Hala Madrid!";

            quizFeedback.style.color = "#27864a";

        } else {

            selectedButton.classList.add("incorrect");

            quizFeedback.textContent =
                "Not quite! The correct answer is: " +
                questions[currentQuestion].options[correctIndex];

            quizFeedback.style.color = "#c34d4d";

        }

        quizScore.textContent = "SCORE: " + score;

        nextButton.disabled = false;

    }


    function showResult() {

        quizContainer.hidden = true;

        quizResult.hidden = false;

        finalScore.textContent =
            score + " / " + questions.length;

        let message;

        if (score === 10) {

            message = "Incredible! You are a true Madridista!";

        } else if (score >= 8) {

            message = "Excellent! You know Real Madrid very well!";

        } else if (score >= 5) {

            message = "Good job! Keep learning about the club!";

        } else {

            message = "Every Madridista starts somewhere. Keep exploring our museum!";

        }

        finalMessage.textContent = message;

    }


    nextButton.addEventListener("click", function () {

        if (!answered) return;

        currentQuestion++;

        if (currentQuestion >= questions.length) {

            showResult();

        } else {

            showQuestion();

        }

    });


    restartButton.addEventListener("click", function () {

        currentQuestion = 0;

        score = 0;

        answered = false;

        quizContainer.hidden = false;

        quizResult.hidden = true;

        showQuestion();

    });


    showQuestion();

    const contactForm = document.getElementById("contactForm");

    const nameInput = document.getElementById("contactName");

    const emailInput = document.getElementById("contactEmail");

    const messageInput = document.getElementById("contactMessage");

    const nameError = document.getElementById("nameError");

    const emailError = document.getElementById("emailError");

    const messageError = document.getElementById("messageError");

    const successMessage = document.getElementById("contactSuccess");

    function validateName() {

        const name = nameInput.value.trim();

        if (name.length < 2) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            return false;

        }

        if (!/^[\p{L}\s'-]+$/u.test(name)) {

            nameError.textContent =
                "Please enter a valid name.";

            return false;

        }

        nameError.textContent = "";

        return true;

    }


    function validateEmail() {

        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            return false;

        }

        emailError.textContent = "";

        return true;

    }


    function validateMessage() {

        const message = messageInput.value.trim();

        if (message.length < 10) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            return false;

        }

        messageError.textContent = "";

        return true;

    }


    nameInput.addEventListener("input", validateName);

    emailInput.addEventListener("input", validateEmail);

    messageInput.addEventListener("input", validateMessage);


    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        successMessage.textContent = "";

        const validName = validateName();

        const validEmail = validateEmail();

        const validMessage = validateMessage();

        if (validName && validEmail && validMessage) {

            successMessage.textContent =
                "Thank you, " + nameInput.value.trim() +
                "! Your message passed validation.";

            contactForm.reset();

        }

    });

    if (window.jQuery) {

        $(".main-navbar .nav-link").on("click", function () {

            $(".navbar-collapse").collapse("hide");

        });


        $(".moment-card").on("mouseenter", function () {

            $(this).find("img").stop().animate(
                { opacity: 0.8 },
                250
            );

        });


        $(".moment-card").on("mouseleave", function () {

            $(this).find("img").stop().animate(
                { opacity: 1 },
                250
            );

        });

    }

});
