function scuberGreetingForFeet(distance) {
  let response = "";
  if (distance <= 199) {
    return (response = "This one is on me!");
  } else if (distance >= 400 && distance <= 2000) {
    return (response = "That will be twenty bucks.");
  } else if (distance > 2000 && distance < 2500) {
    return (response = "I will gladly take your thirty bucks.");
  } else {
    return (response = "No can do.");
  }
}

function ternaryCheckCity(destination) {
  return destination == "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";

  }
}
