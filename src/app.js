const justiceLeague = [
  { name: "Kara In-Ze", age: 33, alias: "Supergirl" },
  { name: "Dorian Chase", age: 47, alias: "Vigilante" },
  { name: "Diana Prince", age: 140, alias: "Wonder Woman" },
]
// thought about iterating and adding to a card but I... wasn't sure how to pull it off


//step one create a new feature branch to work from
//step two add this JavaScript file to index.html

//step three add the following functionality:
// when a name is clicked on a card with the rest of their info is displayed in div .two
// use only one event listener on div .one (event object and bubbling hint hint)

// if a second name is clicked the first card disapears and is replaced by a new card 
// only one card can be displayed at a time.
// hint .remove()

// use a template created with a template literal for your new card.
// hint including a div in your template will help with removing it.

let btn = document.querySelectorAll(".one");

let btnw = document.querySelector("#w");
let btns = document.querySelector("#s");
let btnv = document.querySelector("#v");

btn.addEventListener("click", replaceInfo, true);

let cardw = `<p id = "cardw">name: Diana Prince <br> age: 140</p>`;
let cards = `<p id = "cards">name: Kara In-Ze <br> age: 33</p>`;
let cardv = `<p id = "cardv">name: Dorian Chase <br> age: 47</p>`;
//pretty sure there's a simpler way to show the cards than putting them into the html just to display them with js activation

document.querySelectorAll(".two").innerHTML(cardw, cards, cardv);

btnw.onclick = console.log(cardw);
btns.onclick = console.log(cards);
btnv.onclick = console.log(cardv);
//it's so redundant!!!!!! ugly!!! and it probably won't work at the end of the day!

function replaceInfo() {
  if 
}


//step four add just enough styling to make your app look a little nicer, without removing any of the existing styling.