import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = (props) => {
    const { added, onChange, id, data } = props;
    return (
      <div className={added}>
        <input
          onChange={onChange}
          value={data}
          type="text"
          id={id}
          placeholder="Search"
        />
        <label htmlFor={id}>
          <span>
            <AiOutlineSearch />
          </span>
        </label>
      </div>
    );
  }

export default Search;
