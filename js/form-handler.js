document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;
    const popup = document.getElementById('popup');
    popup.className = "text-white text-center";
    popup.innerText = "processing...";
    if (name === "" || email === "" || description === "") {
        popup.className = "text-red-500 text-center";
        popup.innerText = "Kindly fill complete form";
        setTimeout(() => {
        popup.classList.add('hidden'); // Hide the popup
        }, 5000); // 5 seconds
        popup.classList.remove('hidden');
        return;
    }

    const data = {
        name: name,
        email: email,
        description: description
    };

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

        setTimeout(() => {
        popup.classList.add('hidden'); // Hide the popup
        }, 5000); // 5 seconds
        
        document.getElementById('myForm').reset();
    }).catch((error) => {
        console.error('Error:', error);
    });
});


window.onload = function() {
    window.scrollTo(0, 0); // Scroll to the top
};
