const url = "http://localhost:5500/api";

//GET
function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data);
    })
    .catch(error => console.error(error))
}

getUsers();

//GET com parametros
function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data;
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent   = data.id
        userAvatar.src       = data.avatar
    })
    .catch(error => console.error(error))
}

getUser(1);

//POST
function addNewUser() {
    axios.post(url,newUser)
    .then(response => {
        console.log(response);
    })
    .catch(error => console.error(error))
}

const newUser = {
    name: "Yasuo",
    avatar: "https://i.pinimg.com/564x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
    city: "Ionie",
}

addNewUser(newUser);

//PUT
function updateUser(id,updatedUser){
    axios.put(`${url}/${id}`, updatedUser)
    .then(response =>  console.log(response))
    .catch(error => console.error(error))
}

const updatedUser = {
    name: "Yasuo",
    avatar: "https://i.pinimg.com/564x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
    city: "Ionia",
}

updateUser(1,updatedUser);

//DELETE
function deleteUser(id){
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

deleteUser(2);