import puzzleInput from "./input.js";

console.log("It's Day 3!");

const input = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
];


function convertTypeToPriorities(itemType: String): number {
    if (itemType.length !== 1) {
        throw "Can't convert type to priority! String length is incorrect!"
    } 
    let charCode = itemType.charCodeAt(0);
    if (charCode > "a".charCodeAt(0) ) {
        return charCode - "a".charCodeAt(0) + 1
    } else if (charCode > "A".charCodeAt(0)) {
        return charCode - "A".charCodeAt(0) + 27
    } else { 
        throw "Invalid itemType!"
    }
    
}

function getTypeFromRuckSack(ruckSack: String): String {
    let compartment1 = new Set(ruckSack.substring(0, ruckSack.length/2))
    let compartment2 = new Set(ruckSack.substring(ruckSack.length/2))

    for (const char of compartment1) {
        if (compartment2.has(char)) {
            return char
        }
    }
    throw "No type found"
}

function getSumOfPrioritiesOfRuckSacks(ruckSacks: Array<String>): number {
    let sumOfPriorities = 0;
    ruckSacks.forEach( ruckSack => {
        let type = getTypeFromRuckSack(ruckSack)
        let priority = convertTypeToPriorities(type)
        sumOfPriorities += priority;
    })
    return sumOfPriorities;
}

console.log("Test Input!")
console.log(getSumOfPrioritiesOfRuckSacks(input))

console.log("Puzzel Input!")
console.log(getSumOfPrioritiesOfRuckSacks(puzzleInput))


// ----------------Part Two!------------------------------
console.log("Part 2")

function getBadgeTypeFrom3Rucksacks(group: Array<Set<String>>): String {
    if (group.length !== 3) {
        throw "Group does not have the size 3. Cannot find badget type!"
    }
    let intersect1 = new Set([...group[0]].filter(i => group[1].has(i)));
    let intersect2 = new Set([...intersect1].filter(i => group[2].has(i)));
    return intersect2.values().next().value

}

function getSumOfBadgetPriorities(ruckSacks: Array<String>): number {
    let sumOfPriorities = 0;
    for (let i = 0; i < ruckSacks.length; i += 3) {
        const rS1 = new Set(ruckSacks[i]);
        const rS2 = new Set(ruckSacks[i+1]);
        const rS3 = new Set(ruckSacks[i+2]);
        let type = getBadgeTypeFrom3Rucksacks([rS1, rS2, rS3])
        let priority = convertTypeToPriorities(type)
        sumOfPriorities += priority;        
    }
    return sumOfPriorities;
}

console.log("Test Input!")
console.log(getSumOfBadgetPriorities(input))

console.log("Puzzel Input!")
console.log(getSumOfBadgetPriorities(puzzleInput))