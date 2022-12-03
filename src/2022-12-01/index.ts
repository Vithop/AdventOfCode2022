import fs from 'fs';
import readline from 'readline';


console.log("Hello World! It's Day 1 of Advent of Code!");

const caloriesList = [1000, 2000, 3000, ,4000, 5000, 6000, , 7000, 8000, 9000, ,10000]

let topThreeElves = [0];
let currentElfCalories = 0;

function countTopThreeCalories (calories: number | undefined) {
    if (calories){
        currentElfCalories += calories
    } else {
        for (let i = 0; i < topThreeElves.length; i++) {
            const elf = topThreeElves[i];
            if (currentElfCalories > elf) {
                topThreeElves.splice(i, 0, currentElfCalories);
                if ( topThreeElves.length > 3 ) topThreeElves.pop()
                break;
            }
        }

        currentElfCalories = 0;
    }
}

const sum = (acc: number, curVal: number) => acc + curVal

for (let i = 0; i < caloriesList.length; i++) {
    countTopThreeCalories(caloriesList[i]);
}

console.log("Test results")
console.log(topThreeElves);
console.log(topThreeElves.reduce(sum))


topThreeElves = [0];
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
        let c = parseInt(line)
        // console.log(`Line from file: ${c}`);
        countTopThreeCalories(c)

    }
    console.log("Real Results")
    console.log(topThreeElves);
    console.log(topThreeElves.reduce(sum))


}
processLineByLine();

