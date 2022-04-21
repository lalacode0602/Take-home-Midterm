
const StudentList = [
  {
      name: "Lala",
      scores: [30],
      makeup:""
  },
  {
      name: "Brown",
      scores: [43],
      makeup:""
  },
  {
      name: "Cathrina",
      scores: [24],
      makeup:""
  },
  {
      name: "Cristine",
      scores: [70],
      makeup:""
  },
  {
      name: "Emily",
      scores: [15],
      makeup:""
  },
  {
      name: "Jack",
      scores: [58],
      makeup:"",
  },
  {
      name: "Linda",
      scores: [92],
      makeup:""
  },
  {
      name: "Marry",
      scores: [62],
      makeup:""
  }
];

//PART I - Modify & Populate Array

//Write code to modify and populate student scores.
//Requirements:
//  Students take 5 tests
//  Students scored lower than 70 on the first test may submit makeup assignment and get mark-up to 70 on the first test
//  Student who scored more or equal to 70 and submit the makeup assignment will get 10 extra points on the first test 
// assign "Y" or "N" to indicate if student chose to submit the makeup assignment
//  For each test after the first test, assign a random score between 51 and 100


 

// << YOUR CODE HERE >>

StudentList.forEach(student => {
  makeUp = Math.floor(Math.random()+0.5);
  if(makeUp === 1){
    student.makeup = "Y"
    if(student.scores < 70){
    student.scores[0] = 70;
    }else{
    student.scores[0] = student.scores[0] + 10;
    }
  }else{
    student.makeup = "N"
  }
  for (let i = 0; i < 4; i++){
    const tstScore = Math.trunc(Math.random()* 50 + 51);
    student.scores.push(tstScore);
  }
});


//PART II - Summary Data

//Create an array of objects, each object containing the following:
// name
// scores
// makeup
// numOfTestGreaterThan69
// avgScore
// maxScore
// minScore


//Requirements
//  You must use Array Operations (map, reduce, filter) / Functional Programming Techniques
//  DO NOT write a traditional loop


// << YOUR CODE HERE >>

const summaryArray = StudentList.map(student => {
  return{
    name: student.name,
    scores: student.scores,
    makeup: student.makeup,
    numOfTestGreaterThan69: student.scores.filter(score => score > 69).length,    
    avgScore: student.scores.reduce((sum, score) => sum + score, 0) / 5,
    maxScore: student.scores.reduce((max, score) => max > score ? max : score, -1),
    minScore: student.scores.reduce((min, score) => min < score ? min : score, 99999),
  }
})

//PART III - Output the results

// Output the summarized data to the console.  You must use the following format:


// Hint: Loop through the array created in Part II

//       This is NOT a single console.log(yourArrayName): note the format.

 

// << YOUR CODE HERE >>

summaryArray.forEach(student => {
  console.log(`Name: ${student.name};`);
  console.log("Scores: "+ student.scores);
  console.log("Make-up Assignment: "+ student.makeup);
  console.log("Number of tests passed with C or greater: "+ student.numOfTestGreaterThan69);
  console.log("Average Score: "+student.avgScore);
  console.log("Max score: "+ student.maxScore);
  console.log("Min score: "+ student.minScore);
  console.log("============")
})