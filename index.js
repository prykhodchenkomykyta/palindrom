// function palindrom( str ) {
// 	str = str.toLowerCase();
// 	let str2 = str.split('');
// 	str2 = str2.reverse();
// 	str2 = str2.join('');
// 	if ( str == str2 ) return true;
// 	else return false;
// 	return str2;
// }

// console.log(palindrom('hello'));

// function palindrom ( str ) {
// 	str = str.toLowerCase();
// 	return str == str.split('').reverse().join('');
// }

// console.log(palindrom('abba'));

const palindrom = str => {
	str = str.toLowerCase();
	return str == str.split('').reverse().join('');
}

console.log(palindrom('labbal'));