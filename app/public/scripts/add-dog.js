document.querySelector("form").addEventListener("submit", addDogHandler);

function addDogHandler(event){
    event.preventDefault();

    fetch("/api/dogs", {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(getDogFromForm(event.target))
    }).then(() => {
        redirectToDogList();
    });
}

function getDogFromForm(form){
    const data = new FormData(form);
    return {
        name: data.get("name"),
        profilePicture: data.get("profile-picture"),
        bio: data.get("bio")
    };
}

function redirectToDogList(){
    window.location.assign("/dogs");
}
