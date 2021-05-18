// Your code here

// function saturdayFun (fun){
//     if (typeof fun === 'undefined') {
//         return `This Saturday, I want to roller-skate!`
//     }
//     else {
//         return `This Saturday, I want to ${fun}!`
//     }
// }

function saturdayFun (fun = "roller-skate"){ 
    return `This Saturday, I want to ${fun}!`;
}

// function mondayWork (work){
//     if (typeof work === 'undefined') {
//         return "This Monday, I will go to the office."
//     }
//     else {
//         return `This Monday, I will ${work}.`
//     }
// }

function mondayWork (work = "go to the office"){ 
    return `This Monday, I will ${work}.`;
}

function wrapAdjective (y="*") {
    return function (x = "special") {
        return `You are ${y}${x}${y}!`;
    }
}