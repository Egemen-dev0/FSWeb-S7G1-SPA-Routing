const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWMyNjczYmE3MTQ0NDNlNzQxNzhmODdiYTE3ZDg4ZCIsInN1YiI6IjYzYThjMzc3MGYyMWM2MDA3ODcxNTJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mvF5XrBT7B0AJwPJekwVF7QoSkUBWfsuy9dTE90m9v8";

const trend_type = Object.freeze({
  Movies: "movie",
  Person: "person",
  TV: "tv",
});

const time_window = Object.freeze({
  day: "day",
  week: "week",
});

const getTrendRequest = async function (trend_type, time_window, pageNo = 1) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    let response = await fetch(
      `https://api.themoviedb.org/3/trending/${trend_type}/${time_window}?language=en-US&page=${pageNo}`,
      options
    );

    let data = await response.json();


    return data;
  } catch (error) {
    console.log("Error fetching data ", error);
  }
};

// Sample Data
// {
//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "id": 2710789,
//       "name": "Seung Ha",
//       "original_name": "Seung Ha",
//       "media_type": "person",
//       "popularity": 122.97,
//       "gender": 1,
//       "known_for_department": "Acting",
//       "profile_path": "/nvSJiHakYrDa3CedKSVOEsbLLX8.jpg",
//       "known_for": [
//         {
//           "adult": false,
//           "backdrop_path": "/rnWEut44AFaC4G7H3nSwzKVIyV8.jpg",
//           "id": 724106,
//           "title": "R-Rated Idol Seung-ha's Sex Scandal",
//           "original_language": "ko",
//           "original_title": "18금 아이돌 승하의 섹스 스캔들",
//           "overview": "When they were young, Min-joo and Seo-yeon cared for each other and were closer than brothers and sisters. However, she accidentally learns about Seo-yeon's tutor, Woo-hyeon, and because of this man, their 10-year friendship starts to become shaky. Meanwhile, Jeong-soo is hurt in seeing Min-joo like that, and so he distanced himself from Min-joo. Because of Min-joo and Seo-yeon's misunderstanding, Jeong-soo who couldn't care much might just leave so Min-joo tries to break up with the help of Seo-yeon. While in the process of breaking up, Min-joo and Seo-yeon went back to their close relationship.  The love of women who have been separated because of man, and the two men's friendship is comically drawn.",
//           "poster_path": "/btpk0Y0m9MjvMCfgrW0i0d7fpd1.jpg",
//           "media_type": "movie",
//           "genre_ids": [
//             18,
//             10749
//           ],
//           "popularity": 43.251,
//           "release_date": "2020-07-17",
//           "video": false,
//           "vote_average": 7,
//           "vote_count": 33
//         },
//         {
//           "adult": false,
//           "backdrop_path": "/lQYIamZ7SZR4Ufq7mKUwPZtBYWL.jpg",
//           "id": 852370,
//           "title": "Idol Seungha's R-Rated Film Shooting",
//           "original_language": "ko",
//           "original_title": "아이돌 승하의 19금 AV를 찍자",
//           "overview": "Film producer Na-eun and director Yeong-tae are on the verge of shelving out cash for an adult film production. They're too busy blaming each other for the messed-up filming. Before another filming begins, Na-eun suggests Yeong-tae to become an actor himself and practice filming. Na-eun leads the shy Yeong-tae very skillfully. How far will the practice go...?",
//           "poster_path": "/4CVYNzGwTMgOKxycg2LQO9slwfH.jpg",
//           "media_type": "movie",
//           "genre_ids": [
//             18
//           ],
//           "popularity": 44.829,
//           "release_date": "2021-06-24",
//           "video": false,
//           "vote_average": 6.786,
//           "vote_count": 21
//         },

// getTrendRequest(trend_type.Movies, time_window.week);
// getTrendRequest(trend_type.Person, time_window.day);

export default { getTrendRequest, trend_type, time_window };
