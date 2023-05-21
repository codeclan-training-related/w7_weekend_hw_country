import React from "react";

const AddNote = ({ notes}) => {
  return (
    <>
      <h2>Notes to Review</h2>
      {notes.map((note) => (
        <p key={note.id}>
          {note.country}'s capital is {note.capital}
        </p>
      ))}
    </>
  );
};

export default AddNote;
