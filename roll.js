const buttonEl = document.getElementById("butto");

const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");
let historyList =[];
function rolldice() {
    const rollresult = Math.floor(Math.random() * 6) + 1;
    //console.log(rollresult);
    const diceFace = getDiceFace(rollresult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollresult);
    updateRollHistory();
}
function updateRollHistory() {
    rollHistoryEl.innerHTML=" ";
    for(i = 0 ; i< historyList.length ; i++){
        const listItem = document .createElement("li");
        listItem.innerHTML = `roll ${i+1}: <span> ${getDiceFace(historyList[i])}
        </span>`;
        rollHistoryEl.appendChild(listItem);
    }
}
function getDiceFace(rollresult){
  switch (rollresult) {
    case 1:
        return " &#9856;";
    case 2:
        return " &#9857;";
    case 3:
        return "&#9858;";
    case 4:
        return "&#9859";
    case 5:
        return "&#9860";
    case 6:
        return "&#9861";
    default:
        return " ";
        break;
  }
}

buttonEl.addEventListener("click", ()=>{
  diceEl.classList.add("roll-animation");
  setTimeout(() =>{
  diceEl.classList.remove("roll-animation");
  rolldice();
  }, 1000);
});