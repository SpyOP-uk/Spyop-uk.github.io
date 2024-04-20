function validateForm() {
    var fname = document.getElementById("fname").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var uname = document.getElementById("uname").value;
    var upassword = document.getElementById("upassword").value;
    
    if (fname == "" || address == "" || phone == "" || uname == "" || upassword == "") {
      alert("Please fill out all fields");
      return false;
    }
  }
  
  document.getElementById("sellerForm").addEventListener("submit", validateForm);
  