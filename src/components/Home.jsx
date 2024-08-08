import React from "react";

const Home = () => {
  
  // Dummy data
  const notes = Array.from({ length: 12 }, (_, index) => ({
    title: `Note Title ${index + 1}`,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  }));




  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
  };

  const searchContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  };

  const searchInputStyle = {
    padding: "10px",
    width: "calc(100% - 150px)",
    borderRadius: "20px",
    border: "1px solid #ccc",
    outline: "none",
    marginRight: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const boxesContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  };

  const boxStyle = {
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const menuIconStyle = {
    position: "absolute",
    top: "10px",
    
    right: "10px",
    cursor: "pointer",
  };

  const dateStyle = {
    color: "#777",
    fontSize: "14px",
  };


  return (
    <div style={containerStyle}>
      <div style={searchContainerStyle}>
        <input type="text" placeholder="Search" style={searchInputStyle} />
        <button style={buttonStyle}>Sort</button>
        <button style={buttonStyle}>Create</button>
      </div>
      <div style={boxesContainerStyle}>
        {notes.map((note, index) => (
          <div key={index} style={boxStyle}>
            <div style={menuIconStyle}>⋮</div>
            <div style={titleStyle}>{note.title}</div>
            <div style={dateStyle}>
              {note.date} - {note.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
