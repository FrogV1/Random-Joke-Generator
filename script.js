document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#button")) return;

  fetch("https://official-joke-api.appspot.com/random_joke")
  	.then((response) => response.json())
  	.then((data) => renderJoke(data))
  	.catch(() => renderError());
});

function renderJoke(data) {
  const setup = document.getElementById("setup");
  const punchline = document.getElementById("punchline");
  setup.innerHTML = data.setup;
  punchline.innerHTML = data.punchline;
}

function renderError() {
  const error = document.getElementById("error");
  error.innerHTML = "Whoops, something went wrong. Please try again later!";
}