// import React, { useRef } from 'react'
// import client from "../utils/openai";
// import model from "../utils/gemini";

// const GptSearchBar = () => {
// const searchText = useRef(null)

// const handleGptSearchClick = async()=>{
//   console.log(searchText.current.value)

//   const gptQuery = "Act as a Movie Recomaation system and sussget some movies for the query :" + searchText.current.value + "only give me names of five movies, and comma seperated like the example result given ahead. example result: Gadar , Sholay , Don ,  Golmaal , Koi Mil gaya"

//  const gptResults = await client.responses.create({
//   model: 'gpt-5.5',
//   instructions: 'You are a coding assistant that talks like a pirate',
//   input: gptQuery,
//  });
 
// console.log(gptResults.output_text);
// }

//   return (
//     <div className="pt-[10%] flex justify-center" >
//       <form action="" className="bg-black  w-1/2 grid grid-cols-12" onSubmit={(e)=> e.preventDefault()}>
//         <input type="text "  ref={searchText} className='p-4 m-4 col-span-9'placeholder='What would you like to watch today' />
//         <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'onClick={
//           handleGptSearchClick
//         }>Seacrh</button>
//       </form>
//     </div>
//   )
// }

// export default GptSearchBar         




import React, { useRef } from "react";
import model from "../utils/gemini";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    try {
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query: " +
        searchText.current.value +
        ". Only give me names of 5 movies, comma separated like this example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

      const result = await model.generateContent(gptQuery);

      const response = result.response.text();

      console.log("Gemini Response:", response);

      const movieNames = response.split(",");

      console.log("Movies:", movieNames);
    } catch (error) {
      console.error("Gemini Error:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder="What would you like to watch today?"
        />

        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;