const outputBody = document.getElementById("quizApp");

//* Destructuring the questions object
const { welcomeData, questionData } = questions;

//* Selected items
let selectedItems = [];

function welcomeScreen(
  title = welcomeData?.title,
  description = welcomeData.description
) {
  if (outputBody) {
    // Create elements
    const welcomeDiv = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const button = document.createElement("button");

    // Add classes or IDs
    welcomeDiv.classList.add("welcome-screen");
    h1.classList.add("title");
    p.classList.add("description");
    button.id = "startQuiz";

    // Add text
    h1.innerText = title;
    p.innerText = description;
    button.innerText = welcomeData?.button;

    // Append elements
    welcomeDiv.appendChild(h1);
    welcomeDiv.appendChild(p);
    welcomeDiv.appendChild(button);

    // Append to question App
    outputBody.appendChild(welcomeDiv);

    // Add event listener
    button.addEventListener("click", function (event) {
      welcomeDiv.classList.add("hide");
      questionOne();
    });
  }
}

function questionOne(
  title = questionData[0]?.title,
  description = questionData[0]?.description
) {
  if (outputBody) {
    // Create elements
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-screen", "question-1");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const questionsList = document.createElement("ul");
    const buttonWrapper = document.createElement("div");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    // Add classes or IDs
    h2.classList.add("question-title");
    p.classList.add("question-desc");
    questionsList.classList.add("question-list");
    buttonWrapper.classList.add("button-wrapper");
    prevBtn.id = "prevQuestion";
    nextBtn.id = "nextQuestion";
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");

    // Add text
    h2.innerText = title === "" ? "No title is provided!" : title;
    p.innerText =
      description === "" ? "No description is provided!" : description;
    prevBtn.innerText = "Previous Question";
    nextBtn.innerText = "Next Question";

    // Append elements
    questionDiv.appendChild(h2);
    questionDiv.appendChild(p);

    // Loop through the questions and add them to the list
    for (let i = 0; i < questionData[0].questions.length; i++) {
      const li = document.createElement("li");
      li.innerText = questionData[0].questions[i];
      questionsList.appendChild(li);
    }

    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(questionsList);
    questionDiv.appendChild(buttonWrapper);

    // Append to question App
    outputBody.appendChild(questionDiv);

    // Add event listener
    // TODO: Add event listener to the list items
    const listItems = document.querySelectorAll(".question-list li");

    listItems.forEach((item) => {
      item.addEventListener("click", function (event) {
        listItems.forEach((item) => item.classList.remove("active"));

        item.classList.add("active");

        selectedItems.splice(0, 1);
        selectedItems.push(event.target.innerText);

        if (selectedItems.length > 0) {
          nextBtn.disabled = false;
          nextBtn.classList.remove("disabled");
        }

        console.log(selectedItems);
      });
    });

    prevBtn.addEventListener("click", function (event) {
      selectedItems.splice(0, 1);
      questionDiv.classList.add("hide");
      welcomeScreen();
    });

    nextBtn.addEventListener("click", function (event) {
      if (selectedItems.length < 1) {
        showAlert("Error", "Please select an answer", "error");

        return;
      }

      questionDiv.classList.add("hide");
      questionTwo();
    });
  }
}

function questionTwo(
  title = questionData[1]?.title,
  description = questionData[1]?.description
) {
  if (outputBody) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-screen", "question-2");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const questionsList = document.createElement("ul");
    const buttonWrapper = document.createElement("div");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    // Add classes or IDs
    h2.classList.add("question-title");
    p.classList.add("question-desc");
    questionsList.classList.add("question-list");
    buttonWrapper.classList.add("button-wrapper");
    prevBtn.id = "prevQuestion";
    nextBtn.id = "nextQuestion";
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");

    // Add text
    h2.innerText = title === "" ? "No title is provided!" : title;
    p.innerText =
      description === "" ? "No description is provided!" : description;
    prevBtn.innerText = "Previous Question";
    nextBtn.innerText = "Next Question";

    // Append elements
    questionDiv.appendChild(h2);
    questionDiv.appendChild(p);

    for (let i = 0; i < questionData[1].questions.length; i++) {
      const li = document.createElement("li");
      li.innerText = questionData[1].questions[i];
      questionsList.appendChild(li);
    }

    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(questionsList);
    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(buttonWrapper);

    // Append to question App
    outputBody.appendChild(questionDiv);

    // Add event listener
    const listItems = document.querySelectorAll(".question-list li");
    listItems.forEach((item) => {
      let clicked = false;
      item.addEventListener("click", function (event) {
        listItems.forEach((item) => item.classList.remove("active"));

        item.classList.add("active");

        selectedItems.splice(1, 1);
        selectedItems.push(event.target.innerText);

        if (selectedItems.length > 1) {
          nextBtn.disabled = false;
          nextBtn.classList.remove("disabled");
        }

        console.log(selectedItems);
      });
    });

    prevBtn.addEventListener("click", function (event) {
      selectedItems.splice(1, 1);
      questionDiv.classList.add("hide");
      questionOne();
    });

    nextBtn.addEventListener("click", function (event) {
      if (selectedItems.length < 2) {
        showAlert("Error", "Please select an answer", "error");

        return;
      }

      questionDiv.classList.add("hide");
      questionThree();
    });
  }
}

