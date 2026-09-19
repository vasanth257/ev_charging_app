/* ==========================================================================
   COMPASS EV CHARGING APP — HIGH-FIDELITY SCREEN RENDERERS
   Client: Voltline Mobility
   All 23+ required product screens & flow handlers
   ========================================================================== */

import { getIcon } from './icons.js';
import { store } from './store.js';
import { renderTopBar, renderBottomNav, renderBadge, renderChargerCard, renderInteractiveMap, renderEmptyState } from './components.js';

// ==========================================
// 1. ONBOARDING SCREENS (1 to 4)
// ==========================================

export function renderWelcomeScreen() {
  return `
    <div class="flex-1 flex flex-col justify-between p-6 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white animate-fade-in">
      
      <!-- HEADER / BRANDING -->
      <div class="pt-6 text-center">
        <div class="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-emerald-500/20 text-3xl font-extrabold text-slate-950">
          🧭
        </div>
        <h1 class="text-3xl font-black tracking-tight text-white mb-1">COMPASS</h1>
        <p class="text-xs font-bold uppercase tracking-widest text-emerald-400">Voltline Mobility</p>
      </div>

      <!-- HERO ILLUSTRATION / CARD -->
      <div class="my-6 p-6 rounded-3xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-md shadow-2xl text-center">
        <div class="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
          ${getIcon('zap', 'w-10 h-10 animate-pulse')}
        </div>
        <h2 class="text-2xl font-bold text-white mb-2">Find. Charge. Go.</h2>
        <p class="text-xs text-slate-300 leading-relaxed">
          The ultimate EV companion for commuters, road-trippers, and new EV owners. Reliable charging stations, transparent pricing, and instant payments.
        </p>
      </div>

      <!-- CTAs -->
      <div class="space-y-3 pb-4">
        <button data-action="nav-screen" data-target="signup" class="btn-primary">
          Get Started ${getIcon('arrowRight', 'w-4 h-4')}
        </button>
        <button data-action="nav-screen" data-target="login" class="btn-secondary bg-slate-800 text-white border-slate-700 hover:bg-slate-700">
          Log In
        </button>
        <p class="text-[11px] text-center text-slate-500">
          By continuing, you agree to Voltline’s Terms & Privacy Policy
        </p>
      </div>

    </div>
  `;
}

export function renderAuthScreen(isSignUp = false) {
  return `
    <div class="flex-1 flex flex-col justify-between p-6 bg-white animate-fade-in">
      <div>
        <div class="flex items-center justify-between mb-6">
          <button data-action="nav-screen" data-target="welcome" class="w-9 h-9 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center">
            ${getIcon('arrowLeft', 'w-5 h-5')}
          </button>
          <span class="text-xs font-bold text-emerald-600 uppercase tracking-widest">Voltline Mobility</span>
        </div>

        <h2 class="text-2xl font-bold text-slate-900 mb-1">${isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
        <p class="text-xs text-slate-500 mb-6">${isSignUp ? 'Sign up to start charging in seconds' : 'Log in to your COMPASS account'}</p>

        <form onsubmit="return false;" class="space-y-4">
          ${isSignUp ? `
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
              <input type="text" placeholder="Rahul Sharma" value="Rahul Sharma" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
          ` : ''}

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
            <input type="email" placeholder="rahul@example.com" value="rahul.sharma@example.com" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <input type="password" value="••••••••••••" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          ${!isSignUp ? `
            <div class="text-right">
              <a href="#" class="text-xs font-semibold text-emerald-600 hover:underline">Forgot password?</a>
            </div>
          ` : ''}

          <button data-action="nav-screen" data-target="${isSignUp ? 'addVehicle' : 'home'}" class="btn-primary mt-2">
            ${isSignUp ? 'Continue to Add Vehicle' : 'Log In'}
          </button>
        </form>

        <div class="my-6 flex items-center gap-3">
          <div class="flex-1 h-px bg-slate-200"></div>
          <span class="text-[11px] text-slate-400 font-semibold uppercase">Or continue with</span>
          <div class="flex-1 h-px bg-slate-200"></div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <button class="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-50">
            <span>🌐</span> Google
          </button>
          <button class="py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-50">
            <span></span> Apple
          </button>
        </div>
      </div>

      <div class="text-center pt-4 border-t border-slate-100">
        <button data-action="nav-screen" data-target="${isSignUp ? 'login' : 'signup'}" class="text-xs text-slate-600">
          ${isSignUp ? 'Already have an account?' : "Don't have an account?"} <span class="font-bold text-emerald-600 hover:underline">${isSignUp ? 'Log In' : 'Sign Up'}</span>
        </button>
      </div>
    </div>
  `;
}

export function renderAddVehicleScreen() {
  return `
    <div class="flex-1 flex flex-col justify-between p-6 bg-white animate-fade-in">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold text-slate-400">STEP 2 OF 3</span>
          <span class="text-xs font-bold text-emerald-600">Vehicle Profile</span>
        </div>

        <h2 class="text-xl font-bold text-slate-900 mb-1">Add Your Vehicle</h2>
        <p class="text-xs text-slate-500 mb-6">COMPASS uses your vehicle specs to calculate charging speeds and range.</p>

        <div class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Vehicle Brand</label>
            <select class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none bg-white">
              <option selected>Tesla</option>
              <option>Tata Motors</option>
              <option>Hyundai</option>
              <option>MG Motors</option>
              <option>Mahindra</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Vehicle Model</label>
            <input type="text" value="Model 3 Long Range" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Battery Size (kWh)</label>
              <input type="number" value="75" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Connector Type</label>
              <select class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs font-medium focus:ring-2 focus:ring-emerald-500 outline-none bg-white">
                <option selected>CCS (DC Fast)</option>
                <option>Type 2 (AC)</option>
                <option>CHAdeMO</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Vehicle Nickname</label>
            <input type="text" value="Red Lightning" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
        </div>

        <div class="mt-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
            ${getIcon('car', 'w-5 h-5')}
          </div>
          <div>
            <div class="text-xs font-bold text-emerald-900">Preset Detected: CCS Compatible</div>
            <div class="text-[11px] text-emerald-700">Supports ultra-fast charging up to 250 kW DC.</div>
          </div>
        </div>
      </div>

      <div class="pt-6">
        <button data-action="nav-screen" data-target="addPayment" class="btn-primary">
          Save Vehicle & Continue
        </button>
      </div>
    </div>
  `;
}

