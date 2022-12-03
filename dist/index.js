import fs from 'fs';
import readline from 'readline';
console.log("Hello World!");
const caloriesList = [1000, 2000, 3000, , 4000, 5000, 6000, , 7000, 8000, 9000, , 10000];
let elfWithMostCalories = 0;
let elfWithSecondMostCalories = 0;
let elfWithThirdMostCalories = 0;
let currentElfCalories = 0;
for (let i = 0; i < caloriesList.length; i++) {
    currentElfCalories += caloriesList[i] ?? 0;
    if (caloriesList[i] == undefined) {
        if (currentElfCalories > elfWithMostCalories) {
            elfWithThirdMostCalories = elfWithSecondMostCalories;
            elfWithSecondMostCalories = elfWithMostCalories;
            elfWithMostCalories = currentElfCalories;
        }
        else if (currentElfCalories > elfWithSecondMostCalories) {
            elfWithThirdMostCalories = elfWithSecondMostCalories;
            elfWithSecondMostCalories = currentElfCalories;
        }
        else if (currentElfCalories > elfWithThirdMostCalories) {
            elfWithThirdMostCalories = currentElfCalories;
        }
        currentElfCalories = 0;
    }
}
console.log(elfWithMostCalories);
console.log(elfWithMostCalories + elfWithSecondMostCalories + elfWithThirdMostCalories);
elfWithMostCalories = 0;
elfWithSecondMostCalories = 0;
currentElfCalories = 0;
async function processLineByLine() {
    const fileStream = fs.createReadStream('src/2022-12-01/input.txt');
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        let c = parseInt(line);
        // console.log(`Line from file: ${c}`);
        currentElfCalories += c || 0;
        if (Number.isNaN(c)) {
            if (currentElfCalories > elfWithMostCalories) {
                elfWithThirdMostCalories = elfWithSecondMostCalories;
                elfWithSecondMostCalories = elfWithMostCalories;
                elfWithMostCalories = currentElfCalories;
            }
            else if (currentElfCalories > elfWithSecondMostCalories) {
                elfWithThirdMostCalories = elfWithSecondMostCalories;
                elfWithSecondMostCalories = currentElfCalories;
            }
            else if (currentElfCalories > elfWithThirdMostCalories) {
                elfWithThirdMostCalories = currentElfCalories;
            }
            currentElfCalories = 0;
        }
    }
    console.log(elfWithMostCalories);
    console.log(elfWithMostCalories + elfWithSecondMostCalories + elfWithThirdMostCalories);
}
processLineByLine();
//# sourceMappingURL=index.js.map