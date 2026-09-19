/* ==========================================================================
   COMPASS EV CHARGING APP — REUSABLE COMPONENT LIBRARY
   Client: Voltline Mobility
   Design System Components & UI Renderers
   ========================================================================== */

import { getIcon } from './icons.js';
import { store } from './store.js';

// 1. TOP APP BAR / HEADER
export function renderTopBar({ title, showBack = false, rightAction = null, subtitle = '' }) {
  return `
    <header class="bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-20 flex items-center justify-between shadow-xs">
      <div class="flex items-center gap-3">
        ${showBack ? `
          <button data-action="go-back" class="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors active:scale-95">
            ${getIcon('arrowLeft', 'w-5 h-5')}
          </button>
        ` : ''}
        <div>
          <h1 class="font-bold text-slate-900 text-base leading-tight">${title}</h1>
          ${subtitle ? `<p class="text-xs text-slate-500 font-medium">${subtitle}</p>` : ''}
        </div>
      </div>
      <div>
        ${rightAction || ''}
      </div>
    </header>
  `;
}

// 2. PERSISTENT 5-TAB BOTTOM NAVIGATION
export function renderBottomNav(activeTab) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'compass' },
    { id: 'trips', label: 'Trips', icon: 'route' },
    { id: 'charging', label: 'Charging', icon: 'charging', badge: store.chargingSession.status === 'active' },
    { id: 'wallet', label: 'Wallet', icon: 'wallet' },
    { id: 'profile', label: 'Profile', icon: 'profile' }
  ];

  return `
    <nav class="bg-white border-t border-slate-200 px-2 py-2 sticky bottom-0 z-30 flex items-center justify-around shadow-lg">
      ${tabs.map(tab => {
        const isActive = activeTab === tab.id;
        return `
          <button data-tab="${tab.id}" class="flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all relative ${isActive ? 'text-emerald-600 font-bold' : 'text-slate-500 hover:text-slate-800 font-medium'}">
            <div class="relative">
              ${getIcon(tab.icon, `w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`)}
              ${tab.badge ? `<span class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>` : ''}
            </div>
            <span class="text-[11px] leading-none">${tab.label}</span>
          </button>
        `;
      }).join('')}
    </nav>
  `;
}

// 3. SEMANTIC STATUS CHIPS / BADGES
export function renderBadge(status, customText = '') {
  switch (status) {
    case 'Available':
      return `<span class="badge-available">${getIcon('check', 'w-3 h-3')} ${customText || 'Available · Fast'}</span>`;
    case 'Busy':
      return `<span class="badge-busy">${getIcon('clock', 'w-3 h-3')} ${customText || 'Busy · Wait 18 min'}</span>`;
    case 'Offline':
      return `<span class="badge-offline">${getIcon('alertTriangle', 'w-3 h-3')} ${customText || 'Offline · Maintenance'}</span>`;
    case 'Fast':
      return `<span class="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">⚡ 150 kW DC</span>`;
    case 'CCS':
      return `<span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">🔌 CCS</span>`;
    default:
      return `<span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">${customText || status}</span>`;
  }
}

// 4. CHARGER CARD (REUSABLE COMPONENT)
export function renderChargerCard(charger, isSelected = false) {
  return `
    <div data-charger-id="${charger.id}" class="card-charger bg-white rounded-2xl p-4 border ${isSelected ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md' : 'border-slate-200 hover:border-slate-300 shadow-xs'} transition-all cursor-pointer">
      <div class="flex items-start justify-between gap-3 mb-2">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <h3 class="font-bold text-slate-900 text-base leading-tight">${charger.name}</h3>
          </div>
          <p class="text-xs text-slate-500 flex items-center gap-1">
            ${getIcon('mapPin', 'w-3.5 h-3.5 text-slate-400')} ${charger.address}
          </p>
        </div>
        ${renderBadge(charger.status, charger.status === 'Available' ? `${charger.availablePorts}/${charger.totalPorts} Free` : charger.status)}
      </div>

      <div class="flex items-center justify-between text-xs pt-3 mt-3 border-t border-slate-100 text-slate-600">
        <div class="flex items-center gap-3">
          <span class="font-semibold text-slate-900 flex items-center gap-1">
            ⚡ ${charger.powerKw} kW
          </span>
          <span class="text-slate-400">•</span>
          <span>📍 ${charger.distanceKm} km (${charger.estArrivalMin} min)</span>
        </div>
        <div class="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
          ₹${charger.pricePerKwh}/kWh
        </div>
      </div>
    </div>
  `;
}

