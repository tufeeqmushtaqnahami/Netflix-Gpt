import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackgorund = ({ movieID }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)
  const dispatch = useDispatch();
  // const [trailerID , setTrailerID] = useState(null)



  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1226863/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    // setTrailerID(trailer.key)
    dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
       
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackgorund;

// {
//   "id": 1226863,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Big galaxy, big screen",
//       "key": "Ba8C3QSFK1U",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2026-04-03T16:02:12.000Z",
//       "id": "69cff46285fd8a43464d2452"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Mystery Box Questions",
//       "key": "YB-v6xXFER8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2026-04-01T19:00:00.000Z",
//       "id": "69ce49e601c75acaaf0b8822"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Here we go!",
//       "key": "gWfOfyb_6Zs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-04-01T07:00:40.000Z",
//       "id": "69ce4a62453a8d0f020b886c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "They're ready for their close up.",
//       "key": "nSrlhT4Yyx4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-03-30T13:05:26.000Z",
//       "id": "69cc37aea5bd1ff6f6bc305b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Check out Bowser's totally unbiased recap of the first film for THE SUPER MARIO GALAXY MOVIE.",
//       "key": "KArll9s11c0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2026-03-29T08:01:48.000Z",
//       "id": "69cc3a95da8fff40d699f975"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Jump into all new worlds in THE SUPER MARIO GALAXY MOVIE, only in cinemas April 1.",
//       "key": "Q8HuSVirI-Y",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-03-28T09:00:42.000Z",
//       "id": "69cc3abb84bbdda72183e994"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "An unforgettable adventure awaits in IMAX",
//       "key": "kcd8j4M9fBY",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-03-27T16:00:19.000Z",
//       "id": "69c7d5242319b2b8739de9a7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Brie Larson voices Rosalina.",
//       "key": "PnTszHAyJws",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2026-03-24T10:00:44.000Z",
//       "id": "69c3dd943682b19ce46657a7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "World Map",
//       "key": "ptr8JFnmjpI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-03-23T12:26:24.000Z",
//       "id": "69c3dea205a885bb8062ebff"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Rosalina",
//       "key": "J4JDEd16ijA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-03-23T12:05:47.000Z",
//       "id": "69c3deb29a95b462f26ac41c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "15 GalaxyEventCutdown",
//       "key": "8pbbtFakrhk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-03-20T20:50:32.000Z",
//       "id": "69cdcc4988afbca77a9a0cdf"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "When Jack Black says “Koopas”… you listen!",
//       "key": "cA2R_136Q3I",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-03-18T16:15:59.000Z",
//       "id": "69bd1abe43d3077ac46e5763"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Yoshi Saves Baby Mario & Luigi from a DINOSAUR",
//       "key": "s5PfuJR3rUI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2026-03-16T17:00:00.000Z",
//       "id": "69ce514c74a0616db82f6ec7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Join Princess Peach and Toad on a cosmic adventure",
//       "key": "Zv0JLvTFNyw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-03-16T12:32:48.000Z",
//       "id": "69ba79d3bedc85616957d1c8"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "A New Star has Arrived... ✨ROSALINA✨",
//       "key": "SzMMY1NMkPg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-03-13T17:00:00.000Z",
//       "id": "69ce51ab74522763e44b4f45"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Say hello to Yoshi… and goodbye to Toad's candy apple!",
//       "key": "rvmqo89OPvg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2026-03-12T20:00:52.000Z",
//       "id": "69b52bb70e280e613070fd57"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Final Trailer",
//       "key": "En5QZmL5R1s",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2026-03-09T21:09:01.000Z",
//       "id": "69af38d996e3338147dd32aa"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Intense",
//       "key": "3046Plw0KIw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-02-18T18:00:04.000Z",
//       "id": "69aa2168085768c55d0c018d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Heroes",
//       "key": "H0zZo3XqMNQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-02-18T00:31:20.000Z",
//       "id": "69aa217304b2dc3cc51ed59a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Roar",
//       "key": "mt6TxIPw11M",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-02-09T00:37:57.000Z",
//       "id": "6989b77e04a63e37428c97de"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Level Up",
//       "key": "9xQ1EmUPiVk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-02-06T18:01:47.000Z",
//       "id": "69865dc0eb79a1c80329aa3d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Yoshi Chomps Back",
//       "key": "RR2nFS042dg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-25T20:55:28.000Z",
//       "id": "6978c27086e2525cd21074ee"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Yoshi First Look",
//       "key": "SA9ohTuGl4Q",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2026-01-25T14:09:20.000Z",
//       "id": "6976654c573ef9340b1065b5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Mario & Luigi vs. Bowser Jr.",
//       "key": "jw6vtgE76gw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-12-12T03:50:36.000Z",
//       "id": "69403469ef0d4d69e48c791e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Bowser Official Clip",
//       "key": "-91VJV8fgBs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-11-14T14:00:05.000Z",
//       "id": "69173e03d282b6e6929c5608"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Bowser Jr. Official Clip",
//       "key": "jPBngl0o3P8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-11-13T21:59:31.000Z",
//       "id": "69172c0dc48e7e4aa7ac297a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Benny Safdie Voices Bowser Jr.",
//       "key": "9cOfYyx6fKE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-11-12T23:00:04.000Z",
//       "id": "6915baa3160c5cef5b40e1d0"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Brie Larson Voices Rosalina",
//       "key": "ypyJAZeoT68",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-11-12T22:00:09.000Z",
//       "id": "6915ba9b9d938a061f9ad4c7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "FdL2GorGdKc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-11-12T14:10:02.000Z",
//       "id": "691498b834eec9d9e7dd2e7f"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Title Announcement",
//       "key": "c1mTbYB6EOM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-09-12T13:10:09.000Z",
//       "id": "68c41cb71fe5a9797cbacb0b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "New Animated Film Announcement",
//       "key": "o9b7BJprUx4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2024-03-10T13:16:05.000Z",
//       "id": "65ee2f39ba131b017babd7b7"
//     }
//   ]
// }
