import React from 'react';
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { BiCommentAdd } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div>
        {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="m-0">WhatsApp</h4>
        <div className="d-flex gap-2">
          <button className="btn">
            <BiCommentAdd size={20} />
          </button>
          <button className="btn">
            <BsThreeDotsVertical size={20} />
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className=" input-group mb-2">
        <input
          type="text"
          className="form-control"
          placeholder='Search or start a new chat'
        />
      </div>

      {/* Category Buttons */}
      <div className="category-btns d-flex justify-content-between mb-2 flex-wrap gap-1">
        <button className="btn btn-outline-secondary btn-sm flex-grow-1">All</button>
        <button className="btn btn-outline-secondary btn-sm flex-grow-1">Unread</button>
        <button className="btn btn-outline-secondary btn-sm flex-grow-1">Favorites</button>
        <button className="btn btn-outline-secondary btn-sm flex-grow-1">Groups</button>
      </div>

      {/* Archived */}
      <div className="archive mt-3 ">
        <span className="d-flex align-items-center text-muted">
          <IoArrowDownCircleOutline className="me-1" /> Archived
        </span>
      </div>
      <hr />
    </div>
  );
};

export default SearchBar;
