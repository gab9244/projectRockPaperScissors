function Header() {
  return (
    <div className="Header">
        <div className="HeaderRight"> 
      <p>Rock</p>
      <p>Paper</p>
      <p>Scissors</p>
        </div>
      

        <div className="HeaderLeft">
        <p id="score">Score</p>
        <p id="points">0</p>
        </div>
    </div>
  );
}

export default Header;
