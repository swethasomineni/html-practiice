const date = new Date();
console.log(date);
const year = date.getFullYear();
const month = date.getMonth() + 1;
const d = date.getDate();
const formatedDate = `${d}/${month}/${year}`;
console.log(formatedDate);
const yesterday = new Date(0);
console.log(yesterday)