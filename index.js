const button1 = document.getElementById("button1");
const input1 = document.getElementById("input1");
const body = document.querySelector("body");
const button2 = document.getElementById("button2");
const ul = document.createElement("ul");
const p3 = document.getElementById("p3");
const button3 = document.getElementById("button3");
const p4 = document.getElementById("p4");
const button4 = document.getElementById("button4");
const input4 = document.getElementById("input4");
const ul5 = document.getElementById("ul5");
const select = document.getElementById("select");

body.appendChild(ul);

const namedColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "black",
  "white",
  "grey",
  "cyan",
  "magenta",
  "lime",
  "pink",
  "teal",
  "navy",
  "maroon",
  "olive",
  "silver",
  "gold",
  "indigo",
  "violet",
  "brown",
  "beige",
  "coral",
  "crimson",
  "darkblue",
];

const foods = [
  { name: "apple", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "banana", category: "fruit" },
  { name: "potato", category: "vegetable" },
  { name: "strawberry", category: "fruit" },
  { name: "lettuce", category: "vegetable" },
  { name: "kiwi", category: "fruit" },
  { name: "cucumber", category: "vegetable" },
  { name: "tomato", category: "fruit" },
  { name: "onion", category: "vegetable" },
  { name: "pear", category: "fruit" },
  { name: "pepper", category: "vegetable" },
];
button1.addEventListener("click", () => {
  const randomColor =
    namedColors[Math.floor(Math.random() * namedColors.length)];
  button1.style.backgroundColor = randomColor;
});

button2.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.innerText = input1.value;
  input1.value = ""; // Clear the input field after adding
  ul.appendChild(newLi);
});

button3.addEventListener("click", () => {
  const elements = p3.innerText.split("");
  console.log(elements);
  const elToNumbers = elements.map(Number);
  console.log(elToNumbers);
  const numbers = elToNumbers.filter((el) => {
    return !isNaN(el);
  });
  console.log(numbers);
  const sortedNumbers = numbers.sort((a, b) => a - b);
  console.log(sortedNumbers);
  p3.innerText = `sorted numbers: ${sortedNumbers.join(", ")}`;
});

button4.addEventListener("click", () => {
  const characters = input4.value.split("");
  console.log(characters);
  const charactersLength = characters.length;
  console.log(charactersLength);
  p4.innerText = `characters length:${charactersLength}`;
});

function myFunction() {
  ul5.innerHTML = ""; // Clear previous list items

  const selectedValue = select.value;
  const filteredFoods = foods.filter((food) => {
    return food.category === selectedValue;
  });
  console.log(filteredFoods);
  filteredFoods.forEach((food) => {
    const newLi = document.createElement("li");
    newLi.innerText = food.name;
    ul5.appendChild(newLi);
  });
  if (selectedValue === "all") {
    foods.forEach((food) => {
      const newLi = document.createElement("li");
      newLi.innerText = food.name;
      ul5.appendChild(newLi);
    });
  }
}
let listData = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const ul6 = document.createElement("ul");
function a() {
  ul6.innerHTML = ""; // Clear previous list items
  listData.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = item;
    ul6.appendChild(li);
    body.appendChild(ul6);
    li.addEventListener("click", () => {
      // li.remove();
      const newListData = listData.filter((el, i) => {
        return i !== index;
      });
      console.log(newListData);
      listData = newListData;
      a();
    });
  });
}
a();
