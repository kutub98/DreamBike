import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsExplored from '../DetailsExplored/DetailsExplored';

const MoreDetails = () => {
    const moreDetails = useLoaderData()
    // console.log(moreDetails)
    return (
        <div className='px-[10%] bg-slate-50'>
           <div className="">
           {
                moreDetails.map(detailsMore => <DetailsExplored key={detailsMore._id} detailsExplored={detailsMore}></DetailsExplored>)
            }
           </div>
        </div>
    );
};

export default MoreDetails;