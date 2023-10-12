// form

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var phone = document.getElementById("phone").value;
  var countryCode = document.getElementById("country_select").value;
  var phoneNumber = countryCode + "-" + phone;

  var params = {
    from_name: document.getElementById("nameInput").value,
    full_name: document.getElementById("nameInput").value,
    email_id: document.getElementById("emailInput").value,
    phone: phoneNumber,
    company_name: document.getElementById("company").value,
    message: document.getElementById("message").value,
  };

  // emailjs
  //   .send("service_oj83tyi", "template_td3uud6", params)
  //   .then(function (res) {
  //     alert("Success" + res.status);
  //   });
  // console.log(params);
  emailjs.send("service_oj83tyi", "template_td3uud6", params).then(
    function (response) {
      alert("Your message has been received successfully");
      document.querySelector("form").reset();
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
  // Do something with the form data here
});
