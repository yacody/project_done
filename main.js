document.addEventListener('DOMContentLoaded', function () {
	// Проверка наличия User-Agent
	if (navigator.userAgent) {
		// Перенаправление на основную страницу
		window.location.href = 'realindex.html';
	} else {
		// Оставить на текущей странице (пустой)
	}
});