function questionThree(
  title = questionData[2]?.title,
  description = questionData[2]?.description
) {
  if (outputBody) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-screen", "question-3");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const questionsList = document.createElement("ul");
    const buttonWrapper = document.createElement("div");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    // Add classes or IDs
    h2.classList.add("question-title");
    p.classList.add("question-desc");
    questionsList.classList.add("question-list");
    buttonWrapper.classList.add("button-wrapper");
    prevBtn.id = "prevQuestion";
    nextBtn.id = "nextQuestion";
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");

    // Add text
    h2.innerText = title === "" ? "No title is provided!" : title;
    p.innerText =
      description === "" ? "No description is provided!" : description;
    prevBtn.innerText = "Previous Question";
    nextBtn.innerText = "Next Question";

    // Append elements
    questionDiv.appendChild(h2);
    questionDiv.appendChild(p);

    for (let i = 0; i < questionData[2].questions.length; i++) {
      const li = document.createElement("li");
      li.innerText = questionData[2].questions[i];
      questionsList.appendChild(li);
    }

    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(questionsList);
    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(buttonWrapper);

    // Append to question App
    outputBody.appendChild(questionDiv);

    // Add event listener
    const listItems = document.querySelectorAll(".question-list li");
    listItems.forEach((item) => {
      let clicked = false;
      item.addEventListener("click", function (event) {
        listItems.forEach((item) => item.classList.remove("active"));

        item.classList.add("active");

        selectedItems.splice(2, 2);
        selectedItems.push(event.target.innerText);

        if (selectedItems.length > 2) {
          nextBtn.disabled = false;
          nextBtn.classList.remove("disabled");
        }

        console.log(selectedItems);
      });
    });

    prevBtn.addEventListener("click", function (event) {
      selectedItems.splice(2, 2);
      questionDiv.classList.add("hide");
      questionTwo();
    });

    nextBtn.addEventListener("click", function (event) {
      if (selectedItems.length < 3) {
        showAlert("Error", "Please select an answer", "error");

        return;
      }

      questionDiv.classList.add("hide");
      questionFour();
    });
  }
}

function questionFour(
  title = questionData[3]?.title,
  description = questionData[3]?.description
) {
  if (outputBody) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-screen", "question-4");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const questionsList = document.createElement("ul");
    const buttonWrapper = document.createElement("div");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    // Add classes or IDs
    h2.classList.add("question-title");
    p.classList.add("question-desc");
    questionsList.classList.add("question-list");
    buttonWrapper.classList.add("button-wrapper");
    prevBtn.id = "prevQuestion";
    nextBtn.id = "nextQuestion";
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");

    // Add text
    h2.innerText = title === "" ? "No title is provided!" : title;
    p.innerText =
      description === "" ? "No description is provided!" : description;
    prevBtn.innerText = "Previous Question";
    nextBtn.innerText = "Next Question";

    // Append elements
    questionDiv.appendChild(h2);
    questionDiv.appendChild(p);

    for (let i = 0; i < questionData[3].questions.length; i++) {
      const li = document.createElement("li");
      li.innerText = questionData[3].questions[i];
      questionsList.appendChild(li);
    }

    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(questionsList);
    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(buttonWrapper);

    // Append to question App
    outputBody.appendChild(questionDiv);

    // Add event listener
    const listItems = document.querySelectorAll(".question-list li");
    listItems.forEach((item) => {
      let clicked = false;
      item.addEventListener("click", function (event) {
        listItems.forEach((item) => item.classList.remove("active"));

        item.classList.add("active");

        selectedItems.splice(3, 3);
        selectedItems.push(event.target.innerText);

        if (selectedItems.length > 3) {
          nextBtn.disabled = false;
          nextBtn.classList.remove("disabled");
        }

        console.log(selectedItems);
      });
    });

    prevBtn.addEventListener("click", function (event) {
      selectedItems.splice(3, 3);
      questionDiv.classList.add("hide");
      questionThree();
    });

    nextBtn.addEventListener("click", function (event) {
      if (selectedItems.length < 4) {
        showAlert("Error", "Please select an answer", "error");

        return;
      }

      questionDiv.classList.add("hide");
      questionFive();
    });
  }
}

