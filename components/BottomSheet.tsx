import React, { useEffect, useState } from 'react';
import { Check, ShieldCheck, Lock, ChevronRight, X } from 'lucide-react';

interface BottomSheetProps {
  onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
    // Animate progress bar to 85%
    const timer = setTimeout(() => setProgress(85), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />

      {/* Sheet Container */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 flex justify-center items-end pointer-events-none transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="w-full max-w-md bg-white rounded-t-[32px] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.2)] pointer-events-auto overflow-hidden flex flex-col max-h-[90vh]">
          
          {/* Header Section */}
          <div className="bg-white px-6 pt-8 pb-2 border-b border-slate-50 sticky top-0 z-10">
             {/* Close Button (Optional UX improvement) */}
            <button onClick={handleClose} className="absolute top-4 right-4 p-2 bg-slate-50 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
              <X size={20} />
            </button>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 animate-pulse">
                  Analysis in progress...
                </span>
                <span className="text-xs font-bold text-teal-700">{progress}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transition-all duration-1000 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                    {/* Shimmer effect on bar */}
                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 leading-tight mb-2">
              Finalize Your Analysis.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Unlock your full report and care plan now.
            </p>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto no-scrollbar px-6 py-6 space-y-5 bg-white pb-32">
            
            {/* Plan 2 (Recommended) - Displayed first due to Mobile-First Hierarchy priority */}
            <div className="relative">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md z-10 tracking-wide border border-white/20">
                BEST VALUE • SAVE 85%
              </div>
              
              <div className="bg-teal-50/80 border-2 border-teal-500 rounded-[24px] p-5 shadow-lg shadow-teal-900/5 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <h3 className="text-lg font-bold text-teal-950">7 Days Unlimited Access</h3>
                    <p className="text-xs text-teal-700 font-medium">Enhanced Plan</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-extrabold text-teal-900">₹99</div>
                    <div className="text-xs text-slate-400 line-through font-medium">₹699</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6 relative z-10">
                  <FeatureItem text="Unlimited AI Consultations" highlighted />
                  <FeatureItem text="Personalized Care Plans" highlighted />
                  <FeatureItem text="Next-Best Action Steps" highlighted />
                  <FeatureItem text="Priority Board Processing" highlighted />
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                  Unlock Full Report
                  <ChevronRight size={18} strokeWidth={3} />
                </button>
              </div>
            </div>

            {/* Plan 1 (Basic) */}
            <div className="bg-white border border-slate-200 rounded-[20px] p-5 relative group hover:border-slate-300 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">1 Session</h3>
                  <p className="text-xs text-slate-500 font-medium">Basic Plan</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-800">₹49</div>
                  <div className="text-xs text-slate-400 line-through font-medium">₹399</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <FeatureItem text="Single Diagnostic Report" />
                <FeatureItem text="24/7 Access" />
              </div>

              <button className="w-full bg-transparent border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800 py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-[0.98]">
                Select Basic
              </button>
            </div>

            {/* Trust Footer */}
            <div className="pt-2 text-center space-y-4">
              
              <div className="flex items-center justify-center gap-4 text-slate-400 grayscale opacity-70">
                 {/* UPI Logo Simulation */}
                 <div className="h-6 flex items-center font-bold italic tracking-tighter text-slate-600">
                    <span className="border-b-2 border-slate-400 pb-[1px]">UPI</span>
                 </div>
                 <div className="w-[1px] h-4 bg-slate-300"></div>
                 {/* Stripe Logo Simulation */}
                 <div className="h-6 flex items-center font-bold text-slate-600">
                    stripe
                 </div>
                 <div className="w-[1px] h-4 bg-slate-300"></div>
                 <div className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wide">
                    <Lock size={12} />
                    256-Bit SSL
                 </div>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-teal-700/80 bg-teal-50/50 py-2 px-4 rounded-full w-fit mx-auto">
                <ShieldCheck size={14} className="flex-shrink-0" />
                <p className="text-[10px] font-semibold">
                  Money-back guarantee if logic is unsatisfactory.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

const FeatureItem: React.FC<{ text: string; highlighted?: boolean }> = ({ text, highlighted }) => (
  <div className="flex items-start gap-3">
    <div className={`mt-0.5 rounded-full p-0.5 ${highlighted ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-teal-600'}`}>
      <Check size={12} strokeWidth={3} />
    </div>
    <span className={`text-sm ${highlighted ? 'text-teal-900 font-medium' : 'text-slate-600'}`}>
      {text}
    </span>
  </div>
);

export default BottomSheet;