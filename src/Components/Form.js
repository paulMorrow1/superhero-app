import React from "react";

export function Form() {
  return (
    <div>
      <form>
        <h2>Search Heroes</h2>
        <input
          type="text"
          id="heroName"
          placeholder="Enter Superhero Name"
          name="heroName"
        ></input>
      </form>
    </div>
  );
}

export default Form;
