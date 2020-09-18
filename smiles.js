//solution 1

const countSmileys = arr => {
if ( arr.length === 0 )  { 
  return 0;
}
let count = 0;
let validSmileys = [":)",";)",":D",";D",":-D",":~D",":-)",":~)",";~D",";~)",";-D",";-)"]
for (let right of arr) { 
  if (validSmileys.includes(right)) { 
    count++;
  }
}
return count;
}

//solution 2

const countSmileys = arr => arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
