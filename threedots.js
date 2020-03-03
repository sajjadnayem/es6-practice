const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 30, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];

//console.log(allAges2); 
const num1 =120;
const num2 = 450;
const num3 = 250;
const allNumber = [650,450,250,100];
const maximum = Math.max(...allNumber);
console.log(maximum);