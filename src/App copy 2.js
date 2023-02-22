// import axios from "axios";
import React from "react";
import "./App.css";

function App() {
  // const [id, setId] = React.useState(254);
  // const [file, setFile] = React.useState(null);

  // const handleFileChange = (e) => {
  //   if (e.target.files) {
  //     setFile(e.target.files[0]);
  //   }
  // };

  // function handleChange(e) {
  //   setId(e.target.value);
  // }
  // // Submit
  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const formData = new FormData();

  //   formData.append("myfile", file);
  //   formData.append("id", id);

  //   console.log(file);
  //   axios.post("http://localhost:1000/upload", formData);
  // }

  return (
    <div className="App">
      <form
        action="http://localhost:1000/upload"
        method="post"
        enctype="multipart/form-data"
        // onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="ID"
          // value={id}
          // onChange={handleChange}
        />
        <input
          type="file"
          name="profile"
          id="profile"
          // onChange={handleFileChange}
        />
        <input
          type="submit"
          value="Submit"
          id="button"
          // onClick={(e) => e.preventDefault()}
        />
      </form>{" "}
    </div>
  );
}

export default App;
