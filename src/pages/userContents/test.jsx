// import { useParams } from 'react-router-dom';
// import '../../styles/Seat.css'
// import React, { useEffect, useState } from "react";
// import { getSchedule, getSingleMovieDetails } from '../../../api';

// const formattedDetails = mailDetails.map((booking) => {
//   return `Booking ID: ${booking._id}, Movie: ${booking.movieName},
//   Show Time : ${booking.showTime}, Show Date : ${booking.showDate} ,
//   TotalPrice: ${booking.totalPrice},Seats: ${booking.seats.map((seat)=>{{seat.row}-{seat.seat_id}})}`;
// }).join("\n");



// function Seats() {


//   const screen = {
//     timeSlot: [
//       {
//         time: '10.00 AM',
//         seats: [
//           {
//             type: 'top',
//             rows: [
//               {
//                 rowName: 'H',
//                 cols: [
//                   {
//                     seats: [
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '1'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '2'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '3'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'unavailable',
//                         seat_id: '4'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '5'
//                       }
//                     ]
//                   },
//                   {
//                     seats: [
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '1'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '2'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '3'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '4'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'unavailable',
//                         seat_id: '5'
//                       }

//                     ]
//                   }
//                 ]




//               },
//               {
//                 rowName: 'G',
//                 cols: [
//                   {
//                     seats: [
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '1'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '2'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '3'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'unavailable',
//                         seat_id: '4'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '5'
//                       }
//                     ]
//                   },
//                   {
//                     seats: [
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '1'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '2'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '3'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'available',
//                         seat_id: '4'
//                       },
//                       {
//                         type: 'seat',
//                         status: 'unavailable',
//                         seat_id: '5'
//                       }
//                     ]
//                   }
//                 ]
//               }

//             ],
//             price: 150
//           }
//         ]
//       }
//     ]
//   }

//   const params = useParams()

//   const { id, date } = params

//   console.log("paramssssssssssssssssss", id, date)


//   const [selectedTime, setSelectedTime] = useState(screen.timeSlot[0])
//   // const [selectedTime,setSelectedTime] = useState("")
//   const [selectedSeat, setSelectedSeat] = useState([])
//   const [movie, setMovie] = useState(null)


//   useEffect(()=>{
//     getSingleMovieDetails(id).then((result)=>{
//       console.log("+++++++++++++++++",result)
//       setMovie(result)
//     })

//   },[])

//   useEffect(()=>{
//     getSchedule(id,date).then((result)=>{
//       console.log("final movieeeeeeeeeeeeeeeeeee",result)
//       setSelectedTime(result[0])
//     })


//   },[])
//   console.log("timeeeeeeeeeeeeeeeeee",selectedTime)



//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const movieDetails = await getSingleMovieDetails(id);
//   //       console.log("+++++++++++++++++", movieDetails);
//   //       setMovie(movieDetails);

//   //       const schedule = await getSchedule(id, date);
//   //       console.log("final movieeeeeeeeeeeeeeeeeee", schedule);

//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [id, date]); // Ensure id and date are added to the dependency array.




//   const selectDeselectSeat = (seat) => {
//     console.log("seattttttttttttttttttttt", seat)
//     const isSelected = selectedSeat.some((s) => (
//       s.row === seat.row &&
//       s.col === seat.col &&
//       s.seat_id === seat.seat_id

//     ))

//     if (isSelected) {
//       setSelectedSeat(selectedSeat.filter((s) => (
//         s.row != seat.row ||
//         s.col != seat.col ||
//         s.seat_id !== seat.seat_id)));
//     } else {
//       setSelectedSeat([...selectedSeat, seat])

//     }
//   }

//   console.log("seatt finallllllllllllllllllllll", selectedSeat)




//   const generateSeatLayout = () => {


//     const x = screen.timeSlot.findIndex((t) => t.time == selectedTime.time)

