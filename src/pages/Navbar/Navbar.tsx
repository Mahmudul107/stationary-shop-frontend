import { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  logout,
  selectToken,
  selectUser,
} from "@/redux/features/auth/authSlice";
import Logo from "@/assets/LeafandLine.png";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const user = useAppSelector(selectUser);
  const [open, setOpen] = useState(false);

  // Custom button styles for better clarity and reuse
  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-700 transition-all duration-300 ease-in-out relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-green-500 after:transition-all after:duration-300 ${
      isActive ? "text-green-700 after:w-full after:bg-green-500" : ""
    }`;

  const buttonClass =
    "bg-[#2F5233] text-[#F5F1EA] hover:bg-[#A8BBA5] transition-colors";

  return (
    <nav className="w-full bg-[#F5F1EA] text-[#333333] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" className="h-10 rounded-full" />
          <span className="text-2xl font-bold text-[#2F5233]">Leaf & Line</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={navItemClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navItemClass}>
            About
          </NavLink>
          <NavLink to="/products" className={navItemClass}>
            Products
          </NavLink>
          {token && (
            <NavLink to={`/${user?.role}/dashboard`} className={navItemClass}>
              Dashboard
            </NavLink>
          )}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {!token ? (
            <Link to="/login">
              <Button className={buttonClass}>Login</Button>
            </Link>
          ) : (
            <Button className={buttonClass} onClick={() => dispatch(logout())}>
              Logout
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-[#2F5233]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-[#F5F1EA] border-none text-[#333333]"
            >
              <div className="flex flex-col gap-4 mt-6">
                <NavLink
                  to="/"
                  className={navItemClass}
                  onClick={() => setOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={navItemClass}
                  onClick={() => setOpen(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/products"
                  className={navItemClass}
                  onClick={() => setOpen(false)}
                >
                  Products
                </NavLink>
                {token && (
                  <NavLink
                    to={`/${user?.role}/dashboard`}
                    className={navItemClass}
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </NavLink>
                )}
                {!token ? (
                  <Link
                    to="/login"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    <Button className="w-full bg-[#2F5233] text-[#F5F1EA] hover:bg-[#A8BBA5]">
                      Login
                    </Button>
                  </Link>
                ) : (
                  <Button
                    className="bg-[#2F5233] text-[#F5F1EA] hover:bg-[#A8BBA5]"
                    onClick={() => {
                      dispatch(logout());
                      setOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
