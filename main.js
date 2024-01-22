document.addEventListener('DOMContentLoaded', function () {
	fetch('realindex.html')
		.then((response) => response.text())
		.then((html) => {
			document.querySelector('body').innerHTML = html;
		})
		.catch((error) => console.error('Error fetching content:', error));
});
