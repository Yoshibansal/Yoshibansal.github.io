document
  .getElementById("phoneForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    var input = document.getElementById("phoneNumber").value;
    var formattedNumber = input.replace(/[^0-9]/g, ""); // Remove all non-digit characters

    // Redirect to the WhatsApp URL with the formatted phone number
    window.open(`https://wa.me/${formattedNumber}`, "_blank");
  });
