import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useRef,
} from "react";
import useDebounce from "@/hooks/useDebounce";
import { Asset } from "@/app/types/assets";

const SearchInput = ({
  data,
  setFilteredData,
}: {
  data: Asset[];
  setFilteredData: Dispatch<SetStateAction<Asset[]>>;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const userQueryTerm = useDebounce<string>({ value: inputValue, delay: 500 });

  useEffect(() => {
    if (userQueryTerm) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(userQueryTerm.toLowerCase())
      );
      setFilteredData(filtered);

      // Update search history with a limit of 3 entries
      setSearchHistory((prevHistory) => {
        const newHistory = prevHistory.includes(userQueryTerm)
          ? prevHistory
          : [...prevHistory, userQueryTerm];
        if (newHistory.length > 3) {
          newHistory.shift();
        }
        return newHistory;
      });
    } else {
      setFilteredData(data);
    }
  }, [userQueryTerm, data, setFilteredData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowHistory(true);
  };

  const handleHistoryClick = (term: string) => {
    setInputValue(term);
    setShowHistory(false);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="relative flex flex-col items-center mb-7 w-3/4">
      <div className="relative w-full max-w-[810px]">
        <input
          type="text"
          placeholder="Type to search..."
          value={inputValue}
          onChange={handleChange}
          className="w-full px-10 py-2.5 pr-10 rounded-md border border-gray-300 shadow-md outline-none"
          ref={inputRef}
          onFocus={() => setShowHistory(true)}
          onBlur={() => setShowHistory(false)}
        />
        {inputValue && (
          <button
            className="absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-none border-none text-2xl cursor-pointer text-gray-600 font-bold hover:text-gray-800"
            onClick={clearInput}
          >
            &times;
          </button>
        )}
      </div>
      {showHistory && searchHistory.length > 0 && (
        <div className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 w-full max-w-[810px] bg-white border border-gray-300 z-50 shadow-md overflow-hidden">
          {searchHistory.map((term, index) => (
            <div
              key={`history-${index}`}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onMouseDown={() => handleHistoryClick(term)}
            >
              {term}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
