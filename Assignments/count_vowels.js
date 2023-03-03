function vowelcount(str){
	let count=0;
	const vowel = ['a','e','i','o','u']
	for (let char of str){
		if(vowel.includes(char)){
			count++
		}
	}
	return count
}

console.log(vowelcount(`this is a very long string with some vowels perhaps`));