//     return screen.timeSlot[x].seats.map((seatType, index) => (
//       <div className='seat-type' key={index}>
//         <h2>{seatType.type} - Rs. {seatType.price}</h2>
//         <div className='seat-rows'>
//           {
//             seatType.rows.map((row, rowIndex) => (
//               <div className='seat-row' key={rowIndex}>
//                 <p className='rowname'>{row.rowName}</p>
//                 <div className='seat-cols'>
//                   {row.cols.map((col, colIndex) => (
//                     <div className='seat-col' key={colIndex}>
//                       {col.seats.map((seat, seatIndex) => (
//                         <div key={seatIndex}>
//                           {
//                             seat.status == 'available' &&
//                             <span className={
//                               selectedSeat.find((s) => {
//                                 return s.row === row.rowName && s.seat_id === seat.seat_id && s.col === colIndex
//                               }) ? 'seat-selected' : 'seat-available'
//                             }
//                               onClick={() => selectDeselectSeat({
//                                 row: row.rowName,
//                                 col: colIndex,
//                                 seat_id: seat.seat_id,
//                                 price: seatType.price
//                               })}>
//                               {seatIndex + 1}
//                             </span>

//                           }
//                           {
//                             seat.status == 'unavailable' &&
//                             <span className='seat-unavailable'
//                             >
//                               {seatIndex + 1}
//                             </span>

//                           }

//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))
//           }

//         </div>
//       </div>
//     ))

//   }









//   return (
//     <div>

//       <div className='selectseat'>
//         <div className='timecont'>
//           {screen.timeSlot.map((time, index) => {
//             return (
//               <h6 key={index}
//                 className={selectedTime.time === time.time ? 'time-selected' : 'time'}
//                 onClick={() => {
//                   setSelectedTime(time)
//                 }}
//               >{time.time}

//               </h6>
//             )

//           })}
//         </div>
//         <div className='indicators'>
//           <div>
//             <span className='seat-unavailable'></span>
//             <p>Not Available</p>
//           </div>
//           <div>
//             <span className='seat-available'></span>
//             <p>Available</p>
//           </div>
//           <div>
//             <span className='seat-selected'></span>
//             <p>Selected</p>
//           </div>
//         </div>
          
//         <div className='totalcontainer'></div>
//       </div>

//     </div>
//   )
// }

// export default Seats

// import React, { useEffect, useState } from 'react';
// import AdminNavbar from '../../componenet/AdminNavbar';
// import { updateMovies, getMovieData } from '../../../api';
// import {
//   MDBCard,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardBody,
//   MDBCardImage,
//   MDBRow,
//   MDBCol,
//   MDBBtn,
//   MDBModal,
//   MDBModalDialog,
//   MDBModalContent,
//   MDBModalBody,
//   MDBModalHeader,
//   MDBModalTitle,
//   MDBModalFooter
// } from 'mdb-react-ui-kit';

// export const AdminHome = () => {
//   const [movie, setMovie] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null); // Stores the selected movie for the modal
//   const [basicModal, setBasicModal] = useState(false);

//   useEffect(() => {
//     getMovieData().then((result) => {
//       setMovie(result);
//     });
//   }, []);

//   const toggleOpen = (movie) => {
//     setSelectedMovie(movie); // Set the selected movie details
//     setBasicModal(!basicModal); // Toggle the modal
//   };

//   const update = (id) => {
//     const { movieName, language, genre, duration, director, production, staring, status } = selectedMovie;
//     updateMovies({ movieName, language, genre, duration, director, production, staring, status }, id).then((data) => {
//       console.log(data);
//       setBasicModal(false); // Close modal after update
//     });
//   };

//   const handleInputChange = (field, value) => {
//     setSelectedMovie((prev) => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div>
//       <AdminNavbar />
//       <div>
//         <div
//           style={{
//             borderBottom: '2px solid black',
//             marginTop: '30px',
//             width: '300px',
//             marginLeft: '100px',
//             textAlign: 'center'
//           }}
//         >
//           <h5>Added Movies</h5>
//         </div>
//         <div>
//           {movie.map((movies) => (
//             <div
//               key={movies._id}
//               style={{
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 gap: '20px',
//                 marginBottom: '20px',
//                 marginLeft: '100px',
//                 marginTop: '70px'
//               }}
//             >
//               <MDBCard style={{ maxWidth: '540px', display: 'flex', flexDirection: 'row' }}>
//                 <MDBRow className='g-0'>
//                   <MDBCol md='4'>
//                     <MDBCardImage src={movies.image} alt='...' fluid />
//                   </MDBCol>
//                   <MDBCol md='8'>
//                     <MDBCardBody>
//                       <MDBCardTitle>{movies.movieName}</MDBCardTitle>
//                       <MDBCardText>
//                         <p>
//                           Language : {movies.language}
//                           <br />
//                           Duration : {movies.duration}
//                           <br />
//                           Genre : {movies.genre}
//                           <br />
//                           Director : {movies.director}
//                           <br />
//                           Production : {movies.production}
//                           <br />
//                           Starring : {movies.staring}
//                           <br />
//                           Status : {movies.status}
//                         </p>
//                       </MDBCardText>
//                       <MDBCardText>
//                         <button
//                           onClick={() => toggleOpen(movies)}
//                           style={{
//                             backgroundColor: 'red',
//                             borderRadius: '10px',
//                             border: 'none',
//                             color: 'white'
//                           }}
//                         >
//                           Update
//                         </button>
//                         <button
//                           style={{
//                             backgroundColor: 'red',
//                             borderRadius: '10px',
//                             border: 'none',
//                             color: 'white',
//                             marginLeft: '5px'
//                           }}
//                         >
//                           Delete
//                         </button>
//                       </MDBCardText>
//                     </MDBCardBody>
//                   </MDBCol>
//                 </MDBRow>
//               </MDBCard>
//             </div>
//           ))}

