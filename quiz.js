class ClQuiz {
  constructor() {
    //* Greeting and intro
    this.greeting = document.querySelector("[data-greeting]");
    this.startBtn = document.querySelector("[data-getstarted-btn]");

    //* First question
    this.firstQues = document.querySelector("[data-firstques]");
    this.firstOptions = document.querySelectorAll("[data-first-options] li");
    this.fistQuesNextBtn = document.querySelector("[data-firstquest-next]");

    //* Second question
    this.secondQues = document.querySelector("[data-secondques]");
    this.secondOptions = document.querySelectorAll("[data-second-options] li");
    this.secondQuesNextBtn = document.querySelector("[data-secondquest-next]");

    //* Initiate the app
    this.init();
  }

  init() {
    console.info("ClQuiz initiated!");

    this.data();
    this.getStarted();
    this.firstQuestions();
    this.secondQuestions();
  }

  data() {
    window.ClQuizData = {
      userChoose: {
        first: [],
        second: [],
        third: [],
        fourth: [],
        fifth: [],
        sixth: [],
        seventh: [],
      },
    };
  }

  getStarted() {
    //* Greening and intro
    this.startBtn &&
      this.startBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.greeting.classList.add("cl--hide");
        this.firstQues.classList.remove("cl--hide");
      });
  }

  checkAndShowNextButton() {
    if (userChoose.first.length > 0) {
      this.fistQuesNextBtn.classList.remove("cl--visually-hidden");
    } else {
      this.fistQuesNextBtn.classList.add("cl--visually-hidden");
    }

    if (userChoose.second.length > 0) {
      this.secondQuesNextBtn.classList.remove("cl--visually-hidden");
    } else {
      this.secondQuesNextBtn.classList.add("cl--visually-hidden");
    }
  }

  firstQuestions() {
    this.firstOptions &&
      this.firstOptions.forEach((option) => {
        const id = option.getAttribute("data-key");
        const label = option.textContent;
        option.addEventListener("click", (event) => {
          if (!option.classList.contains("cl--active")) {
            // Remove the "cl--active" class from all options
            this.firstOptions.forEach((otherOption) => {
              otherOption.classList.remove("cl--active");
              otherOption.setAttribute("disabled", true); // Disable all other options
            });

            option.classList.add("cl--active");
            userChoose.first = [{ id, label }]; // Replace the previous selection
          } else {
            option.classList.remove("cl--active");
            option.removeAttribute("disabled"); // Enable the option when unselected
            userChoose.first = [];
          }

          this.checkAndShowNextButton(); // Check if the next button should be shown
        });
      });

      // When click next button then hide first question and show second question
      this.fistQuesNextBtn && this.fistQuesNextBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        this.firstQues.classList.add("cl--hide");
        this.secondQues.classList.remove("cl--hide");
      })
  }

  secondQuestions() {
    this.secondOptions &&
      this.secondOptions.forEach((option) => {
        const id = option.getAttribute("data-key");
        const label = option.textContent;
        option.addEventListener("click", (event) => {
          if (!option.classList.contains("cl--active")) {
            // Remove the "cl--active" class from all options
            this.secondOptions.forEach((otherOption) => {
              otherOption.classList.remove("cl--active");
              otherOption.setAttribute("disabled", true); // Disable all other options
            });

            option.classList.add("cl--active");
            userChoose.second = [{ id, label }]; // Replace the previous selection
          } else {
            option.classList.remove("cl--active");
            option.removeAttribute("disabled"); // Enable the option when unselected
            userChoose.second = [];
          }

          this.checkAndShowNextButton(); // Check if the next button should be shown
        });
      });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ClQuiz = new ClQuiz();
  userChoose = window.ClQuizData.userChoose;
});
