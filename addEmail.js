const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Read the existing JSON data from the file
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  const jsonData = JSON.parse(data);

  // Event listener for form submission
  document.getElementById('addEmailForm').addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const newEmail = document.getElementById('emailInput').value;

    if (jsonData.includes(newEmail)) {
      console.log('Email already exists in the JSON data.');
      rl.close();
      return;
    }

    // Add the new email to the JSON data
    jsonData.push(newEmail);

    // Write the updated data back to the file
    fs.writeFile('validEmails.json', JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        console.error('Error writing to JSON file:', err);
      } else {
        console.log('Email added successfully.');
      }

      rl.close();
    });
  });
});
