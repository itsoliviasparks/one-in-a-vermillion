//when user clicks on a button:
    //get value of button that was clicked- store in variable
    //get # of clicks, and limit # to amount of arches on rainbow
    //once button is clicked:
        //add class of .background to .rainbow-cutout div
        //add a rainbow div with color class & class of #of clicks
    //when .random button is clicked, generate random color class to apply
    //only loop thru 8 color choices


const colorClassArr = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

//restart page
const restartButton = document.querySelector('.restart');
restartButton.addEventListener("click", function () {
  window.location.reload();
});

const addRingToRainbow = (classToAdd, clickCount) => {
  const newRingDiv = document.createElement("div");
  newRingDiv.classList.add(`rainbow${clickCount}`, `${classToAdd}`);
  const rainbowContainer = document.querySelector(".rainbow-container");
  rainbowContainer.appendChild(newRingDiv);
};

//adding rings & cutout to rainbow
const addRainbowCutout = () => {
  const rainbowCutout = document.querySelector(".rainbow-cutout");
  rainbowCutout.classList.add("background");
};

//generating random value, if random was picked
//setting the final value into variable matching color class names
const findClassToAdd = () => {
  if (userColorChoice === "random") {
      classToAdd = getRandomInArr(colorClassArr);
  } else {
      classToAdd = userColorChoice
  }
  addRainbowCutout();
  addRingToRainbow(classToAdd, clickCount);
};

getRandomInArr = (arr) => {
  const randomNum = Math.floor(Math.random() * arr.length)
  return arr[randomNum]
};


//getting value that user picked
//& number of user clicks (limited to 8, b/c there are 8 rings on rainbow)
const radioButton = document.querySelectorAll("input[type=radio]");
let clickCount = 0;

radioButton.forEach(radio => {
  radio.addEventListener('click', function () {
    userColorChoice = radio.value
    if (clickCount < 8) {
      clickCount++
    } else {
      clickCount = 1
    };
    findClassToAdd(userColorChoice);
  });
});