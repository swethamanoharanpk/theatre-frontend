import '../../styles/Schedule.css'
import React, { useEffect, useState } from 'react'
import { addScreen, getMovieData } from '../../../api'
import AdminNavbar from '../../componenet/AdminNavbar'
import  { toast,Toaster } from 'react-hot-toast'

const MovieSchedule = () => {

  const [movies,setMovies] = useState([])

  const seatLayout = [
    {
          type:'top',
            rows:[
            {rowName:'F',
              cols:[
                {seats:[
                  {type:'seat',
                    status:'available',
                    seat_id:'1'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'2'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'3'
                  },
                  {type:'seat',
                    status:'unavailable',
                    seat_id:'4'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'5'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'6'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'7'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'8'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'9'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'10'
                  }
                ]
              },
              {seats:[
                {type:'seat',
                  status:'available',
                  seat_id:'11'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'12'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'13'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'14'
                },
                {type:'seat',
                  status:'unavailable',
                  seat_id:'15'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'16'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'17'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'18'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'19'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'20'
                }

              ]}
            ]
              
                


            },
            {rowName:'E',
              cols:[
                {seats:[
                  {type:'seat',
                    status:'available',
                    seat_id:'1'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'2'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'3'
                  },
                  {type:'seat',
                    status:'unavailable',
                    seat_id:'4'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'5'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'6'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'7'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'8'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'9'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'10'
                  }
                ]
              },
              {seats:[
                {type:'seat',
                  status:'available',
                  seat_id:'11'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'12'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'13'
                },
                {type:'seat',
                  status:'available',
                  seat_id:'14'
                },
                {type:'seat',
                  status:'unavailable',
                  seat_id:'15'
                },
                {type:'seat',
                    status:'available',
                    seat_id:'16'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'17'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'18'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'19'
                  },
                  {type:'seat',
                    status:'available',
                    seat_id:'20'
                  }
              ]}
            ]}

          ],
        price:150
        
      
    
  },

  {
    type:'middle',
      rows:[
      {rowName:'D',
        cols:[
          {seats:[
            {type:'seat',
              status:'available',
              seat_id:'1'
            },
            {type:'seat',
              status:'available',
              seat_id:'2'
            },
            {type:'seat',
              status:'available',
              seat_id:'3'
            },
            {type:'seat',
              status:'unavailable',
              seat_id:'4'
            },
            {type:'seat',
              status:'available',
              seat_id:'5'
            },
            {type:'seat',
              status:'available',
              seat_id:'6'
            },
            {type:'seat',
              status:'available',
              seat_id:'7'
            },
            {type:'seat',
              status:'available',
              seat_id:'8'
            },
            {type:'seat',
              status:'available',
              seat_id:'9'
            },
            {type:'seat',
              status:'available',
              seat_id:'10'
            }
          ]
        },
        {seats:[
          {type:'seat',
            status:'available',
            seat_id:'11'
          },
          {type:'seat',
            status:'available',
            seat_id:'12'
          },
          {type:'seat',
            status:'available',
            seat_id:'13'
          },
          {type:'seat',
            status:'available',
            seat_id:'14'
          },
          {type:'seat',
            status:'unavailable',
            seat_id:'15'
          },
          {type:'seat',
            status:'available',
            seat_id:'16'
          },
          {type:'seat',
            status:'available',
            seat_id:'17'
          },
          {type:'seat',
            status:'available',
            seat_id:'18'
          },
          {type:'seat',
            status:'available',
            seat_id:'19'
          },
          {type:'seat',
            status:'available',
            seat_id:'20'
          }

        ]}
      ]
        
          


      },
      {rowName:'C',
        cols:[
          {seats:[
            {type:'seat',
              status:'available',
              seat_id:'1'
            },
            {type:'seat',
              status:'available',
              seat_id:'2'
            },
            {type:'seat',
              status:'available',
              seat_id:'3'
            },
            {type:'seat',
              status:'unavailable',
              seat_id:'4'
            },
            {type:'seat',
              status:'available',
              seat_id:'5'
            },
            {type:'seat',
              status:'available',
              seat_id:'6'
            },
            {type:'seat',
              status:'available',
              seat_id:'7'
            },
            {type:'seat',
              status:'available',
              seat_id:'8'
            },
            {type:'seat',
              status:'available',
              seat_id:'9'
            },
            {type:'seat',
              status:'available',
              seat_id:'10'
            }
          ]
        },
        {seats:[
          {type:'seat',
            status:'available',
            seat_id:'11'
          },
          {type:'seat',
            status:'available',
            seat_id:'12'
          },
          {type:'seat',
            status:'available',
            seat_id:'13'
          },
          {type:'seat',
            status:'available',
            seat_id:'14'
          },
          {type:'seat',
            status:'unavailable',
            seat_id:'15'
          },
          {type:'seat',
            status:'available',
            seat_id:'16'
          },
          {type:'seat',
            status:'available',
            seat_id:'17'
          },
          {type:'seat',
            status:'available',
            seat_id:'18'
          },
          {type:'seat',
            status:'available',
            seat_id:'19'
          },
          {type:'seat',
            status:'available',
            seat_id:'20'
          }
        ]}
      ]}

    ],
  price:150
  


},
{
  type:'top',
    rows:[
    {rowName:'B',
      cols:[
        {seats:[
          {type:'seat',
            status:'available',
            seat_id:'1'
          },
          {type:'seat',
            status:'available',
            seat_id:'2'
          },
          {type:'seat',
            status:'available',
            seat_id:'3'
          },
          {type:'seat',
            status:'unavailable',
            seat_id:'4'
          },
          {type:'seat',
            status:'available',
            seat_id:'5'
          },
          {type:'seat',
            status:'available',
            seat_id:'6'
          },
          {type:'seat',
            status:'available',
            seat_id:'7'
          },
          {type:'seat',
            status:'available',
            seat_id:'8'
          },
          {type:'seat',
            status:'available',
            seat_id:'9'
          },
          {type:'seat',
            status:'available',
            seat_id:'10'
          }
        ]
      },
      {seats:[
        {type:'seat',
          status:'available',
          seat_id:'11'
        },
        {type:'seat',
          status:'available',
          seat_id:'12'
        },
        {type:'seat',
          status:'available',
          seat_id:'13'
        },
        {type:'seat',
          status:'available',
          seat_id:'14'
        },
        {type:'seat',
          status:'unavailable',
          seat_id:'15'
        },
        {type:'seat',
          status:'available',
          seat_id:'16'
        },
        {type:'seat',
          status:'available',
          seat_id:'17'
        },
        {type:'seat',
          status:'available',
          seat_id:'18'
        },
        {type:'seat',
          status:'available',
          seat_id:'19'
        },
        {type:'seat',
          status:'available',
          seat_id:'20'
        }

      ]}
    ]
      
        


    },
    {rowName:'A',
      cols:[
        {seats:[
          {type:'seat',
            status:'available',
            seat_id:'1'
          },
          {type:'seat',
            status:'available',
            seat_id:'2'
          },
          {type:'seat',
            status:'available',
            seat_id:'3'
          },
          {type:'seat',
            status:'unavailable',
            seat_id:'4'
          },
          {type:'seat',
            status:'available',
            seat_id:'5'
          },
          {type:'seat',
            status:'available',
            seat_id:'6'
          },
          {type:'seat',
            status:'available',
            seat_id:'7'
          },
          {type:'seat',
            status:'available',
            seat_id:'8'
          },
          {type:'seat',
            status:'available',
            seat_id:'9'
          },
          {type:'seat',
            status:'available',
            seat_id:'10'
          }
        ]
      },
      {seats:[
        {type:'seat',
          status:'available',
          seat_id:'11'
        },
        {type:'seat',
          status:'available',
          seat_id:'12'
        },
        {type:'seat',
          status:'available',
          seat_id:'13'
        },
        {type:'seat',
          status:'available',
          seat_id:'14'
        },
        {type:'seat',
          status:'unavailable',
          seat_id:'15'
        },
        {type:'seat',
          status:'available',
          seat_id:'16'
        },
        {type:'seat',
          status:'available',
          seat_id:'17'
        },
        {type:'seat',
          status:'available',
          seat_id:'18'
        },
        {type:'seat',
          status:'available',
          seat_id:'19'
        },
        {type:'seat',
          status:'available',
          seat_id:'20'
        }
      ]}
    ]}

  ],
price:150



}
]

  const [schedule,setSchedule] = useState({
    
    movieId: "",
    movieName:"",
    seats:seatLayout,
    showsTime:"",
    showTime: "",
    showDate: ""
  })

  useEffect(()=>{
    getMovieData().then((result)=>{
      setMovies(result)
      
    })


  },[])

  console.log("----movie------------",schedule.movieName)


  const createSchedule = ()=>{
    if(!schedule.movieId || !schedule.showTime || !schedule.showDate ||!schedule.movieName)
      return
    addScreen(schedule).then((result)=>{
      console.log("scren....................",result)
      toast.success(result.message)
    })

  }

  return (
    <div>
    <AdminNavbar/>
    <Toaster toastOptions={{duration:3000}} />

    <div className='main-schedule'>
    <input type='date' name='showsDate' id='showsDate'
    onChange={(e)=> setSchedule({...schedule,showsDate: e.target.value})} />
    <div className='items'>
    
    <h1>Movies</h1>
    {
      movies?.map((movie)=>(
        <div className={schedule.movieId === movie._id ? 'item-selected': 'item'} key={movie._id}
        onClick={()=>{
          setSchedule({...schedule, movieId:movie._id,movieName:movie.movieName})
        }}>
        <p>Movie : {movie.movieName}</p>
        <p>Genre : {movie.genre}</p>
        <p>Language : {movie.language}</p>
        <p>Starring : {movie.staring}</p>
        <p>Duration : {movie.duration}</p>
        
        </div>    
      ))
    }
    <div className='time-section'>

    <input type='time' name='showTime'  id='showTime' 
    onChange={(e)=> setSchedule({...schedule, showTime: e.target.value})}/>
    
    <input type='date' name='showDate' id='showDate'
    onChange={(e)=> setSchedule({...schedule,showDate: e.target.value})} />
    
    </div>
    
    
    
    </div>
    </div>
    <button onClick={()=>createSchedule()} className='save-button'>SAVE</button>
    </div>

  
  )
}

export default MovieSchedule