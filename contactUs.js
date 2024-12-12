const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");
const messageSpan = document.querySelector("form span"); // Select the span element inside the form

let namePattern = /^[A-Z][a-z]{3,10}$/;
let phonePattern = /^09[0-9]{9}$/;
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let messagePattern = /^.{20,}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let fNameResult = namePattern.test(firstName.value);
  let lNameResult = namePattern.test(lastName.value);
  let phoneResult = phonePattern.test(phone.value);
  let emailResult = emailPattern.test(email.value);
  let messageResult = messagePattern.test(message.value);

  if (fNameResult && lNameResult && phoneResult && emailResult && messageResult) {
    messageSpan.setAttribute("class", "success")
    messageSpan.innerHTML = "Form submitted successfully";
  } else {
    messageSpan.setAttribute("class", "error")
    messageSpan.innerHTML = "Please check your inputs";
  }
});

firstName.addEventListener("keyup", (event) => {
  let fNameResult = namePattern.test(event.target.value);
  if (fNameResult) {
    event.target.setAttribute("class", "accepted");
  } else {
    event.target.setAttribute("class", "rejected");
  }
})

lastName.addEventListener("keyup", (event) => {
  let lNameResult = namePattern.test(event.target.value);
  if (lNameResult) {
    event.target.setAttribute("class", "accepted");
  } else {
    event.target.setAttribute("class", "rejected");
  }
})

phone.addEventListener("keyup", (event) => {
  let phoneResult = phonePattern.test(event.target.value);
  if (phoneResult) {
    event.target.setAttribute("class", "accepted");
  } else {
    event.target.setAttribute("class", "rejected");
  }
})

email.addEventListener("keyup", (event) => {
  let emailResult = emailPattern.test(event.target.value);
  if (emailResult) {
    event.target.setAttribute("class", "accepted");
  } else {
    event.target.setAttribute("class", "rejected");
  }
})

message.addEventListener("keyup", (event) => {
  let messageResult = messagePattern.test(event.target.value);
  if (messageResult) {
    event.target.setAttribute("class", "accepted");
  } else {
    event.target.setAttribute("class", "rejected");
  }
})


// //backend
// const express = require('express');
// const app = express();
// const mysql = require('mysql');
// const bodyParser = require('body-parser');

// // Create a connection to the database
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'jc_manswork_user',
//   password: 'password',
//   database: 'jc_manswork'
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error('error connecting:', err);
//     return;
//   }
//   console.log('connected as id ' + db.threadId);
// });

// // Create a table to store the form data
// app.get('/create-table', (req, res) => {
//   const query = 'CREATE TABLE IF NOT EXISTS form_data (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(255), last_name VARCHAR(255), phone_number VARCHAR(255), email VARCHAR(255), message TEXT)';
//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('error creating table:', err);
//       res.status(500).send({ message: 'Error creating table' });
//     } else {
//       res.send({ message: 'Table created successfully' });
//     }
//   });
// });

// // Middleware to parse JSON bodies
// app.use(bodyParser.json());

// // Create an endpoint to store the form data
// app.post('/store-data', (req, res) => {
//   const { first_name, last_name, phone_number, email, message } = req.body;

//   // Insert the data into the database
//   const query = 'INSERT INTO form_data (first_name, last_name, phone_number, email, message) VALUES (?, ?, ?, ?, ?)';
//   db.query(query, [first_name, last_name, phone_number, email, message], (err, results) => {
//     if (err) {
//       console.error('error storing data:', err);
//       res.status(500).send({ message: 'Error storing data' });
//     } else {
//       // Retrieve all data from the form_data table
//       db.query('SELECT * FROM form_data', (err, results) => {
//         if (err) {
//           console.error('error retrieving data:', err);
//         } else {
//           console.log(results);
//         }
//       });
//       res.send({ message: 'Data stored successfully' });
//     }
//   });
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });