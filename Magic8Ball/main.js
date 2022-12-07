function getans() {
    // Get Question
  let question = document.getElementById("inputbox").value;
  // Check against preset questions
  if (question === "") {
    output = "Please ask a question...";
  } else if (question === "Does a magic 8 ball actually work?") {
    output = "How dare you doubt me!";
  } else if (question === "Is JavaScript awesome?") {
    output = "Of Course!";
  } else {
    //Random Answers
    let total = Math.random();
    if (total > 0.8) {
      output = "Without a doubt.";
    } else if (total > 0.6) {
      output = "As I see it, Yes.";
    } else if (total > 0.4) {
      output = "Concentrate and ask again.";
    } else if (total > 0.2) {
      output = "Dont count on it.";
    } else {
      output = "Outlook Not So Good";
    }
  }
  //Output
  document.getElementById("output").innerHTML = output;
}
//Button
document.getElementById("btn").addEventListener("click", getans);
