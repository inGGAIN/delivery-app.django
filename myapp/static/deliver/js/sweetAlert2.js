// SweetAlert2
function deleteMenu(id) {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Item ini akan dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`/delete/${id}/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCSRFToken(),
          },
        }).then((response) => {
          if (response.ok) {
            document.getElementById(`menu-${id}`).remove();
            Swal.fire("Terhapus!", "Item berhasil dihapus.", "success");
          } else {
            Swal.fire(
              "Gagal!",
              "Terjadi kesalahan saat menghapus item.",
              "error"
            );
          }
        });
      }
    });
  }