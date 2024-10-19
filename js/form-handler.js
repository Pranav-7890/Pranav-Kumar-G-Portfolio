document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;
    const popup = document.getElementById('popup');

    if (name === "" || email === "" || description === "") {
        popup.className = "text-red-500 text-center";
        popup.innerText = "Kindly fill complete form";
        popup.classList.remove('hidden');
        return;
    }

    const data = {
        name: name,
        email: email,
        description: description
    };
// DEPLOYMENT ID - ( AKfycbyBmuXR-CVCm0q3mAiSPUBpshGF2wAut7GovPvO8L4bsdKZGAwL0iAvZEThs2YQpKk- )
// IF needed in future
    fetch('https://script.google.com/macros/s/AKfycbyBmuXR-CVCm0q3mAiSPUBpshGF2wAut7GovPvO8L4bsdKZGAwL0iAvZEThs2YQpKk-/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => {
        popup.className = "text-green-500 text-center ";
        popup.innerText = "Successfully Submitted";
        popup.classList.remove('hidden');
        document.getElementById('myForm').reset();
    }).catch((error) => {
        console.error('Error:', error);
    });
});
