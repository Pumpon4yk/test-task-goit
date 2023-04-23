import axios from "axios";

axios.defaults.baseURL = "https://6443c62a90738aa7c077683c.mockapi.io/tweets"


async function getUsers(){
    const response = await axios.get("/users")
  return response.data
}
async function setUserFollower(id, data){

    const response = await axios.put(`/users/${id}`, data)
  return response.data

}

export{getUsers, setUserFollower}

