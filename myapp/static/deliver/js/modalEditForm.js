// Modal Edit Form
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
  