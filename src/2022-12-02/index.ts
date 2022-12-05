//Day two solutions
 const input = ["A Y", "B X", "C Z"]
 
 const encryptedMapPart1 = {
 "A X": 4,
 "A Y": 8,
 "A Z": 3,
 "B X": 1,
 "B Y": 5,
 "B Z": 9,
 "C X": 7,
 "C Y": 2,
 "C Z": 6
 }
 
 let totalScore = 0;
 
 input.forEach((match) => {
 totalScore += encryptedMapPart1[match]
 })
 
 console.log(totalScore)
 // X loose
 // Y draw
 // Z win

 //-------------------------Part 2------------------------------
 
 const encryptedMapPart2 = {
     "A X": 3,
     "A Y": 4,
     "A Z": 8,
     "B X": 1,
     "B Y": 5,
     "B Z": 9,
     "C X": 2,
     "C Y": 6,
     "C Z": 7
 }
 
 totalScore = 0;
 
 input.forEach((match) => {
 totalScore += encryptedMapPart2[match]
 })
 
 console.log(totalScore)