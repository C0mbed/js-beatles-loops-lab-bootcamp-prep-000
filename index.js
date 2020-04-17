

function theBeatlesPlay(musicians, instruments) {
  let beatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
   beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArray;
}

function johnLennonFacts(facts){
  let lennonArray = [];
  while (facts) {
    lennonArray.push(`${facts}!`);
  }
  return lennonArray;
}
