async function sendContact(ev) {
  ev.preventDefault();

  const senderEmail = document.getElementById('emailInput').value;
  const senderMessage = document.getElementById('messageInput').value;

  const webhookUrl = 'https://discord.com/api/webhooks/1129345264528932934/VzuvV07_tDBoy_LL-_b1lsNewLVtjLUQbg8ZCyrFQOpK7KcQ8agqBPdgZScup5FEPqOg';

  if (!true)
  {
    mbr = 'Member'
  }
  else
  {
    mbr = 'Not a member'
  }
  const webhookBody = {
    embeds: [
      {
        title: '**New submission**',
        description: '```'+senderMessage+'```',
        color: 0xf177a6,
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
	      	icon_url: 'https://i.imgur.com/CVTIrwN.png',
	      },
        fields: [
          {
            name: '**Section**',
            value: '> Feedback',
            inline: true
          },
          {
            name: '**Membership**',
            value: '> '+mbr,
            inline: true
          },
          {
            name: '**Rating**',
            value: '> Not rated',
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
      alert("message sent successfully");
      location.reload();
    } else {
      throw new Error('Failed to send webhook');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    alert('There was an error! Try again later or contact the developer.');
  }

  location.reload();
}
