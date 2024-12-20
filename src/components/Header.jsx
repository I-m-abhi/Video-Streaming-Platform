import { useDispatch, useSelector } from "react-redux";
import { HEMBURG_MENU, SEARCH_YOUTUBE_VIDEOS_API, USER_ICON, YOUTUBE_API_KEY, YOUTUBE_LOGO, YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constants";
import { showMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults, searchQueryResult, updateShowSuggestion, videoResult } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [suggestionsList, setSuggestionsList] = useState([]);

  const cacheResult = useSelector((store) => store.search.cacheResult);
  const searchQuery = useSelector((store) => store.search.searchQuery);
  const showSuggestions = useSelector((store)=>store.search.showSuggestions);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cacheResult[searchQuery]) {
        setSuggestionsList(cacheResult[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestionsList(json[1]);

    // Update Cache
    dispatch(cacheResults(
      {
        [searchQuery]: json[1],
      }
    ));
  }

  const handleMenuClick = () => {
    dispatch(showMenu());
  };

  const searchVideos = async () => {
    const data = await fetch(SEARCH_YOUTUBE_VIDEOS_API + searchQuery + '&key=' + YOUTUBE_API_KEY);
    const json = await data.json();
    dispatch(videoResult(json.items));
  }

  const handleSuggestionClick = (e) => {
    dispatch(searchQueryResult(e.target.innerText));
    dispatch(updateShowSuggestion(false));
    searchVideos();
  }

  const suggestionOnScroll = () => {
    if (window.scrollY >= 1) {
      dispatch(updateShowSuggestion(false));
    }
  };
  window.addEventListener("scroll", suggestionOnScroll);

  return (
    <div className="grid grid-flow-col px-8 shadow-lg items-center">
      <div className="flex col-span-1">
        <img
          onClick={handleMenuClick}
          alt="hamburg-menu"
          className="h-14 cursor-pointer"
          src={HEMBURG_MENU}
        />
        <img
          alt="youtube-logo"
          className="h-14 ml-2"
          src={YOUTUBE_LOGO}
        />
      </div>
      <div className="col-span-10 ml-44">
        <div>
          <input
            id="header-input"
            className="w-1/2 px-2 border border-gray-100 rounded-l-full"
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => dispatch(searchQueryResult(e.target.value))}
            onFocus={() => dispatch(updateShowSuggestion(true))}
            // onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="border border-gray-400 px-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && <div className="">
          <ul className="fixed bg-white w-1/3 shadow-lg rounded-lg">
            {suggestionsList.map((suggestion, id) => {
              return (
                <li
                  className="px-4 py-1 shadow-sm hover:bg-gray-100"
                  key={id}
                  onClick={handleSuggestionClick}>
                  {suggestion}
                </li>
              )
            })}
          </ul>
        </div>}

      </div>
      <div className="col-span-1">
        <img
          alt="user-icon"
          className="h-8"
          src={USER_ICON}
        />
      </div>
    </div>
  )
}

export default Header;
