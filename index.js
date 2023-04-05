let randomNumber1  = Math.floor((Math.random() * 6)) + 1;




let randomImage = "images/dice" + randomNumber1 + ".png";


let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage);



let randomNumber2  = Math.floor((Math.random() * 6)) + 1;

let randomImage1 = "images/dice" + randomNumber2 + ".png";


let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage1);


if(randomNumber1 < randomNumber2)
{
    document.querySelector("h1").textContent = "🚩 Player 2 Wins!";
}

 else if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent = " Player 1 Wins! 🚩";
}
 else
{
    document.querySelector("h1").textContent = " Draw";
}