//           {/* Centralized Modal */}
//           {basicModal && selectedMovie && (
//             <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
//               <MDBModalDialog>
//                 <MDBModalContent style={{ backgroundColor: 'black', border: '1px solid white' }}>
//                   <MDBModalHeader>
//                     <MDBModalTitle>UPDATE</MDBModalTitle>
//                     <MDBBtn className='btn-close' color='none' onClick={() => setBasicModal(false)}></MDBBtn>
//                   </MDBModalHeader>
//                   <MDBModalBody style={{ color: 'white' }}>
//                     <form style={{ display: 'flex', flexDirection: 'column', padding: '50px' }}>
//                       <label>Movie Name</label>
//                       <input
//                         value={selectedMovie.movieName}
//                         onChange={(e) => handleInputChange('movieName', e.target.value)}
//                       />
//                       <label>Language</label>
//                       <input
//                         value={selectedMovie.language}
//                         onChange={(e) => handleInputChange('language', e.target.value)}
//                       />
//                       <label>Genre</label>
//                       <input
//                         value={selectedMovie.genre}
//                         onChange={(e) => handleInputChange('genre', e.target.value)}
//                       />
//                       <label>Duration</label>
//                       <input
//                         value={selectedMovie.duration}
//                         onChange={(e) => handleInputChange('duration', e.target.value)}
//                       />
//                       <label>Director</label>
//                       <input
//                         value={selectedMovie.director}
//                         onChange={(e) => handleInputChange('director', e.target.value)}
//                       />
//                       <label>Production</label>
//                       <input
//                         value={selectedMovie.production}
//                         onChange={(e) => handleInputChange('production', e.target.value)}
//                       />
//                       <label>Staring</label>
//                       <input
//                         value={selectedMovie.staring}
//                         onChange={(e) => handleInputChange('staring', e.target.value)}
//                       />
//                       <label>Status</label>
//                       <select
//                         value={selectedMovie.status}
//                         onChange={(e) => handleInputChange('status', e.target.value)}
//                       >
//                         <option value='running'>running</option>
//                         <option value='comingsoon'>comingsoon</option>
//                         <option value='expires'>expires</option>
//                       </select>
//                     </form>
//                   </MDBModalBody>
//                   <MDBModalFooter>
//                     <MDBBtn color='danger' onClick={() => setBasicModal(false)}>
//                       Close
//                     </MDBBtn>
//                     <MDBBtn color='warning' onClick={() => update(selectedMovie._id)}>
//                       UPDATE
//                     </MDBBtn>
//                   </MDBModalFooter>
//                 </MDBModalContent>
//               </MDBModalDialog>
//             </MDBModal>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };



