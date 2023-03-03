var arrnum = [3,56,7,73,38,63,5,23,87];
const greatAscend = arrnum.sort((a,b)=>a-b);
const largest = greatAscend[0];
const greatDescend = arrnum.sort((a,b)=>b-a);
const smallest = greatDescend[0];


console.log(largest+smallest);

console.log(arrnum);
