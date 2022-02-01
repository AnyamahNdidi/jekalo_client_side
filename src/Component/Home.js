import React from 'react'
import styled from "styled-components"
import { AiOutlineDelete } from 'react-icons/ai'
import {allUser, createData, deleteUser} from "../Component/Function/index"

function Home() {

  const [alldata , setAllData] = React.useState(null)
  const [usersD, setUserD] = React.useState({
    first_name:"",
    last_name:"",
    username:"",
    date_of_birth:""
  })
  const [currentId, setCurremtId] = React.useState(0)

  const getData = async ()=>{
    const myd = await allUser()
    if (myd) {
      setAllData(myd)
    }
    console.log("see data",myd)
    console.log( "see data", alldata)
  }

  const onHandleSubmit = async (e)=>{
    e.preventDefault()
    const result = await createData(usersD)
    setAllData([...alldata, result])
    Clear()
  }

  
  const Clear = () => {
    // setCurremtId(0)
    setUserD({
      first_name:"",
      last_name:"",
      username:"",
      date_of_birth:""
    })
  }

  const deleteFun = async (id)=>{
     await deleteUser(id)
     const myUser = [...alldata]
     myUser.filter(todo => todo.id !== id)
     setAllData(myUser)
     window.location.reload()
  }

  // React.useEffect(() => {
  //   let currentTodo = currentId != 0 ? alldata.find(todo => todo._id === currentId) :
  //     { title: " ", content: " " }
  //     setUserD(currentTodo)
  // }, [currentId])

  React.useEffect(()=>{
    getData()
  },[])

 
  return (
   <Container>
     <Wrapper>
       <Con1>
         <Dform onSubmit={onHandleSubmit}>
           <InputAll>
         
           <DDiv >
           <Label>First Name</Label>
           <Input placeholder='first Name'
           required={true}
           value={usersD.first_name}
           onChange={e => setUserD({...usersD, first_name: e.target.value})}
           />

           </DDiv>
           
           <DDiv >
           <Label>Last Name</Label>
           <Input placeholder='Last Name'
            required={true}
             value={usersD.last_name}
             onChange={e => setUserD({...usersD, last_name: e.target.value})}
           />

           </DDiv>
           <DDiv >
           <Label>Username</Label>
           <Input placeholder='Username'
               required={true}
              value={usersD.username}
             onChange={e => setUserD({...usersD, username: e.target.value})}
           
           />

           </DDiv>
           <DDiv >
           <Label>Date Of Birth</Label>
           <Input placeholder='Date Of Birth'
            required={true}
            value={usersD.date_of_birth}
            onChange={e => setUserD({...usersD, date_of_birth: e.target.value})}
           />

           </DDiv>
           

           </InputAll>

           <ButtonAll>
             <Button type='submit'>
               Submit
             </Button>

           </ButtonAll>

         </Dform>

       </Con1>
       <Con2>
         <User>User</User>
         {
           alldata?.map((props)=>(
            <Mydata key={props._id}>
            <Pre>{props.name_prefix}</Pre>
            <UserN>{props.username}</UserN>
            <Full>{props.first_name} &nbsp; {props.last_name}</Full>
            <DateOf>{props.date_of_birth}</DateOf>
            <Ic onClick={()=>{
              deleteFun(props.username)
            }}></Ic>
          </Mydata>
           ))
         }
       

       </Con2>

     </Wrapper>
   </Container>
  )
}

export default Home

const Pre = styled.div`
width: 50px;
height: 50px;
background-color: #11468F;
border-radius: 50%;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 500;
`
const UserN = styled.div`
width: 200px;
height: 40px;
display: flex;
padding-left: 30px;
align-items: center;
font-weight: 500;
`
const Full = styled.div`
width: 700px;
height: 40px;
display: flex;
align-items: center;


`
const DateOf= styled.div`
display: flex;
width: 100px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
`
const Ic= styled(AiOutlineDelete)`
display: flex;
/* width: 50px; */
justify-content: center;
align-items: center;
height: 40px;
color: red;
font-size: 20px;
cursor: pointer;
`
const Mydata = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
border-bottom: 1px solid lightgray;
height: auto;

padding: 10px;
`

const User = styled.div`
width: 100%;
height: 50px;
background-color:#E5E5E5;
border-radius: 5px;
display: flex;
align-items: center;
font-weight: 500;
font-size: 20px;
padding-left: 10px;
`

const Button= styled.button`
width: 250px;
height: 50px;
background-color: #11468F;
color: white;
border-radius: 5px;
cursor: pointer;
`

const DDiv = styled.div`
height: 100px;
width: 300px;
display: flex;
flex-direction: column;
display: flex;
justify-self: center;

margin: 10px;
`

const Input = styled.input`
height: 50px;
border:1px solid #BFBFBF ;
outline: none;
border-radius: 5px;
`
const Label = styled.label`
color: #11468F;
font-weight: 700;
font-size:25px
`

const ButtonAll = styled.div`
flex: 1;
height: 250px;

padding-top: 45px;

`
const InputAll =  styled.div`
width: 650px;
height: auto;
display: flex;
flex-wrap: wrap;

`

const Dform  = styled.form`
display: flex;
flex-wrap: wrap;
width: 100%;
`
const Container =  styled.div`
width: 100%;
height: calc(100% - 100vh);
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper =  styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  

`
const Con1 =  styled.div`
  width: 100%;
  height: auto;
  padding-top: 100px;
 
`
const Con2 =  styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

`
