let x;
let y;
let x1;
let y1;
let cord;
let bound;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function spawn() {
  x = getRandomInt(10);
  y = getRandomInt(10);
  x1 = getRandomInt(10);
  y1 = getRandomInt(10);
  cord = [x, y];
  bound = [x1, y1];
  console.log(sameMembers(cord, bound));
}

function sameMembers(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return (
    arr1.every((item) => set2.has(item)) && arr2.every((item) => set1.has(item))
  );
}

function setup() {
  createCanvas(400, 400);
  spawn();
}

function draw() {
  circle(x+100, y+100, 100)
  circle(x1+100, y1+100,100)
}
