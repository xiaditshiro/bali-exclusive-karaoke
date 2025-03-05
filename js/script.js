document.addEventListener("DOMContentLoaded", function() {
    const navbarNav = document.querySelector('.navbar-nav');
    const hamburger = document.querySelector('#hamburger-menu');

    // Pastikan elemen-elemen ada sebelum menambahkan event listener
    if (navbarNav && hamburger) {
        // Ketika hamburger menu diklik
        hamburger.onclick = () => {
            navbarNav.classList.toggle('active');
        };

        // Klik diluar side bar untuk hilangkan nav
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
                navbarNav.classList.remove('active');
            }
        });
    }
});