// 5. INTERACTIVE VECTOR MAP COMPONENT
export function renderInteractiveMap(chargers, selectedId) {
  return `
    <div class="relative w-full h-64 bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-slate-300/80 map-grid-bg">
      <!-- VECTOR ROAD LINES & RIVER -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
        <!-- River path -->
        <path d="M 0 60 Q 30 75 70 65 T 100 80" fill="none" stroke="#93C5FD" stroke-width="6"/>
        <!-- Main Roads -->
        <path d="M 10 0 L 90 100" fill="none" stroke="#FFFFFF" stroke-width="4"/>
        <path d="M 0 40 L 100 40" fill="none" stroke="#FFFFFF" stroke-width="5"/>
        <path d="M 50 0 L 50 100" fill="none" stroke="#CBD5E1" stroke-width="2.5" stroke-dasharray="3,3"/>
      </svg>

      <!-- USER CURRENT LOCATION MARKER -->
      <div class="absolute z-20" style="top: 52%; left: 45%; transform: translate(-50%, -50%);">
        <div class="relative flex items-center justify-center">
          <span class="w-8 h-8 rounded-full bg-blue-500/30 animate-ping absolute"></span>
          <div class="w-5 h-5 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center text-white text-[9px] font-bold">
            YOU
          </div>
        </div>
      </div>

      <!-- STATION MARKERS -->
      ${chargers.map(c => {
        const isSelected = c.id === selectedId;
        let colorClass = 'bg-emerald-500 text-slate-950 shadow-emerald-500/40';
        let statusDot = 'bg-emerald-300';
        if (c.status === 'Busy') {
          colorClass = 'bg-amber-500 text-slate-950 shadow-amber-500/40';
          statusDot = 'bg-amber-200';
        } else if (c.status === 'Offline') {
          colorClass = 'bg-slate-600 text-white shadow-slate-600/40';
          statusDot = 'bg-slate-400';
        }

        return `
          <div data-map-pin="${c.id}" class="map-pin absolute z-10 ${isSelected ? 'active' : ''}" style="top: ${c.mapY}%; left: ${c.mapX}%;">
            <div class="flex flex-col items-center">
              <!-- Pin Tooltip Pill -->
              <div class="px-2 py-1 rounded-full ${colorClass} font-bold text-[10px] shadow-lg flex items-center gap-1 border border-white/40 whitespace-nowrap">
                <span class="w-1.5 h-1.5 rounded-full ${statusDot}"></span>
                <span>⚡ ${c.powerKw}kW</span>
              </div>
              <!-- Pointer Triangle -->
              <div class="w-2 h-2 ${colorClass} rotate-45 -mt-1"></div>
            </div>
          </div>
        `;
      }).join('')}

      <!-- MAP CONTROLS OVERLAY -->
      <div class="absolute top-3 right-3 flex flex-col gap-1.5 z-20">
        <button class="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md shadow-md text-slate-700 flex items-center justify-center text-sm font-bold active:scale-95">
          +
        </button>
        <button class="w-8 h-8 rounded-xl bg-white/90 backdrop-blur-md shadow-md text-slate-700 flex items-center justify-center text-sm font-bold active:scale-95">
          -
        </button>
      </div>

      <!-- MAP ATTRIBUTION / LEGEND -->
      <div class="absolute bottom-2 left-3 bg-white/80 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-semibold text-slate-600 flex items-center gap-2 border border-white/60">
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Available</span>
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-amber-500"></span> Busy</span>
        <span class="flex items-center gap-1"><span class="w-2 h-2 rounded-full bg-slate-500"></span> Offline</span>
      </div>
    </div>
  `;
}

