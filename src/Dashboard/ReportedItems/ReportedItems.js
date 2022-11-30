import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleReport from "./SingleReport";

const ReportedItems = () => {
  const {
    data: reported = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      const res = await fetch("https://dream-bike-server-rose.vercel.app/ReportItem");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-center font-extrabold text-3xl my-3 text-black">All Users</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-center">SL</th>
              <th className="text-center">Photo</th>
              <th className="text-center">Seller name</th>
              <th className="text-center">Seller Email</th>
              <th className="text-center">Product ID</th>
            </tr>
          </thead>
          <tbody>
            {reported.map((report, idx) => (
              <SingleReport key={report._id} report={report} idx={idx + 1} refetch={refetch}></SingleReport>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItems;
