import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`https://dream-bike-server-rose.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.bikerToken) {
            localStorage.setItem("bikerToken", data.bikerToken);
            setToken(data.bikerToken);
          }
        });
    }
  }, [email]);
  return [token];
};
export default useToken;
