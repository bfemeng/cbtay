// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };
//     const serviceID = "service_nb5ri47";
//     const templateID = "template_h5tp5ih";

//     emailjs
//         .send(serviceID, templateID, params)
//         .then(res => {
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("Your message was sent successfully!");
//         })
//         .catch(err=>console.log(err));
// }


function sendMail() {
        emailjs.init("service_nb5ri47");
      

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

    const serviceID = "service_nb5ri47";
    const templateID = "template_h5tp5ih";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message was sent successfully!!")
  
      })
    }
      .catch(err=>console.log(err)));
  
  }