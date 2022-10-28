// Iteration 1: Names and Input
let hacker1 = "Valentino";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Fernando";
console.log(`The navigator's name is ${hacker2}`);
//
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `${hacker1} has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `${hacker2} has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, they are  ${hacker1.length} characters`
  );
}

// Iteration 3: Loops
let name = "";
for (i = 0; i < hacker1.length; i++) {
  name = name + hacker1[i].toUpperCase() + " ";
}
console.log(name);

// Iteration 3: Loops
// name="hola"; name[0]='h'; name[3]='a'; name.length=4
name = "";
for (i = hacker1.length - 1; i >= 0; i--) {
  name = name + hacker1[i];
}
console.log(name);

if (hacker1 > hacker2) {
  console.log(`${hacker2} goes first.`);
} else if (hacker2 > hacker1) {
  console.log(`Yo, ${hacker1} goes first definitely.`);
} else {
  console.log(`What?? You both have the same name?`);
}

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tincidunt augue, sed egestas massa commodo vitae. Duis ut molestie odio. Suspendisse ultrices tincidunt varius. In hac habitasse platea dictumst. Aenean suscipit ante eu erat convallis rutrum. Fusce sit amet dapibus leo. Vivamus elit justo, pharetra consectetur turpis ut, commodo tristique mauris. Proin leo ante, egestas nec metus vitae, sagittis tempus quam. Morbi bibendum, est quis accumsan ultrices, justo quam interdum dolor, nec fermentum lorem ex eget massa. Morbi consequat in purus vel bibendum. Nam ut posuere risus. Suspendisse tempus leo diam, eget finibus ex convallis quis. Maecenas pulvinar lectus at odio venenatis, et laoreet risus imperdiet. Curabitur id blandit velit. Curabitur turpis massa, aliquet non ligula ac, suscipit luctus urna. Suspendisse scelerisque sit amet ligula id sagittis. Nunc vel sem est. Proin faucibus ipsum vel finibus porta. Maecenas egestas placerat urna ac scelerisque. Sed et luctus quam, condimentum efficitur diam. Duis laoreet ultrices turpis aliquam ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer gravida justo id interdum ullamcorper. Sed varius, lorem eu bibendum elementum, diam ipsum tempor risus, sit amet elementum sapien leo nec lacus. In hac habitasse platea dictumst. Sed luctus rutrum euismod. Donec ut erat imperdiet, fringilla erat nec, dignissim justo. Donec blandit rutrum ligula sit amet imperdiet. Aliquam eleifend purus enim, vitae rhoncus odio dictum id. Vestibulum ut neque mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc finibus rutrum lorem, vitae viverra diam malesuada ornare. Cras elementum est eget sem facilisis, ut iaculis metus eleifend.";

let space = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i] === " ") {
    space++;
  }
}
// text = "hola mama"; space = 1; words = space+1;
console.log(space + 1);

let count = 0;
for (let i = 0; i < text.length - 1; i++) {
  if (text[i] === "e" && text[i + 1] === "t") {
    count++;
  }
}
console.log(count);
