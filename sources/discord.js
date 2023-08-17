function loadJSON(callback) {
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType('application/json');
  xhr.open('GET', './sources/members.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.send(null);
}

function sendContact(ev) {
  ev.preventDefault();

  const senderEmail = document.getElementById('emailInput').value;
  const senderMessage = document.getElementById('messageInput').value;

  loadJSON(function (data) {
    const members = data.members;

    function isMember(email) {
      return members.includes(email);
    }

    const webhookUrl = 'https://discord.com/api/webhooks/1129345264528932934/VzuvV07_tDBoy_LL-_b1lsNewLVtjLUQbg8ZCyrFQOpK7KcQ8agqBPdgZScup5FEPqOg';
    const mbr = isMember(senderEmail) ? 'Member' : 'Not a member';

    const webhookBody = {
    embeds: [
      {
        title: 'New submission',
        description: senderMessage,
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
            name: 'Membership',
            value: mbr,
          },
        ],
      }
    ]
  };

  try {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', webhookUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert('Message sent successfully');
          location.reload();
        } else {
          console.error('Failed to send webhook');
          alert('There was an error! Try again later or contact the developer.');
        }
      }
    };
    xhr.send(JSON.stringify(webhookBody));
  } catch (error) {
    console.error('An error occurred:', error);
    alert('There was an error! Try again later or contact the developer.');
  }
});
}
