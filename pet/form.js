// Get the form elements
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const petIdInput = document.getElementById("pet-id");
const addressInput = document.getElementById("address");
const phoneInput = document.getElementById("phone");
const commentsInput = document.getElementById("comments");
const submitButton = document.getElementById("submit-adoption");

// Add event listener to submit button
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Get the form data
    const name = nameInput.value;
    const email = emailInput.value;
    const petId = petIdInput.value;
    const address = addressInput.value;
    const phone = phoneInput.value;
    const comments = commentsInput.value;
    // Send the form data to the server
    console.log(`Adoption request submitted for pet ${petId} by ${name} at ${email}`);
    // Clear the form fields
    nameInput.value = "";
    emailInput.value = "";
    petIdInput.value = "";
    addressInput.value = "";
    phoneInput.value = "";
    commentsInput.value = "";
    // Redirect to adopt page
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('address',address);
    localStorage.setItem('phone',phone);
    window.location.href = "adopt.html";
});