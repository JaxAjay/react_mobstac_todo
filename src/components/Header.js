
function Header({onClick}) {
    return (
      <div className="header">
        <h1>Todo</h1>
        <button onClick={onClick} className='btn'>Add</button>
      </div>
    );
  }
  
export default Header;