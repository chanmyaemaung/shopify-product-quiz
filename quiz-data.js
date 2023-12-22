const questions = {
  welcomeData: {
    title: "Welcome to the quiz!",
    description: "Let's dive right into it!",
    button: "Start Quiz",
  },
  questionData: [
    {
      id: 1,
      title: "1. What kind of frame style do you normally prefer?",
      description: "(A short, quirky description for each one.)",
      questions: [
        "Aviator",
        "Wayfarer",
        "Circular",
        "Wrap",
        "Wrap (coming soon)",
      ],
    },
    {
      id: 2,
      title: "2. What color frames do you want?",
      description: "(Most popular, limited runs, etc)",
      questions: [
        "Charcoal (our most popular)",
        "Tortoise (Our most beautiful)",
        "Something else a bit subtle",
        "Something a bit edgy",
      ],
    },
    {
      id: 3,
      title: "3. What kind of optics are you looking for?",
      description: "",
      questions: [
        "Carl Zeiss Polarized",
        "Carl Zeiss Non-Polarized",
        "Carl Zeiss RX",
        "Carl Zeiss Blue Blockers",
      ],
    },
    {
      id: 4,
      title: "4. Sweet deal.",
      description: "What color lens would you like?",
      questions: [
        "Brown (Our second-best selling lens. Really nice saturation and contrast, blocks enough light for all conditions.)",
        "Yellow (Honestly, not enough people buy this color. This is our favorite color and blocks enough light to use in all conditions, but the color, saturation and contrast is amazing. It’s like Hi-Def for your eyes. Our Founders use this color the most.)",
      ],
    },
    {
      id: 5,
      title: "5. What size is your face? Has anyone ever told you:",
      description: "",
      questions: [
        "Your head is pretty darn normal in size (You’re a regular)",
        "You’ve got a big head (Go for the XLs)",
        "You’ve got a small head (Go for our Narrows)",
      ],
    },
    {
      id: 6,
      title: "6. Unsure? Use this size guide below:",
      description:
        "(INSERT SIZE GUIDE (credit card guide) HERE). According to our robot technologies. This would be the best pair of Ombraz for you:",
      questions: ["https://i.ibb.co/X2yG5Ps/ombraz-size-guide.png"],
    },
    {
      id: 7,
      title: "7. Quick last question for you?",
      description: "What are you going to use these for?",
      questions: [
        "Kayaking",
        "Skiing",
        "Glacial stuff, stc.",
        "(List all the other things that are part of our survey)",
      ],
    },
    {
      id: 8,
      title: "8. Ohh our side shields would be helpful for you.",
      description:
        "They block all peripheral light so you can focus on what matters.",
      questions: ["Yes", "No"],
    },
    {
      id: 9,
      title:
        "9. Our Floatie might help you out - Your Ombraz won’t sink if they happen to fall off around the water.",
      description:
        "The nose pad risers would be a good add-on for you. They lift the glasses off the face to alleviate fogging and enhance airflow.",
      questions: ["Yes", "No"],
    },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  window.questions = questions || {};
});
