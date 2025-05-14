
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkTo: string;
  color?: string;
}

const FeatureCard = ({ icon, title, description, linkTo, color = "bg-red-500" }: FeatureCardProps) => {
  return (
    <Link to={linkTo}>
      <div className="card-gradient hover:shadow-lg transition-all duration-300 h-full p-6 rounded-xl border border-gray-100">
        <div className="flex flex-col h-full">
          <div className={cn("w-12 h-12 flex items-center justify-center rounded-lg text-white mb-4", color)}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 flex-grow">
            {description}
          </p>
          <div className="mt-4 flex justify-end">
            <span className="text-red-500 font-medium flex items-center">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
