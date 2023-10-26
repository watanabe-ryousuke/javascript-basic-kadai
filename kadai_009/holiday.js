const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

const max = holidays.length;
console.log("holidaysの中は" + max + "個です");

console.log("以下はforの結果");
for (let i = 0; i < max; i++) {
  console.log(holidays[i]);
}

console.log("以下はwhileの結果");
let i = 0;
while (i < max) {
  console.log(holidays[i]);
  i++;
}