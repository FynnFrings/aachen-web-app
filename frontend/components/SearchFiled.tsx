import { InputProps } from "@/types/types";
import { FiSearch } from "react-icons/fi";

const SearchFiled = (props: InputProps) => {
  const { placeholder, handleChange, searchInput } = props;
  return (
    <>
      <div className="w-full lg:w-80 h-12 bg-transparent text-white flex rounded-lg items-center border border-white">
        <div className="w-14 flex justify-center items-center">
          <FiSearch />
        </div>
        <input
          className="w-full text-start text-lg rounded-lg bg-transparent  h-12 border-transparent"
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          value={searchInput}
        />
      </div>
    </>
  );
};

export default SearchFiled;