// 6. FILTER SHEET MODAL
export function renderFilterModal(filters) {
  return `
    <div id="modal-backdrop" class="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 flex items-end justify-center">
      <div class="w-full max-w-md bg-white rounded-t-3xl p-5 shadow-2xl animate-slide-up max-h-[85vh] overflow-y-auto">
        
        <div class="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
          <h2 class="font-bold text-slate-900 text-lg">Filter Chargers</h2>
          <button data-action="close-modal" class="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200">
            ${getIcon('close', 'w-4 h-4')}
          </button>
        </div>

        <!-- DISTANCE FILTER -->
        <div class="mb-5">
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Distance</label>
          <div class="grid grid-cols-3 gap-2">
            <button data-filter-dist="5" class="py-2 px-3 rounded-xl border text-xs font-semibold ${filters.maxDistanceKm === 5 ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-slate-200 text-slate-600'}">Within 5 km</button>
            <button data-filter-dist="10" class="py-2 px-3 rounded-xl border text-xs font-semibold ${filters.maxDistanceKm === 10 ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-slate-200 text-slate-600'}">Within 10 km</button>
            <button data-filter-dist="25" class="py-2 px-3 rounded-xl border text-xs font-semibold ${filters.maxDistanceKm === 25 ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-slate-200 text-slate-600'}">Within 25 km</button>
          </div>
        </div>

        <!-- SPEED FILTER -->
        <div class="mb-5">
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Charging Speed</label>
          <div class="grid grid-cols-3 gap-2">
            <button class="py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:border-slate-300">Slow (&lt;22 kW)</button>
            <button class="py-2 px-3 rounded-xl border border-emerald-500 bg-emerald-50 text-emerald-800 text-xs font-semibold">Fast (50–150 kW)</button>
            <button class="py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:border-slate-300">Ultra-fast (150+ kW)</button>
          </div>
        </div>

        <!-- CONNECTOR TYPE -->
        <div class="mb-5">
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Connector Type</label>
          <div class="grid grid-cols-3 gap-2">
            <button class="py-2 px-3 rounded-xl border border-emerald-500 bg-emerald-50 text-emerald-800 text-xs font-semibold">🔌 CCS</button>
            <button class="py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600">Type 2</button>
            <button class="py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600">CHAdeMO</button>
          </div>
        </div>

        <!-- AVAILABILITY & PRICE -->
        <div class="mb-6">
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Pricing Threshold</label>
          <div class="grid grid-cols-2 gap-2">
            <button class="py-2 px-3 rounded-xl border border-emerald-500 bg-emerald-50 text-emerald-800 text-xs font-semibold">Under ₹20/kWh</button>
            <button class="py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600">Under ₹30/kWh</button>
          </div>
        </div>

        <!-- ACTION BUTTONS -->
        <div class="flex items-center gap-3 pt-3 border-t border-slate-100">
          <button data-action="reset-filters" class="btn-secondary w-1/3 text-xs py-3">Reset</button>
          <button data-action="apply-filters" class="btn-primary w-2/3 text-xs py-3">Apply Filters</button>
        </div>

      </div>
    </div>
  `;
}

// 7. REUSABLE EMPTY STATE COMPONENT
export function renderEmptyState({ icon = 'info', title, description, actionLabel, actionId }) {
  return `
    <div class="flex flex-col items-center justify-center p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 my-4">
      <div class="w-14 h-14 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center mb-3">
        ${getIcon(icon, 'w-7 h-7')}
      </div>
      <h3 class="font-bold text-slate-800 text-base mb-1">${title}</h3>
      <p class="text-xs text-slate-500 max-w-xs mb-4 leading-relaxed">${description}</p>
      ${actionLabel ? `
        <button data-action="${actionId}" class="btn-primary text-xs py-2 px-4 w-auto">
          ${actionLabel}
        </button>
      ` : ''}
    </div>
  `;
}

// 8. ERROR RECOVERY MODAL (UNHAPPY PATH RECOVERY)
export function renderErrorModal({ title, message, primaryLabel, primaryAction, secondaryLabel = null, secondaryAction = null }) {
  return `
    <div class="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-fade-in text-center">
        <div class="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4 border border-red-200">
          ${getIcon('alertTriangle', 'w-8 h-8')}
        </div>
        <h3 class="font-bold text-slate-900 text-lg mb-2">${title}</h3>
        <p class="text-xs text-slate-600 leading-relaxed mb-6">${message}</p>

        <div class="flex flex-col gap-2">
          <button data-action="${primaryAction}" class="btn-primary text-xs py-3">
            ${primaryLabel}
          </button>
          ${secondaryLabel ? `
            <button data-action="${secondaryAction}" class="btn-secondary text-xs py-3">
              ${secondaryLabel}
            </button>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}
