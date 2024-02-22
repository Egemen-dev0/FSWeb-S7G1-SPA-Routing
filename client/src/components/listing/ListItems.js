import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./../../FetchedDatas/tmdb_Trending_All_Request";
import TrendDetail from "../TrendDetail";
import FilmsDetail from "../FilmsDetails";
import PeopleDetail from "../PeopleDetails";
import TVDetail from "../TVDetails";
const ListItems = () => {
  const [contentList, setContentList] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let result;
      switch (params.name) {
        case 'trends':
          result = await getTrendRequest('trend', 'week', 1); // Fetching trend data for a week
          break;
        case 'films':
          result = await getTrendRequest('movie', 'week', 1); // Fetching movie data for a week
          break;
        case 'people':
          result = await getTrendRequest('person', 'day', 1); // Fetching person data for a day
          break;
        case 'tv':
          result = await getTrendRequest('tv', 'day', 1); // Fetching TV data for a day
          break;
        default:
          result = { results: [] };
      }
      setContentList(result.results || []);
    };

    fetchData();
  }, [params.name]);

  const renderContentDetail = (item) => {
    switch (params.name) {
      case 'trends':
        return <TrendDetail key={item.id} {...item} />;
      case 'films':
        return <FilmsDetail key={item.id} {...item} />;
      case 'people':
        return <PeopleDetail key={item.id} {...item} />;
      case 'tv':
        return <TVDetail key={item.id} {...item} />;
      default:
        return null;
    }
  };

  return (
    <>
      {contentList.length > 0 ? 
        contentList.map((item) => renderContentDetail(item))
      :
        <p>Loading...</p>
      }
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
