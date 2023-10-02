function fetchData(day) {
    fetch("https://api.nasa.gov/planetary/apod?api_key=kwu0r8iQwtnOE6no6yi5VeHZRC6J3pTDpaxlJwBT&date=2023-09-" + day)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("title").textContent = data.title;
            document.getElementById("explanation").textContent = data.explanation;
            if (data.media_type == "image") {
                document.getElementById("image").style.display = "initial";
                document.getElementById("image").src = data.hdurl;
            }
            else {
                document.getElementById("image").style.display = "none";
            }
            
        })
        .catch(error => {
            console.error('Fetch error: ', error);
        });
}

    let calendar = document.getElementById("calendar")
    for (let i = 1; i <= 30; i++) {
        let myButton = document.createElement("button");
        myButton.innerText = "September " + i;
        myButton.addEventListener("click", function () {
            fetchData(i);
        });
        calendar.appendChild(myButton);
    }