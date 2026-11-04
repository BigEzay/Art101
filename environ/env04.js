
function changeTime() {
  let time = prompt("Is it day or night?").toLowerCase().trim();

  if (time === "day") {
    document.getElementById("environment").className = "day";
    document.getElementById("message").textContent =
      "The sun is shining. Everything feels peaceful.";
  } else if (time === "night") {
    document.getElementById("environment").className = "night";
    document.getElementById("message").textContent =
      "The stars emerge. Something feels different...";
  } else {
    document.getElementById("message").textContent =
      "Unknown time. The world waits for your answer.";
  }
}
