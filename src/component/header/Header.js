const Header = ({ handleSignOut }) => {
  return (
    <div className="dummy-nav">
      Image Gallery
      <button className="sign-out-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Header;
