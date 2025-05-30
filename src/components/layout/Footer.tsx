
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              <span className="text-xl font-bold text-gray-800">MediMate</span>
            </div>
            <p className="text-gray-600">
              Your AI-powered health companion. Get medical advice, book appointments, 
              and manage your health insurance in one place.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/ai-doctor" className="text-gray-600 hover:text-red-500 transition-colors">
                  AI Doctor
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-gray-600 hover:text-red-500 transition-colors">
                  Emergency
                </Link>
              </li>
              <li>
                <Link to="/bookings" className="text-gray-600 hover:text-red-500 transition-colors">
                  Health Checkup Booking
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="text-gray-600 hover:text-red-500 transition-colors">
                  Insurance Management
                </Link>
              </li>
              <li>
                <Link to="/ambulance" className="text-gray-600 hover:text-red-500 transition-colors">
                  Ambulance Request
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-600 hover:text-red-500 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-red-500 transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-gray-600 hover:text-red-500 transition-colors">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-red-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-red-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} MediMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
