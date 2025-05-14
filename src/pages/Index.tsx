
import Layout from "@/components/layout/Layout";
import FeatureCard from "@/components/home/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Phone, Calendar, Shield, Ambulance, MessageSquare } from "lucide-react";

const Index = () => {
  // Define a consistent color for all icons
  const iconColor = "bg-red-500";
  
  return (
    <Layout>
      <section className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center py-12 gap-8">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Your AI-Powered <span className="text-red-500">Health Companion</span>
            </h1>
            <p className="text-lg text-gray-600">
              MediMate provides instant medical advice, emergency assistance, appointment booking, 
              and more - all in one app. Your health, simplified.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-6 text-lg shadow-lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/ai-doctor">
                <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 px-6 py-6 text-lg shadow-md">
                  Try AI Doctor
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="bg-red-50/50 backdrop-blur-sm p-8 rounded-xl shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="MediMate Health App" 
                className="rounded-lg w-full object-cover h-72 md:h-96 shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Healthcare Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your health in one place, powered by advanced AI and user-friendly interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MessageSquare size={24} />}
              title="AI Doctor Assistant"
              description="Get instant medical advice from our AI-powered doctor assistant. Ask about symptoms, treatments, and health concerns."
              linkTo="/ai-doctor"
              color={iconColor}
            />
            <FeatureCard 
              icon={<Phone size={24} />}
              title="Emergency Assistance"
              description="Quickly find nearby hospitals, medical stores, and doctors in case of emergency with one-touch calling."
              linkTo="/emergency"
              color={iconColor}
            />
            <FeatureCard 
              icon={<Calendar size={24} />}
              title="Health Checkup Booking"
              description="Schedule health checkups and appointments easily from ₹999. Manage your calendar and get reminders."
              linkTo="/bookings"
              color={iconColor}
            />
            <FeatureCard 
              icon={<Shield size={24} />}
              title="Insurance Management"
              description="Store, view, and manage your health insurance policies up to ₹5,00,000 coverage. Access your documents anytime."
              linkTo="/insurance"
              color={iconColor}
            />
            <FeatureCard 
              icon={<Ambulance size={24} />}
              title="Ambulance Request"
              description="Request ambulance services from ₹1,500 with your location automatically shared for faster emergency response."
              linkTo="/ambulance"
              color={iconColor}
            />
            <FeatureCard 
              icon={<Heart size={24} />}
              title="Health Profile"
              description="Maintain your complete health profile, medical history, and preferences in one secure place."
              linkTo="/settings"
              color={iconColor}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-red-500/90 to-green-600/90 backdrop-blur-sm my-16 rounded-xl text-white py-12 px-8 text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to take control of your health?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Join thousands of users across India who are already benefiting from MediMate's comprehensive health services.
          </p>
          <Link to="/register">
            <Button className="bg-white text-red-500 hover:bg-gray-100 px-8 py-6 text-lg font-medium shadow-md">
              Sign Up Now
            </Button>
          </Link>
        </section>
      </section>
    </Layout>
  );
};

export default Index;
