const url = "http://localhost:5500/api";

//GET
function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
   
}

//GET com parametros
function getUser(){
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data =>{
        userName.textContent = `Nome:${data.name}`;
        userCity.textContent = `Cidade: ${data.city}`;
        userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error))
}

getUsers();

getUser();

//POST
function addUser(){
   fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "content-type": "application/json; charset=utf-8",
        }
   })
   .then(response => response.json())
   .then(data => alertApi.textContent = data)
   .catch(error => console.error(error))
}

const  newUser = {
    name: "Zed",
    avatar: "https://images.alphacoders.com/681/thumb-1920-681587.png",
    city: "Ionia",

}

addUser(newUser);

//PUT

function updateUser(updatedUser,id){
    fetch(`${url}/${id}`,{
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "content-type": "application/json; charset=utf-8",
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

const updatedUser = {
    name: "Yasuo",
    avatar: "https://i.pinimg.com/564x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
    city: "Ionia",
}

updateUser(updatedUser,1);

//DELETE
function deleteUser(id){
    fetch(`${url}/${id}`,{
        method: "DELETE",
        headers: {
            "content-type": "application/json; charset=utf-8",
        }
    })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
}

deleteUser(32);



