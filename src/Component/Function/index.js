import * as api from "../Api/index"

const allUser = async() =>{
  try{
  const {data} =  await api.Readtodo()
  return data
 

  }catch(error){
   console.log(error)
  }
}

const createData = async (userd) => {
  try {
  const {data} = await api.postUser(userd)
  return data;
  }catch(error){
    console.log(error)
  }
}

const deleteUser = async (id) =>{
  try {
   await api.deleteUs(id)
    }catch(error){
      console.log(error)
    }
}

export {allUser, createData, deleteUser}