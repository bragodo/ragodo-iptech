import React from 'react';
import { 
  Shield, 
  LayoutDashboard, 
  ShieldAlert, 
  Map as MapIcon, 
  BarChart3, 
  Settings, 
  Radio, 
  LifeBuoy, 
  LogOut, 
  Search, 
  Bell, 
  CircleHelp, 
  Plus, 
  Minus, 
  LocateFixed,
  Flame,
  Stethoscope,
  AlertTriangle,
  TrafficCone,
  CheckCircle2,
  Contact2,
  Activity
} from 'lucide-react';

// --- TYPES ---
interface IncidentAlert {
  id: number;
  type: 'danger' | 'info' | 'success';
  title: string;
  time: string;
  description: string;
  icon: React.ReactNode;
}

const Dashboard: React.FC = () => {
  const alerts: IncidentAlert[] = [
    {
      id: 1,
      type: 'danger',
      title: 'Flash Flood Warning',
      time: '2M AGO',
      description: 'Rising water levels detected in Sector B-12 bypass area.',
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      id: 2,
      type: 'info',
      title: 'Road Obstruction',
      time: '14M AGO',
      description: 'Large debris reported on North Highway near central exit.',
      icon: <TrafficCone className="w-5 h-5" />
    },
    {
      id: 3,
      type: 'success',
      title: 'Signal Restored',
      time: '1H AGO',
      description: 'Communication grid G-4 is back online following maintenance.',
      icon: <CheckCircle2 className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-sans flex min-h-screen">
      
      {/* --- SIDE NAVIGATION --- */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-white border-r border-[#e6e8ea] flex flex-col py-6 z-50">
        <div className="px-6 mb-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1e40af] rounded-lg flex items-center justify-center text-white">
            <Shield size={24} />
          </div>
          <div>
            <h1 className="text-lg font-black text-[#00288e] uppercase tracking-tight italic">DumaSafe</h1>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#757684]">Emergency Command</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
          <NavItem icon={<ShieldAlert size={20}/>} label="Incidents" />
          <NavItem icon={<MapIcon size={20}/>} label="Map View" />
          <NavItem icon={<BarChart3 size={20}/>} label="Analytics" />
          <NavItem icon={<Settings size={20}/>} label="Settings" />
        </nav>

        <div className="px-6 mt-auto space-y-6">
          <button className="w-full bg-gradient-to-br from-[#bb0112] to-[#8B0000] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all">
            <Radio size={16} />
            <span className="uppercase tracking-widest text-[10px]">SOS Signal</span>
          </button>
          <div className="pt-6 border-t border-[#e6e8ea] space-y-2">
            <button className="flex items-center gap-3 px-4 py-2 text-[#757684] hover:text-[#00288e] transition-colors text-[10px] font-bold uppercase tracking-widest">
              <LifeBuoy size={16} /> Support
            </button>
            <button className="flex items-center gap-3 px-4 py-2 text-[#757684] hover:text-[#bb0112] transition-colors text-[10px] font-bold uppercase tracking-widest">
              <LogOut size={16} /> Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="ml-64 flex-1 min-h-screen">
        {/* TOP BAR */}
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#e6e8ea] px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h2 className="text-xl font-black tracking-tighter text-[#00288e]">DumaSafe</h2>
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#757684] w-4 h-4" />
              <input 
                placeholder="Search coordinates or incidents..." 
                className="bg-[#f2f4f6] border-none rounded-md pl-10 pr-4 py-2 text-sm w-80 focus:ring-2 focus:ring-[#00288e]/20 outline-none"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-[#757684]">
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#bb0112] rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full"><CircleHelp size={20} /></button>
            </div>
            <button className="bg-[#00288e] text-white px-6 py-2.5 rounded-md font-bold text-sm shadow-md hover:opacity-90 active:scale-95 transition-all">
              Report Incident
            </button>
            <div className="h-10 w-10 rounded-full bg-gray-200 border-2 border-[#00288e]/20 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80" alt="Commander" />
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* WELCOME */}
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00288e] mb-1 block">Personnel Authorized</span>
            <h1 className="text-4xl font-black tracking-tight">Welcome, Responder Alpha</h1>
            <p className="text-[#444653] mt-1 text-lg font-light">
              Status: <span className="text-green-600 font-semibold">Active Command Duty</span> • Sector 7-G
            </p>
          </div>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-12 gap-6">
            {/* MAP VIEW */}
            <section className="col-span-12 lg:col-span-8 bg-white rounded-xl overflow-hidden shadow-sm relative border border-[#e6e8ea]">
              <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-3 border border-white/50 shadow-sm">
                <span className="w-2 h-2 bg-[#bb0112] rounded-full animate-pulse shadow-[0_0_10px_#bb0112]" />
                <span className="text-[10px] font-bold uppercase tracking-wider">Live Area Monitoring</span>
              </div>
              <div className="h-[500px] w-full bg-[#e6e8ea] relative">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80" 
                  className="w-full h-full object-cover grayscale opacity-50 contrast-125" 
                  alt="City Map" 
                />
                {/* Simulated Markers */}
                <div className="absolute top-1/4 left-1/3 bg-[#bb0112] p-2 rounded-full border-2 border-white shadow-xl animate-bounce">
                  <Flame className="text-white w-4 h-4" />
                </div>
                <div className="absolute bottom-1/3 right-1/4 bg-[#00288e] p-2 rounded-full border-2 border-white shadow-xl">
                  <Stethoscope className="text-white w-4 h-4" />
                </div>
              </div>
              {/* Controls */}
              <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                <MapControlButton icon={<Plus size={20}/>} />
                <MapControlButton icon={<Minus size={20}/>} />
                <MapControlButton icon={<LocateFixed size={20}/>} />
              </div>
            </section>

            {/* SIDEBAR CONTENT */}
            <aside className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              {/* ALERTS */}
              <div className="bg-white rounded-xl p-6 border border-[#e6e8ea]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-xl">Recent Alerts</h3>
                  <span className="text-[10px] font-black text-[#00288e] px-2 py-1 bg-[#dde1ff] rounded italic">4 NEW</span>
                </div>
                <div className="space-y-4">
                  {alerts.map(alert => (
                    <AlertItem key={alert.id} alert={alert} />
                  ))}
                </div>
                <button className="w-full mt-6 py-2 text-[10px] font-bold text-[#00288e] hover:underline uppercase tracking-widest border-t border-[#eceef0] pt-4">
                  View Protocol Logs
                </button>
              </div>

              {/* QUICK ACTIONS */}
              <div className="grid grid-cols-2 gap-4">
                <QuickActionCard 
                  primary 
                  icon={<ShieldAlert size={28}/>} 
                  title="Report Incident" 
                  desc="Immediate dispatch alert." 
                />
                <QuickActionCard 
                  icon={<Contact2 size={28}/>} 
                  title="Resources" 
                  desc="Training & Protocols." 
                />
              </div>
            </aside>

            {/* ANALYTICS ROW */}
            <footer className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard label="Avg Response Time" value="4:12" trend="+0.4s" progress={75} />
              <StatCard label="Active Units" value="28" sub="/ 40 Total" progress={70} color="bg-green-600" />
              <StatCard label="Daily Incidents" value="142" trend="-12%" progress={45} color="bg-[#bb0112]" />
              <div className="bg-[#dde1ff] p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <Activity className="text-[#00288e] mb-2" />
                <h5 className="text-[10px] font-bold text-[#001453] uppercase tracking-widest">System Integrity</h5>
                <p className="text-lg font-black text-[#00288e]">100% Online</p>
              </div>
            </footer>
          </div>
        </div>
      </main>

      {/* EMERGENCY FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#bb0112] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <Radio size={32} />
      </button>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const NavItem = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
    active ? 'bg-[#dde1ff]/30 text-[#00288e] border-r-4 border-[#00288e] font-bold' : 'text-[#757684] hover:bg-gray-50'
  }`}>
    {icon}
    <span className="uppercase text-[10px] tracking-tight">{label}</span>
  </button>
);

const MapControlButton = ({ icon }: { icon: React.ReactNode }) => (
  <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-[#757684] hover:text-[#00288e] transition-colors border border-[#e6e8ea]">
    {icon}
  </button>
);

const AlertItem = ({ alert }: { alert: IncidentAlert }) => (
  <div className={`p-4 rounded-lg flex gap-4 border-l-4 transition-transform hover:scale-[1.02] bg-[#f7f9fb] ${
    alert.type === 'danger' ? 'border-[#bb0112]' : alert.type === 'success' ? 'border-green-600' : 'border-[#1e40af]'
  }`}>
    <div className={`w-10 h-10 rounded flex items-center justify-center ${
      alert.type === 'danger' ? 'bg-red-100 text-[#bb0112]' : 'bg-blue-100 text-[#00288e]'
    }`}>
      {alert.icon}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-start">
        <p className="font-bold text-sm">{alert.title}</p>
        <span className="text-[9px] font-bold text-[#757684]">{alert.time}</span>
      </div>
      <p className="text-xs text-[#444653] mt-1 leading-relaxed">{alert.description}</p>
    </div>
  </div>
);

const QuickActionCard = ({ icon, title, desc, primary = false }: { icon: React.ReactNode, title: string, desc: string, primary?: boolean }) => (
  <div className={`p-6 rounded-xl flex flex-col justify-between group cursor-pointer transition-all hover:shadow-lg ${
    primary ? 'bg-gradient-to-br from-[#00288e] to-[#1e40af] text-white' : 'bg-white border border-[#e6e8ea]'
  }`}>
    <div className="group-hover:scale-110 transition-transform">{icon}</div>
    <div className="mt-4">
      <h4 className="font-bold text-[11px] uppercase tracking-tight">{title}</h4>
      <p className={`text-[9px] leading-tight ${primary ? 'text-blue-100' : 'text-[#757684]'}`}>{desc}</p>
    </div>
  </div>
);

const StatCard = ({ label, value, trend, sub, progress, color = "bg-[#00288e]" }: any) => (
  <div className="bg-white p-6 rounded-xl border border-[#e6e8ea]">
    <p className="text-[10px] font-bold text-[#757684] uppercase tracking-widest mb-4">{label}</p>
    <div className="flex items-baseline gap-2">
      <span className="text-4xl font-black tracking-tighter">{value}</span>
      {trend && <span className={`text-[10px] font-bold ${trend.includes('+') ? 'text-[#00288e]' : 'text-[#bb0112]'}`}>{trend}</span>}
      {sub && <span className="text-[10px] font-bold text-[#757684]">{sub}</span>}
    </div>
    <div className="w-full bg-[#f2f4f6] h-1.5 mt-6 rounded-full overflow-hidden">
      <div className={`${color} h-full transition-all duration-500`} style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);

export default Dashboard;