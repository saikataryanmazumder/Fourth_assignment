 let heartCount = 0;

  const heartCounter = document.getElementById("heart-counter");

  const hearts = document.getElementsByClassName("fa-heart-o");
  for (const heart of hearts) {
    heart.addEventListener("click", function(){
      heartCount++;

      heartCounter.innerText = heartCount;
    });
  }



