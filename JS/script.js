// Aside

const nav = document.querySelector(".nav"),
      navList = navquerySelectorAll("li"),
      totalNavLixt = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSelection = allSection.length;
      for(let i = 0; i < totalNavLixt; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            for(let j = 0; j < totalNavList; j++)
            {
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
        })
      }
      function showSection(element)
      {
        for(let i = 0; i < totalSelection; i++) {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
      }


// Form Validation

// Initialize EmailJS with your Public Key
emailjs.init("8_WqWeYlhi-QBYlfM");

// Add event listener to the form
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Form Validation (Basic)
    const name = document.querySelector('[name="from_name"]');
    const email = document.querySelector('[name="from_email"]');
    const message = document.querySelector('[name="message"]');

    if (!name.value || !email.value || !message.value) {
        alert("Please fill in all fields.");
        return; // Stop if any field is empty
    }

    console.log({
        from_name: document.querySelector('[name="from_name"]').value,
        from_email: document.querySelector('[name="from_email"]').value,
        subject: document.querySelector('[name="subject"]').value,
        message: document.querySelector('[name="message"]').value
    });
  

    // Send the form data using EmailJS
    emailjs.sendForm("service_b2se4xj", "template_yrlab47", this)
        .then(function () {
            alert("Message sent successfully!"); // Success alert
            document.getElementById("contact-form").reset(); // Clear the form
        }, function (error) {
            alert("Failed to send message: " + error.text); // Error alert
        });
});


// Twemojis ==========================================
document.addEventListener('DOMContentLoaded', function () {
    twemoji.parse(document.body);
});