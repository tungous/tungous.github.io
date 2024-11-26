// work-loader.js

function loadWorkContainer() {
	const workContainers = document.querySelectorAll('.work-container');
	if (!workContainers.length) return;

	fetch('work.html')
		.then(response => response.text())
		.then(html => {
			workContainers.forEach(container => {
				container.innerHTML = html;
			});

			// Restore any stored state
			restoreWorkContainerState();

			// Reattach event listeners if needed
			const btn_work = document.getElementById('btn_work');
			if (btn_work) {
				btn_work.addEventListener('click', () => {
					const workContainer = document.querySelector('.work-container');
					if (workContainer.classList.contains('work-show')) {
						workContainer.style.opacity = '0';
						setTimeout(() => {
							workContainer.classList.remove('work-show');
							workContainer.style.display = 'none';
							localStorage.setItem('workContainerState', 'hidden');
						}, 500);
					} else {
						workContainer.style.display = 'flex';
						setTimeout(() => {
							workContainer.style.opacity = '1';
							workContainer.classList.add('work-show');
							localStorage.setItem('workContainerState', 'visible');
						}, 10);
					}
				});
			}
		})
		.catch(error => console.error('Error loading work container:', error));
}

// Initialize on page load and Swup page:view
document.addEventListener('DOMContentLoaded', loadWorkContainer);
swup.hooks.on('page:view', loadWorkContainer);
