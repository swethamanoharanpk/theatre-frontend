import React, { useState } from 'react'
import { addNewMovies } from '../../../api'
import  { toast,Toaster } from 'react-hot-toast'

const AddMovies = () => {
  const [movieName,setMovieName] = useState('')
  const [language,setLanguage] = useState('')
  const [genre,setGenre] = useState('')
  const [image,setImage] = useState('')
  const [duration,setDuration] = useState('')
  const [director,setDirector] = useState('')
  const [production,setProduction] = useState('')
  const [staring,setStaring] = useState('')
  const [status,setStatus] = useState('')


  const [movie,setMovie] = useState('')


  const addImage = async(e)=>{
    const file = e.target.files[0]
    if(!file){
      return 
    }
    const data = new FormData()
    data.append('file',file)
    data.append('upload_preset','theatre-booking')
    data.append('cloud_name','ddf1gyk6m')

    const res = await fetch('https://api.cloudinary.com/v1_1/ddf1gyk6m/image/upload', {
      method: 'POST',
      body: data,
    });

const imageUrl = await res.json()
console.log(imageUrl)
setImage(imageUrl.url)

  }

  const displayMovies = (e)=>{
    e.preventDefault();
    addNewMovies({movieName,language,genre,image,duration,director,production,staring,status}).then((result)=>{
      console.log("%%%%%%%",result)
      toast.success(result.message)
      setMovie(result)
    })

  }
  return (
    <div>
    <Toaster toastOptions={{duration:3000}} />
    <div style={{display:'flex'}}>
    
    <form style={{display:'flex',flexDirection:'column',padding:'70px'}} onSubmit={displayMovies}>
    <label>Movie Name</label>
    <input onChange={(e)=>{setMovieName(e.target.value)}}></input>
    <label>Language</label>
    <input onChange={(e)=>{setLanguage(e.target.value)}}></input>
    <label>Genre</label>
    <input onChange={(e)=>{setGenre(e.target.value)}}></input>
    <label>Duration</label>
    <input onChange={(e)=>{setDuration(e.target.value)}}></input>
    <label>Director</label>
    <input onChange={(e)=>{setDirector(e.target.value)}}></input>
    <label>Production</label>
    <input onChange={(e)=>{setProduction(e.target.value)}}></input>
    <label>Staring</label>
    <input onChange={(e)=>{setStaring(e.target.value)}}></input>
    <label>Status</label>
    <select onChange={(e)=>{setStatus(e.target.value)}}>
    <option value='select'>select</option>
    <option value='running'>running</option>
    <option value='comingsoon'>comingsoon</option>
    <option value='expires'>expires</option>
    </select>
    
    <label>Upload Image</label>
    <input type='file' onChange={addImage}></input>
    <button type='submit'>Add Movies</button>
    </form>

    </div>
    </div>
  )
}

export default AddMovies