for (let i = 1; i <= 2; i++) {
  console.log(i, "I love you jerry");
}

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x];
  console.log(txt);
}

let y = 1;
while (y <= 10) {
  console.log(y);
  y++;
}

let wow = 10;
do {
  wow++;
  console.log("wow", wow);
} while (wow <= 20);
