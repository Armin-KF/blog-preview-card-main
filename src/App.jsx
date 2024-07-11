import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="my-card">
          <img
            id="my-card-img"
            src="assets/images/illustration-article.svg"
            alt="image"
          />
          <div>
            <h6 id="my-card-h6">Learning</h6>
            <p id="my-card-p">Published 21 Dec 2023</p>
            <h1 id="my-card-h1">HTML & CSS foundations</h1>
            <p id="my-card-text">
              These languages are the backbone of every website , defining
              structure, content, and presentation
            </p>
            <img
              id="profile-pic"
              src="assets/images/image-avatar.webp"
              alt="profile-pic"
            />
            <p id="profile-name">Greg Hooper</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
