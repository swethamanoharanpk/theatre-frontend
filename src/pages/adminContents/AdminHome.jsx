import React, { useEffect, useState } from "react";
import AdminNavbar from "../../componenet/AdminNavbar";
import { deleteMovies, getAllMovieData, updateMovies } from "../../../api";
import { toast, Toaster } from "react-hot-toast";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalFooter,
} from "mdb-react-ui-kit";

 const AdminHome = () => {
  const [movie, setMovie] = useState([]);

  const [basicModal, setBasicModal] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState(null);

  console.log("zzzzzzzzzzzzzzzzzzzzz", selectedMovie);

  console.log(movie);
  
  const [movieName, setMovieName] = useState();
  const [language, setLanguage] = useState();
  const [genre, setGenre] = useState();
  const [duration, setDuration] = useState();
  const [director, setDirector] = useState();
  const [production, setProduction] = useState();
  const [staring, setStaring] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    getAllMovieData().then((result) => {
      setMovie(result);
    });
  }, []);

  const toggleOpen = (movies) => {
    setBasicModal(!basicModal);
    setSelectedMovie(movies);
  };

  const update = (id) => {
    console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRR", id);
    updateMovies(
      {
        movieName,
        language,
        genre,
        duration,
        director,
        production,
        staring,
        status,
      },
      id
    ).then((data) => {
      console.log(data);
      toast.success(data.message);
      setBasicModal(false);
    });
  };

  const deletefilm = (id) => {
    deleteMovies(id).then((result) => {
      toast.success(result.message);
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Toaster toastOptions={{ duration: 3000 }} />
      <div style={{ width: "100%" }}>
        <div
          style={{
            borderBottom: "2px solid black",
            marginTop: "30px",
            width: "500px",
            marginLeft: "100px",
            textAlign: "center",
          }}
        >
          <h5>Added Movies</h5>
        </div>
        <div>
          {movie?.map((movies) => (
            <div
              key={movies._id}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                marginBottom: "20px",
                marginLeft: "100px",
                marginTop: "70px",
              }}
            >
              <MDBCard
                style={{
                  maxWidth: "540px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <MDBRow className="g-0">
                  <MDBCol md="4">
                    <MDBCardImage src={movies.image} alt="..." fluid />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody>
                      <MDBCardTitle>{movies.movieName}</MDBCardTitle>
                      <MDBCardText>
                        <p>
                          Language : {movies.language}
                          <br></br>
                          Duration : {movies.duration}
                          <br></br>
                          Genre : {movies.genre}
                          <br></br>
                          Director : {movies.director}
                          <br></br>
                          Production : {movies.production}
                          <br></br>
                          Starring : {movies.staring}
                          <br></br>
                          Status : {movies.status}
                        </p>
                      </MDBCardText>
                      <MDBCardText>
                        <button
                          onClick={() => toggleOpen(movies)}
                          style={{
                            backgroundColor: "red",
                            borderRadius: "10px",
                            border: "none",
                            color: "white",
                          }}
                        >
                          Update
                        </button>
                        <button
                          onClick={() => deletefilm(movies._id)}
                          style={{
                            backgroundColor: "red",
                            borderRadius: "10px",
                            border: "none",
                            color: "white",
                            marginLeft: "5px",
                          }}
                        >
                          Delete
                        </button>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </div>
          ))}

          <MDBModal
            open={basicModal}
            onClose={() => setBasicModal(false)}
            tabIndex="-1"
          >
            <MDBModalDialog>
              <MDBModalContent
                style={{ backgroundColor: "black", border: "1px solid white" }}
              >
                <MDBModalHeader>
                  <MDBModalTitle>UPDATE</MDBModalTitle>
                  <MDBBtn
                    className="btn-close"
                    color="none"
                    onClick={toggleOpen}
                  ></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody style={{ color: "white" }}>
                  {selectedMovie ? (
                    <form
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "50px",
                      }}
                    >
                      <label>Movie Name</label>
                      <input
                        placeholder={selectedMovie.movieName}
                        onChange={(e) => {
                          setMovieName(e.target.value);
                        }}
                      ></input>
                      <label>Language</label>
                      <input
                        placeholder={selectedMovie.language}
                        onChange={(e) => {
                          setLanguage(e.target.value);
                        }}
                      ></input>
                      <label>Genre</label>
                      <input
                        placeholder={selectedMovie.genre}
                        onChange={(e) => {
                          setGenre(e.target.value);
                        }}
                      ></input>
                      <label>Duration</label>
                      <input
                        placeholder={selectedMovie.duration}
                        onChange={(e) => {
                          setDuration(e.target.value);
                        }}
                      ></input>
                      <label>Director</label>
                      <input
                        placeholder={selectedMovie.director}
                        onChange={(e) => {
                          setDirector(e.target.value);
                        }}
                      ></input>
                      <label>Production</label>
                      <input
                        placeholder={selectedMovie.production}
                        onChange={(e) => {
                          setProduction(e.target.value);
                        }}
                      ></input>
                      <label>Staring</label>
                      <input
                        placeholder={selectedMovie.staring}
                        onChange={(e) => {
                          setStaring(e.target.value);
                        }}
                      ></input>
                      <label>Status</label>
                      <select
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                      >
                        <option value="select">select</option>
                        <option value="running">running</option>
                        <option value="comingsoon">comingsoon</option>
                        <option value="expires">expires</option>
                      </select>
                    </form>
                  ) : (
                    <p>Loadinggggg</p>
                  )}
                </MDBModalBody>

                <MDBModalFooter>
                  <MDBBtn color="danger" onClick={toggleOpen}>
                    Close
                  </MDBBtn>
                  <MDBBtn
                    color="warning"
                    onClick={() => update(selectedMovie._id)}
                  >
                    UPDATE
                  </MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </div>
      </div>
    </div>
  );
};

export default AdminHome
