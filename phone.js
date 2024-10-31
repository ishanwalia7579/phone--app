let currentPage = 0;

function goToPage(page) {
    const pages = document.querySelector('.app-pages');
    const dots = document.querySelectorAll('.dot');

    currentPage = page;
    pages.style.transform = `translateX(-${page * 50}%)`;

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === page);
    });
}

function openApp(appName) {
    const notification = document.getElementById('notification');
    notification.textContent = `${appName} is opening...`;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

function goToHome() {
    goToPage(0);
    const notification = document.getElementById('notification');
    notification.textContent = "Returned to Home Screen";
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 1500);
}
