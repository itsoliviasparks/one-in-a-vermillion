//when user clicks on a button:
    //get value of button that was clicked- store in variable
    //get # of clicks, and limit # to amount of arches on rainbow
    //once button is clicked:
        //add class of .background to .rainbow-cutout div
        //add a rainbow div with color class & class of #of clicks
    //when .random button is clicked, generate random color class to apply
    //only loop thru 8 color choices

const rainbow = {};
rainbow.clickCount = 0;
rainbow.colorClassArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
rainbow.radioButton = document.querySelectorAll("input[type=radio]");
rainbow.restartButton = document.querySelector('.restart');

// get random item in given array
rainbow.getRandomInArr = (arr) => {
  const randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
};

//restart page
rainbow.restart = () => {
  rainbow.restartButton.addEventListener("click", () => {
    window.location.reload();
  });
};

//adding rings & cutout to rainbow
rainbow.addRingToRainbow = (classToAdd, clickCount) => {
  const newRingDiv = document.createElement("div");
  newRingDiv.classList.add(`rainbow${clickCount}`, `${classToAdd}`);
  const rainbowContainer = document.querySelector(".rainbow-container");
  rainbowContainer.appendChild(newRingDiv);
};

rainbow.addRainbowCutout = () => {
  const rainbowCutout = document.querySelector(".rainbow-cutout");
  rainbowCutout.classList.add("background");
};

//generating random value, if random was picked
//setting the final value into variable matching color class names
rainbow.findClassToAdd = () => {
  if (rainbow.userColorChoice === "random") {
      rainbow.classToAdd = rainbow.getRandomInArr(rainbow.colorClassArr);
  } else {
      rainbow.classToAdd = rainbow.userColorChoice
  }
  rainbow.addRainbowCutout();
  rainbow.addRingToRainbow(rainbow.classToAdd, rainbow.clickCount);
};

//getting value that user picked
//& number of user clicks (limited to 8, b/c there are 8 rings on rainbow)
rainbow.getUserChoiceAndClickCount = () => {
  rainbow.radioButton.forEach(radio => {
    radio.addEventListener('click', () => {
      rainbow.userColorChoice = radio.value
      if (rainbow.clickCount < 8) {
        rainbow.clickCount++
      } else {
        rainbow.clickCount = 1
      };
      rainbow.findClassToAdd(rainbow.userColorChoice);
    });
  });
};

rainbow.init = () => {
  rainbow.getUserChoiceAndClickCount();
  rainbow.restart();
};

rainbow.init();