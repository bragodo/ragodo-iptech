import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  AlertCircle 
} from 'lucide-react';
import { supabase } from './lib/supabase'; // Adjust path to your supabase client

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      // Redirect happens automatically if you have an Auth Listener in App.tsx
      console.log("Logged in successfully");
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-sans text-[#191c1e] flex items-center justify-center relative overflow-hidden">
      {/* Grid Background Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{ 
          backgroundImage: 'radial-gradient(circle, #c4c5d5 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      />
      
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00288e] to-[#1e40af]" />

      <main className="relative z-10 w-full max-w-[1200px] px-6 py-12 flex flex-col items-center">
        
        {/* Brand Identity Section */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#00288e] to-[#1e40af] rounded-xl flex items-center justify-center shadow-lg">
              <ShieldCheck className="text-white w-8 h-8" />
            </div>
            <h1 className="text-4xl font-black tracking-tighter text-[#00288e]">DumaSafe</h1>
          </div>
          <p className="text-[#444653] font-medium tracking-tight uppercase text-xs">
            Vigilant Grid | Emergency Command Center
          </p>
        </div>

        {/* Authentication Canvas */}
        <div className="w-full max-w-md">
          <div className="bg-[#f2f4f6] p-1 rounded-xl shadow-sm">
            <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl">
              <header className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-[#191c1e] mb-2">Command Login</h2>
                <p className="text-[#444653] text-sm leading-relaxed">
                  Authorized access only. All sessions are monitored for security compliance.
                </p>
              </header>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-[#444653]" htmlFor="email">
                    EMAIL ADDRESS
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757684] w-5 h-5" />
                    <input 
                      id="email"
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-[#e6e8ea] border-none rounded-sm focus:ring-2 focus:ring-[#00288e]/40 transition-all text-[#191c1e] placeholder:text-[#757684]/60" 
                      placeholder="operator@dumasafe.gov" 
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-[#444653]" htmlFor="password">
                      SECURITY KEY
                    </label>
                    <a className="text-[10px] font-bold uppercase tracking-widest text-[#00288e] hover:underline" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757684] w-5 h-5" />
                    <input 
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-4 bg-[#e6e8ea] border-none rounded-sm focus:ring-2 focus:ring-[#00288e]/40 transition-all text-[#191c1e] placeholder:text-[#757684]/60" 
                      placeholder="••••••••••••" 
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#757684] hover:text-[#191c1e] transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Validation Message */}
                {error && (
                  <div className="bg-red-50 border border-red-100 p-3 rounded-sm flex items-start gap-3">
                    <AlertCircle className="text-red-600 w-4 h-4 mt-0.5" />
                    <p className="text-xs text-red-800 font-medium">{error}</p>
                  </div>
                )}

                {/* Action Button */}
                <button 
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#00288e] to-[#1e40af] text-white py-4 px-8 rounded-md font-bold tracking-tight shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                  type="submit"
                >
                  <span>{loading ? "AUTHENTICATING..." : "INITIALIZE COMMAND"}</span>
                  {!loading && <ArrowRight size={20} />}
                </button>
              </form>

              {/* Secondary Actions */}
              <div className="mt-10 pt-8 border-t-0 bg-[#f2f4f6] -mx-8 -mb-10 p-8 rounded-b-lg text-center">
                <p className="text-sm text-[#444653]">
                  New to the response network? 
                  <a className="text-[#00288e] font-bold hover:underline underline-offset-4 ml-1" href="#">Register Account</a>
                </p>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <footer className="mt-8 text-center space-y-4">
            <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.1em] text-[#757684]">
              <a className="hover:text-[#00288e] transition-colors" href="#">Privacy Policy</a>
              <span className="w-1 h-1 bg-[#c4c5d5] rounded-full mt-1.5"></span>
              <a className="hover:text-[#00288e] transition-colors" href="#">System Status</a>
              <span className="w-1 h-1 bg-[#c4c5d5] rounded-full mt-1.5"></span>
              <a className="hover:text-[#00288e] transition-colors" href="#">Terms of Use</a>
            </div>
            <p className="text-[10px] text-[#757684]/60 max-w-xs mx-auto leading-relaxed uppercase">
              DumaSafe is a proprietary system. Unauthorized use is subject to criminal prosecution.
            </p>
          </footer>
        </div>
      </main>

      {/* Decorative Blur Backgrounds */}
      <div className="hidden lg:block fixed -left-24 bottom-[-10%] w-[300px] h-[300px] bg-[#00288e]/5 rounded-full blur-[100px]" />
    </div>
  );
};

export default Login;