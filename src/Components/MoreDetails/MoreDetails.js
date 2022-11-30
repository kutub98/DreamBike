import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../Context/AuthContext/AuthContext";
import DetailsExplored from "../DetailsExplored/DetailsExplored";

const MoreDetails = () => {
  const moreDetails = useLoaderData();
  const { user } = useContext(authContext);
  // moreDetails)
  const [Already, setAlready] = useState();

  useEffect((email) => {
    fetch(`https://dream-bike-server-rose.vercel.app/ordered/${user?.email}`)
      .then((data) => data.json())
      .then((res) => setAlready(res));
  }, []);

  return (
    <div className="px-[10%] bg-slate-50">
      <div className="">
        {moreDetails.map((detailsMore) => (
          <DetailsExplored key={detailsMore._id} detailsExplored={detailsMore} setAlready={Already}></DetailsExplored>
        ))}
      </div>
    </div>
  );
};

export default MoreDetails;
