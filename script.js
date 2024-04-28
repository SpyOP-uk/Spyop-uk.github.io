

// Defining the cars array with model, location, and price data
const cars = [
  { model: 'Mazda 3', location: 'Perth', price: 20000 },
  { model: 'Hyundai Tucson', location: 'Adelaide', price: 22000 },
  { model: 'Volkswagen Golf', location: 'Darwin', price: 19500 },
  { model: 'Toyota Yaris', location: 'Sydney', price: 10000},
  { model: 'Toyota 86', location: 'Hobart', price: 18000},
  // We can add more cars as needed
];

// Get the form and search input elements
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchQuery');
const filteredCars = document.getElementById('filteredCars');

// Function to filter cars based on search query
function searchCars(query) {
  const filtered = cars.filter(car =>
    car.model.toLowerCase().includes(query.toLowerCase()) ||
    car.location.toLowerCase().includes(query.toLowerCase())
  );
  return filtered;
}

// Function to display search results with price information
function displayResults(results) {
  // Clear previous results
  filteredCars.innerHTML = '';

  if (results.length === 0) {
    // Display message if no results found
    filteredCars.innerHTML = '<p>No results found</p>';
  } else {
    // Display each result with model, location, and price
    results.forEach(car => {
      const carItem = document.createElement('div');
      carItem.textContent = `${car.model} - Location: ${car.location} - Price: $${car.price}`;
      filteredCars.appendChild(carItem);
    });
  }
}

// Event listener for form submission
searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const query = searchInput.value.trim();

  if (query !== '') { // Check if the search query is not empty
    const results = searchCars(query);
    displayResults(results);
  } else {
    filteredCars.innerHTML = ''; // Clear the results if the search query is empty
  }
});


//Validating the form input for seller_reg
  function validateRegistrationForm() {
    var fname = document.getElementById("fname").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var uname = document.getElementById("uname").value;
    var upassword = document.getElementById("upassword").value;
  
    // Check for empty fields and display specific messages
    var emptyField = false;
    if (fname.trim() === "") {
      emptyField = true;
      alert("Full name cannot be empty.");
    } else if (address.trim() === "") {
      emptyField = true;
      alert("Address cannot be empty.");
    } else if (phone.trim() === "") {
      emptyField = true;
      alert("Contact number cannot be empty.");
    } else if (email.trim() === "") {
      emptyField = true;
      alert("Email cannot be empty.");
    } else if (uname.trim() === "") {
      emptyField = true;
      alert("Username cannot be empty.");
    } else if (upassword.trim() === "") {
      emptyField = true;
      alert("Password cannot be empty.");
    }
  
    // If any field was empty, it terminates submission
    if (emptyField) {
      return false;
    }
  
    // Existing username validation
    var usernameRegex = /^[a-zA-Z]+$/;
    if (!usernameRegex.test(uname)) {
      alert("Username must contain only alphabets (a-z, A-Z).");
      return false;
    }
  
    // Phone number validation which do basic check for numbers and some length
    var phoneRegex = /^\d{6,15}$/;  // Allow 6 to 15 digits
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number (numbers only).");
      return false;
    }
  
    // Email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address (e.g., user@domain.com).");
      return false;
    }
  
    return true; // Allow form submission if all validations pass
  }

  //Validating the inpur of form from seller_login
  function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Username validation (allow only alphabets)
    if (username.trim() === "") {
      alert("Username cannot be empty.");
      return false;
    }
    var usernameRegex = /^[a-zA-Z]+$/;
    if (!usernameRegex.test(username)) {
      alert("Username must contain only alphabets.");
      return false;
    }
  
    // Password validation if it empty or not
    if (password.trim() === "") {
      alert("Password cannot be empty.");
      return false;
    }
  
    // All validation passed, allow form submission
    return true;
  }
  
//Seller.html validation


function validateSellerForm() {
  // Get references to all input fields
  const make = document.getElementById("make");
  const model = document.getElementById("model");
  const year = document.getElementById("year");
  const mileage = document.getElementById("milage");
  const location = document.getElementById("location");
  const price = document.getElementById("price");

  // Check if any field is empty
  if (make.value.trim() === "" || model.value.trim() === "" || year.value.trim() === "" || 
      mileage.value.trim() === "" || location.value.trim() === "" || price.value.trim() === "") {
    alert("Please fill out all required fields!");
    return false; // Prevent form submission
  }

  // Check if year and price are valid numbers
  if (isNaN(year.value) || isNaN(price.value)) {
    alert("Year and Price must be numbers!");
    return false;
  }

  // Form validation successful, allow submission
  return true;
}