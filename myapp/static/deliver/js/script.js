document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menuButton");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  // Dropdown menu toggle
  menuButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add("hidden");
    }
  });

  // Mobile menu toggle
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});

// Tunggu hingga semua elemen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Ambil referensi elemen
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const closeMobileMenuButton = document.getElementById(
    "closeMobileMenuButton"
  );
  const mobileMenu = document.getElementById("mobileMenu");

  // Event listener untuk membuka mobile menu
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden"); // Menampilkan mobile menu
  });

  // Event listener untuk menutup mobile menu
  closeMobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.add("hidden"); // Menyembunyikan mobile menu
  });
});

const menu = document.getElementById("menu");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    // Tampilkan menu saat scroll cukup jauh
    menu.classList.remove("hidden");
  } else {
    // Sembunyikan menu saat di posisi atas halaman
    menu.classList.add("hidden");
  }
});

// close button
const closeBtn = document.getElementById("close-btn");
const card = document.getElementById("card");

closeBtn.addEventListener("click", function () {
  card.style.display = "none"; // Sembunyikan card saat tombol close ditekan
});
