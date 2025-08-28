 let heartCount = 0;

  const heartCounter = document.getElementById("heart-counter");

  const hearts = document.getElementsByClassName("fa-heart-o");
  for (const heart of hearts) {
    heart.addEventListener("click", function(){
      heartCount++;

      heartCounter.innerText = heartCount;
    });
  }

  let coinCount = 100;

  const coinCounter = document.getElementById("coin-counter");

  const callBtns = document.getElementsByClassName("call-btn");

  for(const callBtn of callBtns){
    callBtn.addEventListener("click",function(){
        alert("clicked")
    })
  }