// seat generatelayout
// const generateSeatLayout = () => {
    //     if (!screen || !selectedTime) {
    //         return <p>Loading seat layout...</p>;
    //     }

    //     const scheduleIndex = screen.movieSchedules.findIndex((t) => t.showTime === selectedTime);
    //     let notavailableseats = screen.movieSchedules[scheduleIndex].notAvailableSeats

    //     if (scheduleIndex === -1 || !screen.seats || screen.seats.length === 0) {
    //         return <p>No seats available for this time slot.</p>;
    //     }

    //     const seatBlock = screen.seats[scheduleIndex];

    //     return (
    //         <div className='seat-type'>
    //         <div className='seat-rows'>
    //             {seatBlock.rows.map((row, rowIndex) => (
    //                 <div key={rowIndex} className="seat-row">
    //                     <p className='rowname'>Row: {row.rowName}</p>
    //                         <div className='seat-cols'>
    //                         {row.cols.map((col, colIndex)=>(
    //                           <div className='seat-col' key={colIndex}>
    //                           {col.seats.map((seat,seatIndex)=>{
    //                             console.log(seat),
    //                             <div key={seatIndex}>
    //                             {
    //                               notavailableseats.find((s)=>{
    //                                 s.row === row.rowname && 
    //                                 s.seat_id === seat.seat_id &&
    //                                 s.col === colIndex
    //                               }) ?
    //                               <span className='seat-unavailable'>
    //                               {seatIndex+1}
    //                               </span>
    //                               :
    //                               <span>
    //                               {seatIndex+1}
    //                               </span>
    //                             }
    //                             </div>
    //                           })}
    //                           </div>
    //                         ))}
                                
    //                         </div>
    //                     ))
    //                 </div>
    //             ))}
    //         </div>
    //         </div>
    //     );



    // const generateSeatLayout = () => {
    //   if (!screen || !selectedTime) {
    //       return <p>Loading seat layout...</p>;
    //   }
  
    //   const scheduleIndex = screen.movieSchedules.findIndex((t) => t.showTime === selectedTime);
    //   if (scheduleIndex === -1 || !screen.seats || screen.seats.length === 0) {
    //       return <p>No seats available for this time slot.</p>;
    //   }
  
    //   const notavailableseats = screen.movieSchedules[scheduleIndex].notAvailableSeats || [];
    //   const seatBlock = screen.seats[scheduleIndex];
  
    //   return (
    //       <div className="seat-type">
    //           <div className="seat-rows">
    //               {seatBlock.rows.map((row, rowIndex) => (
    //                   <div key={rowIndex} className="seat-row">
    //                       <p className="rowname">Row: {row.rowName}</p>
    //                       <div className="seat-cols">
    //                           {row.cols.map((col, colIndex) => (
    //                               <div key={colIndex} className="seat-col">
    //                                   {col.seats.map((seat, seatIndex) => (
    //                                     console.log(seat),
    //                                     <div key={seatIndex}>
    //                                     {
    //                                       notavailableseats.find((s)=>{
    //                                         s.row === row.rowname &&
    //                                         s.seat_id === seat.seat_id &&
    //                                         s.col === colIndex

    //                                       }) ?
    //                                       <span className='seat-unavailable'>
    //                                       {seatIndex+1}
    //                                       </span>
    //                                       :
    //                                       <span className={selectedSeat.find((s)=>(
    //                                         s.row === row.rowname &&
    //                                         s.seat_id ===seat.seat_id &&
    //                                         s.col === colIndex
    //                                       )) ? "seat-selected" : "seat-available"
    //                                     }
    //                                     onClick={()=>selectDeselectSeat({
    //                                       row : row.rowname,
    //                                       col : colIndex,
    //                                       seat_id : seat.seat_id,
                                        
    //                                     })}>
    //                                     {seatIndex+1}
    //                                       </span>
    //                                     }</div>
    //                                   )


                                          
                                          
    //                                   )}
    //                               </div>
    //                           ))}
    //                       </div>
    //                   </div>
    //               ))}
    //           </div>
    //       </div>
    //   );


    //generate layout
    
  //   const generateSeatLayout = () => {
  //     if (!screen || !selectedTime) {
  //         return <p>Loading seat layout...</p>;
  //     }
  
  //     const scheduleIndex = screen.movieSchedules.findIndex((t) => t.showTime === selectedTime.showTime);
  //     if (scheduleIndex === -1 || !screen.seats || screen.seats.length === 0) {
  //         return <p>No seats available for this time slot.</p>;
  //     }
  //     console.log("indexxxxxxxxxx",scheduleIndex)
  
  //     const notavailableseats = screen.movieSchedules[scheduleIndex].notAvailableSeats || [];
  //     const seatBlock = screen.seats[scheduleIndex];
  
  //     return (
  //         <div className="seat-type">
  //             <div className="seat-rows">
  //                 {seatBlock.rows.map((row, rowIndex) => (
  //                     <div key={rowIndex} className="seat-row">
  //                         <p className="rowname">Row: {row.rowName}</p>
  //                         <div className="seat-cols">
  //                             {row.cols.map((col, colIndex) => (
  //                                 <div key={colIndex} className="seat-col">
  //                                     {col.seats.map((seat, seatIndex) => {
  //                                         const isUnavailable = notavailableseats.some(
  //                                             (s) =>
  //                                                 s.row === row.rowName &&
  //                                                 s.seat_id === seat.seat_id &&
  //                                                 s.col === colIndex
  //                                         );
  
  //                                         const isSelected = selectedSeat.some(
  //                                             (s) =>
  //                                                 s.row === row.rowName &&
  //                                                 s.seat_id === seat.seat_id &&
  //                                                 s.col === colIndex
  //                                         );
  
  //                                         const seatClass = isUnavailable
  //                                             ? "seat-unavailable"
  //                                             : isSelected
  //                                             ? "seat-selected"
  //                                             : "seat-available";
  
  //                                         return (
  //                                             <span
  //                                                 key={seatIndex}
  //                                                 className={seatClass}
  //                                                 onClick={() =>
  //                                                     !isUnavailable &&
  //                                                     selectDeselectSeat({
  //                                                         row: row.rowName,
  //                                                         col: colIndex,
  //                                                         seat_id: seat.seat_id,
  //                                                     })
  //                                                 }
  //                                             >
  //                                                 {seatIndex + 1}
  //                                             </span>
  //                                         );
  //                                     })}
  //                                 </div>
  //                             ))}
  //                         </div>
  //                     </div>
  //                 ))}
  //             </div>
  //         </div>
  //     );
  // };



  // import { useParams } from 'react-router-dom';
