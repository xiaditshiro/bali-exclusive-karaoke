document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");
    const body = document.body;

    // Pastikan popup tersembunyi saat halaman pertama kali dimuat
    popup.style.display = "none";

    // Fungsi untuk menampilkan popup
    function openPopup(src) {
        popupImage.src = src;
        popup.style.display = "flex";
        body.style.overflow = "hidden"; // Mencegah scroll halaman saat popup terbuka
    }

    // Fungsi untuk menutup popup
    function closePopup(event) {
        if (event.target === popup) {
            popup.style.display = "none";
            body.style.overflow = "auto"; // Mengembalikan scroll halaman
        }
    }

    // Tambahkan event listener ke semua gambar yang bisa diklik
    document.querySelectorAll(".item-folio__thumb a").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah browser scroll otomatis ke atas
            openPopup(this.querySelector("img").src);
        });
    });

    // Tambahkan event listener untuk menutup popup saat klik di luar gambar
    popup.addEventListener("click", closePopup);

    // **Mencegah scroll otomatis saat halaman direfresh**
    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual"; // Mencegah pemulihan posisi scroll otomatis
    }
});
