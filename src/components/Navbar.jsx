function Navbar() {
  return (
    <div className="flex flex-col box-border justify-center bg-[#30AC43] w-[100%] h-[60px] fixed left-0  bottom-0 md:w-[60px] md:h-[100%]">
      <ul className="flex justify-between  md:overflow-auto md:overscroll-y-contain md:flex-col md:h-[100%]">
        <li>home</li>
        <li>about</li>
        <li>page</li>
        <li>contact</li>
      </ul>
    </div>
  );
}
export default Navbar;
