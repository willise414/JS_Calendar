// load slots for timeslot
function loadSlots() {
  const slotSelection = document.getElementById("slotSelection");
  const slots = 4;
  const times = 13;

  for (i = 1; i <= 48; i++) {
    const timeSquare = document.createElement("div");
    timeSquare.classList.add("slots");

    switch (true) {
      case i < 5:
        timeSquare.innerHTML = "0800-0900";
        break;
      case i > 4 && i < 9:
        timeSquare.innerHTML = "0900-1000";
        break;
      case i > 7 && i < 13:
        timeSquare.innerHTML = "1000-1100";
        break;
      case i > 12 && i < 17:
        timeSquare.innerHTML = "1100-1200";
        break;
      case i > 16 && i < 21:
        timeSquare.innerHTML = "1200-1300";
        break;
      case i > 20 && i < 25:
        timeSquare.innerHTML = "1300-1400";
        break;
      case i > 24 && i < 29:
        timeSquare.innerHTML = "1400-1500";
        break;
      case i > 28 && i < 33:
        timeSquare.innerHTML = "1500-1600";
        break;
      case i > 32 && i < 37:
        timeSquare.innerHTML = "1600-1700";
        break;
      case i > 36 && i < 41:
        timeSquare.innerHTML = "1700-1800";
        break;
      case i > 40 && i < 44:
        timeSquare.innerHTML = "1800-1900";
        break;
      case i > 43:
        timeSquare.innerHTML = "2000-2100";
        break;
      default:
        timeSquare.innerHTML = "";
    }
    timeSquare.addEventListener("click", (e) => {
      timeSquare.innerHTML = "Sean Williams";
      timeSquare.style.backgroundColor = "red";
      timeSquare.style.color = "white";
      console.log(e.target.innerHTML);
    });

    slotSelection.appendChild(timeSquare);
  }
}
loadSlots();
