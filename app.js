       const quizData = [
        {
          question: "When did Pakistan come into existence?",
          choices: ["1940", "1945", "1947", "1950"],
          correct: 2,
        },
        {
          question: "What is the largest city in Pakistan?",
          choices: ["Islamabad", "Lahore", "Karachi", "Peshawar"],
          correct: 2,
        },
        {
          question: "What is the national flower of Pakistan?",
          choices: ["Rose", "Jasmine", "Sunflower", "Lotus"],
          correct: 1,
        },
        {
          question: "Who was the first Prime Minister of Pakistan?",
          choices: [
            "Liaquat Ali Khan",
            "Muhammad Ali Jinnah",
            "Zulfikar Ali Bhutto",
            "Benazir Bhutto",
          ],
          correct: 0,
        },
        {
          question: "What is the national language of Pakistan?",
          choices: ["Punjabi", "Urdu", "Sindhi", "English"],
          correct: 1,
        },
        {
          question: "What is the largest river in Pakistan?",
          choices: ["Sutlej", "Chenab", "Indus", "Ravi"],
          correct: 2,
        },
        {
          question: "Which is the highest mountain in Pakistan?",
          choices: ["Nanga Parbat", "K2", "Tirich Mir", "Rakaposhi"],
          correct: 1,
        },
        {
          question:
            "What does the white color in the Pakistani flag represent?",
          choices: ["Progress", "Peace", "Minorities", "Prosperity"],
          correct: 2,
        },
        {
          question: "Which is the smallest province of Pakistan by area?",
          choices: ["Punjab", "Balochistan", "Sindh", "Khyber Pakhtunkhwa"],
          correct: 2,
        },
        {
          question: "Where is Quaid-e-Azam Muhammad Ali Jinnah buried?",
          choices: ["Islamabad", "Karachi", "Lahore", "Quetta"],
          correct: 1,
        },
      ];

      const quizContainer = document.getElementById("quiz");
      const scoreContainer = document.getElementById("score");

      
      
      function loadQuiz() {
        for (let i = 0; i < quizData.length; i++) {
          const item = quizData[i];

          const questionElem = document.createElement("div");
          questionElem.classList.add("question");
          questionElem.innerHTML = `${i + 1}. ${item.question}`;

          const choicesElem = document.createElement("div");
          for (let j = 0; j < item.choices.length; j++) {
            choicesElem.innerHTML += `
                        <label>
                            <input type="radio" name="question${i}" value="${j}"> ${item.choices[j]}
                        </label><br>
                    `;
          }

          quizContainer.appendChild(questionElem);
          quizContainer.appendChild(choicesElem);
        }
      }

      
      function calculateScore() {
          let score = 0;
          for (let i = 0; i < quizData.length; i++) {
              const options = document.getElementsByName(`question${i}`); // تمام آپشنز کو لیں
              for (let j = 0; j < options.length; j++) {
                  if (options[j].checked && parseInt(options[j].value) === quizData[i].correct) {
                      score++;
                      break; 
                  }
              }
          }
          scoreContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
      }
       
      
      loadQuiz();
    