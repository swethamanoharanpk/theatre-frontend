import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from 'react-router-dom';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
import Navbar from '../../componenet/Navbar';
import { getSingleMovieDetails } from '../../../api';

const MovieDetails = () => {

    const [singleMovie,setSingleMovie] = useState([])

    const [startDate, setStartDate] = useState(new Date());

    console.log("dateeeeeeeeeeeeeee",startDate)

    const {id} = useParams()
    console.log("Haiiiiiiiiiiii",id)
    
    useEffect(()=>{
        getSingleMovieDetails(id).then((result)=>{
            const movieData = Array.isArray(result) ? result : [result];
            console.log("________________",movieData)
            setSingleMovie(movieData)
        })

    },[id])
  return (
    <div>
    <div>
    <Navbar/>
    </div>
    <div style={{display:'flex',flexWrap:'wrap',marginLeft:'100px',marginTop:'10px'}}>
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
    minDate={new Date()}/>
    </div>
    <div>
    {singleMovie.map((item,index)=>(
        <MDBCard style={{ maxWidth: '800px', margin:'100px',fontSize:'20px',fontFamily:'"Niramit", sans-serif'}} key={index}> 
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={item.image} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{item.movieName}</MDBCardTitle>
            <MDBCardText>
              <p>Language : {item.language}<br></br>
              Duration : {item.duration}<br></br>
              Genre : {item.genre}<br></br>
              Director : {item.director}<br></br>
              Production : {item.production}<br></br>
              Staring : {item.staring}</p>
            </MDBCardText>
            <MDBCardText style={{display:'flex'}}>
            <MDBBtn style={{width:'150px',borderRadius: '0',backgroundColor:'red',margin:'0',fontSize:'13px'}}><Link to={`/seat/${item._id}/${startDate}`} style={{textDecoration:'none',color:'inherit'}}>Book Tickets</Link></MDBBtn>
              
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    )
    )}
    </div>
    
    </div>
  )
}

export default MovieDetails


