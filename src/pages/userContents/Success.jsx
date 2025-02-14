import React from 'react'
import { useSelector } from 'react-redux'
import { getMailData } from '../../../api'
import { useNavigate } from 'react-router-dom'


const Success = () => {

  const navigate = useNavigate()
  const userId = useSelector((logDetails)=>logDetails.userInfo.login)
  console.log("iddddddddddddddd",userId)
  if(userId){
    var id = userId.id
  }


  const getMail = ()=>{
    getMailData(id).then((result)=>{
      console.log(result)
    })

    setTimeout(()=>{
      navigate('/')

    },3000)

  }
  return (
    <div style={{backgroundColor: '#f8f9fa',height:'100vh'}}>

    <div style={styles.container}>
      {/* Checkmark Icon */}
      <div style={styles.checkmarkContainer}>
        <span style={styles.checkmark}>✔</span>
      </div>

      {/* Success Message */}
      <h1 style={styles.title}>Booking Confirmed!</h1>
      <p style={styles.message}>
        Your booking was successful. Successful Transactions are Provided with Ticket details through E-mail
      </p>
      </div>

    <div>
    <div style={{textAlign:'center'}}>
    <button style={{border:'none',backgroundColor:'green',color:'white',borderRadius:'5px'}} onClick={getMail}>Click Here</button>
    <p>Click here to get your ticket</p>
    </div>
    
    
    </div>
    
    </div>
  )


  
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f8f9fa",
    height: "400px",
  },
  checkmarkContainer: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#28a745",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  checkmark: {
    color: "#fff",
    fontSize: "3rem",
    fontWeight: "bold",
  },
  title: {
    color: "#28a745",
    fontSize: "2rem",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1rem",
    marginBottom: "20px",
  } 
  
};

export default Success