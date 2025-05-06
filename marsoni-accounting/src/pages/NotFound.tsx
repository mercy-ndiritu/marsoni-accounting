import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl px-4 text-center">
        {/* Large 404 illustration s */}
        <div className="relative w-full h-64 md:h-96 lg:h-[28rem] mb-6">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 800 600" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background elements */}
            <circle cx="400" cy="150" r="120" fill="#E2E8F0" />
            <path d="M260 450C260 428.909 276.909 412 298 412H502C523.091 412 540 428.909 540 450C540 471.091 523.091 488 502 488H298C276.909 488 260 471.091 260 450Z" fill="#E2E8F0" />
            
            {/*  404 text */}
            <text x="140" y="300" fill="#1E293B" fontSize="180" fontWeight="bold">4</text>
            <text x="325" y="300" fill="#1E293B" fontSize="180" fontWeight="bold">0</text>
            <text x="510" y="300" fill="#1E293B" fontSize="180" fontWeight="bold">4</text>
            
            {/* Blue arrows pointing to the numbers */}
            <path d="M220 340L220 380L180 380M220 380L260 380" stroke="#0EA5E9" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M580 340L580 380L540 380M580 380L620 380" stroke="#0EA5E9" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            
            
            
            {/* Calculator icon (below the numbers) */}
            <rect x="340" y="420" width="120" height="80" rx="8" fill="white" stroke="#94A3B8" strokeWidth="4"/>
            <rect x="350" y="430" width="100" height="20" rx="4" fill="#E2E8F0"/>
            <circle cx="365" cy="465" r="8" fill="#94A3B8"/>
            <circle cx="395" cy="465" r="8" fill="#94A3B8"/>
            <circle cx="425" cy="465" r="8" fill="#94A3B8"/>
            <circle cx="365" cy="490" r="8" fill="#94A3B8"/>
            <circle cx="395" cy="490" r="8" fill="#94A3B8"/>
            <circle cx="425" cy="490" r="8" fill="#0EA5E9"/>
          </svg>
        </div>
        
        
        <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;