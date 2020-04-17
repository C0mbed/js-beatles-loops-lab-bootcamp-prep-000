

function theBeatlesPlay(musicians, instruments) {
  let beatlesArray = [];
  for (var i = 0; i < musicians.length; i++) {
   beatlesArray.push(`${musicians[i]} plays ${instrument[i]}.`)
   console.log(`${musicians[i]} plays ${instrument[i]}.`);
  }
  return beatlesArray;
}
