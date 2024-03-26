function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0;i<str.length;i++){
    let s =  str.slice(0 , i) + str.slice(i+1)
    if(!s.includes(str.slice(i , i+1))){
        return str.slice(i , i+1)
    }
}
return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
