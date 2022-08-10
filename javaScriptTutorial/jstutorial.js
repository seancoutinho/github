function checkSize(num) {
  if (num>=20) {
    return "Huge";
  } else if(num<20) {
    if (num<15) {
      if (num<10) {
        if (num<5) {
          return "Tiny";
        }
        return "Small";
      }
      return "Medium";
    }
    return "Large";
  }  
}

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go-home!"];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  }
  else if (strokes <= (par-2)) {
    return names[1];
  }
  else if (strokes === (par-1)) {
    return names[2];
  }
  else if (strokes===par) {
    return names[3];
  }
  else if (strokes === (par+1)) {
    return names[4];
  }
  else if (strokes >= (par+2)) {
    if (strokes >= (par+3)) {
      return names[names.length-1]
    }
    return names[names.length-2];
  }
}

// console.log(golfScore(5,7))

function golfScoreSwitch(val) {
  switch (val) {
    case 1:
      return names[0];
      break;
    case 2:
    case 3:
      return names[1];
      break;
    case 4:
      return names[2]
      break;
    case 5:
      return names[3];
      break;
    case 6:
      return names[4];
      break;
    case 7:
      return names[5];
      break;
    default:
      return names[names.length-1];
  }
}

// console.log(golfScoreSwitch(7))

function isLess(a, b) {
  return a<b;
}

// console.log(isLess(10, 6))

let myDog = {
  "name": "Quincy",
  "legs": 4,
  "tails": 1,
  "friends": ["Snoopy", "Gray", "White"]
};

console.log(myDog.tails)



function checkObject(checkProp) {
  if (checkProp.hasOwnProperty("round")) {
    return checkProp.legs
  } else {
    return `No such property in ${checkProp}` 
  }
}

// console.log(checkObject(myDog));

var randomNumberBetween0ANd9 = Math.floor(Math.random()*20);
console.log(randomNumberBetween0ANd9);

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(5,10))