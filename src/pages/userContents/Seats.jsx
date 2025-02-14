
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import '../../styles/Seat.css';
import { bookingSeats, getFilteredSchedule, getSchedule, getSingleMovieDetails } from '../../../api';
import Navbar from '../../componenet/Navbar';

function Seats() {
    const params = useParams();
    const { id, date } = params;

    const [userId,setUserId] = useState(null)

    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [movie, setMovie] = useState(null);
    const [screen, setScreen] = useState(null);
    const [filtered,setFiltered] = useState(null)
    const [selectedDate,setSlectedDate] = useState(null)

  

    useEffect(() => {
        getSingleMovieDetails(id).then((result) => {
            setMovie(result);

            
            
        });
    }, [id]);

    console.log("userIdddddddddddddddddddddddddddd",userId)


    useEffect(() => {
        getSchedule(id, date).then((result) => {
            setScreen(result);
            if (result.movieSchedules && result.movieSchedules.length > 0) {
                setSelectedTime(result.movieSchedules[0]);
            }
            
        });
    }, [id, date]);

   

    useEffect(()=>{
      getFilteredSchedule(id,date).then((result)=>{
        setFiltered(result)
      })
    },[id,date])

    console.log("screennnnnnnnnnnnnn",screen)
    console.log("timeeeeeeeeeeeeeeee",selectedTime)
    console.log("filterrrrrrrrrrrrrrrrr",filtered)

    const selectDeselectSeat = (seat) => {
      
        const isSelected = selectedSeat.some((s) =>
            s.row === seat.row && 
            s.col === seat.col &&
            s.seat_id === seat.seat_id
        );

        if (isSelected) {
            setSelectedSeat(selectedSeat.filter((s) =>
                s.row !== seat.row ||
                s.col !== seat.col ||
                s.seat_id !== seat.seat_id
            ));
        } else {
            setSelectedSeat([...selectedSeat, seat]);
        }
        console.log("seattttttttttttttttttttt", seat)
    };




  const generateSeatLayout = () => {
    if (!screen || !selectedTime) {
        return <h4>No Movie Scheduled for This Date!</h4>;
    }


    

    const baseDate = new Date(date); 

    if (isNaN(baseDate.getTime())) {
        return <h4>Invalid date format!</h4>;
    }

    const [hours, minutes] = selectedTime.showTime.split(':').map(Number); // Split '11:00' into hours and minutes

    // Construct showDateTime by setting hours and minutes
    const showDateTime = new Date(baseDate);
    showDateTime.setHours(hours, minutes, 0, 0); // Set hours, minutes, seconds, and milliseconds

    const currentDateTime = new Date(); // Get the current date and time

    if (showDateTime <= currentDateTime) {
        return <h4>Showtime has expired. Seats cannot be booked.Please Select Another Time</h4>;

        
    }

    console.log("checkkkkkkkkkkkkiiiiiiiingggggggggg",showDateTime,currentDateTime)




    const scheduleIndex = screen.movieSchedules.findIndex((t) => t.showTime === selectedTime.showTime);
    
    // if (scheduleIndex === -1 || !screen.seats || !screen.seats[scheduleIndex] || !screen.seats[scheduleIndex].rows) {
    //     return <p>No seats available for this time slot.</p>;
    // }

    const notAvailableSeats = screen.movieSchedules[scheduleIndex].notAvailableSeats || [];
    const seatBlock = screen.seats[scheduleIndex];
    console.log("seatblock",scheduleIndex)

    return (
        <div>
        {showDateTime > currentDateTime ? (
        screen.seats.map((seatType, index) => (
            <div className="seat-type" key={index}>
                <div className="seat-rows">
                    {seatType.rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="seat-row">
                            <p className="rowname">{row.rowName}</p>
                            <div className="seat-cols">
                                {row.cols.map((col, colIndex) => (
                                    <div key={colIndex} className="seat-col">
                                        {col.seats.map((seat, seatIndex) => {
                                            const isUnavailable = notAvailableSeats.some(
                                                (s) =>
                                                    s.row === row.rowName &&
                                                    s.seat_id === seat.seat_id &&
                                                    s.col === colIndex
                                            );
        
                                            const isSelected = selectedSeat.some(
                                                (s) =>
                                                    s.row === row.rowName &&
                                                    s.seat_id === seat.seat_id &&
                                                    s.col === colIndex
                                            );
        
                                            const seatClass = isUnavailable
                                                ? "seat-unavailable"
                                                : isSelected
                                                ? "seat-selected"
                                                : "seat-available";

                                                const seatNumber = colIndex > 0
                                                ? 11 + seatIndex : seatIndex + 1
        
                                            return (
                                                <span
                                                    key={seatIndex}
                                                    className={seatClass}
                                                    onClick={() =>{
                                                        if(!isUnavailable && selectedSeat.length <4) {
                                                        
                                                        selectDeselectSeat({
                                                            row: row.rowName,
                                                            col: colIndex,
                                                            seat_id: seat.seat_id,
                                                            price: seatType.price
                                                        })
                                                    }
                                                    }
                                                    }
                                                >
                                                    {seatNumber}
                                                </span>

                                                
                                            );
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    ))):(<h5> time expired no seat available for this time slot select another time</h5>)}
        
        
        </div>
    

);
};



var userDetails = useSelector((info)=>info.userInfo.login)
console.log("userrrrrrrrrrrrrrrrrrrr",userDetails.id)



async function handleBooking() {
    
    try {
        console.log("handle booking",selectedTime.showTime)
        
        const response = await bookingSeats({
            showTime: selectedTime.showTime,
            showsDate:date,
            showDate: date,
            movieId: id,
            movieName:movie.movieName,
            userId: userDetails.id,
            seats: selectedSeat,
            totalPrice: selectedSeat.reduce((acc, seat) => acc + seat.price, 0),
            paymentId: '123456789',
            paymentType: 'online',
        });

        console.log("urllllllllllllllllllllll",response.session.url)

        if (response.session?.url) {
            window.location.href = response.session.url;
        }

        
    } catch (error) {
        console.error("Error during booking:", error);
    }
}




  if(screen){
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~", selectedTime)
  }




    return (
        <div className='selectseatpage'>
        <Navbar/>
        {
          movie && screen &&
          <div className='s1'>
          <div className='head'>
          </div>
          </div>
        }
        {
    
          screen &&
          <div className='selectedseat'>
          <div className='timecont'>
          {
            screen.movieSchedules.map((schedule,index)=>(
              
              
          
              <h6 key={index}
              className={selectedTime?._id === schedule._id ? 'selected' : 'time'}
              
              onClick={()=>{
                setSelectedTime(schedule)
                setSelectedSeat([])
            
              }}
              
              >{schedule.showTime}</h6>
              
              
              
            ))
          }
          </div>
          </div>
        }


        <div className='indicators'>
          <div>
            <span className='seat-unavailable'></span>
            <p>Not Available</p>
          </div>
          <div>
            <span className='seat-available'></span>
            <p>Available</p>
          </div>
          <div>
            <span className='seat-selected'></span>
            <p>Selected</p>
          </div>
        </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>

                {generateSeatLayout()}
                <div className='totalcont' style={{borderLeft:'2px solid brown',marginRight:'100px'}}>
                <div className='total'>
                <p>Movie Name : {movie?.movieName}</p>
                <p>Theatre : PixelFrames</p>
                <p>Timing : {selectedTime?.showTime}</p>
                <p>Date : {selectedTime?.showDate}</p>
                <p>Total Price</p>
                <p>Rs. {selectedSeat.reduce((acc,seat)=> acc + seat.price , 0)}</p>
                </div>
                <button className='button' onClick={handleBooking}>
                Book Now
                </button>
                <button className='buttontwo'>
                <Link to={'/'} style={{textDecoration:'none',color:'inherit'}}> Cancel</Link>
                </button>
                </div>
                
            </div>
        </div>
    );
}

export default Seats;






