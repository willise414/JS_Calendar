let nav = 0; //which month are we on?
let clicked = null; //which day did I click on?
//Store event in local storage for now. Move to SQL later
let events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [];

//  Use array to determine number of extra padding days are in calendar
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const calendar = document.getElementById("calendar");

function timeslot(date) {
  clicked = date;

  localStorage.setItem(events, clicked);
  console.log(localStorage);

  window.location.href = "day.html";
}

//  create a function to load the calendar when the page loads
function load() {
  const dt = new Date();
  //    console.log(dt);

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }

  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();
  //    console.log(day, month, year); //month is zero based so Feb = 1

  //    need to know the first day of the month in oder to create padding days
  const firstDayOfMonth = new Date(year, month, 1);
  //   console.log(firstDayOfMonth);

  //    need to know how many days are in a month so we can create teh correct number of days
  //    month+1 is because of zero index, 0 is last day of previous month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  //    console.log(daysInMonth);

  const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  //   console.log(dateString);

  // calculate padding days at beginning of the calendar
  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]); //for March 2023, console should be 3
  //   console.log(paddingDays); ==3

  //   Get current month to display in header
  document.getElementById("monthDisplay").innerText = `${dt.toLocaleDateString(
    "en-us",
    { month: "long" }
  )} ${year}`;

  //   reset calendar when next or back buttons are clicked
  calendar.innerHTML = "";

  // loop through weekdays and padding days to create calendar grid
  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement("div");
    daySquare.classList.add("day");

    // now determine if we render a padding day or an actual day in the month

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;

      daySquare.addEventListener(
        "click",
        // () => (window.location.href = "day.html")
        () =>
          timeslot(
            `${dt.toLocaleDateString("en-us", { month: "long" })} ${
              i - paddingDays
            }, ${year}`
          )
      );
    } else {
      daySquare.classList.add("padding");
    }
    // create calendar
    calendar.appendChild(daySquare);
  }
}

// event listeners for back and next buttons
function initButtons() {
  document.getElementById("nextButton").addEventListener("click", () => {
    nav++;
    load();
  });
  document.getElementById("backButton").addEventListener("click", () => {
    nav--;
    load();
  });
}

// call initButtons function
initButtons();
//  call load function
load();
