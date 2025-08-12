const button1 = document.getElementById("button1");
const input1 = document.getElementById("input1");
const body = document.querySelector("body");

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

button1.addEventListener("click", () => {
  const randomColor =
    namedColors[Math.floor(Math.random() * namedColors.length)];
  button1.style.backgroundColor = randomColor;
});

// task2

const button2 = document.getElementById("button2");
const ul2 = document.getElementById("ul2");
body.appendChild(ul2);

button2.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.innerText = input1.value;
  input1.value = ""; // Clear the input field after adding
  ul2.appendChild(newLi);
});

// task3

const p3 = document.getElementById("p3");
const button3 = document.getElementById("button3");

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

// task4

const p4 = document.getElementById("p4");
const button4 = document.getElementById("button4");
const input4 = document.getElementById("input4");

button4.addEventListener("click", () => {
  const characters = input4.value.split("");
  console.log(characters);
  const charactersLength = characters.length;
  console.log(charactersLength);
  p4.innerText = `characters length:${charactersLength}`;
});

// task5

const ul5 = document.getElementById("ul5");

body.appendChild(ul5);

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

function myFunction() {
  ul5.innerHTML = ""; // Clear previous list items

  const selectedValue = select.value;
  const filteredFoods = foods.filter((food) => {
    return food.category === selectedValue;
  });
  console.log(filteredFoods);
  filteredFoods.forEach((food) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = food.name;
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

// task6

const select = document.getElementById("select");

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

// 5 only js

let cars = [
  { name: "Toyota", model: "Corolla" },
  { name: "Toyota", model: "Camry" },
  { name: "Honda", model: "Civic" },
  { name: "Honda", model: "Accord" },
  { name: "Ford", model: "Focus" },
  { name: "Ford", model: "Mustang" },
  { name: "Chevrolet", model: "Malibu" },
  { name: "Chevrolet", model: "Impala" },
  { name: "Nissan", model: "Altima" },
  { name: "Nissan", model: "Sentra" },
];

const selectCar = document.createElement("select");
const ul = document.createElement("ul");

body.appendChild(ul);
body.appendChild(selectCar);

let uniqueCarNames = [];

cars.forEach((car) => {
  if (!uniqueCarNames.includes(car.name)) {
    uniqueCarNames.push(car.name);
  }
  console.log(uniqueCarNames);
});

uniqueCarNames.forEach((name) => {
  const option = document.createElement("option");
  option.value = name;
  option.innerHTML = name;
  selectCar.appendChild(option);
});

selectCar.addEventListener("change", () => {
  ul.innerHTML = ""; // Clear previous list items
  const selectedName = selectCar.value;
  const filteredCars = cars.filter((car) => car.name === selectedName);
  console.log(filteredCars);

  filteredCars.forEach((car) => {
    const li = document.createElement("li");
    li.innerHTML = car.model;
    ul.appendChild(li);
  });
});
