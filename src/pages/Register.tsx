import React, { useState } from 'react';
import { 
  ShieldCheck, 
  User, 
  Mail, 
  Lock, 
  ShieldAlert, 
  Zap, 
  ArrowRight,
  ShieldEllipsis
} from 'lucide-react';
import { supabase } from './lib/supabase';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError(null);

    const { error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          full_name: formData.fullName,
          role: 'citizen', // Default role based on your flowchart
        }
      }
    });

    if (authError) {
      setError(authError.message);
    } else {
      alert("Check your email for the confirmation link!");
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-sans antialiased min-h-screen">
      <main className="flex min-h-screen">
        
        {/* LEFT SECTION: BRANDING & MISSION */}
        <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-[#00288e] to-[#1e40af] items-center justify-center p-16">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <img 
              src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80" 
              alt="Command Center" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="flex items-center gap-3 mb-12">
              <ShieldCheck className="text-white w-12 h-12" />
              <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">DumaSafe</h1>
            </div>
            
            <h2 className="text-5xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              Securing the <span className="text-[#a8b8ff]">Pulse</span> of Every Community.
            </h2>
            
            <p className="text-xl text-[#dde1ff] leading-relaxed mb-12 font-light">
              Join the premier network for emergency intelligence and rapid response coordination in Dumaguete City.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <Zap className="text-[#a8b8ff] mb-3 w-6 h-6" />
                <h3 className="text-white font-bold text-lg mb-1 text-[16px]">Rapid Response</h3>
                <p className="text-[#dde1ff]/80 text-sm">Real-time incident tracking for faster deployment.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <ShieldAlert className="text-[#a8b8ff] mb-3 w-6 h-6" />
                <h3 className="text-white font-bold text-lg mb-1 text-[16px]">Encrypted Core</h3>
                <p className="text-[#dde1ff]/80 text-sm">Secure handling of emergency data protocols.</p>
              </div>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-8 left-16 right-16 flex justify-between items-center text-[#dde1ff]/60 text-[10px] font-bold tracking-widest uppercase">
            <span>© 2026 DUMASAFE PROTOCOLS</span>
            <span>SENTINEL CORE v2.4</span>
          </div>
        </section>

        {/* RIGHT SECTION: REGISTRATION FORM */}
        <section className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#f7f9fb]">
          <div className="w-full max-w-md">
            
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-2 mb-12">
              <ShieldCheck className="text-[#00288e] w-8 h-8" />
              <span className="text-xl font-black text-[#00288e] tracking-tighter uppercase italic">DumaSafe</span>
            </div>

            <header className="mb-10">
              <h2 className="text-3xl font-extrabold text-[#191c1e] tracking-tight mb-2">Initialize Account</h2>
              <p className="text-[#444653] font-medium">Create your credentials to access the emergency dashboard.</p>
            </header>

            <form onSubmit={handleRegister} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#757684]">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757684] group-focus-within:text-[#00288e] w-5 h-5 transition-colors" />
                  <input 
                    type="text"
                    required
                    placeholder="Johnathan Doe"
                    className="w-full pl-12 pr-4 py-4 bg-[#e6e8ea] border-none rounded-sm focus:ring-2 focus:ring-[#00288e]/40 text-[#191c1e] font-medium transition-all"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#757684]">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757684] group-focus-within:text-[#00288e] w-5 h-5 transition-colors" />
                  <input 
                    type="email"
                    required
                    placeholder="j.doe@sentinel.org"
                    className="w-full pl-12 pr-4 py-4 bg-[#e6e8ea] border-none rounded-sm focus:ring-2 focus:ring-[#00288e]/40 text-[#191c1e] font-medium transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              {/* Passwords Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#757684]">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757684] group-focus-within:text-[#00288e] w-5 h-5 transition-colors" />
                    <input 
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 bg-[#e6e8ea] border-none rounded-sm focus:ring-2 focus:ring-[#00288e]/40 text-[#191c1e] font-medium transition-all"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#757684]">Confirm</label>
                  <div className="relative group">
                    <ShieldEllipsis className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757684] group-focus-within:text-[#00288e] w-5 h-5 transition-colors" />
                    <input 
                      type="password"
                      required
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-4 bg-[#e6e8ea] border-none rounded-sm focus:ring-2 focus:ring-[#00288e]/40 text-[#191c1e] font-medium transition-all"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {error && (
                <p className="text-red-600 text-xs font-bold uppercase tracking-tight">{error}</p>
              )}

              {/* Terms */}
              <div className="flex items-start gap-3 py-2">
                <input type="checkbox" required className="mt-1 rounded-sm border-[#757684] text-[#00288e] focus:ring-[#00288e]" />
                <label className="text-sm text-[#444653] leading-tight">
                  I acknowledge that DumaSafe is a mission-critical tool. I agree to the <span className="text-[#00288e] font-bold">Service Protocols</span>.
                </label>
              </div>

              {/* Action Button */}
              <button 
                disabled={loading}
                className="w-full py-5 px-8 bg-gradient-to-r from-[#00288e] to-[#1e40af] text-white font-bold rounded-md shadow-lg shadow-[#00288e]/20 flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {loading ? "INITIALIZING..." : "Create Commander Account"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <footer className="mt-12 pt-8 border-t border-[#eceef0] text-center">
              <p className="text-[#444653] font-medium">
                Already part of the network? 
                <button onClick={() => window.location.href='/login'} className="text-[#00288e] font-bold hover:underline ml-1">
                  Sign In
                </button>
              </p>
            </footer>
          </div>
        </section>
      </main>

      {/* Decorative Status Indicator */}
      <div className="fixed top-6 right-6 hidden lg:flex items-center gap-2 bg-white py-2 px-4 rounded-full shadow-sm">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-[10px] font-bold text-[#757684] tracking-widest uppercase">Sentinel Online</span>
      </div>
    </div>
  );
};

export default Register;