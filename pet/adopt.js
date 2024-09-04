let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(p) {
    showSlides(slideIndex += p);
    }

    function showSlides(s) {

    let slides = document.getElementsByClassName("slide");
    if (s > slides.length) {slideIndex = 1}    
    if (s < 1) {slideIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex-1].style.display = "block";  

    }
let products = {
    data: [
      {
        productName: "Roxy",
        gender:"male",
        category: "Dog",
        image: "img/pet1.jpg",
        adoptButton: true
      },
      {
        productName: "Dollar",
        gender:"female",
        category: "Dog",
        image: "img/pet2.jpg",
        adoptButton: true
      },
      {
        productName: "Kitty",
        category: "Cat",
        gender:"male",
        image: "img/pet3.jpg",
        adoptButton: true
      },
      {
        productName: "kat",
        gender:"male",
        category: "Cat",
        image: "img/pet10.jpg",
        adoptButton: true
      },
      {
        productName: "tiger",
        gender:"male",
        category: "Dog",
        image: "img/pet4.jpg",
        adoptButton: true
      },
      {
        productName: "Brownie",
        gender:"male",
        category: "Cat",
        image: "img/pet13.jpg",
        adoptButton: true
      },
      {
        productName: "Simba",
        gender:"female",
        category: "Dog",
        image: "img/pet9.jpg",
        adoptButton: true
      },
      {
        productName: "Charlie",
        gender:"female",
        category: "Cat",
        image: "img/pet11.jpg",
        adoptButton: true
      },
      {
        productName: "leo",
        gender:"female",
        category: "Dog",
        image: "img/pet5.jpg",
        adoptButton: true
      },
      {
        productName: "blacky",
        gender:"male",
        category: "Cat",
        image: "img/pet12.jpg",
        adoptButton: true
      },
      {
        productName: "bailey",
        gender:"male",
        category: "Dog",
        image: "img/pet8.jpg",
        adoptButton: true
      },
      {
        productName: "billa",
        gender:"male",
        category: "Cat",
        image: "img/pet14.jpg",
        adoptButton: true
      },
      {
        productName: "sonu monu",
        gender:"male",
        category: "Other",
        image: "img/pet15.jpg",
        adoptButton: true
      },
      {
        productName: "matcha",
        gender:"male",
        category: "Other",
        image: "img/pet16.png",
        adoptButton: true
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //product gender
    let gender = document.createElement("h5");
    gender.innerText = i.gender;
    container.appendChild(gender);
    //adopt button
    let adoptButton = document.createElement("button");
    adoptButton.classList.add("adopt-button");
    adoptButton.innerText = "Adopt";
    adoptButton.onclick = () => {
        //Open new page
        window.open("form.html", "_blank");
    };
    container.appendChild(adoptButton);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };