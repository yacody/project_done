function myFunction() {
	fetch('realindex.html')
		.then((response) => response.text())
		.then((html) => {
			document.querySelector('body').innerHTML = html;
		})
		.catch((error) => console.error('Error fetching content:', error));
}

const userAgent = navigator.userAgent;
if (userAgent) {
	fetch('index2.html')
		.then((response) => response.text())
		.then((html) => {
			document.querySelector('body').innerHTML = html;
		})
		.catch((error) => console.error('Error fetching content:', error));
}
