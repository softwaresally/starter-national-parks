/* console.log(document);

const heading = document.querySelector("h1");
console.log(heading);

const value = document.querySelector(".value");
console.log(value);

const button = document.querySelector("button");
console.log(button);

const divDesc = document.querySelector(".stats > div");
console.log(divDesc);

const hello = document.querySelector("hello");
console.log(hello);

const buttons = document.querySelectorAll("button");
console.log(buttons); */

// Get a list of all `<h3>` elements
//const heading3List = document.querySelectorAll("h3");

// Iterate over the list and print each one
/*for (let element of heading3List.values()) {
  console.log(element);
}
*/
const divRating = document.querySelectorAll("div > .rating-display");
for (let part of divRating.values()) {
console.log(part)
} 

const divArea = document.querySelectorAll("div > .area-display");
for (let i = 0; i < divArea.length; i++) {
    const element = divArea[i];
    console.log(element)
}

const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;

    if(content.length > 250) {
        content = content.slice(0, 250);
        content = content + "...";
    }

    desc.innerText = content;
  }

const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");
const header = document.querySelector("header");
header.appendChild(newElement);

const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
    console.log(event.target);
});

//Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

//Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        //console.log(event.target);
        //The <section> element that represents a park is the parent of the button. To view which park was selected, use .parentNode element
        //console.log(event.target.parentNode);
        //change background color
        const park = event.target.parentNode;
        park.style.backgroundColor = "#c8e6c9";
    });
});

//se;ect the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

//add an event listener
nameSorter.addEventListener("click", (event) => {
    //by default, the browser will reload the page when the link is clicked. preventDefault() method stops this.
    event.preventDefault();
    console.log("You clicked the name sorter");
});

nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main element
    main.innerHTML = "";

    // 4. Create an array
    const parksArray = Array.from(parksList);

    // 5. Sort the array
    parksArray.sort((parkA, parkB) => {
        const parkAName = parkA.querySelector("h2").innerText;
        const parkBName = parkB.querySelector("h2").innerText;
        if (parkAName < parkBName) {
            return -1;
        } else {
            return 0;
        }
    });

    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
  });

  //OR
  // Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };
  
  // Function for handling the `nameSorter` click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");
  
  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);