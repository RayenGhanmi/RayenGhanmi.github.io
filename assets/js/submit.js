document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact__form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.querySelector(".contact__input[name='Name']").value;
        const email = document.querySelector(".contact__input[name='Email']").value;
        const message = document.querySelector(".contact__input[name='Message']").value;

        // Discord webhook URL
        const webhookUrl = "https://discord.com/api/webhooks/1233804873523265639/YhpPEsJlpc7qjGNKUNLw4b-cmhMdzw5au4RcNv1NqMFiOxvZaoFlexC_vtLFllZa7t41";

        const payload = {
            content: `New message from ${name} (${email}):\n${message}`
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
