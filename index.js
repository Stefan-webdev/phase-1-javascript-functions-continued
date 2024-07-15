// code your solution here

function saturdayFun(activity = `roller-skate`){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity = `go to the office`) {
    return `This Monday, I will ${activity}.`
}

const highlightStar = wrapAdjective("*");
//const highlightBars = wrapAdjective("||")

function wrapAdjective(flair = "*") {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }