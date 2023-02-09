import React from "react";
import Main from "./Components/main";
import Header from "./Components/header";
import Footer from "./Components/footer";

function App() {
  const [score, setScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(0);

  function setGameScore() {
    setScore(score + 1);
  }

  function resetScore() {
    if (score > bestScore) {
      setBestScore(score);
      setScore(0);
    } else {
      setScore(0);
    }
  }

  return (
    <div className="wrapper">
      <Header score={score} bestScore={bestScore} />
      <Main setGameScore={setGameScore} resetScore={resetScore} />
      <Footer />
    </div>
  );
}

export default App;
