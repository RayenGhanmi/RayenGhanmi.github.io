async function sendContact(ev) {
  ev.preventDefault();

  const senderEmail = document.getElementById('emailInput').value;
  const senderMessage = document.getElementById('messageInput').value;

  const webhookUrl = 'https://discord.com/api/webhooks/1129345264528932934/VzuvV07_tDBoy_LL-_b1lsNewLVtjLUQbg8ZCyrFQOpK7KcQ8agqBPdgZScup5FEPqOg';

  const webhookBody = {
    content: `Sender: ${senderEmail}\nMessage: ${senderMessage}` // Send the message as plain text
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookBody)
    });

    if (response.ok) {
      alert("message sent successfully");
    } else {
      throw new Error('Failed to send webhook');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    alert('There was an error! Try again later or contact the developer.');
  }

  location.reload();
}
