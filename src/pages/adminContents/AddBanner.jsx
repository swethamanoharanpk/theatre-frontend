import React, { useState } from 'react'
import { addNewBanner } from '../../../api'
import  { toast,Toaster } from 'react-hot-toast'

const AddBanner = () => {
    const [title,setTitle] = useState('')
    const [bannerImage,setBannerImage] = useState('')
    const [language,setLanguage] = useState('')
    const [director,setDirector] = useState('')
    const [staring,setStaring] = useState('')

    const [banner,setBanner] = useState('')

    const addBanner = async(e)=>{
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

          const bannerUrl = await res.json()
          console.log(bannerUrl)
          setBannerImage(bannerUrl.url)

        
    }


    const displayBanner = (e)=>{
      e.preventDefault();
        addNewBanner({title,bannerImage,language,director,staring}).then((result)=>{
          console.log("ressssssssss",result)
          toast.success(result.message)
            setBanner(result)
        })
    }
  return (
    <div style={{display:'flex'}}>
    <Toaster toastOptions={{duration:3000}} />
    <form style={{display:'flex',flexDirection:'column',padding:'90px'}} onSubmit={displayBanner}>
    <label>Movie Title</label>
    <input onChange={(e)=>{setTitle(e.target.value)}}></input>
    <label>Language</label>
    <input onChange={(e)=>{setLanguage(e.target.value)}}></input>
    <label>Director</label>
    <input onChange={(e)=>{setDirector(e.target.value)}}></input>
    <label>Staring</label>
    <input onChange={(e)=>{setStaring(e.target.value)}}></input>
    <label>Upload Image</label>
    <input type='file' onChange={addBanner}></input>
    <button type='submit'>Add Movies</button>
    </form>

    </div>
  )
}

export default AddBanner