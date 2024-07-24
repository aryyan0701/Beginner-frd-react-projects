import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement('#root');

function Search() {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null);

  const api = import.meta.env.VITE_API_KEY;


  const handleFetching = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${api}&s=${input}`);
      setMovies(res.data.Search);
    } catch (error) {
      console.log("error to fetch data", error);
    } finally {
      setLoading(false);
    }
  };

  const handleModel = async (imdbID) => {
    try {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${api}&i=${imdbID}`);
      setSelectedMovieDetails(res.data);
      setModalIsOpen(true);
    } catch (error) {
      console.log("error to fetch movie details", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value === '') {
      setMovies([]);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMovieDetails(null);
  };

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-gray-200">
        <div className="absolute top-[9rem] left-7 max-w-xl flex space-x-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full max-w-xs"
            value={input}
            onChange={handleInputChange}
          />
          {loading === false ?   
            <button className="btn btn-active btn-neutral" onClick={handleFetching}>Find</button> :
            <button className="btn btn-square">
              <span className="loading loading-spinner"></span>
            </button>
          }
        </div>

        <div className="flex-grow flex justify-center items-center mt-[9rem] w-full px-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
            {movies.map((movie) => (
              <div key={movie.imdbID} className="card bg-base-100 w-[22rem] shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="rounded-xl w-[18rem] h-[20rem]"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{movie.Title}</h2>
                  <p>{movie.Year}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary" onClick={() => handleModel(movie.imdbID)}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedMovieDetails && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Movie Details"
            className="bg-white p-5 rounded-lg shadow-xl max-w-lg w-full mx-4 my-20 overflow-y-auto max-h-[90vh] outline-none text-gray-700"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <h2 className="text-2xl font-bold mb-4">{selectedMovieDetails.Title}</h2>
            <img src={selectedMovieDetails.Poster} alt={selectedMovieDetails.Title} className="rounded-lg mb-4" />
            <p><strong>Year:</strong> {selectedMovieDetails.Year}</p>
            <p><strong>Rated:</strong> {selectedMovieDetails.Rated}</p>
            <p><strong>Released:</strong> {selectedMovieDetails.Released}</p>
            <p><strong>Runtime:</strong> {selectedMovieDetails.Runtime}</p>
            <p><strong>Genre:</strong> {selectedMovieDetails.Genre}</p>
            <p><strong>Director:</strong> {selectedMovieDetails.Director}</p>
            <p><strong>Writer:</strong> {selectedMovieDetails.Writer}</p>
            <p><strong>Actors:</strong> {selectedMovieDetails.Actors}</p>
            <p><strong>Language:</strong> {selectedMovieDetails.Language}</p>
            <p><strong>Country:</strong> {selectedMovieDetails.Country}</p>
            <p><strong>Ratings:</strong> 
              {selectedMovieDetails.Ratings.map((rating, index) => (
                <span key={index} className="block">{rating.Source}: {rating.Value}</span>
              ))}
            </p>
            <p><strong>Metascore:</strong> {selectedMovieDetails.Metascore}</p>
            <p><strong>IMDb Rating:</strong> {selectedMovieDetails.imdbRating}</p>
            <p><strong>IMDb Votes:</strong> {selectedMovieDetails.imdbVotes}</p>
            <button className="btn btn-secondary mt-4" onClick={closeModal}>Close</button>
          </Modal>
        )}
      </div>
    </>
  );
}

export default Search;
