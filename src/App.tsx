import * as React from "react";
import axios from "axios";
import { useSemiPersistentState } from "./utils/useSemiPersistentState";
import { storiesReducer } from "./state/reducer";
import ListItems from "./components/ListItems";
import BasicForm from "./components/BasicForm";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");

  const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);

  const [stories, dispatchStories] = React.useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });

  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: "STORIES_FETCH_INIT" });

    try {
      const result = await axios.get(url);

      dispatchStories({
        type: "STORIES_FETCH_SUCCESS",
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: "STORIES_FETCH_FAILURE" });
    }
  }, [url]);

  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);

  const handleRemoveStory = (item: any) => {
    dispatchStories({
      type: "REMOVE_STORY",
      payload: item,
    });
  };

  const handleSearchInput = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event: any) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);

    event.preventDefault();
  };
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <BasicForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />

      <hr />

      {stories.isError && <p>Something went wrong ...</p>}

      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <ListItems list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
}

export default App;
