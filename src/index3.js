const heightTree = prompt('Вкажіть висоту ялинки: ');
let treeBody = '';
let oneLevel = '*';
let emptySpace = '';
let emptyLength = 0;

const widthTree = heightTree * 2 - 1;

for (let j=0; j<(widthTree-1)/2; j++) {
  emptySpace += ' ';
}

if (heightTree>0) {
  treeBody = emptySpace + '*' + emptySpace;
}

for (let i = 1; i<heightTree; i++) {
  oneLevel = oneLevel + '**';
  emptyLength = (widthTree-oneLevel.length)/2;
  emptySpace = '';
  for (let j=0; j<emptyLength; j++) {
    emptySpace += ' ';
  }
  treeBody = treeBody + '\n' + emptySpace + oneLevel + emptySpace;
}

alert(treeBody);
console.log(treeBody);