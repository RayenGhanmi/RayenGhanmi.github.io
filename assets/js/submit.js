document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact__form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        const email = document.querySelector(".contact__input[name='Email']").value;
        const message = document.querySelector(".contact__input[name='Message']").value;

        // Discord webhook URL
        const webhookUrl = "https://discord.com/api/webhooks/1233804873523265639/YhpPEsJlpc7qjGNKUNLw4b-cmhMdzw5au4RcNv1NqMFiOxvZaoFlexC_vtLFllZa7t41";

        // Creating an embed object
        const embed = {
            author: {
                "name": email,
                "url": `https://mail.google.com/mail/u/1/?view=cm&fs=1&to=${email}&su=Form+received`,
                "icon_url": "https://cdn.discordapp.com/embed/avatars/1.png"
                },
            description: `**Message:**\n${message}`,
            color: parseInt(Math.floor(Math.random() * 16777215).toString(16), 16)
        };

        const payload = {
            embeds: [embed] // Discord expects an array of embeds
        };

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`Failed to send message (${response.status} ${response.statusText})`);
            }

            alert("Message sent successfully!");
            form.reset(); // Reset the form after successful submission
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again later.");
        }
    });
});