//import '../../styles/Seat.css'
// import React, { useEffect, useState } from "react";
// import { getSchedule, getSingleMovieDetails } from '../../../api';





// function Seats() {


//   // const screen = {
//   //   timeSlot: [
//   //     {
//   //       time: '10.00 AM',
//   //       seats: [
//   //         {
//   //           type: 'top',
//   //           rows: [
//   //             {
//   //               rowName: 'H',
//   //               cols: [
//   //                 {
//   //                   seats: [
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '1'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '2'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '3'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'unavailable',
//   //                       seat_id: '4'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '5'
//   //                     }
//   //                   ]
//   //                 },
//   //                 {
//   //                   seats: [
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '1'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '2'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '3'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '4'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'unavailable',
//   //                       seat_id: '5'
//   //                     }

//   //                   ]
//   //                 }
//   //               ]




//   //             },
//   //             {
//   //               rowName: 'G',
//   //               cols: [
//   //                 {
//   //                   seats: [
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '1'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '2'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '3'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'unavailable',
//   //                       seat_id: '4'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '5'
//   //                     }
//   //                   ]
//   //                 },
//   //                 {
//   //                   seats: [
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '1'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '2'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '3'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'available',
//   //                       seat_id: '4'
//   //                     },
//   //                     {
//   //                       type: 'seat',
//   //                       status: 'unavailable',
//   //                       seat_id: '5'
//   //                     }
//   //                   ]
//   //                 }
//   //               ]
//   //             }

//   //           ],
//   //           price: 150
//   //         }
//   //       ]
//   //     }
//   //   ]
//   // }

//   const params = useParams()

//   const { id, date } = params

//   console.log("paramssssssssssssssssss", id, date)


//   const [selectedTime, setSelectedTime] = useState(null)
//   // const [selectedTime,setSelectedTime] = useState("")
//   const [selectedSeat, setSelectedSeat] = useState([])
//   const [movie, setMovie] = useState(null)
//   const [screen,setScreen] = useState("")


//   useEffect(()=>{
//     getSingleMovieDetails(id).then((result)=>{
//       console.log("+++++++++++++++++",result)
//       setMovie(result)
//     })

//   },[])

//   useEffect(()=>{
//     getSchedule(id,date).then((result)=>{
//       console.log("final movieeeeeeeeeeeeeeeeeee",result)
//       setScreen(result)
//       setSelectedTime(result.movieSchedules[0].showTime)

      
//     })


//   },[])
//   console.log("ressssssssssssssssss",screen)
//   console.log("timeeeeeeeeeeeeeeeeee",selectedTime)



//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const movieDetails = await getSingleMovieDetails(id);
//   //       console.log("+++++++++++++++++", movieDetails);
//   //       setMovie(movieDetails);

//   //       const schedule = await getSchedule(id, date);
//   //       console.log("final movieeeeeeeeeeeeeeeeeee", schedule);

