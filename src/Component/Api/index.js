import axios from "axios"
const url = "https://jekaloapp.herokuapp.com/api/users"
const posturl = "https://jekaloapp.herokuapp.com/api/user"
const delurl = "https://jekaloapp.herokuapp.com/api"

export const Readtodo = () => axios.get(url)
export const postUser = newdd => axios.post(posturl, newdd)
export const deleteUs = (id) => axios.delete(`${delurl}/${id}`)