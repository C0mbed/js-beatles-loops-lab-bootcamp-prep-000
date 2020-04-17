beatlesArray = [];

function theBeatlesPlay(musicians, instruments) {
  for (var i = 0; i < musicians.length; i++) {
   beatlesArray.push(`${musicians[i]} plays ${instrument[i]}.`)
  }
  return beatlesArray;
}
