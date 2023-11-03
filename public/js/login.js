const callApi = () => {
    const login = {
        email: email.value,
        password: password.value
    }

    fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                // success.style.display = 'none'
                // errorr.style.display = 'block'
                // errorr.innerText = data.error
                alert(data.error)

            } else {
                // success.style.display = 'block'
                // errorr.style.display = 'none'
                // success.innerText = data.success
                // alert(data.success)
                window.location.reload()
            }
            // console.log(data)
        })
}
form.addEventListener('submit', () => {
    callApi()
})

document.addEventListener("keyup", (e) => {
    if (e.key === "Enter") callApi()
})