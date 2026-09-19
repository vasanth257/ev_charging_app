/* ==========================================================================
   COMPASS EV CHARGING APP — CASE STUDY & DESIGN RATIONALE
   Client: Voltline Mobility
   Professional Portfolio & Submission Documentation View
   ========================================================================== */

export function renderCaseStudyView() {
  return `
    <div class="space-y-8 animate-fade-in text-slate-100 font-sans pb-16">
      
      <!-- HERO CASE STUDY BANNER -->
      <section class="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        <div class="max-w-3xl relative z-10 space-y-3">
          <div class="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-widest">
            <span>PROJECT COMPASS</span> • <span>Voltline Mobility UI/UX Case Study</span>
          </div>
          <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            EV Charging, Simplified.
          </h1>
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            An end-to-end mobile experience designed to guide EV drivers from <span class="text-emerald-400 font-semibold">“My battery is low”</span> to <span class="text-emerald-400 font-semibold">“I paid successfully &amp; can continue my journey.”</span>
          </p>
        </div>
      </section>

      <!-- 1. PROBLEM & SOLUTION DEFINITION -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 bg-slate-900/90 rounded-3xl border border-red-500/20 shadow-xl space-y-3">
          <div class="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center font-bold text-lg">
            ⚠️
          </div>
          <h2 class="text-xl font-bold text-white">The Problem</h2>
          <p class="text-xs text-slate-300 leading-relaxed">
            EV drivers face acute anxiety due to inaccurate station status, broken/occupied chargers, complex pricing models, and unintuitive charging apps while stranded on low battery in unfamiliar places.
          </p>
        </div>

        <div class="p-6 bg-slate-900/90 rounded-3xl border border-emerald-500/20 shadow-xl space-y-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-lg">
            ✨
          </div>
          <h2 class="text-xl font-bold text-white">The Solution</h2>
          <p class="text-xs text-slate-300 leading-relaxed">
            COMPASS delivers instantaneous discovery, 2-tap session initialization, real-time animated charging progress, itemized billing, and active error recovery paths when chargers are busy or offline.
          </p>
        </div>
      </section>

      <!-- 2. RESEARCH-INFORMED PERSONAS -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-bold text-white">Research-Informed Personas</h2>
          <span class="text-xs text-emerald-400 font-mono">3 Core Drivers</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Persona 1 -->
          <div class="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2">
            <div class="font-bold text-white text-sm">1. The Commuter</div>
            <div class="text-[11px] text-emerald-400 font-semibold">Charges 3–4x a week • Busy schedule</div>
            <p class="text-xs text-slate-400 leading-relaxed">
              Wants rapid identification of free CCS plugs near work or home without wading through complex filters.
            </p>
          </div>

          <!-- Persona 2 -->
          <div class="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2">
            <div class="font-bold text-white text-sm">2. The Road-Tripper</div>
            <div class="text-[11px] text-blue-400 font-semibold">Long distance • Range Anxiety</div>
            <p class="text-xs text-slate-400 leading-relaxed">
              Requires multi-stop route calculation, arrival battery estimates, and pre-planned fast DC charging stops.
            </p>
          </div>

          <!-- Persona 3 -->
          <div class="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2">
            <div class="font-bold text-white text-sm">3. The New EV Owner</div>
            <div class="text-[11px] text-amber-400 font-semibold">Unfamiliar tech • Needs Reassurance</div>
            <p class="text-xs text-slate-400 leading-relaxed">
              Relies on plain-English terminology, plug compatibility detection, and clear cost breakdowns.
            </p>
          </div>
        </div>
      </section>

      <!-- 3. KEY DESIGN DECISIONS -->
      <section class="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-4">
        <h2 class="text-xl font-bold text-white">Key UX Heuristics &amp; Design Decisions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 bg-slate-800/60 rounded-xl space-y-1">
            <div class="font-bold text-emerald-400">1. Map-First Discovery &amp; Status Clarity</div>
            <p class="text-slate-300">Station markers never rely on color alone. They combine color, icon, text labels, and available port counters.</p>
          </div>
          <div class="p-4 bg-slate-800/60 rounded-xl space-y-1">
            <div class="font-bold text-emerald-400">2. Active Error Recovery (Unhappy Paths)</div>
            <p class="text-slate-300">When a charger is busy or offline, COMPASS automatically presents nearby available alternatives with estimated wait times.</p>
          </div>
          <div class="p-4 bg-slate-800/60 rounded-xl space-y-1">
            <div class="font-bold text-emerald-400">3. Live Charging Gauge &amp; Metrics</div>
            <p class="text-slate-300">Real-time SVG circular gauge displays battery %, current power (kW), delivered kWh, elapsed time, and live cost calculation.</p>
          </div>
          <div class="p-4 bg-slate-800/60 rounded-xl space-y-1">
            <div class="font-bold text-emerald-400">4. Transparent Pricing &amp; One-Tap Pay</div>
            <p class="text-slate-300">Itemized invoices clearly separate energy tariff (₹/kWh), location parking fees, and taxes to establish driver trust.</p>
          </div>
        </div>
      </section>

      <!-- 4. DESIGN SYSTEM TOKENS SHOWCASE -->
      <section class="p-6 bg-slate-900 rounded-3xl border border-slate-800 space-y-4">
        <h2 class="text-xl font-bold text-white">Design System &amp; Component Architecture</h2>
        <div class="flex flex-wrap gap-4 text-xs">
          <div class="flex items-center gap-2 p-2 bg-slate-800 rounded-xl">
            <div class="w-6 h-6 rounded-lg bg-emerald-500"></div>
            <span>Volt Green (#10B981)</span>
          </div>
          <div class="flex items-center gap-2 p-2 bg-slate-800 rounded-xl">
            <div class="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700"></div>
            <span>Deep Charcoal (#0F172A)</span>
          </div>
          <div class="flex items-center gap-2 p-2 bg-slate-800 rounded-xl">
            <div class="w-6 h-6 rounded-lg bg-amber-500"></div>
            <span>Busy Amber (#F59E0B)</span>
          </div>
        </div>
      </section>

    </div>
  `;
}
