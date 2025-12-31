import { useEffect, useState } from 'react';

export const PDFModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleRedirect = () => {
    window.open('https://pdf.singhdipesh.com.np', '_blank');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full mx-4 animate-in fade-in zoom-in duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Check Out My PDF
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            View my probability PDF document
          </p>
          
          <button
            onClick={handleRedirect}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Probability PDF
          </button>
        </div>
      </div>
    </div>
  );
};