export function renderAddPaymentScreen() {
  return `
    <div class="flex-1 flex flex-col justify-between p-6 bg-white animate-fade-in">
      <div>
        <div class="flex items-center justify-between mb-4">
          <span class="text-xs font-bold text-slate-400">STEP 3 OF 3</span>
          <span class="text-xs font-bold text-emerald-600">Payment Setup</span>
        </div>

        <h2 class="text-xl font-bold text-slate-900 mb-1">Add Payment Method</h2>
        <p class="text-xs text-slate-500 mb-6">Enjoy automatic billing at any Voltline charger station.</p>

        <!-- CARD PREVIEW -->
        <div class="p-5 rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-800 to-emerald-950 text-white shadow-xl mb-6 relative overflow-hidden">
          <div class="flex justify-between items-start mb-6">
            <span class="text-xs font-bold text-emerald-400 tracking-widest">VOLTLINE PAY</span>
            <span class="font-bold text-sm tracking-wider">VISA</span>
          </div>
          <div class="font-mono text-sm tracking-widest mb-4">•••• •••• •••• 4821</div>
          <div class="flex justify-between text-[11px] text-slate-400 uppercase">
            <span>Card Holder: Rahul Sharma</span>
            <span>Expires: 08/28</span>
          </div>
        </div>

        <form onsubmit="return false;" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Card Number</label>
            <input type="text" value="4532 •••• •••• 4821" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Expiry Date</label>
              <input type="text" value="08 / 28" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">CVV</label>
              <input type="password" value="•••" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
          </div>
        </form>

        <div class="mt-4 flex items-center gap-2 text-xs text-slate-500">
          ${getIcon('shieldCheck', 'w-4 h-4 text-emerald-600')}
          <span>256-bit encrypted secure checkout via Razorpay/Stripe</span>
        </div>
      </div>

      <div class="pt-6">
        <button data-action="complete-onboarding" class="btn-primary">
          Complete Setup & Go to App
        </button>
      </div>
    </div>
  `;
}

// ==========================================
// 2. HOME / DISCOVERY SCREENS (5 to 8)
// ==========================================

export function renderHomeScreen() {
  const chargers = store.chargers;
  const activeVehicle = store.activeVehicle;
  const selectedCharger = chargers.find(c => c.id === store.selectedChargerId) || chargers[0];

  return `
    <div class="flex-1 flex flex-col bg-slate-50 relative animate-fade-in">
      
      <!-- TOP FLOATING SEARCH BAR & BATTERY PILL -->
      <div class="p-4 bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-20 space-y-3 shadow-xs">
        
        <!-- Search Input Row -->
        <div class="flex items-center gap-2">
          <div class="flex-1 relative">
            <span class="absolute left-3.5 top-3 text-slate-400">
              ${getIcon('search', 'w-4 h-4')}
            </span>
            <input id="home-search-input" type="text" placeholder="Search location or charger station..." value="${store.searchQuery}" class="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none font-medium transition-all" />
          </div>
          <button data-action="open-filter" class="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors border border-slate-200 shrink-0">
            ${getIcon('filter', 'w-4 h-4')}
          </button>
        </div>

        <!-- Vehicle & Battery Status Card -->
        <div class="flex items-center justify-between bg-slate-900 text-white rounded-2xl px-3.5 py-2.5 shadow-md">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-xs font-bold">
              ⚡
            </div>
            <div>
              <div class="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">${activeVehicle ? activeVehicle.model : 'Tesla Model 3'}</div>
              <div class="text-xs font-bold text-white flex items-center gap-1.5">
                <span>${activeVehicle ? activeVehicle.currentBatteryPct : 34}% Battery</span>
                <span class="text-[10px] text-slate-400 font-normal">(~${Math.round((activeVehicle ? activeVehicle.currentBatteryPct : 34) * 4.8)} km range)</span>
              </div>
            </div>
          </div>
          <button data-action="nav-screen" data-target="planTrip" class="px-2.5 py-1 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-[11px] transition-colors">
            Plan Trip
          </button>
        </div>

      </div>

      <!-- INTERACTIVE MAP AREA -->
      <div class="p-4">
        ${renderInteractiveMap(chargers, store.selectedChargerId)}
      </div>

      <!-- NEARBY CHARGER SUGGESTIONS SHEET -->
      <div class="flex-1 px-4 pb-20 space-y-3">
        <div class="flex items-center justify-between">
          <h2 class="font-bold text-slate-900 text-sm">Nearby Chargers (${chargers.length})</h2>
          <span class="text-[11px] font-semibold text-emerald-600">Updated 1 min ago</span>
        </div>

        <div class="space-y-3">
          ${chargers.map(charger => renderChargerCard(charger, charger.id === store.selectedChargerId)).join('')}
        </div>
      </div>

      ${renderBottomNav(store.activeTab)}
    </div>
  `;
}

