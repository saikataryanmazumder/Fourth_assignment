
  let coins = 100;
  let callHistory = [];

  
  const coinCounter = document.getElementById("coin-counter");
  const callButtons = document.querySelectorAll(".call-btn");
  const historyBox = document.getElementById("call-history");
  const clearButton = document.getElementById("clear-btn");


  coinCounter.innerText = coins;


  for (let btn of callButtons) {
    btn.addEventListener("click", function () {
      if (coins < 20) {
        alert(" You need at least 20 coins to make a call.");
        return;
      }

      const card = btn.closest(".card");
      const name = card.querySelector(".service-name").innerText;
      const number = card.querySelector(".service-number").innerText;

      // for alert

      alert(` Calling ${name} at ${number}`);

      // Updating coins

      coins -= 20;
      coinCounter.innerText = coins;

      // Saving history

      callHistory.unshift({
        name: name,
        number: number,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      });

      showHistory();
    });
  }

  // Clear history button

  clearButton.addEventListener("click", function () {
    callHistory = [];
    historyBox.innerHTML = "";
  });

  // Function for call history

  function showHistory() {
    historyBox.innerHTML = "";

    for (let entry of callHistory) {
      const item = document.createElement("div");
      item.className = "flex justify-between items-center bg-[#FAFAFA] p-4 rounded-[8px] my-2";
      item.innerHTML = `
        <div>
          <h3 class="text-[18px] font-semibold">${entry.name}</h3>
          <p class="text-[18px]">${entry.number}</p>
        </div>
        <p class="text-[18px]">${entry.time}</p>
      `;
      historyBox.appendChild(item);
    }
  }


