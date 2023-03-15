// STRING REPLACE METHOD.
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

const loveText = "I love you sujon jannath tell it,s";
const anotherLove = loveText.replace("jannath", "NurU");
console.log(anotherLove);


// CASE SENSITIVE.
let textist = "Please visit Microsoft!";
let newTextist = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newTextist);