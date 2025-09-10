import React from "react";

function Bookheadselect() {
  return (
    <div className="books__header">
      <h2 className="section__title books__header--title">All Books</h2>
      <select name="" id="filter" defaultChecked="DEFAULT">
        <option value="DEFAULT">Sort</option>
        <option value="LOW_TO_HIGH">Price, Low to High</option>
        <option value="HIGH_TO_LOW">Price, High to Low</option>
        <option value="RATING">Rating</option>
      </select>
    </div>
  );
}

export default Bookheadselect;

/* bookheaderselect

.books__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}

.books__header--title {
  margin-bottom: 0;
}

select {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 16px;
  width: 100%;
  max-width: 200px;
}

.books__loading {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  font-size: 60px;
  color: #7342d6;
}

.fa-spinner {
  animation: rotate 600ms infinite linear;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}


*/