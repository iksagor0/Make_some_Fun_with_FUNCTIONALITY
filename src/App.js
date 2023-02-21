import "./App.css";

function App() {
  // const [id, setId] = useState(254);
  // const [file, setFile] = useState();

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
  //   console.log(file);
  //   e.preventDefault();
  //   fetch("http://192.168.0.105:1000/upload/", {
  //     method: "POST",
  //     body: file,

  //     headers: {
  //       "content-type": file.type,
  //       "content-length": `${file.size}`, // 👈 Headers need to be a string
  //     },
  //   });
  // }

  return (
    <div className="App">
      <form
        action="http://192.168.0.105:1000/upload"
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
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
