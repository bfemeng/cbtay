function sendMail() {
    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
 
    emailjs.send("service_nb5ri47", "template_h5tp5ih", templateParams)
        .then(function(res) {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Send Successfully!!", res.status);
        })
        .catch(function(error) {
            console.log('Error:', error);
            alert('An error occurred while sending the message. Please try again later.');
        });
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myButton").addEventListener("click", sendMail);
});

// Initialize Granim.js
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'diagonal', // gradient direction
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          ['#ecbc4e', '#000000'],
          ['#9f082d', '#ffffff'],
          ['#000000', '#ffffff']
        ]
      }
    }
  });
  

