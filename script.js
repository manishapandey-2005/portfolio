function submitContact(event)
 { event.preventDefault(); 
    const name = document.getElementById("name").value; 
    const email = document.getElementById("email").value;
     const message = document.getElementById("message").value;

    if (name && email && message) 
        { alert("Thank you, " + name + "! Your message has been sent."); 
        document.getElementById("name").value = ""; 
        document.getElementById("email").value = ""; 
        document.getElementById("message").value = ""; }
         else { alert("Please fill out all fields."); } }