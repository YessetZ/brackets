module.exports = function check(str, bracketsConfig) {
  // your solution
  let bracketsOpen = new Array();
  let bracketsClose = new Array();

  let tempOpen = '';

  for (let i in str) {
    
      tempOpen = str[i];
  
      for (let x in bracketsConfig) {
  
          if (bracketsConfig[x][0] === tempOpen) {
              bracketsOpen.push(bracketsConfig[x][0]);
              bracketsClose.push(bracketsConfig[x][1]);
              break;
          }
      }

      for (let j = parseInt(i) + 1; j < str.length; j++) {

          if ( (bracketsClose[bracketsClose.length-1] === str[j]) && (i % 2 != j % 2) ) {
              bracketsClose.pop();
              bracketsOpen.pop();
              str = str.substring(0, j) + ' ' + str.substring(j + 1);
              break;
          }

      }

  }

  return bracketsOpen.length === 0 && bracketsClose.length === 0;
}
