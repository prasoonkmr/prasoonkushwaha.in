import NavLogo from "../components/NavLogo"
import NavMenu from "../components/NavMenu"
import NavBtn from "../components/NavBtn"

const Header = () => {
  return (
    <nav className='flex justify-between items-center px-2 bg-zinc-100'>
      <div>
        <NavLogo/>
      </div>
      <div>
        <NavMenu/>
      </div>
      <div>
        <NavBtn/>
      </div>
    </nav>
  )
}

export default Header