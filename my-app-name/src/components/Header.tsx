const Header = ({ name }: { name: string }):JSX.Element => {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;