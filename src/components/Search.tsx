import React from "react";
import { useState } from "react";
import { BiCheck, BiSearch, BiCaretDown } from "react-icons/bi";
import { IFilterOptions } from "../interfaces/search";

const DropDown = ({
  toggle,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}: IFilterOptions) => {
  if (!toggle) {
    return null;
  }

  return (
    <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-1">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          onClick={() => onSortByChange("assigned")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Assigned {sortBy === "assigned" && <BiCheck />}
        </div>

        <hr className="w-48 mx-auto my-2 bg-gray-200" />

        <div
          onClick={() => onOrderByChange("asc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Asc {orderBy === "asc" && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("desc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Desc {orderBy === "desc" && <BiCheck />}
        </div>
      </div>
    </div>
  );
};

const Search = ({
  query,
  onQueryChange,
  orderBy,
  onOrderByChange,
  sortBy,
  onSortByChange,
}) => {
    
  let [toggleSort, setToggleSort] = useState(false);

  return (
    <>
      <div className="py-5">
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BiSearch />
            <label htmlFor="query" className="sr-only" />
          </div>
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(evt) => {
              onQueryChange(evt.target.value);
            }}
            className="pl-8 py-2 rounded-md block w-full border-none"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <div>
              <button
                type="button"
                onClick={() => {
                  setToggleSort(!toggleSort);
                }}
                className="justify-center px-4 py-2 bg-blue-400 border-blue-400 hover:bg-blue-500 hover:border-blue-500 text-sm border-2 text-white flex items-center"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Sort By <BiCaretDown className="ml-2" />
              </button>
              <DropDown
                toggle={toggleSort}
                orderBy={orderBy}
                onOrderByChange={(myOrder) => onOrderByChange(myOrder)}
                sortBy={sortBy}
                onSortByChange={(mySort) => onSortByChange(mySort)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