function questionFive(
  title = questionData[4]?.title,
  description = questionData[4]?.description
) {
  if (outputBody) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-screen", "question-5");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const questionsList = document.createElement("ul");
    const buttonWrapper = document.createElement("div");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    // Add classes or IDs
    h2.classList.add("question-title");
    p.classList.add("question-desc");
    questionsList.classList.add("question-list");
    buttonWrapper.classList.add("button-wrapper");
    prevBtn.id = "prevQuestion";
    nextBtn.id = "nextQuestion";
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");

    // Add text
    h2.innerText = title === "" ? "No title is provided!" : title;
    p.innerText =
      description === "" ? "No description is provided!" : description;
    prevBtn.innerText = "Previous Question";
    nextBtn.innerText = "Next Question";

    // Append elements
    questionDiv.appendChild(h2);
    questionDiv.appendChild(p);

    for (let i = 0; i < questionData[4].questions.length; i++) {
      const li = document.createElement("li");
      li.innerText = questionData[4].questions[i];
      questionsList.appendChild(li);
    }

    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(questionsList);
    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(buttonWrapper);

    // Append to question App
    outputBody.appendChild(questionDiv);

    // Add event listener
    const listItems = document.querySelectorAll(".question-list li");
    listItems.forEach((item) => {
      let clicked = false;
      item.addEventListener("click", function (event) {
        listItems.forEach((item) => item.classList.remove("active"));

        item.classList.add("active");

        selectedItems.splice(4, 4);
        selectedItems.push(event.target.innerText);

        if (selectedItems.length > 4) {
          nextBtn.disabled = false;
          nextBtn.classList.remove("disabled");
        }

        console.log(selectedItems);
      });
    });

    prevBtn.addEventListener("click", function (event) {
      selectedItems.splice(4, 4);
      questionDiv.classList.add("hide");
      questionFour();
    });

    nextBtn.addEventListener("click", function (event) {
      if (selectedItems.length < 5) {
        showAlert("Error", "Please select an answer", "error");

        return;
      }

      questionDiv.classList.add("hide");
      questionSix();
    });
  }
}

function questionSix(
  title = questionData[5]?.title,
  description = questionData[5]?.description
) {
  if (outputBody) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-screen", "question-6");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const questionsList = document.createElement("ul");
    const buttonWrapper = document.createElement("div");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    // Add classes or IDs
    h2.classList.add("question-title");
    p.classList.add("question-desc");
    questionsList.classList.add("question-list");
    buttonWrapper.classList.add("button-wrapper");
    prevBtn.id = "prevQuestion";
    nextBtn.id = "nextQuestion";

    // Add text
    h2.innerText = title === "" ? "No title is provided!" : title;
    p.innerText =
      description === "" ? "No description is provided!" : description;
    prevBtn.innerText = "Previous Question";
    nextBtn.innerText = "Next Question";

    // Append elements
    questionDiv.appendChild(h2);
    questionDiv.appendChild(p);

    for (let i = 0; i < questionData[5].questions.length; i++) {
      const img = document.createElement("img");
      img.src = questionData[5].questions[i];
      img.alt = "Size guide";
      questionsList.appendChild(img);
    }

    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(questionsList);
    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(buttonWrapper);

    // Append to question App
    outputBody.appendChild(questionDiv);

    prevBtn.addEventListener("click", function (event) {
      selectedItems.splice(5, 5);
      questionDiv.classList.add("hide");
      questionFive();
    });

    nextBtn.addEventListener("click", function (event) {
      questionDiv.classList.add("hide");
      questionSeven();
    });
  }
}

