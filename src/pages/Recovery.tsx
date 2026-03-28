import React, { useState } from 'react';
import { 
  LockKeyhole, 
  Mail, 
  ArrowRight, 
  MoveLeft, 
  CheckCircle2, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { supabase } from './lib/supabase';

const Recovery: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleRecovery = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Supabase Auth Send Password Reset Email
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (resetError) {
      setError(resetError.message);
      setLoading(false);
    } else {
      setLoading(false);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="bg-[#f7f9fb] font-sans text-[#191c1e] antialiased min-h-screen flex flex-col">
      
      {/* --- NAVIGATION --- */}
      <header className="w-full sticky top-0 z-50 bg-[#f7f9fb]/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-[#00288e]">DumaSafe</span>
            <span className="h-4 w-[1px] bg-[#c4c5d5]/30 mx-2"></span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-[#757684]">Recovery Portal</span>
          </div>
          <a href="#" className="text-sm font-semibold text-[#00288e] hover:underline transition-colors">Help Center</a>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
        {/* Abstract Background Blurs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00288e]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#bb0112]/5 rounded-full blur-3xl -z-10" />

        <div className="w-full max-w-md">
          {!isSubmitted ? (
            /* --- STATE 1: REQUEST FORM --- */
            <div className="bg-white rounded-xl p-10 shadow-[0_12px_32px_-4px_rgba(25,28,30,0.08)]">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-[#eceef0] rounded-full flex items-center justify-center mb-6 text-[#00288e]">
                  <LockKeyhole size={36} />
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight text-[#191c1e] mb-2">Forgot Password?</h1>
                <p className="text-[#444653] text-sm leading-relaxed max-w-[280px]">
                  Enter your secure email address and we'll send you recovery instructions.
                </p>
              </div>

              <form onSubmit={handleRecovery} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#757684] ml-1" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <input 
                      required
                      type="email" 
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@organization.com"
                      className="w-full bg-[#e6e8ea] border-none rounded-sm px-4 py-4 text-[#191c1e] placeholder:text-[#757684]/60 focus:ring-2 focus:ring-[#00288e]/40 transition-all outline-none"
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-[#757684]/40 w-5 h-5" />
                  </div>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded text-xs font-bold">
                    <AlertCircle size={14} /> {error}
                  </div>
                )}

                <button 
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#00288e] to-[#1e40af] text-white font-bold py-4 rounded-md shadow-lg shadow-[#00288e]/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? "SENDING..." : "Send Recovery Link"}
                  {!loading && <ArrowRight size={18} />}
                </button>
              </form>

              <div className="mt-10 pt-8 border-t border-[#e6e8ea] text-center">
                <button 
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00288e] hover:text-[#1e40af] group"
                >
                  <MoveLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Login
                </button>
              </div>
            </div>
          ) : (
            /* --- STATE 2: SUCCESS MESSAGE --- */
            <div className="bg-white rounded-xl p-10 shadow-[0_12px_32px_-4px_rgba(25,28,30,0.08)] border-t-4 border-green-600 animate-in fade-in zoom-in duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#191c1e] mb-3">Instructions Sent</h2>
                <p className="text-[#444653] text-sm leading-relaxed mb-8">
                  A secure link has been sent to <strong>{email}</strong>. Please check your inbox and spam folder.
                </p>

                <div className="w-full p-4 bg-[#f2f4f6] rounded-lg mb-8 text-left border-l-4 border-[#00288e]">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck size={14} className="text-[#00288e]" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#757684]">Security Tip</p>
                  </div>
                  <p className="text-xs text-[#444653] leading-normal">
                    Recovery links expire after 20 minutes for your protection.
                  </p>
                </div>

                <button 
                  onClick={() => window.location.href = '/login'}
                  className="w-full bg-[#e0e3e5] text-[#191c1e] font-bold py-4 rounded-md hover:bg-[#d8dadc] transition-colors flex items-center justify-center gap-2"
                >
                  Return to Sign In
                </button>

                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs font-medium text-[#757684] hover:text-[#00288e] transition-colors underline underline-offset-4"
                >
                  Didn't receive the email? Resend
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full py-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-[#757684] font-bold uppercase tracking-widest">
            © 2026 DumaSafe Command Systems. Sentinel Core v2.4
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#757684] hover:text-[#191c1e] transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#757684] hover:text-[#191c1e] transition-colors">Security</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-[#757684] hover:text-[#191c1e] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Recovery;