import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./../../FetchedDatas/tmdb_Trending_All_Request";
import TrendDetail from "../TrendDetail";
import FilmsDetails from "../FilmsDetails"
import PeopleDetails from "../PeopleDetails"
import TVDetails from "../TVDetails"


const ListItems = (props) => {
  const [trendList, setTrendList] = useState({});
  const [loading, setLoading] = useState(true); 
  const [prevTrendName, setPrevTrendName] = useState('');
  const params = useParams();

  useEffect(() => {
    const getTrendList = async (trendName) => {
      try {
        setLoading(true); 
        let result = await data.getTrendRequest(trendName, data.time_window.week, 1);
        console.log(result)
        setTrendList(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); 
      }
    };

    if (params.name !== prevTrendName) {
      setPrevTrendName(params.name);
      getTrendList(params.name);
    }
  }, [params.name, prevTrendName]);

  return (
    <>
      {loading ? ( 
        <p>Yükleniyor</p>
      ) : (
        trendList.results ? (
          trendList.results.map((item, index) => (
            
            <TrendDetail  key={index}
            name={item.name || item.original_title} 
            // overview={item.overview || item.known_for_department}
            overview={item.overview !== undefined ? item.overview : null}
            profession={item.known_for_department}
            poster_path={item.poster_path ||item.profile_path}
            vote_average={item.vote_average || item.popularity}   />
          ))
        ) : (
          <p>No results found</p>
        )
      )}
    </>
  );
};

export default ListItems;

















// const ListItems = () => {
//   const [trendList, setTrendList] = useState({});
//   const [prevTrendList, setPrevTrendList ] = useState('');

//   const params = useParams();
//    if(params.name != prevTrendList ){
//      setPrevTrendList(params.name)
//    }
//   //setPrevTrendList(params.name);
//   //console.log(params);

//   useEffect(() => {

//     const getTrendList = async (trend_name) => {
//       let result = await data.getTrendRequest(trend_name, data.time_window.week, 1);
//       console.log(result)
//       setTrendList(result);
//     };

//     getTrendList(prevTrendList);
    
//   },[prevTrendList]);

//   return (
//     <>
//       {
//       trendList.results ? 
//       (
//         trendList.results.map((item, index) => {
//           return (
//             <TrendDetail key={index} original_title={item.name || item.title} />
//           );
//         })
//       ) 
//       : 
//       (
//         <p>Yükleniyor</p>
//       )}
//     </>
//   );
// };

// export default ListItems;
