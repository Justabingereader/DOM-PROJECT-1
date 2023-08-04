const clickedButton = document.getElementById("button-click");
const changedText = document.getElementById("changedText");

clickedButton.addEventListener("click", function(){
    // const intNumber = Number(changedText);
    const intNumber = Math.floor(Math.random() * 9.9e9);
    // const randomNumber = parseInt(intNumber);
    // console.log(randomNumber);
    changedText.textContent = `${intNumber}`;
});