//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, [id, date]); // Ensure id and date are added to the dependency array.




//   const selectDeselectSeat = (seat) => {
//     console.log("seattttttttttttttttttttt", seat)
//     const isSelected = selectedSeat.some((s) => (
//       s.row === seat.row &&
//       s.col === seat.col &&
//       s.seat_id === seat.seat_id

//     ))

//     if (isSelected) {
//       setSelectedSeat(selectedSeat.filter((s) => (
//         s.row != seat.row ||
//         s.col != seat.col ||
//         s.seat_id !== seat.seat_id)))
//     } else {
//       setSelectedSeat([...selectedSeat, seat])

//     }
//   }

//   console.log("seatt finallllllllllllllllllllll", selectedSeat)
//   console.log("[[[[[[[[[[[[[[[[[[[[[[",screen)

  
//  const generateSeatLayout = ()=>{

//   const x = screen.movieSchedules.findIndex((t)=>t.showTime === selectedTime)
//   console.log("xxxxxxxxxxxxxxxxxxx",x)
  
//   // let notavailableseats = screen.movieSchedule[x].notAvailableSeats
//   return (
//     <div>
//     {screen.seats[x].map((seatType,index)=>(
//       <div className='seat-type' key={index}>
//       <h2>{seatType.type}</h2></div>
//   ))}
    
//     </div>
//   )
//  }

 




//   return (
//     <div>

//      <button onClick={generateSeatLayout}>showSeats</button>

//     </div>
//   )
// }

// export default Seats




// import { useParams } from 'react-router-dom';
// import React, { useEffect, useState } from "react";
// import '../../styles/Seat.css';
// import { getFilteredSchedule, getSchedule, getSingleMovieDetails } from '../../../api';

// function Seats() {
//     const params = useParams();
//     const { id, date } = params;

//     const [selectedTime, setSelectedTime] = useState(null);
//     const [selectedSeat, setSelectedSeat] = useState([]);
//     const [movie, setMovie] = useState(null);
//     const [screen, setScreen] = useState(null);
//     const [filtered,setFiltered] = useState(null)

//     useEffect(() => {
//         getSingleMovieDetails(id).then((result) => {
//             setMovie(result);
//         });
//     }, [id]);

//     useEffect(() => {
//         getSchedule(id, date).then((result) => {
//             setScreen(result);
//             if (result.movieSchedules && result.movieSchedules.length > 0) {
//                 setSelectedTime(result.movieSchedules[0]);
//             }
//         });
//     }, [id, date]);

//     useEffect(()=>{
//       getFilteredSchedule(id,date).then((result)=>{
//         setFiltered(result)
//       })
//     },[id,date])

//     console.log("screennnnnnnnnnnnnn",screen)
//     console.log("timeeeeeeeeeeeeeeee",selectedTime)
//     console.log("filterrrrrrrrrrrrrrrrr",filtered)

//     const selectDeselectSeat = (seat) => {
      
//         const isSelected = selectedSeat.some((s) =>
//             s.row === seat.row && 
//             s.col === seat.col &&
//             s.seat_id === seat.seat_id
//         );

//         if (isSelected) {
//             setSelectedSeat(selectedSeat.filter((s) =>
//                 s.row !== seat.row ||
//                 s.col !== seat.col ||
//                 s.seat_id !== seat.seat_id
//             ));
//         } else {
//             setSelectedSeat([...selectedSeat, seat]);
//         }
//         console.log("seattttttttttttttttttttt", seat)
//     };





//   const generateSeatLayout = () => {
//     if (!screen || !selectedTime) {
//         return <p>Loading seat layout...</p>;
//     }

//     const scheduleIndex = screen.movieSchedules.findIndex((t) => t._id === selectedTime._id);
//     if (scheduleIndex === -1 || !screen.seats || !screen.seats[scheduleIndex] || !screen.seats[scheduleIndex].rows) {
//         return <p>No seats available for this time slot.</p>;
//     }

//     const notAvailableSeats = screen.movieSchedules[scheduleIndex].notAvailableSeats || [];
//     const seatBlock = screen.seats[scheduleIndex];
//     console.log("seatblock",seatBlock)

