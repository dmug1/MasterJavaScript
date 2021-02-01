/*
  WRITE YOUR SOLUTION HERE
*/

//https://randomuser.me/api/?results=5


// fetch('https://randomuser.me/api/?results=5')
//   .then(
//     response => response.json()
//   )
//   .then(data => {
//     const dados = data.results;
//     console.log('Sucess', data)
//   })
//   .catch(function () {
//     console.log("Fail to fetch data")
//   });


async function fetchFriendsJSON(){
  const response = await fetch('https://randomuser.me/api/?results=5');  
  const friends = await response.json();
  const timeline = document.querySelector("#timeline");  
  console.log(friends);

  friends.results.forEach((person) => {
    let image = document.createElement("img");
    image.src = person.picture.medium;
    timeline.appendChild(image);
  });
}


fetchFriendsJSON();
