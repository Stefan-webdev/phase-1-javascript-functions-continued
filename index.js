// code your solution here
function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`;

} 

console.log(saturdayFun());
//console.log(saturdayFun("bike"));

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork());

function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Test cases
  const highlightStar = wrapAdjective("*");
  const highlightBars = wrapAdjective("||");
  
  console.log(highlightStar("awesome")); // Output: "You are *awesome*!"
  console.log(highlightBars("fantastic")); // Output: "You are ||fantastic||!"

