import React, { useState } from 'react';
import { Activity, Menu, User, Bell } from 'lucide-react';
import BottomSheet from './components/BottomSheet';

const App: React.FC = () => {
  const [showSheet, setShowSheet] = useState(true);

  // This background component simulates the "app" state behind the bottom sheet
  // to give context to the user's journey (Analysis Complete).
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden flex justify-center">
      
      {/* Simulated Mobile App Background */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative flex flex-col">
        
        {/* Mock Header */}
        <header className="px-6 py-6 flex justify-between items-center bg-white border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-slate-800 text-lg">MediBoard AI</span>
          </div>
          <div className="flex gap-4 text-slate-400">
            <Bell className="w-6 h-6" />
            <Menu className="w-6 h-6" />
          </div>
        </header>

        {/* Mock Content - Blurred to focus attention on sheet */}
        <main className={`flex-1 p-6 flex flex-col gap-6 transition-all duration-500 ${showSheet ? 'blur-sm opacity-50' : ''}`}>
          
          <div className="bg-slate-100 h-48 rounded-2xl w-full animate-pulse"></div>
          
          <div className="flex gap-4">
            <div className="bg-slate-100 h-32 rounded-2xl flex-1 animate-pulse"></div>
            <div className="bg-slate-100 h-32 rounded-2xl flex-1 animate-pulse"></div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-slate-100 h-4 rounded w-3/4 animate-pulse"></div>
            <div className="bg-slate-100 h-4 rounded w-1/2 animate-pulse"></div>
            <div className="bg-slate-100 h-4 rounded w-full animate-pulse"></div>
          </div>

        </main>

        {/* Floating Action Button (Simulated Trigger) */}
        {!showSheet && (
           <div className="absolute bottom-6 left-0 right-0 px-6">
             <button 
               onClick={() => setShowSheet(true)}
               className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-teal-600/30 active:scale-95 transition-transform"
             >
               View Results
             </button>
           </div>
        )}

      </div>

      {/* The Actual Bottom Sheet Component */}
      {showSheet && <BottomSheet onClose={() => setShowSheet(false)} />}

    </div>
  );
};

export default App;