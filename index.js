
/**** Example for call stack *****/

function third(){
	throw new Error('oops something wrong!');
}
function two () {
	third();
}
function one(){
	two();
}
one();

/******* Example for stack exceed *******/
function  test() {
	return test();
}
test();


/******** Example of synchronous call ******/
console.log('Hello');
const clickMe = () => { alert("Vijay") }
document.write('<button onClick="clickMe();">Click Me</button>')

//time break 8 sec till the time browser cant do anything
let start = new Date().getTime();
while(new Date().getTime()- start < 8000); 

console.log('end code');


/******** Example of Asynchronous call ******/
console.log('Hello');
const clickMe = () => { alert("Vijay") }
document.write('<button onClick="clickMe();">Click Me</button>')

// time break 8 sec till the time browser cant do anything
let start = new Date().getTime();
setTimeout(()=>{ console.log('get data from API'); },8000); 
console.log('end code');


