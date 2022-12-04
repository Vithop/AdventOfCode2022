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
    let compartment1 = ruckSack.substring(0, ruckSack.length/2)
    let compartment2 = ruckSack.substring(ruckSack.length/2)

    for (const char of compartment1) {
        if (compartment2.includes(char)) {
            return char
        }
    }
    throw "No type found"
}

function getSumOfPrioritiesOfRuckSacks (ruckSacks: Array<String>): number {
    let sumOfPriorities = 0;
    ruckSacks.forEach( ruckSack => {
        let type = getTypeFromRuckSack(ruckSack)
        let priority = convertTypeToPriorities(type)
        sumOfPriorities += priority;
    })
    return sumOfPriorities;
}

getSumOfPrioritiesOfRuckSacks(input);