function questionSeven(
  title = questionData[6]?.title,
  description = questionData[6]?.description
) {
  if (outputBody) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-screen", "question-7");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const questionsList = document.createElement("ul");
    const buttonWrapper = document.createElement("div");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    // Add classes or IDs
    h2.classList.add("question-title");
    p.classList.add("question-desc");
    questionsList.classList.add("question-list");
    buttonWrapper.classList.add("button-wrapper");
    prevBtn.id = "prevQuestion";
    nextBtn.id = "nextQuestion";
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");

    // Add text
    h2.innerText = title === "" ? "No title is provided!" : title;
    p.innerText =
      description === "" ? "No description is provided!" : description;
    prevBtn.innerText = "Previous Question";
    nextBtn.innerText = "Next Question";

    // Append elements
    questionDiv.appendChild(h2);
    questionDiv.appendChild(p);

    for (let i = 0; i < questionData[6].questions.length; i++) {
      const li = document.createElement("li");
      li.innerText = questionData[6].questions[i];
      questionsList.appendChild(li);
    }

    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(questionsList);
    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(buttonWrapper);

    // Append to question App
    outputBody.appendChild(questionDiv);

    // Add event listener
    const listItems = document.querySelectorAll(".question-list li");
    listItems.forEach((item) => {
      let clicked = false;
      item.addEventListener("click", function (event) {
        listItems.forEach((item) => item.classList.remove("active"));

        item.classList.add("active");

        selectedItems.splice(5, 5);
        selectedItems.push(event.target.innerText);

        if (selectedItems.length > 5) {
          nextBtn.disabled = false;
          nextBtn.classList.remove("disabled");
        }

        console.log(selectedItems);
      });
    });

    prevBtn.addEventListener("click", function (event) {
      selectedItems.splice(5, 5);
      questionDiv.classList.add("hide");
      questionSix();
    });

    nextBtn.addEventListener("click", function (event) {
      if (selectedItems.length < 6) {
        showAlert("Error", "Please select an answer", "error");

        return;
      }

      questionDiv.classList.add("hide");
      questionEight();
    });
  }
}

function questionEight(
  title = questionData[7]?.title,
  description = questionData[7]?.description
) {
  if (outputBody) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-screen", "question-8");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const questionsList = document.createElement("ul");
    const buttonWrapper = document.createElement("div");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    // Add classes or IDs
    h2.classList.add("question-title");
    p.classList.add("question-desc");
    questionsList.classList.add("question-list");
    buttonWrapper.classList.add("button-wrapper");
    prevBtn.id = "prevQuestion";
    nextBtn.id = "nextQuestion";
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");

    // Add text
    h2.innerText = title === "" ? "No title is provided!" : title;
    p.innerText =
      description === "" ? "No description is provided!" : description;
    prevBtn.innerText = "Previous Question";
    nextBtn.innerText = "Next Question";

    // Append elements
    questionDiv.appendChild(h2);
    questionDiv.appendChild(p);

    for (let i = 0; i < questionData[7].questions.length; i++) {
      const li = document.createElement("li");
      li.innerText = questionData[7].questions[i];
      questionsList.appendChild(li);
    }

    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(questionsList);
    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(buttonWrapper);

    // Append to question App
    outputBody.appendChild(questionDiv);

    // Add event listener
    const listItems = document.querySelectorAll(".question-list li");
    listItems.forEach((item) => {
      let clicked = false;
      item.addEventListener("click", function (event) {
        listItems.forEach((item) => item.classList.remove("active"));

        item.classList.add("active");

        selectedItems.splice(6, 6);
        selectedItems.push(event.target.innerText);

        if (selectedItems.length > 5) {
          nextBtn.disabled = false;
          nextBtn.classList.remove("disabled");
        }

        console.log(selectedItems);
      });
    });

    prevBtn.addEventListener("click", function (event) {
      selectedItems.splice(6, 6);
      questionDiv.classList.add("hide");
      questionSeven();
    });

    nextBtn.addEventListener("click", function (event) {
      if (selectedItems.length < 7) {
        showAlert("Error", "Please select an answer", "error");

        return;
      }

      questionDiv.classList.add("hide");
      questionNine();
    });
  }
}

