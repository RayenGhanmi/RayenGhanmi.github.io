  async function sendContact(ev) {
  ev.preventDefault();

  const senderEmail = document.getElementById('emailInput').value;
  const senderMessage = document.getElementById('messageInput').value;

  const webhookUrl = 'https://discord.com/api/webhooks/1129345264528932934/VzuvV07_tDBoy_LL-_b1lsNewLVtjLUQbg8ZCyrFQOpK7KcQ8agqBPdgZScup5FEPqOg';
  let score = 'Not Rated';
  let clr = 0xf177a6;
  var button = document.getElementById("sendButton");

  var options = document.getElementsByName('options');
  for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
          var selectedOption = options[i].value;
          console.log('Selected option:', selectedOption);
          if (selectedOption === 'option1') {
              score = 'Pleased';
              clr = 0x009600;
          } else if (selectedOption === 'option2') {
              score = 'Moderate';
              clr = 0xb3b322;
          } else if (selectedOption === 'option3') {
              score = 'Unhappy';
              clr = 0x911919;
          }
          break;
      }
  }

  const webhookBody = {
    embeds: [
      {
        title: '**New submission**',
        description: '```'+senderMessage+'```',
        color: clr,
        author: {
          name: senderEmail,
          icon_url: 'https://cdn.discordapp.com/embed/avatars/1.png',
          url: "https://mail.google.com/mail/u/0/?fs=1&to="+senderEmail+"&su=Support&body&tf=cm",
        },
        thumbnail: {
          url: 'https://i.imgur.com/fosgeaa.png',
        },
        timestamp: new Date().toISOString(),
        footer: {
          text: 'Website',
          icon_url: 'https://i.imgur.com/C8LEiGt.png',
        },
        fields: [
          {
            name: '**Section**',
            value: '> Feedback',
            inline: true
          },
          {
            name: '**Membership**',
            value: '> Null',
            inline: true
          },
          {
            name: '**Rating**',
            value: '> '+score,
            inline: true
          },
        ],
      }
    ]
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
      /*alert("message sent successfully");*/
      button.innerHTML = "Sent";
      button.disabled = true;
      button.style.backgroundColor = "green";
      button.classList.add("unhoverable");
    } else {
      throw new Error('Failed to send webhook');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    /*alert('There was an error! Try again later or contact the developer.');*/
    button.innerHTML = "Error";
    button.disabled = true;
    button.style.backgroundColor = "red";
    button.classList.add("unhoverable");
  }
  setTimeout(function() {
    location.reload();
}, 2000);
}
