const Quote = document.querySelector(".quote");
const BTN = document.querySelector("button");
const Em = document.querySelector(".origin");
console.log(Em);
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2628430868msha458838465f332fp14cf7djsn7696ae8601c9",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

BTN.addEventListener("click", function () {
  const error = document.createElement("h2");
  const errMessage = `<h3 class="err">Check Your Internet Connectivity</h3>`;
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
    .then((response) => response.json())
    .then(
      (response) => (
        (Quote.textContent = response.content),
        console.log(response.originator.name),
        (Em.textContent = response.originator.name)
      )
    )
    .catch((err) => ((Quote.innerHTML = errMessage), (Em.textContent = "")));
});
