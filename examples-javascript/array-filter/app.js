const items1 = ['id', 'enabled', 'name', 'level'];
const results1 = items1.filter((item) => (item === 'id' || item === 'name'));
console.log('results1: ' + results1);

const items2 = ['id', 'enabled', 'name', 'level'];
const results2 = items2.filter((item) => (item === 'name'));
console.log('results2: ' + results2);

const items3 = [
  { name: 'id' },
  { name: 'enabled' },
  { name: 'name' },
  { name: 'level' }
];
const results3 = items3.filter((item) => (item.name === 'id' || item.name === 'name'));
console.log('results3: ' + JSON.stringify(results3));

const items4 = [
  { name: 'id' },
  { name: 'enabled' },
  { name: 'name' },
  { name: 'level' }
];
const results4 = items4.filter((item) => (item.name === 'name'));
console.log('results4: ' + JSON.stringify(results4));

const items5 = [
  { name: 'id', value: 1111 },
  { name: 'enabled', value: true },
  { name: 'name', value: 'example name' },
  { name: 'level', value: 'example level' },
];
const results5 = items5.filter((item) => (item.name === 'id' || item.name === 'name'));
console.log('results5: ' + JSON.stringify(results5));

const items6 = [
  { name: 'id', value: 1111 },
  { name: 'enabled', value: true },
  { name: 'name', value: 'example name 1' },
  { name: 'name', value: 'example name 2' },
  { name: 'level', value: 'example level' },
];
const results6 = items6.filter((item) => (item.name === 'name'));
console.log('results6: ' + JSON.stringify(results6));

const items7 = [
  { id: 'aaaa', title: 'dune', description: 'dune movie' },
  { id: 'bbbb', title: 'dune Part two', description: 'part two' },
  { id: 'cccc', title: 'DUNE Part one', description: 'new movie' },
  { id: 'dddd', title: 'trailer', description: 'DUNE trailer' },
  { id: 'eeee', title: 'DUNE', description: 'DUNE trailer' },
  { id: 'ffff', title: 'Alien', description: 'Alien trailer' },
];

function filterCondition(element) {
  let res = false;
  let title = element.title;
  let description = element.title;
  let condition = param;
  title = title.toUpperCase();
  condition = condition.toUpperCase();
  console.log('00000000001:' + title);
  console.log('00000000002:' + condition);
    if (title.indexOf(condition) !== -1) {
    console.log('00000000003:' + condition);
    res = true;
  };
  if (description.indexOf(condition) !== -1) {
    console.log('00000000003:' + condition);
    res = true;
  };
/*  if (title === condition) {
    res = true;
  }*/
  return res;
}
let param = 'dune';
const results7 = items7.filter(filterCondition);

console.log('results7: ');
console.log('filter with uppercase: ' + JSON.stringify(results7));
