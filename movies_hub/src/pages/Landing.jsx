import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div
        className="w-full h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/red-background-comic-style_23-2149034894.jpg')",
        }}
      >
        <h2 className="text-6xl font-semibold font-mono text-gray-900 m-4">
          Welcome to Movies Hub..!
        </h2>
        <p className="max-w-3xl text-lg font-semibold font-mono text-gray-900">
          Searching for your next watch? Look no further than Movies Hub. With
          an extensive collection of movies, series, and shows, you'll always
          find something to suit your mood. Start exploring today and elevate
          your entertainment experience
        </p>
        <Link to="/search">
          <button className="text-xl font-thin font-mono text-yellow-200 mt-8">
            Discover Your Next Favorite Shows and Movies{" "}
            <FaExternalLinkAlt className="inline text-lg mb-2" />
          </button>
        </Link>
      </div>


<div className="w-full pt-20 bg-gray-300">
      <div className="carousel rounded-box movies">
  <div className="carousel-item">
    <img
      src="https://images.ctfassets.net/4cd45et68cgf/sEI5XkW9M5BWiwpXbyeoz/9821fcbd75c38da6ecd9caa334a8b321/KingdomAOTN_Main_Vertical_AshinBackfacing_RGB_EN_PRE.jpg?w=2000"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://i.pinimg.com/originals/46/71/d9/4671d9c8d6ebc85aec7e95dafd5fc6cc.jpg"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://m.media-amazon.com/images/M/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LQ6DQ9KOfO56uRnXbKTcpAN-e-3HyyUpVg&s"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqUcB0Y-bsK48dWfXkOtP9lrpbi7rog5IlVtGLKMDt55KKKpjRowP5mzY2pCeDQvxwYw&usqp=CAU"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABb1EAE0yG949lDmMaNEx4j-CIWo1U5CfeL3_OSf9a604F41QU6KOuGIfGI2T5PCAxSVoT846du0HGQ-HJc9d8vInlUWdC4L5ZRDvRFaDrvUJNHm7DeL4g2qALMgh1iIvpX0C2Q.jpg?r=03f"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpcNvnZV4537VdbPwi8bIBMkSLeBT8Tm_Xaw&s"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://m.media-amazon.com/images/M/MV5BOWM0YWMwMDQtMjE5NS00ZTIwLWE1NWEtODViMWZjMWI2OTU3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LQ6DQ9KOfO56uRnXbKTcpAN-e-3HyyUpVg&s"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
</div>
<h2 className="text-2xl font-semibold font-mono text-gray-900 m-4">Latest Movies</h2>


<div className="carousel rounded-box series mt-20">
  <div className="carousel-item">
    <img
      src="https://ca-times.brightspotcdn.com/dims4/default/0561ad6/2147483647/strip/true/crop/1500x2222+0+0/resize/1200x1778!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb7%2F3d%2F37955d8d4b21800d19a0d2e77f5a%2Fen-us-onepiece-teaser-luffy-vertical-27x40-rgb-pre.jpg"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://www.syfy.com/sites/syfy/files/styles/scale_600/public/the-witcher-season-2-poster-vertical.jpg"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKErXnknrXuH4qQFrAHmVhHi3rcyJaCkU24Fq1B04uJcm7NQScXF6kg2e0Pn-pLRvv1w&usqp=CAU"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUAaSOwngtoOjAgS37l89I7mfuEE1uUZmbw&s"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVd8kRVHthcFUlM5hoCG-bpqW4Tm9D0aXQZA&s"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://images.ctfassets.net/4cd45et68cgf/4g2KWWsb3asC3VQVYS2eSs/3d1520b9ef5dac16f7ee6b06da3b3e73/DE_1899S1_Main_Vertical_27x40_RGB_PRE.jpg"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://www.syfy.com/sites/syfy/files/styles/scale_600/public/the-witcher-season-2-poster-vertical.jpg"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKErXnknrXuH4qQFrAHmVhHi3rcyJaCkU24Fq1B04uJcm7NQScXF6kg2e0Pn-pLRvv1w&usqp=CAU"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
  <div className="carousel-item">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUAaSOwngtoOjAgS37l89I7mfuEE1uUZmbw&s"
      className="w-[16rem] h-[26rem]"
      alt="Burger" />
  </div>
</div>
<h2 className="text-2xl font-semibold font-mono text-gray-900 m-4">Latest Series</h2>

<footer className="footer bg-base-300 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>
</div>



    </>
  );
}

export default Landing;
