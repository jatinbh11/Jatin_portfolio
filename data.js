const firebaseConfig = {
    apiKey: "AIzaSyBxyi8Qp6VW1-w-yDJSnwhUqeZUa_Kk9Ik",
    authDomain: "personal-portfolio-933a3.firebaseapp.com",
    databaseURL: "https://personal-portfolio-933a3-default-rtdb.firebaseio.com",
    projectId: "personal-portfolio-933a3",
    storageBucket: "personal-portfolio-933a3.appspot.com",
    messagingSenderId: "116759360869",
    appId: "1:116759360869:web:56f7c9bbcb87e6b2529d8c",
    measurementId: "G-5H69JH64DM"
};
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);
function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);
    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
  
      }

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };