const Header = () => {
  return (
    <header className="flex py-4 px-20 items-center gap-8 border-b-2">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png"
          alt="tesla-config"
          className=" h-14"
        />
      </div>
      <h1 className="text-2xl font-normal">Tesla Config</h1>
    </header>
  );
};

export default Header;