//     return (
//         <div>
//         {screen.seats.map((seatType,index)=>{
//             <div className='seat-type' key={index}>
//             <h3>{seatType.type}- {seatType.price}</h3>
//             <div className='seat-rows'>
//             {seatType.rows.map((row, rowIndex) => (
//                 <div key={rowIndex} className="seat-row">
//                     <p className="rowname">Row: {row.rowName}</p>
//                     <div className="seat-cols">
//                         {row.cols.map((col, colIndex) => (
//                             <div key={colIndex} className="seat-col">
//                                 {col.seats.map((seat, seatIndex) => {
                        
//                                     const isUnavailable = notAvailableSeats.some(
//                                         (s) =>
//                                             s.row === row.rowName &&
//                                             s.seat_id === seat.seat_id &&
//                                             s.col === colIndex
//                                     );

//                                     const isSelected = selectedSeat.some(
//                                         (s) =>
//                                             s.row === row.rowName &&
//                                             s.seat_id === seat.seat_id &&
//                                             s.col === colIndex
//                                     );

//                                     const seatClass = isUnavailable
//                                         ? "seat-unavailable"
//                                         : isSelected
//                                         ? "seat-selected"
//                                         : "seat-available";

//                                     return (
//                                         <span
//                                             key={seatIndex}
//                                             className={seatClass}
//                                             onClick={() =>
//                                                 !isUnavailable &&
//                                                 selectDeselectSeat({
//                                                     row: row.rowName,
//                                                     col: colIndex,
//                                                     seat_id: seat.seat_id,
//                                                 })
//                                             }
//                                         >
//                                             {seatIndex + 1}
//                                         </span>
//                                     );
//                                 })}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//             </div>
//             </div>
//         })}
//         </div>
//     );
// };



//   if(screen){
//   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~", selectedTime)
//   }

//     return (
//         <div className='selectseatpage'>
//         {
//           movie && screen &&
//           <div className='s1'>
//           <div className='head'>
//           <h1>{movie.movieName}</h1>
//           </div>
//           </div>
//         }
//         {
//           screen &&
//           <div className='selectedseat'>
//           <div className='timecont'>
//           {
//             screen.movieSchedules.map((schedule,index)=>(
              
              
          
//               <h6 key={index}
//               className={selectedTime?._id === schedule._id ? 'selected' : 'time'}
              
//               onClick={()=>{
//                 setSelectedTime(schedule)
//                 setSelectedSeat([])
            
//               }}
              
//               >{schedule.showTime}</h6>
              
              
//             ))
//           }
//           </div>
//           </div>
//         }
//             <h5>Seats for {movie?.movieName}</h5>
//             <div>
//                 <h5>{selectedTime?.showTime || "No time selected"}</h5>
//                 {generateSeatLayout()}
//             </div>
//         </div>
//     );
// }

// export default Seats;









// import { useParams } from 'react-router-dom';
// import React, { useEffect, useState } from "react";
// import '../../styles/Seat.css';
// import { getFilteredSchedule, getSchedule, getSingleMovieDetails } from '../../../api';

// function Seats() {
//     const params = useParams();
//     const { id, date } = params;

//     const [selectedTime, setSelectedTime] = useState(null);
//     const [selectedSeat, setSelectedSeat] = useState([]);
//     const [movie, setMovie] = useState(null);
//     const [screen, setScreen] = useState(null);
//     const [filtered,setFiltered] = useState(null)

//     useEffect(() => {
//         getSingleMovieDetails(id).then((result) => {
//             setMovie(result);
//         });
//     }, [id]);

//     useEffect(() => {
//         getSchedule(id, date).then((result) => {
//             setScreen(result);
//             if (result.movieSchedules && result.movieSchedules.length > 0) {
//                 setSelectedTime(result.movieSchedules[0]);
//             }
//         });
//     }, [id, date]);

//     useEffect(()=>{
//       getFilteredSchedule(id,date).then((result)=>{
//         setFiltered(result)
//       })
//     },[id,date])

//     console.log("screennnnnnnnnnnnnn",screen)
//     console.log("timeeeeeeeeeeeeeeee",selectedTime)
//     console.log("filterrrrrrrrrrrrrrrrr",filtered)

//     const selectDeselectSeat = (seat) => {
      
//         const isSelected = selectedSeat.some((s) =>
//             s.row === seat.row && 
//             s.col === seat.col &&
//             s.seat_id === seat.seat_id
//         );

