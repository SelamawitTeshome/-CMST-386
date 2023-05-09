

  function updateTime() {
    let now = new Date();
    let dateTime = now.toLocaleString();
    document.getElementById("date-time").innerHTML = dateTime;
  }
  
  setInterval(updateTime, 5000);

  function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let message = document.forms["myForm"]["message"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (message == "") {
      alert("Message must be filled out");
      return false;
    }
    return true;
  }
  