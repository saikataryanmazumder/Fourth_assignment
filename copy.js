// copy.js

  
  let copyCount = 0;
  const copyButtons = document.getElementsByClassName("copy-btn");
  const copyCounter = document.getElementById("copy-counter");

  copyCounter.innerText = copyCount;

  for (let copyBtn of copyButtons) {
    copyBtn.addEventListener("click", function (){
      const card = copyBtn.closest(".card");
      const number = card.querySelector(".service-number").innerText;

      navigator.clipboard.writeText(number)
        .then(function (){
         copyCount++;
          copyCounter.innerText = copyCount;
        })
        
    });
  }