//         if (isSelected) {
//             setSelectedSeat(selectedSeat.filter((s) =>
//                 s.row !== seat.row ||
//                 s.col !== seat.col ||
//                 s.seat_id !== seat.seat_id
//             ));
//         } else {
//             setSelectedSeat([...selectedSeat, seat]);
//         }
//         console.log("seattttttttttttttttttttt", seat)
//     };


  
//     const generateSeatLayout = () => {
//         if (!screen || !selectedTime) {
//             return <p>Loading seat layout...</p>;
//         }
    
//         const scheduleIndex = screen.movieSchedules.findIndex(
//             (schedule) => schedule._id === selectedTime._id
//         );
    
//         if (scheduleIndex === -1) {
//             return <p>No valid schedule found for this time slot.</p>;
//         }
    
//         const seatBlocks = screen.seats?.[scheduleIndex];
//         if (!seatBlocks || !Array.isArray(seatBlocks)) {
//             return <p>No seats available for this time slot.</p>;
//         }
    
//         const notAvailableSeats = screen.movieSchedules[scheduleIndex]?.notAvailableSeats || [];
    
//         return (
//             <div>
//                 {seatBlocks.map((seatType, index) => (
//                     <div className="seat-type" key={index}>
//                         <h3>{seatType.type} - ₹{seatType.price}</h3>
//                         <div className="seat-rows">
//                             {seatType.rows.map((row, rowIndex) => (
//                                 <div key={rowIndex} className="seat-row">
//                                     <p className="rowname">Row: {row.rowName}</p>
//                                     <div className="seat-cols">
//                                         {row.cols.map((col, colIndex) => (
//                                             <div key={colIndex} className="seat-col">
//                                                 {col.seats.map((seat, seatIndex) => {
//                                                     const isUnavailable = notAvailableSeats.some(
//                                                         (s) =>
//                                                             s.row === row.rowName &&
//                                                             s.seat_id === seat.seat_id &&
//                                                             s.col === colIndex
//                                                     );
    
//                                                     const isSelected = selectedSeat.some(
//                                                         (s) =>
//                                                             s.row === row.rowName &&
//                                                             s.seat_id === seat.seat_id &&
//                                                             s.col === colIndex
//                                                     );
    
//                                                     const seatClass = isUnavailable
//                                                         ? "seat-unavailable"
//                                                         : isSelected
//                                                         ? "seat-selected"
//                                                         : "seat-available";
    
//                                                     return (
//                                                         <span
//                                                             key={seatIndex}
//                                                             className={seatClass}
//                                                             onClick={() =>
//                                                                 !isUnavailable &&
//                                                                 selectDeselectSeat({
//                                                                     row: row.rowName,
//                                                                     col: colIndex,
//                                                                     seat_id: seat.seat_id,
//                                                                 })
//                                                             }
//                                                         >
//                                                             {seatIndex + 1}
//                                                         </span>
//                                                     );
//                                                 })}
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         );
//     };
    


//   if(screen){
//   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~", selectedTime)
//   }

//     return (
//         <div className='selectseatpage'>
//         {
//           movie && screen &&
//           <div className='s1'>
//           <div className='head'>
//           <h1>{movie.movieName}</h1>
//           </div>
//           </div>
//         }
//         {
//           screen &&
//           <div className='selectedseat'>
//           <div className='timecont'>
//           {
//             screen.movieSchedules.map((schedule,index)=>(
              
              
          
//               <h6 key={index}
//               className={selectedTime?._id === schedule._id ? 'selected' : 'time'}
              
//               onClick={()=>{
//                 setSelectedTime(schedule)
//                 setSelectedSeat([])
            
//               }}
              
//               >{schedule.showTime}</h6>
              
              
//             ))
//           }
//           </div>
//           </div>
//         }
//             <h5>Seats for {movie?.movieName}</h5>
//             <div>
//                 <h5>{selectedTime?.showTime || "No time selected"}</h5>
//                 {generateSeatLayout()}
//             </div>
//         </div>
//     );
// }

// export default Seats;


// profile
// {userData?.map((item,index)=>(
    //   <div key={index} style={{fontFamily:'"Niramit", sans-serif'}}>
    //   <h6>Your Name</h6>
    // <p style={{color:'cyan'}}>{item?.name}</p>
    // <h6>Your Email</h6>
    // <p style={{color:'cyan'}}>{item?.email}</p>
    // <h6>Your Mobile</h6>
    // <p style={{color:'cyan'}}>{item?.phone}</p>