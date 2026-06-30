import  { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const debounceQuery = useDebounce(query, 600);

  useEffect(() => {
    if (!debounceQuery) return;
    console.log("API Call with", debounceQuery);
  }, [debounceQuery]);
  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBox;
