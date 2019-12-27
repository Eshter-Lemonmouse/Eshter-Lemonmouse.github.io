let myImage = document.querySelector('img');

myImage.onclick = function () {
	let mySrc = this.getAttribute('src');
	if (mySrc === 'images/62258773.png') {
		this.setAttribute('src', 'images/61784598_p0.jpg');
	} else {
		this.setAttribute('src', 'images/62258773.png');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = ('请输入你的名字。');
	if (!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Mozilla 酷毙了，' + myName;
	}
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function () {
	setUserName();
}