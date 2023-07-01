document.getElementById("submitForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var mobileNo = document.getElementById("mobileNo").value;
  var emailId = document.getElementById("emailId").value;

  // Check if any field is empty
  if (
    firstName === "" ||
    lastName === "" ||
    mobileNo === "" ||
    emailId === ""
  ) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a new key-value pair in local storage
  var data = {
    name: `${firstName} ${lastName}`,
    mobile: mobileNo,
    email: emailId,
  };
  var key = data.email; // Unique key using current timestamp
  localStorage.setItem(key, JSON.stringify(data));

  // Clear form fields
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("mobileNo").value = "";
  document.getElementById("emailId").value = "";

  alert("Form submitted successfully!");
});
