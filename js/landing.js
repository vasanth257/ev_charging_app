/* ==========================================================================
   COMPASS EV CHARGING — MARKETING & LANDING PAGE SHOWCASE
   Client: Voltline Mobility
   Premium product landing page featuring hero section, feature breakdown,
   interactive network preview, pricing plans, testimonials, and app download.
   ========================================================================== */

import { getIcon } from './icons.js';
import { store } from './store.js';

export function renderLandingPage() {
  return `
    <div class="w-full text-slate-100 font-sans antialiased space-y-20 pb-20 animate-fade-in">
      
      <!-- HERO SECTION -->
      <section class="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <!-- Hero Left Text -->
        <div class="flex-1 space-y-6 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Voltline Mobility • Next-Gen EV Infrastructure</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Charge Anywhere.<br />
            <span class="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Range Anxiety, Solved.
            </span>
          </h1>

          <p class="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            COMPASS connects EV drivers to India’s most reliable ultra-fast charging network. Real-time charger availability, 2-tap session initialization, transparent kWh pricing, and automated trip planning.
          </p>

          <!-- Hero CTAs -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button data-action="launch-app-prototype" class="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 active:scale-95 cursor-pointer">
              <span>📱</span> Launch Interactive Prototype
            </button>
            <a href="#network-demo" class="px-6 py-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-semibold text-sm transition-all flex items-center gap-2">
              <span>🗺️</span> Explore Network
            </a>
          </div>

          <!-- Trust Metrics -->
          <div class="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
            <div>
              <div class="text-2xl font-black text-white">500+</div>
              <div class="text-xs text-slate-400 font-medium">Ultra-Fast Chargers</div>
            </div>
            <div>
              <div class="text-2xl font-black text-emerald-400">99.8%</div>
              <div class="text-xs text-slate-400 font-medium">Network Uptime</div>
            </div>
            <div>
              <div class="text-2xl font-black text-white">50k+</div>
              <div class="text-xs text-slate-400 font-medium">Active EV Drivers</div>
            </div>
            <div>
              <div class="text-2xl font-black text-emerald-400">₹0</div>
              <div class="text-xs text-slate-400 font-medium">Hidden Fees</div>
            </div>
          </div>
        </div>

        <!-- Hero Right Preview Card -->
        <div class="flex-1 w-full max-w-md lg:max-w-none flex justify-center">
          <div class="relative w-full max-w-sm rounded-[36px] bg-gradient-to-tr from-slate-900 via-slate-800 to-emerald-950 p-6 border border-slate-700/60 shadow-2xl shadow-emerald-950/50 space-y-5">
            
            <!-- Floating Pill Badge -->
            <div class="absolute -top-3 -right-3 bg-emerald-500 text-slate-950 text-[11px] font-bold px-3 py-1 rounded-full shadow-lg">
              ⚡ LIVE DEMO ACTIVE
            </div>

            <div class="flex items-center justify-between">
              <div>
                <div class="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">VOLTLINE CONNECT</div>
                <div class="text-base font-bold text-white">Voltline Central Mall</div>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">150 kW DC</span>
            </div>

            <!-- Mini Circular Gauge -->
            <div class="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-center space-y-2">
              <div class="text-3xl font-black text-emerald-400 font-mono">68% → 82%</div>
              <div class="text-xs text-slate-300">Target Session • ~18 min remaining</div>
              <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div class="bg-emerald-500 h-full w-3/4 animate-pulse"></div>
              </div>
            </div>

            <!-- Launch Button -->
            <button data-action="launch-app-prototype" class="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2">
              Try Full App Experience ${getIcon('chevronRight', 'w-4 h-4')}
            </button>
          </div>
        </div>

      </section>

      <!-- FEATURE HIGHLIGHTS GRID -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div class="text-center space-y-3 max-w-3xl mx-auto">
          <h2 class="text-xs font-bold text-emerald-400 uppercase tracking-widest">Designed for Total Driver Confidence</h2>
          <h3 class="text-3xl font-black text-white">Everything You Need to Charge &amp; Go</h3>
          <p class="text-slate-400 text-xs sm:text-sm">Built from the ground up to solve charger discovery friction, technical confusion, and payment hassles.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-500/30">
              📍
            </div>
            <h4 class="text-lg font-bold text-white">Instant Plug Discovery</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Real-time station status indicators displaying exact available ports, charging power (kW), and pricing before you arrive.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-500/30">
              ⚡
            </div>
            <h4 class="text-lg font-bold text-white">2-Tap Charging Initiation</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Plug in your vehicle, scan or select the port in COMPASS, and watch charging begin automatically with zero hassle.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-500/30">
              🗺️
            </div>
            <h4 class="text-lg font-bold text-white">Intelligent Trip Planner</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Plan long-distance journeys with optimized charging stops, arrival battery calculations, and segment costs.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-500/30">
              💳
            </div>
            <h4 class="text-lg font-bold text-white">Transparent Billing &amp; Receipts</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Clear itemized breakdown per kWh with instant digital receipts sent to your email and saved in your wallet.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-500/30">
              🛡️
            </div>
            <h4 class="text-lg font-bold text-white">Active Error Recovery</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Never get stranded. If a charger is busy or offline, COMPASS immediately routes you to the nearest available alternative.
            </p>
          </div>

          <div class="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-500/30">
              🚗
            </div>
            <h4 class="text-lg font-bold text-white">Multi-Vehicle Garage Sync</h4>
            <p class="text-xs text-slate-400 leading-relaxed">
              Support for Tesla, Tata, Hyundai, MG, and Mahindra EVs with custom battery sizes and plug compatibility.
            </p>
          </div>

        </div>
      </section>

      <!-- INTERACTIVE NETWORK DEMO PREVIEW -->
      <section id="network-demo" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div class="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span class="text-xs font-bold text-emerald-400 uppercase tracking-widest">VOLTLINE CHARGING NETWORK</span>
              <h3 class="text-2xl font-bold text-white">Explore Charger Locations</h3>
            </div>
            <button data-action="launch-app-prototype" class="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5 self-start sm:self-auto">
              Open Full Interactive Map ${getIcon('arrowRight', 'w-4 h-4')}
            </button>
          </div>

          <!-- MINI NETWORK LIST GRID -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            ${store.chargers.slice(0, 3).map(c => `
              <div class="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div class="flex justify-between items-start">
                  <h4 class="font-bold text-white">${c.name}</h4>
                  <span class="px-2 py-0.5 rounded-full ${c.status === 'Available' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'} font-semibold text-[10px]">
                    ${c.status}
                  </span>
                </div>
                <p class="text-slate-400 text-[11px]">${c.address}</p>
                <div class="flex justify-between items-center pt-2 text-emerald-400 font-bold border-t border-slate-700/60">
                  <span>⚡ ${c.powerKw} kW DC</span>
                  <span>₹${c.pricePerKwh}/kWh</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- PRICING & SUBSCRIPTION PLAN CARDS -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div class="text-center space-y-2 max-w-2xl mx-auto">
          <h2 class="text-xs font-bold text-emerald-400 uppercase tracking-widest">Flexible Tariff Options</h2>
          <h3 class="text-3xl font-black text-white">Transparent Pricing Plans</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Plan 1 -->
          <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h4 class="font-bold text-white text-lg">Pay As You Go</h4>
            <div class="text-3xl font-black text-white">₹18<span class="text-xs font-normal text-slate-400">/kWh</span></div>
            <p class="text-xs text-slate-400">Ideal for occasional drivers &amp; city commuters.</p>
            <ul class="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> No monthly subscription fee</li>
              <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Pay only for exact energy consumed</li>
              <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Instant digital receipt</li>
            </ul>
            <button data-action="launch-app-prototype" class="btn-secondary bg-slate-800 text-white border-slate-700 hover:bg-slate-700 text-xs py-3">Select Plan</button>
          </div>

          <!-- Plan 2 (Highlighted) -->
          <div class="p-6 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950/60 border-2 border-emerald-500 space-y-4 relative shadow-xl">
            <span class="absolute -top-3 right-6 bg-emerald-500 text-slate-950 font-bold text-[10px] px-3 py-1 rounded-full uppercase">Most Popular</span>
            <h4 class="font-bold text-white text-lg">Commuter Pass</h4>
            <div class="text-3xl font-black text-emerald-400">₹499<span class="text-xs font-normal text-slate-400">/month</span></div>
            <p class="text-xs text-slate-300">Save 20% on all charging sessions across Voltline stations.</p>
            <ul class="space-y-2 text-xs text-slate-200 pt-2 border-t border-slate-800">
              <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Discounted ₹14/kWh rate</li>
              <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Priority charger queue reservation</li>
              <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Free 30-min parking allowance</li>
            </ul>
            <button data-action="launch-app-prototype" class="btn-primary text-xs py-3">Start 14-Day Free Trial</button>
          </div>

          <!-- Plan 3 -->
          <div class="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h4 class="font-bold text-white text-lg">Fleet Charge</h4>
            <div class="text-3xl font-black text-white">Custom<span class="text-xs font-normal text-slate-400"> pricing</span></div>
            <p class="text-xs text-slate-400">Tailored for commercial taxi fleets &amp; logistics EVs.</p>
            <ul class="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Centralized multi-driver billing</li>
              <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Dedicated fast charger bays</li>
              <li class="flex items-center gap-2"><span class="text-emerald-400">✓</span> Dedicated account management</li>
            </ul>
            <button onclick="alert('Contacting Voltline Enterprise Sales team...')" class="btn-secondary bg-slate-800 text-white border-slate-700 hover:bg-slate-700 text-xs py-3">Contact Sales</button>
          </div>
        </div>
      </section>

      <!-- APP DOWNLOAD & QR CODE SECTION -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="space-y-4 text-center md:text-left max-w-xl">
            <h3 class="text-3xl font-black text-white">Download COMPASS Today</h3>
            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Available on iOS App Store and Google Play Store. Join over 50,000 EV drivers enjoying effortless charging.
            </p>
            <div class="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <button data-action="launch-app-prototype" class="px-5 py-3 rounded-2xl bg-white text-slate-900 font-bold text-xs flex items-center gap-2 hover:bg-slate-100">
                <span></span> App Store
              </button>
              <button data-action="launch-app-prototype" class="px-5 py-3 rounded-2xl bg-white text-slate-900 font-bold text-xs flex items-center gap-2 hover:bg-slate-100">
                <span>🤖</span> Google Play
              </button>
            </div>
          </div>

          <!-- QR Code Card -->
          <div class="p-4 rounded-2xl bg-white text-slate-900 text-center space-y-2 shadow-2xl shrink-0">
            <div class="w-32 h-32 bg-slate-950 rounded-xl p-2 flex items-center justify-center text-white font-mono text-xs font-bold border-4 border-slate-900">
              [ COMPASS QR ]
            </div>
            <div class="text-[11px] font-bold">Scan to Download</div>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="border-t border-slate-800 pt-12 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-400 space-y-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-md bg-emerald-500 text-slate-950 font-black flex items-center justify-center text-xs">🧭</div>
              <span class="font-bold text-white text-sm">COMPASS</span>
            </div>
            <p class="text-slate-500 text-[11px]">Powered by Voltline Mobility. EV Charging, Simplified.</p>
          </div>

          <div class="space-y-2">
            <div class="font-bold text-white uppercase text-[11px]">Product</div>
            <ul class="space-y-1.5 text-slate-400">
              <li><a href="#" data-action="launch-app-prototype" class="hover:text-emerald-400">Web Prototype</a></li>
              <li><a href="#network-demo" class="hover:text-emerald-400">Network Map</a></li>
              <li><a href="#" class="hover:text-emerald-400">Trip Planner</a></li>
            </ul>
          </div>

          <div class="space-y-2">
            <div class="font-bold text-white uppercase text-[11px]">Company</div>
            <ul class="space-y-1.5 text-slate-400">
              <li><a href="#" class="hover:text-emerald-400">Voltline Mobility</a></li>
              <li><a href="#" class="hover:text-emerald-400">Case Study Rationale</a></li>
              <li><a href="#" class="hover:text-emerald-400">Sustainability Report</a></li>
            </ul>
          </div>

          <div class="space-y-2">
            <div class="font-bold text-white uppercase text-[11px]">Support</div>
            <ul class="space-y-1.5 text-slate-400">
              <li><a href="#" class="hover:text-emerald-400">24/7 Roadside Line</a></li>
              <li><a href="#" class="hover:text-emerald-400">Help &amp; FAQs</a></li>
              <li><a href="#" class="hover:text-emerald-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-slate-800/60 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>© 2026 Voltline Mobility Inc. All rights reserved.</div>
          <div>Designed for Zidio UI/UX Project COMPASS Portfolio Showcase.</div>
        </div>
      </footer>

    </div>
  `;
}
