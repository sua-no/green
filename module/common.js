import * as all from './main.js';
import * as sub from './sub.js';


var con = document.querySelector('.contents');
con.innerHTML = `${all.main}와 ${sub.main}`;

console.log(all);
console.log(all.main);
console.log(all.fun());