export function renderChargerDetailScreen() {
  const charger = store.chargers.find(c => c.id === store.selectedChargerId) || store.chargers[0];
  const isAvailable = charger.status === 'Available';

  return `
    <div class="flex-1 flex flex-col bg-white animate-fade-in">
      ${renderTopBar({ title: charger.name, showBack: true, subtitle: charger.address })}

      <div class="flex-1 p-5 overflow-y-auto space-y-5 pb-24">
        
        <!-- STATUS BANNER -->
        <div class="flex items-center justify-between p-4 rounded-2xl ${isAvailable ? 'bg-emerald-50 border border-emerald-200' : charger.status === 'Busy' ? 'bg-amber-50 border border-amber-200' : 'bg-slate-100 border border-slate-300'}">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl ${isAvailable ? 'bg-emerald-500 text-slate-950' : charger.status === 'Busy' ? 'bg-amber-500 text-slate-950' : 'bg-slate-600 text-white'} flex items-center justify-center font-bold text-base">
              ⚡
            </div>
            <div>
              <div class="font-bold text-slate-900 text-sm">${charger.status === 'Available' ? 'Available Now' : charger.status}</div>
              <div class="text-xs text-slate-600">${charger.status === 'Available' ? `${charger.availablePorts} of ${charger.totalPorts} ports free` : charger.status === 'Busy' ? '2 vehicles charging, 1 waiting' : 'Under hardware maintenance'}</div>
            </div>
          </div>
          ${renderBadge(charger.status)}
        </div>

        <!-- KEY METRICS ROW -->
        <div class="grid grid-cols-3 gap-3">
          <div class="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center">
            <div class="text-[10px] uppercase font-bold text-slate-400">Speed</div>
            <div class="text-sm font-black text-slate-900">${charger.powerKw} kW</div>
            <div class="text-[10px] text-emerald-600 font-semibold">DC Fast</div>
          </div>
          <div class="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center">
            <div class="text-[10px] uppercase font-bold text-slate-400">Distance</div>
            <div class="text-sm font-black text-slate-900">${charger.distanceKm} km</div>
            <div class="text-[10px] text-slate-500 font-semibold">${charger.estArrivalMin} min drive</div>
          </div>
          <div class="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-center">
            <div class="text-[10px] uppercase font-bold text-slate-400">Pricing</div>
            <div class="text-sm font-black text-emerald-700">₹${charger.pricePerKwh}</div>
            <div class="text-[10px] text-slate-500 font-semibold">per kWh</div>
          </div>
        </div>

        <!-- CONNECTORS SPECIFICATION -->
        <div>
          <h3 class="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Available Plugs</h3>
          <div class="space-y-2">
            ${charger.connectors.map(conn => `
              <div class="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="text-lg">🔌</span>
                  <div>
                    <div class="font-bold text-xs text-slate-900">${conn.type} Connector</div>
                    <div class="text-[11px] text-slate-500">${conn.power}</div>
                  </div>
                </div>
                <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                  ${conn.available} / ${conn.total} Available
                </span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- AMENITIES & HOURS -->
        <div>
          <h3 class="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Location Amenities</h3>
          <div class="flex flex-wrap gap-2">
            ${charger.amenities.map(a => `
              <span class="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 flex items-center gap-1.5">
                <span>${a === 'Parking' ? '🅿️' : a === 'Restroom' ? '🚻' : a === 'Café' ? '☕' : '📶'}</span> ${a}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- DESCRIPTION -->
        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
          ${charger.description}
        </div>

      </div>

      <!-- BOTTOM ACTION BAR -->
      <div class="p-4 bg-white border-t border-slate-200 sticky bottom-0 z-20 flex gap-3 shadow-lg">
        <button class="btn-secondary w-1/3 text-xs py-3.5 flex items-center justify-center gap-1">
          ${getIcon('navigation', 'w-4 h-4 text-slate-700')} Navigate
        </button>
        
        ${isAvailable ? `
          <button data-action="nav-screen" data-target="startCharging" class="btn-primary w-2/3 text-xs py-3.5">
            Start Charging Now
          </button>
        ` : `
          <button data-action="nav-screen" data-target="chargerUnavailable" class="btn-destructive w-2/3 text-xs py-3.5">
            View Waitlist & Alternatives
          </button>
        `}
      </div>

    </div>
  `;
}

export function renderChargerUnavailableScreen() {
  const charger = store.chargers.find(c => c.id === store.selectedChargerId) || store.chargers[1];
  const alternatives = store.chargers.filter(c => c.status === 'Available');

  return `
    <div class="flex-1 flex flex-col bg-slate-50 animate-fade-in">
      ${renderTopBar({ title: 'Charger Unavailable', showBack: true })}

      <div class="flex-1 p-5 overflow-y-auto space-y-5 pb-24">
        
        <!-- WARNING HERO CARD -->
        <div class="p-5 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-slate-900 text-center space-y-2">
          <div class="w-14 h-14 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mx-auto text-xl font-bold shadow-lg shadow-amber-500/20">
            ⏳
          </div>
          <h2 class="font-bold text-slate-900 text-base">Station Currently Busy</h2>
          <p class="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
            <strong>${charger.name}</strong> is occupied. 2 vehicles are currently charging and 1 vehicle is in queue.
          </p>
          <div class="inline-block px-3 py-1 bg-amber-200/80 text-amber-900 rounded-full font-bold text-xs">
            Estimated wait time: 18 minutes
          </div>
        </div>

        <!-- RECOVERY CTAS -->
        <div class="grid grid-cols-2 gap-3">
          <button onclick="alert('You will receive a push notification when Port A03 opens!')" class="btn-secondary text-xs py-3 flex items-center justify-center gap-1.5">
            ${getIcon('bell', 'w-4 h-4 text-emerald-600')} Notify Me
          </button>
          <button data-action="nav-screen" data-target="home" class="btn-primary text-xs py-3">
            Find Nearby
          </button>
        </div>

        <!-- NEARBY ALTERNATIVES LIST -->
        <div>
          <h3 class="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">Recommended Available Alternatives</h3>
          <div class="space-y-3">
            ${alternatives.map(alt => renderChargerCard(alt)).join('')}
          </div>
        </div>

      </div>
    </div>
  `;
}

// ==========================================
// 3. START & LIVE CHARGING SCREENS (9 to 11)
// ==========================================

export function renderStartChargingScreen() {
  const charger = store.chargers.find(c => c.id === store.selectedChargerId) || store.chargers[0];
  const vehicle = store.activeVehicle;

  return `
    <div class="flex-1 flex flex-col bg-white animate-fade-in">
      ${renderTopBar({ title: 'Confirm Session', showBack: true })}

      <div class="flex-1 p-5 overflow-y-auto space-y-5 pb-24">
        
        <!-- STATION & PORT CONFIRMATION CARD -->
        <div class="p-4 rounded-2xl bg-slate-900 text-white shadow-xl space-y-3">
          <div class="flex justify-between items-start border-b border-slate-800 pb-3">
            <div>
              <div class="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">SELECTED CHARGER</div>
              <h3 class="font-bold text-white text-base">${charger.name}</h3>
              <p class="text-xs text-slate-400">${charger.address}</p>
            </div>
            <span class="px-2.5 py-1 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs">Port A03</span>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs pt-1">
            <div>
              <span class="text-slate-400">Connector:</span>
              <div class="font-bold text-white">CCS (150 kW DC)</div>
            </div>
            <div>
              <span class="text-slate-400">Tariff:</span>
              <div class="font-bold text-emerald-400">₹${charger.pricePerKwh}/kWh</div>
            </div>
          </div>
        </div>

        <!-- ESTIMATED SESSION BREAKDOWN -->
        <div class="space-y-3">
          <h3 class="font-bold text-slate-900 text-xs uppercase tracking-wider">Estimated Session</h3>
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
            <div class="flex justify-between">
              <span class="text-slate-600">Target Charge Level</span>
              <span class="font-bold text-slate-900">34% → 82%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-600">Estimated Duration</span>
              <span class="font-bold text-slate-900">~24 minutes</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-600">Estimated Energy</span>
              <span class="font-bold text-slate-900">36.0 kWh</span>
            </div>
            <div class="flex justify-between border-t border-slate-200 pt-2 font-bold text-slate-900 text-sm">
              <span>Estimated Cost</span>
              <span class="text-emerald-700">~₹320</span>
            </div>
          </div>
        </div>

        <!-- PAYMENT METHOD SELECTION -->
        <div>
          <h3 class="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Payment Method</h3>
          <div class="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between bg-white">
            <div class="flex items-center gap-3">
              ${getIcon('creditCard', 'w-5 h-5 text-emerald-600')}
              <div>
                <div class="font-bold text-xs text-slate-900">Visa •••• 4821</div>
                <div class="text-[11px] text-slate-500">Default Payment Card</div>
              </div>
            </div>
            <button data-action="nav-screen" data-target="wallet" class="text-xs font-semibold text-emerald-600">Change</button>
          </div>
        </div>

        <!-- SAFETY NOTICE -->
        <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-2 text-xs text-emerald-800">
          ${getIcon('shieldCheck', 'w-4 h-4 text-emerald-600 shrink-0')}
          <span>Auto-stop enabled when 80% charge target is reached.</span>
        </div>

      </div>

      <!-- CONFIRMATION START BUTTON -->
      <div class="p-4 bg-white border-t border-slate-200 sticky bottom-0 z-20">
        <button data-action="start-session" class="btn-primary text-sm py-4 shadow-xl">
          ⚡ Plug In & Start Charging
        </button>
      </div>

    </div>
  `;
}

export function renderLiveChargingScreen() {
  const session = store.chargingSession;
  const pct = Math.round(session.currentBatteryPct);
  const strokeDashoffset = 377 - (377 * (pct / 100));

  return `
    <div class="flex-1 flex flex-col bg-slate-950 text-white animate-fade-in justify-between p-5 relative overflow-hidden">
      
      <!-- TOP STATUS BAR -->
      <div class="flex items-center justify-between pt-2">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span class="font-bold text-xs text-emerald-400 uppercase tracking-wider">Charging Normally</span>
        </div>
        <span class="text-xs text-slate-400 font-mono">${session.station ? session.station.name : 'Voltline Central Mall'} • Port A03</span>
      </div>

      <!-- MAIN CIRCULAR CHARGING GAUGE -->
      <div class="my-auto flex flex-col items-center justify-center relative">
        <!-- SVG CIRCLE -->
        <div class="relative w-56 h-56 flex items-center justify-center">
          <svg class="w-full h-full charging-circle-svg" viewBox="0 0 140 140">
            <circle class="charging-circle-bg" cx="70" cy="70" r="60"/>
            <circle class="charging-circle-progress" cx="70" cy="70" r="60" stroke-dasharray="377" stroke-dashoffset="${strokeDashoffset}"/>
          </svg>
          
          <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span class="text-4xl font-black text-white tracking-tight">${pct}%</span>
            <span class="text-xs text-emerald-400 font-semibold tracking-wider uppercase mt-1">Battery Level</span>
            <span class="text-[10px] text-slate-400 mt-1 font-mono">+${Math.max(0.1, (session.energyDeliveredKwh).toFixed(2))} kWh</span>
          </div>
        </div>
      </div>

      <!-- DYNAMIC METRICS GRID -->
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
          <div class="text-[10px] uppercase font-bold text-slate-400">Current Power</div>
          <div class="text-lg font-black text-emerald-400">${session.powerKw} kW</div>
          <div class="text-[10px] text-slate-500">150 kW DC Max</div>
        </div>
        
        <div class="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
          <div class="text-[10px] uppercase font-bold text-slate-400">Energy Delivered</div>
          <div class="text-lg font-black text-white">${session.energyDeliveredKwh.toFixed(2)} kWh</div>
          <div class="text-[10px] text-slate-500">Total charge</div>
        </div>

        <div class="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
          <div class="text-[10px] uppercase font-bold text-slate-400">Elapsed Time</div>
          <div class="text-lg font-black text-white font-mono">${Math.floor(session.elapsedSeconds / 60)}m ${session.elapsedSeconds % 60}s</div>
          <div class="text-[10px] text-slate-500">~12 min remaining</div>
        </div>

        <div class="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
          <div class="text-[10px] uppercase font-bold text-slate-400">Current Cost</div>
          <div class="text-lg font-black text-emerald-400">₹${session.costEstimate}</div>
          <div class="text-[10px] text-slate-500">₹${session.pricePerKwh}/kWh rate</div>
        </div>
      </div>

      <!-- STOP CHARGING BUTTON -->
      <div class="pb-2">
        <button data-action="stop-charging" class="btn-destructive text-sm py-4 w-full shadow-xl font-bold">
          🛑 Stop Charging Session
        </button>
      </div>

    </div>
  `;
}

export function renderStopConfirmationScreen() {
  const session = store.chargingSession;

  return `
    <div class="flex-1 flex flex-col bg-white animate-fade-in justify-between p-6">
      <div>
        <div class="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-200">
          🛑
        </div>
        <h2 class="text-2xl font-bold text-slate-900 text-center mb-2">Stop Charging?</h2>
        <p class="text-xs text-slate-500 text-center mb-6">Are you sure you want to stop charging now?</p>

        <!-- SESSION SUMMARY PREVIEW -->
        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
          <div class="flex justify-between">
            <span class="text-slate-600">Battery Level</span>
            <span class="font-bold text-slate-900">${session.startBatteryPct}% → ${Math.round(session.currentBatteryPct)}%</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-600">Energy Delivered</span>
            <span class="font-bold text-slate-900">${session.energyDeliveredKwh} kWh</span>
          </div>
          <div class="flex justify-between border-t border-slate-200 pt-2 font-bold text-slate-900 text-sm">
            <span>Estimated Total</span>
            <span class="text-emerald-700">₹${session.costEstimate || 194}</span>
          </div>
        </div>
      </div>

      <div class="space-y-3 pt-6">
        <button data-action="confirm-stop" class="btn-primary bg-red-600 hover:bg-red-700 text-white shadow-none">
          Yes, Stop Charging & Pay
        </button>
        <button data-action="nav-screen" data-target="liveCharging" class="btn-secondary">
          Continue Charging
        </button>
      </div>
    </div>
  `;
}

// ==========================================
// 4. PAYMENT & RECEIPT SCREENS (12 to 13)
// ==========================================

export function renderPaymentScreen() {
  const session = store.chargingSession;
  const energyCost = session.costEstimate || 194.4;
  const parkingFee = 20.0;
  const taxFee = 15.0;
  const total = Math.round(energyCost + parkingFee + taxFee);

  return `
    <div class="flex-1 flex flex-col bg-white animate-fade-in justify-between p-6">
      <div>
        ${renderTopBar({ title: 'Payment Breakdown', subtitle: session.station ? session.station.name : 'Voltline Central Mall' })}

        <div class="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
          <div class="flex justify-between">
            <span class="text-slate-600">Energy Consumed (${session.energyDeliveredKwh || 10.8} kWh @ ₹18/kWh)</span>
            <span class="font-bold text-slate-900">₹${energyCost}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-600">Location Parking Fee</span>
            <span class="font-bold text-slate-900">₹${parkingFee.toFixed(2)}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-600">GST Tax (18%)</span>
            <span class="font-bold text-slate-900">₹${taxFee.toFixed(2)}</span>
          </div>
          <div class="flex justify-between border-t border-slate-200 pt-3 text-base font-black text-slate-900">
            <span>Total Payable</span>
            <span class="text-emerald-700">₹${total}</span>
          </div>
        </div>

        <div class="mt-6">
          <h3 class="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">Select Payment Method</h3>
          <div class="p-3.5 rounded-xl border border-emerald-500 bg-emerald-50/50 flex items-center justify-between">
            <div class="flex items-center gap-3">
              ${getIcon('creditCard', 'w-5 h-5 text-emerald-600')}
              <div>
                <div class="font-bold text-xs text-slate-900">Visa •••• 4821</div>
                <div class="text-[11px] text-slate-500">Auto-billing enabled</div>
              </div>
            </div>
            <span class="text-xs font-bold text-emerald-700">Selected</span>
          </div>
        </div>
      </div>

      <div class="pt-6">
        <button data-action="process-payment" class="btn-primary text-sm py-4">
          Pay ₹${total} & Get Receipt
        </button>
      </div>
    </div>
  `;
}

export function renderReceiptScreen(params = {}) {
  const receipt = params.receipt || store.receipts[0] || {
    id: 'rc-1092',
    stationName: 'Voltline Central Mall',
    date: '27 Aug 2026, 04:15 PM',
    energyKwh: 10.8,
    durationMin: 18,
    totalPaid: 229,
    paymentMethod: 'Visa •••• 4821',
    receiptNo: 'VL-884920192',
    batteryChange: '68% → 82%'
  };

  return `
    <div class="flex-1 flex flex-col bg-slate-900 text-white animate-fade-in p-6 justify-between">
      <div class="text-center pt-4">
        <div class="w-16 h-16 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto mb-3 text-2xl font-bold shadow-xl shadow-emerald-500/30">
          ✓
        </div>
        <h2 class="text-2xl font-bold text-white">Payment Successful</h2>
        <p class="text-xs text-emerald-400 font-semibold mt-1">Receipt #${receipt.receiptNo}</p>
      </div>

      <!-- RECEIPT TICKET CARD -->
      <div class="my-4 p-5 rounded-3xl bg-white text-slate-900 shadow-2xl space-y-4 relative border-t-8 border-emerald-500">
        <div class="text-center border-b border-slate-100 pb-3">
          <div class="text-3xl font-black text-slate-900">₹${receipt.totalPaid}</div>
          <div class="text-xs font-bold text-slate-500">${receipt.stationName}</div>
          <div class="text-[11px] text-slate-400 mt-1">${receipt.date}</div>
        </div>

        <div class="space-y-2 text-xs">
          <div class="flex justify-between">
            <span class="text-slate-500">Battery Charged</span>
            <span class="font-bold text-slate-900">${receipt.batteryChange}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Energy Consumed</span>
            <span class="font-bold text-slate-900">${receipt.energyKwh} kWh</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Duration</span>
            <span class="font-bold text-slate-900">${receipt.durationMin} mins</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-500">Payment Method</span>
            <span class="font-bold text-slate-900">${receipt.paymentMethod}</span>
          </div>
        </div>
      </div>

      <!-- ACTION BUTTONS -->
      <div class="space-y-2.5 pb-2">
        <button onclick="alert('Receipt downloaded as PDF!')" class="btn-secondary bg-slate-800 text-white border-slate-700 hover:bg-slate-700 text-xs py-3">
          📥 Download Receipt PDF
        </button>
        <button data-action="nav-screen" data-target="home" class="btn-primary text-xs py-3.5">
          Done & Return Home
        </button>
      </div>
    </div>
  `;
}

// ==========================================
// 5. TRIP PLANNER SCREENS (14 to 16)
// ==========================================

export function renderPlanTripScreen() {
  const trips = store.savedTrips;

  return `
    <div class="flex-1 flex flex-col bg-slate-50 animate-fade-in">
      ${renderTopBar({ title: 'Trip Planner', subtitle: 'Plan journeys with reliable charging stops' })}

      <div class="flex-1 p-5 overflow-y-auto space-y-5 pb-24">
        
        <!-- TRIP INPUT FORM -->
        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Starting Point</label>
            <input type="text" value="Chennai Central" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Destination</label>
            <input type="text" value="White Town, Pondicherry" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Current Battery Level (34%)</label>
            <input type="range" min="10" max="100" value="34" class="w-full accent-emerald-500" />
          </div>

          <button data-action="generate-trip" class="btn-primary text-xs py-3.5">
            🗺️ Generate Route & Charging Stops
          </button>
        </div>

        <!-- SAVED TRIPS HEADER & TOGGLE -->
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-slate-900 text-xs uppercase tracking-wider">Saved Journeys (${trips.length})</h3>
          <button data-action="toggle-empty-trips" class="text-[11px] text-emerald-600 font-semibold">Toggle Empty State</button>
        </div>

        <!-- SAVED TRIPS CARDS -->
        <div class="space-y-3">
          ${trips.length > 0 ? trips.map(t => `
            <div data-trip-id="${t.id}" class="card-trip p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 cursor-pointer hover:border-emerald-500 transition-all">
              <div class="flex justify-between items-start">
                <div>
                  <h4 class="font-bold text-slate-900 text-sm">${t.title}</h4>
                  <p class="text-xs text-slate-500">${t.distanceKm} km • ${t.driveTime} drive</p>
                </div>
                <span class="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs">${t.stops.length} Charging Stops</span>
              </div>

              <div class="flex items-center justify-between text-xs pt-2 border-t border-slate-100 text-slate-600">
                <span>Charge Time: ~${t.chargeTimeMin} mins</span>
                <span class="font-bold text-emerald-700">Est. ₹${t.estTotalCost}</span>
              </div>
            </div>
          `).join('') : renderEmptyState({
            icon: 'route',
            title: 'No saved trips yet',
            description: 'Plan a trip above and save it here for effortless future navigation.',
            actionLabel: 'Plan First Trip',
            actionId: 'generate-trip'
          })}
        </div>

      </div>

      ${renderBottomNav(store.activeTab)}
    </div>
  `;
}

export function renderTripResultsScreen() {
  const trip = store.currentTripPlan.route;

  return `
    <div class="flex-1 flex flex-col bg-white animate-fade-in">
      ${renderTopBar({ title: 'Route & Charging Stops', showBack: true, subtitle: 'Chennai → Pondicherry' })}

      <div class="flex-1 p-5 overflow-y-auto space-y-5 pb-24">
        
        <!-- TRIP METRICS SUMMARY -->
        <div class="grid grid-cols-4 gap-2 text-center p-3 bg-slate-900 text-white rounded-2xl">
          <div>
            <div class="text-[9px] text-slate-400 uppercase">Distance</div>
            <div class="text-xs font-bold">${trip.distanceKm} km</div>
          </div>
          <div>
            <div class="text-[9px] text-slate-400 uppercase">Driving</div>
            <div class="text-xs font-bold">${trip.driveTime}</div>
          </div>
          <div>
            <div class="text-[9px] text-slate-400 uppercase">Charging</div>
            <div class="text-xs font-bold text-emerald-400">${trip.chargeTimeMin}m</div>
          </div>
          <div>
            <div class="text-[9px] text-slate-400 uppercase">Est Cost</div>
            <div class="text-xs font-bold text-emerald-400">₹${trip.estTotalCost}</div>
          </div>
        </div>

        <!-- ROUTE TIMELINE WITH CHARGING STOPS -->
        <div class="relative pl-6 space-y-6 border-l-2 border-slate-200 my-4 ml-2">
          
          <!-- START -->
          <div class="relative">
            <span class="absolute -left-8 top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-white ring-2 ring-slate-300"></span>
            <div class="font-bold text-xs text-slate-900">Start: Chennai Central</div>
            <div class="text-[11px] text-slate-500">Initial Battery: 34%</div>
          </div>

          <!-- STOP 1 -->
          ${trip.stops.map((stop, i) => `
            <div class="relative bg-emerald-50/80 p-3.5 rounded-2xl border border-emerald-200">
              <span class="absolute -left-9 top-4 w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px] flex items-center justify-center border-2 border-white shadow-md">
                ${i + 1}
              </span>
              <div class="font-bold text-xs text-slate-900 mb-1">${stop.name} (${stop.distanceFromStartKm} km)</div>
              <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                <span>Arrival: <strong class="text-amber-700">${stop.arrivalBatteryPct}%</strong></span>
                <span>Charge to: <strong class="text-emerald-700">${stop.targetBatteryPct}%</strong></span>
                <span>Duration: <strong>${stop.chargeTimeMin} mins</strong></span>
                <span>Cost: <strong>₹${stop.cost}</strong></span>
              </div>
            </div>
          `).join('')}

          <!-- DESTINATION -->
          <div class="relative">
            <span class="absolute -left-8 top-0 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white ring-2 ring-emerald-300"></span>
            <div class="font-bold text-xs text-slate-900">Destination: White Town, Pondicherry</div>
            <div class="text-[11px] text-slate-500">Arrival Battery: 48%</div>
          </div>

        </div>

      </div>

      <!-- BOTTOM ACTION -->
      <div class="p-4 bg-white border-t border-slate-200 sticky bottom-0 z-20 flex gap-3 shadow-lg">
        <button onclick="alert('Trip saved to your profile!')" class="btn-secondary w-1/3 text-xs py-3.5">
          💾 Save Trip
        </button>
        <button onclick="alert('Starting turn-by-turn navigation via Voltline Maps!')" class="btn-primary w-2/3 text-xs py-3.5">
          🚀 Start Navigation
        </button>
      </div>
    </div>
  `;
}

// ==========================================
// 6. WALLET & RECEIPTS SCREENS (17 to 19)
// ==========================================

export function renderWalletScreen() {
  const pms = store.paymentMethods;

  return `
    <div class="flex-1 flex flex-col bg-slate-50 animate-fade-in">
      ${renderTopBar({ title: 'Wallet & Payments', subtitle: 'Manage billing methods & balance' })}

      <div class="flex-1 p-5 overflow-y-auto space-y-5 pb-24">
        
        <!-- WALLET BALANCE CARD -->
        <div class="p-5 rounded-3xl bg-slate-900 text-white shadow-xl flex items-center justify-between">
          <div>
            <div class="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Voltline Wallet Balance</div>
            <div class="text-3xl font-black text-emerald-400 mt-1">₹${store.walletBalance}</div>
          </div>
          <button data-action="nav-screen" data-target="topUp" class="btn-primary w-auto text-xs py-2.5 px-4">
            + Top-Up
          </button>
        </div>

        <!-- PAYMENT METHODS -->
        <div>
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-bold text-slate-900 text-xs uppercase tracking-wider">Payment Methods</h3>
            <button data-action="nav-screen" data-target="addPayment" class="text-xs font-semibold text-emerald-600">+ Add Card</button>
          </div>

          <div class="space-y-3">
            ${pms.map(pm => `
              <div class="p-4 bg-white rounded-2xl border ${pm.isDefault ? 'border-emerald-500 bg-emerald-50/20' : 'border-slate-200'} shadow-xs flex items-center justify-between">
                <div class="flex items-center gap-3">
                  ${getIcon(pm.icon, 'w-6 h-6 text-slate-700')}
                  <div>
                    <div class="font-bold text-xs text-slate-900">${pm.brand || pm.type} ${pm.last4 ? `•••• ${pm.last4}` : pm.upiId}</div>
                    <div class="text-[11px] text-slate-500">${pm.isDefault ? 'Default Payment Method' : 'Backup Payment Method'}</div>
                  </div>
                </div>
                ${pm.isDefault ? `<span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">DEFAULT</span>` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- QUICK RECEIPTS LINK -->
        <div class="p-4 bg-white rounded-2xl border border-slate-200 flex items-center justify-between cursor-pointer" data-action="nav-screen" data-target="receiptsList">
          <div class="flex items-center gap-3">
            ${getIcon('clock', 'w-5 h-5 text-emerald-600')}
            <div>
              <div class="font-bold text-xs text-slate-900">Charging Receipts & History</div>
              <div class="text-[11px] text-slate-500">View past invoices and energy statements</div>
            </div>
          </div>
          ${getIcon('chevronRight', 'w-4 h-4 text-slate-400')}
        </div>

      </div>

      ${renderBottomNav(store.activeTab)}
    </div>
  `;
}

export function renderTopUpScreen() {
  return `
    <div class="flex-1 flex flex-col bg-white animate-fade-in">
      ${renderTopBar({ title: 'Top-Up Wallet', showBack: true })}

      <div class="flex-1 p-5 overflow-y-auto space-y-5 pb-24">
        
        <div class="text-center p-4 bg-slate-50 rounded-2xl border border-slate-200">
          <div class="text-xs text-slate-500">Current Balance</div>
          <div class="text-2xl font-black text-slate-900">₹${store.walletBalance}</div>
        </div>

        <div>
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Select Amount</label>
          <div class="grid grid-cols-3 gap-3 mb-3">
            <button class="py-3 px-3 rounded-xl border border-emerald-500 bg-emerald-50 text-emerald-800 font-bold text-xs">₹500</button>
            <button class="py-3 px-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs">₹1,000</button>
            <button class="py-3 px-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs">₹2,000</button>
          </div>
          <input type="number" placeholder="Enter custom amount (₹)" class="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>

      </div>

      <div class="p-4 border-t border-slate-200">
        <button onclick="alert('Wallet topped up with ₹500!')" class="btn-primary">
          Add ₹500 to Wallet
        </button>
      </div>
    </div>
  `;
}

export function renderReceiptsListScreen() {
  const receipts = store.receipts;

  return `
    <div class="flex-1 flex flex-col bg-slate-50 animate-fade-in">
      ${renderTopBar({ title: 'Charging Receipts', showBack: true })}

      <div class="flex-1 p-5 overflow-y-auto space-y-3 pb-24">
        ${receipts.map(rc => `
          <div data-action="nav-screen" data-target="receipt" class="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center justify-between cursor-pointer hover:border-emerald-500 transition-all">
            <div>
              <div class="font-bold text-slate-900 text-xs">${rc.stationName}</div>
              <div class="text-[11px] text-slate-500">${rc.date} • ${rc.energyKwh} kWh</div>
            </div>
            <div class="text-right">
              <div class="font-black text-slate-900 text-sm">₹${rc.totalPaid}</div>
              <div class="text-[10px] text-emerald-600 font-bold">Paid ✓</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ==========================================
// 7. PROFILE & SUPPORT SCREENS (20 to 23)
// ==========================================

export function renderProfileScreen() {
  const user = store.user;
  const vehicle = store.activeVehicle;

  return `
    <div class="flex-1 flex flex-col bg-slate-50 animate-fade-in">
      ${renderTopBar({ title: 'Profile & Settings' })}

      <div class="flex-1 p-5 overflow-y-auto space-y-5 pb-24">
        
        <!-- USER AVATAR CARD -->
        <div class="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 font-black text-xl flex items-center justify-center shadow-md">
            RS
          </div>
          <div>
            <h2 class="font-bold text-slate-900 text-base">${user.name}</h2>
            <p class="text-xs text-slate-500">${user.email}</p>
            <span class="inline-block mt-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">Voltline Pro Member</span>
          </div>
        </div>

        <!-- LINKS GRID -->
        <div class="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-xs text-xs">
          <div data-action="nav-screen" data-target="vehicleProfile" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-slate-50">
            <span class="flex items-center gap-2.5 font-semibold text-slate-800">
              ${getIcon('car', 'w-4 h-4 text-emerald-600')} Vehicle Profile (${vehicle ? vehicle.model : 'Tesla Model 3'})
            </span>
            ${getIcon('chevronRight', 'w-4 h-4 text-slate-400')}
          </div>

          <div data-action="nav-screen" data-target="wallet" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-slate-50">
            <span class="flex items-center gap-2.5 font-semibold text-slate-800">
              ${getIcon('wallet', 'w-4 h-4 text-emerald-600')} Payment Methods & Wallet
            </span>
            ${getIcon('chevronRight', 'w-4 h-4 text-slate-400')}
          </div>

          <div data-action="nav-screen" data-target="notifications" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-slate-50">
            <span class="flex items-center gap-2.5 font-semibold text-slate-800">
              ${getIcon('notifications', 'w-4 h-4 text-emerald-600')} Notifications Center
            </span>
            ${getIcon('chevronRight', 'w-4 h-4 text-slate-400')}
          </div>

          <div data-action="nav-screen" data-target="help" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-slate-50">
            <span class="flex items-center gap-2.5 font-semibold text-slate-800">
              ${getIcon('help', 'w-4 h-4 text-emerald-600')} Help & Support 24/7
            </span>
            ${getIcon('chevronRight', 'w-4 h-4 text-slate-400')}
          </div>
        </div>

        <button data-action="nav-screen" data-target="welcome" class="btn-destructive text-xs py-3">
          Log Out of COMPASS
        </button>

      </div>

      ${renderBottomNav(store.activeTab)}
    </div>
  `;
}

export function renderVehicleProfileScreen() {
  const v = store.activeVehicle;

  return `
    <div class="flex-1 flex flex-col bg-white animate-fade-in">
      ${renderTopBar({ title: 'Vehicle Profile', showBack: true })}

      <div class="flex-1 p-5 overflow-y-auto space-y-5 pb-24">
        
        <!-- VEHICLE SPEC CARD -->
        <div class="p-5 rounded-3xl bg-gradient-to-tr ${v.imageBg} text-white shadow-xl space-y-4">
          <div class="flex justify-between items-start">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-widest text-emerald-300">${v.brand}</span>
              <h2 class="text-xl font-bold text-white">${v.model}</h2>
            </div>
            <span class="px-2.5 py-1 rounded-full bg-white/20 text-white font-bold text-xs">${v.nickname}</span>
          </div>

          <div class="grid grid-cols-2 gap-3 pt-2 text-xs border-t border-white/20">
            <div>
              <span class="opacity-80">Battery Spec</span>
              <div class="font-bold text-sm">${v.batteryCapacityKwh} kWh</div>
            </div>
            <div>
              <span class="opacity-80">Max Range</span>
              <div class="font-bold text-sm">${v.rangeKmMax} km</div>
            </div>
          </div>
        </div>

        <!-- SPECIFICATIONS TABLE -->
        <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
          <div class="flex justify-between">
            <span class="text-slate-600">Connector Type</span>
            <span class="font-bold text-slate-900">${v.connectorType} (DC Fast Charging)</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-600">Charging Efficiency</span>
            <span class="font-bold text-emerald-700">94.2%</span>
          </div>
        </div>

      </div>
    </div>
  `;
}

export function renderNotificationsScreen() {
  const notifs = store.notifications;

  return `
    <div class="flex-1 flex flex-col bg-slate-50 animate-fade-in">
      ${renderTopBar({ title: 'Notifications', showBack: true })}

      <div class="flex-1 p-5 overflow-y-auto space-y-3 pb-24">
        ${notifs.map(n => `
          <div class="p-4 bg-white rounded-2xl border ${n.unread ? 'border-emerald-500 bg-emerald-50/20' : 'border-slate-200'} shadow-xs flex items-start gap-3">
            <div class="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              ${getIcon(n.type === 'available' ? 'zap' : 'check', 'w-4 h-4')}
            </div>
            <div class="flex-1">
              <div class="flex justify-between items-center">
                <h4 class="font-bold text-slate-900 text-xs">${n.title}</h4>
                <span class="text-[10px] text-slate-400">${n.time}</span>
              </div>
              <p class="text-xs text-slate-600 mt-0.5 leading-relaxed">${n.message}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function renderHelpScreen() {
  return `
    <div class="flex-1 flex flex-col bg-white animate-fade-in">
      ${renderTopBar({ title: 'Help & Support 24/7', showBack: true })}

      <div class="flex-1 p-5 overflow-y-auto space-y-5 pb-24">
        
        <!-- EMERGENCY CALL BOX -->
        <div class="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-between">
          <div>
            <div class="font-bold text-xs text-red-900">Roadside Assistance</div>
            <div class="text-[11px] text-red-700">Need emergency towing or battery boost?</div>
          </div>
          <button onclick="alert('Calling Voltline 24/7 Emergency Line: 1800-888-VOLT')" class="px-3 py-2 rounded-xl bg-red-600 text-white font-bold text-xs shadow-md">
            📞 Call Now
          </button>
        </div>

        <h3 class="font-bold text-slate-900 text-xs uppercase tracking-wider">Frequently Asked Questions</h3>

        <div class="space-y-3 text-xs">
          <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
            <div class="font-bold text-slate-900 mb-1">How do I start charging at a Voltline station?</div>
            <p class="text-slate-600 leading-relaxed">Plug the CCS gun into your EV, select the station port in COMPASS, and tap Start Charging.</p>
          </div>
          <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
            <div class="font-bold text-slate-900 mb-1">What if a charger disconnects unexpectedly?</div>
            <p class="text-slate-600 leading-relaxed">COMPASS automatically finalizes your session and only charges you for energy delivered up to the drop.</p>
          </div>
        </div>

      </div>
    </div>
  `;
}
