var dogUrlArray = window.location.pathname.split("/");

var dogId = dogUrlArray[2];
console.log(dogUrlArray);
console.log(dogId);

fetch(`/api/dogs/${dogId}`)
  .then(response => response.json())
  .then(response => addDogToPage(response.dog));

function addDogToPage(dog){
  const $li = document.createElement("li");
  $li.innerHTML = `
        <h3 class="name"><a href="/dogs/${dog.id}">${dog.name}</a></h3>
        <img class="profile-picture" src="/${dog.profilePicture}" alt="${dog.name}" />
        <p class="bio">${dog.bio}</p>
    `;
  document.querySelector(".dog").appendChild($li);
}
