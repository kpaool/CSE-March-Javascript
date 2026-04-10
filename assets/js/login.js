

let form = document.querySelector("form")
let usernameField = document.querySelector("#username")
let passwordField = document.querySelector("#password")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let user = {
        username: usernameField.value,
        password: passwordField.value
    }

    console.log(user)

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then((data) => {
            console.log(data)


            if (data.message === "Invalid credentials") {
                alert("Please provide correct username and password")
            } else {
                alert("Your login was successful")
                const { username } = user
                localStorage.setItem("user", JSON.stringify({ username }))
                window.location.href = "dashboard.html"
            }

        });

})