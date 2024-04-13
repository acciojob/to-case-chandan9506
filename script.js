function toCase(s) {
  // write your code here
	return s.toLowerCase()+"-"+s.toUpperCase();
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
