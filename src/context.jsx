import React, { useContext, useEffect, useState } from "react";
export const Apilink = `https://www.omdbapi.com/?i=tt3896198&apikey=bf63e270`;

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [Error, setError] = useState({ show: "false", msg: "" });
  const [getinput, setGetInput] = useState("iron man");

  const getMovie = async (url) => {
    setLoading(true)
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setLoading(false);
        setMovie(data.Search);
        setError({
          show: false,
          msg: "",
        });
      } else {
        setError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {}
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getMovie(`${Apilink}&s=${getinput}`);
    }, 800);
    return () => clearTimeout(timer);
  }, [getinput]);
  return (
    <AppContext.Provider
      value={{ loading, Error, movie, getinput, setGetInput }}
    >
      {children}
    </AppContext.Provider>
  );
};

const usemyCustomhook = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, usemyCustomhook };
