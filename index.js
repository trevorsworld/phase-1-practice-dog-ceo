document.addEventListener("DOMContentLoaded", () => {
    
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogImagesContainer = document.getElementById("dog-images");
            data.message.forEach(imageUrl => {
                const img = document.createElement("img");
                img.src = imageUrl;
                dogImagesContainer.appendChild(img);
            });
        })
        .catch(error => console.error("Error fetching dog images:", error));

    
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const dogBreedsList = document.getElementById("dog-breeds");
            Object.keys(data.message).forEach(breed => {
                const li = document.createElement("li");
                li.textContent = breed;
                dogBreedsList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching dog breeds:", error));

    
    const dogBreedsList = document.getElementById("dog-breeds");
    dogBreedsList.addEventListener("click", event => {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue";
        }
    });

    
    const dropdown = document.getElementById("filter-dropdown");
    dropdown.addEventListener("change", event => {
        const selectedLetter = event.target.value.toLowerCase();
        const breedItems = document.querySelectorAll("#dog-breeds li");
        breedItems.forEach(item => {
            if (item.textContent.toLowerCase().startsWith(selectedLetter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none"; 
            }
        });
    });
});