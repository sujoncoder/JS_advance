const today = new Date().getDay();
console.log(today);

switch (!today) {
  case 0:
    console.log("today is saturday");
    break;
  case 1:
    console.log("today is sunday");
    break;
  case 2:
    console.log("today is monday");
    break;
  case 3:
    console.log("today is tuesday");
    break;
  case 4:
    console.log("today is wednesday");
    break;
  case 5:
    console.log("today is tursday");
    break;
  case 6:
    console.log("today is friday");
    break;
  default:
    console.log("i don,t know");
    break;
}
