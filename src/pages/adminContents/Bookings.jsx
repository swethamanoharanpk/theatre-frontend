import React, { useEffect, useState } from 'react'
import { bookingsAdminside} from '../../../api'
import { useSelector } from 'react-redux'

const Bookings = () => {
  const [booking,setBooking] = useState([])
  // const userId = useSelector((logDetails)=>logDetails.userInfo.login)
  // console.log("iddddddddddddddd",userId)
  // if(userId){
  //   var id = userId.id
  // }
  useEffect(()=>{
    bookingsAdminside().then((result)=>{
      console.log("dataaaaaaaaaaaadminnnnnn",result)
      setBooking(result)
    })

  },[])

  return (
    <div style={{
      padding:'15px',marginLeft:'40px'
    }}>
    {booking.map((list,index)=>(
      <div key={index} style={{borderBottom:'2px solid black'}}>
      <p>Name : {list.userName}</p>
      <p>MovieName : {list.movieName}</p>
      <p>showTime : {list.showTime}</p>
      <p>showDate : {list.showDate}</p>
      <p>TotalPrice : {list.totalPrice}</p>
      {list.seats && list.seats.map((seat,seatIndex)=>(
        <div>
        <p>Seats : {seat.row } - {seat.seat_id }</p>
        </div>
      ))}
      </div>
    ))}
    </div>
  )
}

export default Bookings