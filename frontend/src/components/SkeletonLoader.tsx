import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'lostfound' | 'login' | 'signup' | 'home' | 'profile' | 'chat' | 'complaints' | 'dashboard' | 'features' | 'campusmap' | 'landing' | 'complaint' | 'events';
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ variant = 'lostfound' }) => {
  const LostFoundSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
          <div className="h-48 bg-gray-200 animate-pulse"></div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const AuthSkeleton = () => (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto" aria-busy="true">
      <div className="space-y-6">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        <div className="space-y-4">
          <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        <div className="h-10 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    </div>
  );

  const HomeSkeleton = () => (
    <div className="space-y-8" aria-busy="true">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-200 animate-pulse rounded-lg"></div>
      
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <div className="h-8 bg-gray-200 rounded w-1/2 animate-pulse mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProfileSkeleton = () => (
    <div className="min-h-screen flex flex-col bg-white font-sans" aria-busy="true">
      <main className="flex-1 container mx-auto px-12 py-8 pt-24">
        <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse mx-auto"></div> {/* Title Placeholder */}

        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-md mx-auto">
          {/* Profile Picture Section */}
           <div className="flex flex-col items-center mb-6">
               <div className="relative w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300 shadow-inner animate-pulse">
                   {/* Placeholder icon */}
                   <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
               </div>
            </div>

          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-1 animate-pulse"></div> {/* Label */}
              <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div> {/* Input */}
            </div>
            {/* Email Field */}
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-1 animate-pulse"></div> {/* Label */}
              <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div> {/* Input */}
            </div>
             {/* Phone Field */}
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-1 animate-pulse"></div> {/* Label */}
              <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div> {/* Input */}
            </div>
            {/* Gender Field */}
             <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-1 animate-pulse"></div> {/* Label */}
              <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div> {/* Input */}
            </div>
             {/* Date of Birth Field */}
             <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-1 animate-pulse"></div> {/* Label */}
              <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div> {/* Input */}
            </div>
             {/* Major Field */}
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-1 animate-pulse"></div> {/* Label */}
              <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div> {/* Input */}
            </div>
             {/* Program Field */}
             <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-1 animate-pulse"></div> {/* Label */}
              <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div> {/* Input */}
            </div>
             {/* Year Interval Field */}
            <div>
              <div className="h-4 bg-gray-200 rounded w-24 mb-1 animate-pulse"></div> {/* Label */}
              <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div> {/* Input */}
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
               <div className="h-10 bg-gray-200 rounded-full w-24 animate-pulse"></div> {/* Cancel/Edit Button */}
               <div className="h-10 bg-gray-200 rounded-full w-32 animate-pulse"></div> {/* Save Button */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  const ChatSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[70vh]" aria-busy="true">
      {/* Sidebar */}
      <div className="bg-white rounded-lg shadow p-4 flex flex-col max-h-[calc(100vh-100px)]">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="h-10 bg-gray-200 rounded-full mb-6 animate-pulse"></div>
        <div className="space-y-4 flex-1 overflow-y-auto">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center p-2 rounded-md bg-gray-100 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-gray-300 mr-3"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-1"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Chat Area */}
      <div className="md:col-span-2 bg-white rounded-lg shadow p-6 flex flex-col max-h-[calc(100vh-96px)]">
        <div className="flex items-center border-b border-gray-200 pb-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 animate-pulse"></div>
          <div className="flex-1">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        <div className="flex-1 overflow-y-auto mb-4 space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex justify-end mb-2">
              <div className="max-w-[70%] px-4 py-2 rounded-xl bg-gray-200 animate-pulse h-8"></div>
            </div>
          ))}
        </div>
        <form className="flex items-center gap-2 pt-4 border-t border-gray-200 relative">
          <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse mr-2"></div>
          <div className="flex-1 h-12 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse ml-2"></div>
        </form>
      </div>
    </div>
  );

  const ComplaintsSkeleton = () => (
    <div className="space-y-6" aria-busy="true">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-3 animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="flex gap-2 mt-2">
            <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      ))}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8 animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-10 bg-gray-200 rounded mb-2"></div>
        <div className="h-20 bg-gray-200 rounded mb-2"></div>
        <div className="h-10 bg-gray-200 rounded mb-2"></div>
        <div className="flex gap-2 mt-2">
          <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
          <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );

  const DashboardSkeleton = () => (
    <div className="space-y-8" aria-busy="true">
      <div className="h-16 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );

  const FeaturesSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" aria-busy="true">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
          <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      ))}
    </div>
  );

  const CampusMapSkeleton = () => (
    <div className="w-full h-[60vh] bg-gray-200 rounded-lg animate-pulse" aria-busy="true"></div>
  );

  const LandingSkeleton = () => (
    <div className="space-y-8" aria-busy="true">
      <div className="h-24 bg-gray-200 rounded-lg animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
            <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        ))}
      </div>
      <div className="h-16 bg-gray-200 rounded-lg animate-pulse"></div>
    </div>
  );

  const EventsSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
          <div className="h-40 bg-gray-200 animate-pulse"></div>
          <div className="p-4">
            <div className="h-6 bg-gray-200 rounded w-2/3 animate-pulse mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse mb-2"></div>
            <div className="flex gap-2 mt-4">
              <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
              <div className="h-8 w-20 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (variant === 'complaint') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 flex flex-col gap-2 border animate-pulse">
            {/* Image/Icon Placeholder */}
            <div className="relative h-48 w-full flex items-center justify-center bg-gray-100 rounded mb-2">
              <span className="text-5xl text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0v10.5A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V9m7.5 0H6.75m8.25 0H18m-12 0h2.25" />
                </svg>
              </span>
            </div>
            {/* Title and Status Badge */}
            <div className="flex items-center justify-between mb-2">
              <div className="h-5 w-1/2 bg-gray-200 rounded" />
              <div className="h-5 w-16 bg-gray-200 rounded-full" />
            </div>
            {/* Description Placeholder */}
            <div className="h-4 w-full bg-gray-200 rounded mb-1" />
            <div className="h-4 w-5/6 bg-gray-200 rounded mb-1" />
            {/* Meta Info Placeholder */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-auto">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 bg-gray-200 rounded-full" />
                <div className="h-4 w-24 bg-gray-200 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 bg-gray-200 rounded-full" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
              </div>
            </div>
            {/* Button Placeholders */}
            <div className="flex gap-2 pt-3">
              <div className="h-8 w-20 bg-gray-200 rounded-full" />
              <div className="h-8 w-20 bg-gray-200 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  switch (variant) {
    case 'lostfound':
      return <LostFoundSkeleton />;
    case 'login':
    case 'signup':
      return <AuthSkeleton />;
    case 'home':
      return <HomeSkeleton />;
    case 'profile':
      return <ProfileSkeleton />;
    case 'chat':
      return <ChatSkeleton />;
    case 'complaints':
      return <ComplaintsSkeleton />;
    case 'dashboard':
      return <DashboardSkeleton />;
    case 'features':
      return <FeaturesSkeleton />;
    case 'campusmap':
      return <CampusMapSkeleton />;
    case 'landing':
      return <LandingSkeleton />;
    case 'events':
      return <EventsSkeleton />;
    default:
      return <LostFoundSkeleton />;
  }
};

export default SkeletonLoader; 