function questionNine(
  title = questionData[8]?.title,
  description = questionData[8]?.description
) {
  if (outputBody) {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-screen", "question-9");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const questionsList = document.createElement("ul");
    const buttonWrapper = document.createElement("div");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    // Add classes or IDs
    h2.classList.add("question-title");
    p.classList.add("question-desc");
    questionsList.classList.add("question-list");
    buttonWrapper.classList.add("button-wrapper");
    prevBtn.id = "prevQuestion";
    nextBtn.id = "nextQuestion";
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");

    // Add text
    h2.innerText = title === "" ? "No title is provided!" : title;
    p.innerText =
      description === "" ? "No description is provided!" : description;
    prevBtn.innerText = "Previous Question";
    nextBtn.innerText = "Next Question";

    // Append elements
    questionDiv.appendChild(h2);
    questionDiv.appendChild(p);

    for (let i = 0; i < questionData[8].questions.length; i++) {
      const li = document.createElement("li");
      li.innerText = questionData[8].questions[i];
      questionsList.appendChild(li);
    }

    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(questionsList);
    buttonWrapper.appendChild(prevBtn);
    buttonWrapper.appendChild(nextBtn);
    questionDiv.appendChild(buttonWrapper);

    // Append to question App
    outputBody.appendChild(questionDiv);

    // Add event listener
    const listItems = document.querySelectorAll(".question-list li");
    listItems.forEach((item) => {
      let clicked = false;
      item.addEventListener("click", function (event) {
        listItems.forEach((item) => item.classList.remove("active"));

        item.classList.add("active");

        selectedItems.splice(7, 7);
        selectedItems.push(event.target.innerText);

        if (selectedItems.length > 7) {
          nextBtn.disabled = false;
          nextBtn.classList.remove("disabled");
        }

        console.log(selectedItems);
      });
    });

    prevBtn.addEventListener("click", function (event) {
      selectedItems.splice(7, 7);
      questionDiv.classList.add("hide");
      questionEight();
    });

    nextBtn.addEventListener("click", function (event) {
      if (selectedItems.length < 8) {
        showAlert("Error", "Please select an answer", "error");

        return;
      }

      questionDiv.classList.add("hide");
      lastQuestion();
    });
  }
}

async function lastQuestion() {
  const productQuiz = new ProductQuiz();

  productQuiz.domain = "https://corsproxy.io/?https://ombraz.com/";
  productQuiz.productId = productQuiz.randomProducts();
  productQuiz.limit = 3;

  try {
    const { products } = await productQuiz.productRecommendApi();

    console.log(products);

    lastProductUI(products, productQuiz.formatMoney, productQuiz.domain);
  } catch (error) {
    console.error("Error fetching product recommendations:", error);
  }
}

/**
 * Utility functions
 */
function showAlert(title, description, icon = "success") {
  if (typeof Swal !== "undefined") {
    Swal.fire({
      title,
      text: description,
      icon,
      confirmButtonText: "Alright!",
    });
  }
}

function lastProductUI(data, formatMoney, checkoutUrl) {
  if (outputBody) {
    const h2 = document.createElement("h2");
    h2.innerText = "Here is our recommendation choice for you:";
    h2.classList.add("title");

    const productDivContainer = document.createElement("div");
    productDivContainer.classList.add("ombraz__products");

    Array.from(data).forEach((product) => {
      const { title, price, url, available, id, featured_image, variants } =
        product;

      const checkoutProductId = variants[0].id;

      const productDiv = document.createElement("div");
      productDiv.classList.add("ombraz__product");

      if (available) {
        const a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.classList.add("ombraz__product-link");
        a.id = id;
        const h3 = document.createElement("h3");
        h3.innerText = title;
        h3.classList.add("ombraz__product-title");
        const img = document.createElement("img");
        img.src = featured_image;
        img.alt = title;
        img.classList.add("ombraz__product-image");
        const p = document.createElement("p");
        p.innerText = formatMoney(price);
        p.classList.add("ombraz__product-price");
        const buyNowButton = document.createElement("a");
        buyNowButton.classList.add("ombraz__product-buy-now");
        buyNowButton.target = "_blank";
        buyNowButton.href = `${checkoutUrl}cart/${checkoutProductId}:1`;
        buyNowButton.innerText = "Buy Now";

        a.appendChild(h3);
        a.appendChild(img);
        a.appendChild(p);
        a.appendChild(buyNowButton);

        productDiv.appendChild(a);

        productDivContainer.appendChild(productDiv);

        // Append to question App
        outputBody.appendChild(h2);
        outputBody.appendChild(productDivContainer);
      }
    });
  }
}

window.addEventListener("DOMContentLoaded", function () {
  welcomeScreen();
});
