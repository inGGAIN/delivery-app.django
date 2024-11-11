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

// counter csrf token
function getCSRFToken() {
  return document
    .querySelector('meta[name="csrf-token')
    .getAttribute("content");
}

function openEditModal(id, name, categories, description, price) {
  // Set form action URL for updating the specific menu item
  document.getElementById("edit-form").action = `/menu/edit/${id}/`;

  // Fill in the current values in the form fields
  document.getElementById("edit-name").value = name;
  document.getElementById("edit-categories").value = categories;
  document.getElementById("edit-description").value = description;
  document.getElementById("edit-price").value = price;

  // Open the modal
  document.getElementById("edit-modal").checked = true;
}

// Submit form with SweetAlert confirmation
document.getElementById("edit-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Perform AJAX or Fetch to submit the form here if needed
  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      "X-CSRFToken": formData.get("csrfmiddlewaretoken"),
    },
  })
    .then((response) => {
      if (response.ok) {
        // Show SweetAlert notification on success
        Swal.fire({
          title: "Berhasil!",
          text: "Data berhasil disimpan.",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          // Close the modal after confirmation
          document.getElementById("edit-modal").checked = false;
          // Optionally, reload the page or update the table if needed
          location.reload();
        });
      } else {
        // Handle error
        Swal.fire("Gagal!", "Terjadi kesalahan saat menyimpan data.", "error");
      }
    })
    .catch(() => {
      Swal.fire("Gagal!", "Terjadi kesalahan saat menyimpan data.", "error");
    });
});
