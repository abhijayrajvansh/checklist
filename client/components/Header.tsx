import { ThemeSwitch } from "./theme-switch";

const Header = () => {
  return (
    <header className="flex justify-between px-10 rounded-xl bg-white shadow-lg py-3 mb-3 text-black">
        <ThemeSwitch />
        <p>Welcome, [username]</p>
      </header>
  )
}

export default Header;