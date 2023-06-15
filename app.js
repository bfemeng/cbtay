// function sendMail() {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     };


//     const serviceID = "service_nb5ri47";
//     const templateID = "template_h5tp5ih";
  
//       emailjs.send(serviceID, templateID, params)
//       .then(res=>{
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("Your message was sent successfully!!")
//       })
    
//       .catch(err=>console.log(err));
// }





// function sendMail() {

// var templateParams = {
//     name : document.getElementById("name").value,
//     email : document.getElementById("email").value,
//     message : document.getElementById("message").value,
// };
 
// emailjs.send("service_nb5ri47", "template_h5tp5ih", templateParams)
//     .then(function(res) {
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//        alert("Send Successfully!!", res.status);
//         })
//     };

//     document.getElementById("myButton").addEventListener("click", sendMail);


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
