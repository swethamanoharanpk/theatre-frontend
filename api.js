import axios from 'axios'
import { storeAdminToken, storeToken } from './src/Redux/UserSlice'
import { adminSecureRequest, publicRequest, secureRequest } from './src/AxiosToken'



export const addAdminLogin = async(adminInfo,dispatch)=>{
    try{
        const getAdmin = await publicRequest.post('/admin/adminlogin',adminInfo)
        dispatch(storeAdminToken(getAdmin.data))
        return getAdmin.data

    }catch(err){
        console.log(err.message)
    }
}

export const postUserSignup = async(userInfo)=>{
    console.log("userrrrrrrrrrrInfooooooooooooooo",userInfo)
    try{
        const userResponse = await publicRequest.post('/user/register',userInfo)
        console.log("userrrrrrrrrrrResssssss",userResponse)
        return userResponse.data

    }catch(err){
        console.log(err.message)
    }
}

export const addUserLogin = async(userLoginInfo,dispatch)=>{
    console.log("[[[[[[[[[[[",userLoginInfo)
    try{
        const loginResponse = await publicRequest.post('/user/login', userLoginInfo  )
        console.log("resssssssssssssssssssss",loginResponse.data)
        dispatch(storeToken(loginResponse.data))
        return loginResponse.data

    }catch(err){
        console.log(err.message)
    }
}

export const getUserLogin = async(id)=>{
    try{
        const profileDetails = await secureRequest.get(`/user/getsingleuser/${id}`)
        console.log("userrrrrrrrrrrrrrr",profileDetails.data)
        return profileDetails.data

    }catch(err){
        console.log(err.message)
    }
}


export const updateUserDetails = async(userUpInfo,id)=>{
    try{
        const updatedDetails = await secureRequest.put(`/user/update/${id}`,userUpInfo)
        console.log("uuuuuuupppppppppppppppp",updatedDetails)
        return updatedDetails.data

    }catch(err){
    }
}

export const addNewMovies = async(movieDetails)=>{
    try{
        const movieResponse = await adminSecureRequest.post('/admin/addmovie',movieDetails)
        console.log(movieResponse.data)
        return movieResponse.data

    }catch(err){
        console.log(err.message)
    }
}

export const addNewBanner = async(bannerDetails)=>{
    try{
        const bannerResponse = await adminSecureRequest.post('/admin/addbanner',bannerDetails)
        console.log(bannerResponse)
        return bannerResponse.data

    }catch(err){
        console.log(err.message)

    }
}

export const getBannerData = async()=>{
    try{
        const bannerData = await adminSecureRequest.get('/admin/getbanner')
        console.log("bannerdetails",bannerData)
        return bannerData.data

    }catch(err){
        console.log(err.message)
    }
}

export const getMovieData = async()=>{
    try{
        const movieData = await adminSecureRequest.get('/admin/getmovie')
        return movieData.data
        

    }catch(err){
        console.log(err.message)
    }
}

export const getAllMovieData = async()=>{
    try{
        const movieAllData = await adminSecureRequest.get('/admin/getallmovie')
        return movieAllData.data
        

    }catch(err){
        console.log(err)
    }
}

export const updateMovies = async(updateInfo,id)=>{
    console.log("api iddddddddddddddddd",id)
    try{
        const updatemovie = await adminSecureRequest.put(`/admin/update/${id}`,updateInfo)
        return updatemovie.update.data

    }catch(err){
        console.log(err)
    }
}
export const deleteMovies = async(id)=>{
    console.log("delete idddddddddddddddd",id)
    try{
        const deletedMovies = await adminSecureRequest.delete(`/admin/delete/${id}`)
        console.log(deletedMovies.message)

    }catch(err){
        console.log(err)
    }
}

export const getSingleMovieDetails = async(id)=>{
    console.log("getsingleMovieeeeeeeeeeeeID",id)
    try{
        const singleMovie = await secureRequest.get(`/user/getsinglemovie/${id}`)
        console.log("*******************",singleMovie)
        return singleMovie.data

    }catch(err){}
}

export const getComingMovieDetails = async()=>{
    try{
        const comingMovie = await secureRequest.get('/user/comingmovie')
        return comingMovie.data

    }catch(err){
        console.log(err)
    }
}


export const getSchedule = async(id,date)=>{
    try{
        console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",id,date)
        const scheduledMovie = await secureRequest.get(`/user/schedule/${id}/${date}`)
        console.log(" axiosssssssssssssss",scheduledMovie.data)
        return scheduledMovie.data
        

    }catch(err){}
}


export const getFilteredSchedule = async(id,date)=>{
    try{
        console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",id,date)
        const filteredScheduledMovie = await secureRequest.get(`/user//filterschedule/${id}/${date}`)
        console.log("second axiosssssssssssssss",filteredScheduledMovie.data)
        return filteredScheduledMovie.data
        

    }catch(err){}
}

// export const getSchedule = async(id,date)=>{
//     try{
//         const scheduledMovie = await axios.get(`http://localhost:4000/user/schedule/${id}/${date}`)
//         return scheduledMovie.data

//     }catch(err){}
// }

export const addScreen = async(schedule)=>{
    try{
        const addScreenData = await adminSecureRequest.post('/admin/addscreen',schedule)
        return addScreenData.data

    }catch(err){
        console.log(err)
    }
}
export const bookingSeats = async(paymentDetails)=>{
    console.log("payment..................",paymentDetails)
    try{
        const bookSeats = await secureRequest.post('/user/booktickets',paymentDetails)
        console.log("//////////////////",bookSeats.data)
        return bookSeats.data

    }catch(err){
        console.log(err)
    }
}





export const userBooking = async (userId) => {
    console.log("User ID:", userId);
    try {
        const userBookingResponse = await secureRequest.get(`/user/userbooking?userId=${userId}`);
        return userBookingResponse.data;
    } catch (err) {
        console.log(err);
    }
};



export const bookingsAdminside = async () => {
    try {
        const userBookingResponse = await secureRequest.get('/user/bookings');
        return userBookingResponse.data;
    } catch (err) {
        console.log(err);
    }
};

export const getMailData = async(userId)=>{
    console.log("oooooooooooooo",userId)

    try{

        const mailData = await secureRequest.get(`/user/sendmail?userId=${userId}`);
        console.log("heeeeeeeeeeeeeeeeee",mailData.data)
        return mailData.data
    }catch(err){
        console.log(err)
    }

}



export const getMovies = ()=>{}