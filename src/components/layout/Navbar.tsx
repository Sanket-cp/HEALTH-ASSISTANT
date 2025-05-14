
import { Link } from "react-router-dom";
import { Heart, Calendar, Shield, Ambulance, Settings, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Define consistent color for all icons
  const iconClass = "text-red-500";

  return (
    <nav className="bg-white shadow-md py-3 px-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Heart className={`h-6 w-6 ${iconClass}`} />
          <span className="text-xl font-bold text-gray-800">MediMate</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors">
            Home
          </Link>
          <Link to="/ai-doctor" className="text-gray-700 hover:text-red-500 transition-colors">
            AI Doctor
          </Link>
          <Link to="/emergency" className="text-gray-700 hover:text-red-500 transition-colors">
            Emergency
          </Link>
          <Link to="/bookings" className="text-gray-700 hover:text-red-500 transition-colors">
            Bookings
          </Link>
          <Link to="/insurance" className="text-gray-700 hover:text-red-500 transition-colors">
            Insurance
          </Link>
          <Link to="/ambulance" className="text-gray-700 hover:text-red-500 transition-colors">
            Ambulance
          </Link>
          <Link to="/settings" className="text-gray-700 hover:text-red-500 transition-colors">
            Settings
          </Link>
        </div>

        {/* Login/Register Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 w-full border-t border-gray-200 shadow-lg z-50">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/ai-doctor" 
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart className={`h-5 w-5 ${iconClass}`} />
              AI Doctor
            </Link>
            <Link 
              to="/emergency" 
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Emergency
            </Link>
            <Link 
              to="/bookings" 
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className={`h-5 w-5 ${iconClass}`} />
              Bookings
            </Link>
            <Link 
              to="/insurance" 
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Shield className={`h-5 w-5 ${iconClass}`} />
              Insurance
            </Link>
            <Link 
              to="/ambulance" 
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Ambulance className={`h-5 w-5 ${iconClass}`} />
              Ambulance
            </Link>
            <Link 
              to="/settings" 
              className="flex items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Settings className={`h-5 w-5 ${iconClass}`} />
              Settings
            </Link>
            
            <div className="pt-4 flex flex-col gap-3 border-t border-gray-200">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-50">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
