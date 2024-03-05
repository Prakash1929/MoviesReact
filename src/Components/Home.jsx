import React, { useContext } from "react";
import { usemyCustomhook } from "../context";
import Search from './Search'
import { NavLink } from "react-router-dom";

const Home = () => {
  const {movie,loading} = usemyCustomhook();
  
  if(loading){
    return (
      
      <>
    
        <div>
          <div className="text-green-500 text-center md:text-size-3xl"><span>Loading....</span></div>
        </div>
      </>
    )
  }
  return (
    
    <>
    <Search/>
      <div className="md:grid md:grid-cols-4 md:gap-4 md:container md:mx-auto">
        {movie.map((item) => {
          return (
            <>
              <NavLink key={item.imdbID} to={``}>
                <div className="9vw rounded overflow-hidden shadow-lg hover:bg-red-500 hover:ease-in-out duration-300 rounded-3xl hover:-translate-y-6 sm:hover:ease-in-out duration-300 rounded-3xl">
                  <img
                    className="w-full"
                    src={item.Poster}
                    alt="Movie Poster"
                  />
                  <div className="px-6 py-4">
                    <h3 className="font-bold text-gray-300 text-xl mb-2">
                      {item.Title}
                    </h3>
                    <p className="text-gray-400 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 pt-4 pb-2 md:pt-7">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{item.Type}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #{item.Year}
                    </span>
                  </div>
                </div>
              </NavLink>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Home;
