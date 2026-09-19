/* ==========================================================================
   COMPASS EV CHARGING APP — REACTION & STATE STORE
   Client: Voltline Mobility
   Centralized State Management & Simulation State Machine
   ========================================================================== */

import { INITIAL_CHARGERS, INITIAL_VEHICLES, INITIAL_SAVED_TRIPS, INITIAL_PAYMENT_METHODS, INITIAL_RECEIPTS, INITIAL_NOTIFICATIONS } from './data.js';

class AppStore {
  constructor() {
    // Presentation Controls
    this.viewMode = 'app'; // 'landing', 'app', 'casestudy'
    this.deviceFrame = '390'; // '390', '375', '414', 'full'

    // User Onboarding State
    this.hasCompletedOnboarding = true; // Default true so evaluator can jump directly to Home, but can reset
    this.user = {
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      phone: '+91 98765 43210'
    };

    // Navigation Stack
    this.activeTab = 'home'; // 'home', 'trips', 'charging', 'wallet', 'profile'
    this.currentScreen = 'home'; // Current screen ID
    this.screenHistory = ['home'];

    // Data Repositories
    this.chargers = [...INITIAL_CHARGERS];
    this.vehicles = [...INITIAL_VEHICLES];
    this.activeVehicle = this.vehicles[0];
    this.savedTrips = [...INITIAL_SAVED_TRIPS];
    this.paymentMethods = [...INITIAL_PAYMENT_METHODS];
    this.receipts = [...INITIAL_RECEIPTS];
    this.notifications = [...INITIAL_NOTIFICATIONS];
    this.walletBalance = 420;

    // Search & Filter State
    this.searchQuery = '';
    this.filters = {
      maxDistanceKm: 25,
      speeds: [], // 'slow', 'fast', 'ultrafast'
      connectors: [], // 'CCS', 'Type 2', 'CHAdeMO'
      availabilityOnly: false,
      maxPrice: 30
    };

    // Selected Station Context
    this.selectedChargerId = 'ch-1';
    this.selectedPort = 'A03';

    // Trip Planner State
    this.currentTripPlan = {
      origin: 'Chennai Central',
      destination: 'White Town, Pondicherry',
      startBatteryPct: 34,
      calculated: true,
      route: INITIAL_SAVED_TRIPS[0]
    };

    // Live Charging State Machine
    this.chargingSession = {
      status: 'idle', // 'idle', 'starting', 'active', 'paused', 'interrupted', 'stopping', 'completed'
      station: INITIAL_CHARGERS[0],
      port: 'A03',
      connectorType: 'CCS',
      startBatteryPct: 68,
      currentBatteryPct: 68,
      targetBatteryPct: 82,
      powerKw: 112,
      energyDeliveredKwh: 0,
      elapsedSeconds: 0,
      costEstimate: 0,
      pricePerKwh: 18,
      timerId: null
    };

    // Active Overlays / Modal States
    this.activeModal = null; // null, 'filterSheet', 'errorPaymentDecline', 'errorConnectionLoss', 'simDrawer'
    this.toastMessage = null;

    // Listeners / Event Bus
    this.subscribers = [];
  }

  // Subscribe to store updates
  subscribe(fn) {
    this.subscribers.push(fn);
    return () => {
      this.subscribers = this.subscribers.filter(s => s !== fn);
    };
  }

  notify() {
    this.subscribers.forEach(fn => fn(this));
  }

  // Navigation Methods
  setViewMode(mode) {
    this.viewMode = mode;
    this.notify();
  }

  setDeviceFrame(frame) {
    this.deviceFrame = frame;
    this.notify();
  }

  navigate(screenId, params = {}) {
    if (params.chargerId) this.selectedChargerId = params.chargerId;
    if (params.tab) this.activeTab = params.tab;

    this.currentScreen = screenId;
    this.screenHistory.push(screenId);
    this.notify();
  }

  goBack() {
    if (this.screenHistory.length > 1) {
      this.screenHistory.pop();
      this.currentScreen = this.screenHistory[this.screenHistory.length - 1];
      this.notify();
    }
  }

  switchTab(tab) {
    this.activeTab = tab;
    switch (tab) {
      case 'home':
        this.currentScreen = 'home';
        break;
      case 'trips':
        this.currentScreen = 'planTrip';
        break;
      case 'charging':
        this.currentScreen = this.chargingSession.status === 'idle' ? 'chargerDetail' : 'liveCharging';
        break;
      case 'wallet':
        this.currentScreen = 'wallet';
        break;
      case 'profile':
        this.currentScreen = 'profile';
        break;
    }
    this.notify();
  }

  // Charging Session State Machine
  startChargingSession(chargerId = this.selectedChargerId) {
    const station = this.chargers.find(c => c.id === chargerId) || this.chargers[0];
    
    // Reset session metrics
    this.chargingSession = {
      status: 'active',
      station,
      port: 'A03',
      connectorType: 'CCS',
      startBatteryPct: 68,
      currentBatteryPct: 68,
      targetBatteryPct: 82,
      powerKw: station.powerKw || 112,
      energyDeliveredKwh: 0,
      elapsedSeconds: 0,
      costEstimate: 0,
      pricePerKwh: station.pricePerKwh || 18,
      timerId: null
    };

    // Start 1-second dynamic tick
    if (this.chargingSession.timerId) clearInterval(this.chargingSession.timerId);
    this.chargingSession.timerId = setInterval(() => {
      this.tickChargingSession();
    }, 1000);

    this.navigate('liveCharging');
    this.showToast('Charging session initialized successfully!', 'success');
  }

  tickChargingSession() {
    if (this.chargingSession.status !== 'active') return;

    this.chargingSession.elapsedSeconds += 1;
    // Add realistic kWh (e.g. 0.05 kWh per tick)
    this.chargingSession.energyDeliveredKwh += 0.04;
    this.chargingSession.energyDeliveredKwh = Math.round(this.chargingSession.energyDeliveredKwh * 100) / 100;

    // Battery percentage increments
    if (this.chargingSession.currentBatteryPct < 100) {
      this.chargingSession.currentBatteryPct += 0.15;
      this.chargingSession.currentBatteryPct = Math.min(100, Math.round(this.chargingSession.currentBatteryPct * 10) / 10);
    }

    // Power kW slight variation for realism (e.g. 110-114 kW)
    const variation = (Math.random() - 0.5) * 4;
    this.chargingSession.powerKw = Math.round(112 + variation);

    // Cost calculation
    this.chargingSession.costEstimate = Math.round(this.chargingSession.energyDeliveredKwh * this.chargingSession.pricePerKwh);

    this.notify();
  }

  stopChargingSession() {
    if (this.chargingSession.timerId) {
      clearInterval(this.chargingSession.timerId);
      this.chargingSession.timerId = null;
    }
    this.chargingSession.status = 'stopping';
    this.navigate('stopConfirmation');
  }

  confirmStopAndProceedPayment() {
    this.chargingSession.status = 'completed';
    this.navigate('payment');
  }

  completePayment(methodName = 'Visa •••• 4821') {
    const totalPaid = Math.max(150, Math.round(this.chargingSession.costEstimate + 35));
    const newReceipt = {
      id: `rc-${Math.floor(1000 + Math.random() * 9000)}`,
      stationName: this.chargingSession.station.name,
      date: new Date().toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      energyKwh: this.chargingSession.energyDeliveredKwh || 10.8,
      durationMin: Math.max(1, Math.round(this.chargingSession.elapsedSeconds / 60) || 18),
      energyCost: this.chargingSession.costEstimate || 194.4,
      parkingFee: 20.0,
      taxFee: 15.0,
      totalPaid,
      paymentMethod: methodName,
      receiptNo: `VL-${Math.floor(100000000 + Math.random() * 900000000)}`,
      batteryChange: `${this.chargingSession.startBatteryPct}% → ${Math.round(this.chargingSession.currentBatteryPct)}%`
    };

    this.receipts.unshift(newReceipt);
    
    // Add notification
    this.notifications.unshift({
      id: `n-${Date.now()}`,
      title: 'Payment Successful',
      message: `Receipt #${newReceipt.receiptNo} generated for ₹${totalPaid}.`,
      time: 'Just now',
      unread: true,
      type: 'payment'
    });

    // Update battery level in active vehicle
    if (this.activeVehicle) {
      this.activeVehicle.currentBatteryPct = Math.round(this.chargingSession.currentBatteryPct);
    }

    // Reset charging session state
    this.chargingSession.status = 'idle';
    this.navigate('receipt', { receipt: newReceipt });
  }

  // Simulation Triggers (Unhappy Paths)
  triggerSimBusy() {
    this.selectedChargerId = 'ch-2'; // Voltline Express Terminal (Busy)
    this.navigate('chargerUnavailable');
    this.showToast('Simulated Scenario: Charger Busy with Waitlist', 'warning');
  }

  triggerSimPaymentFail() {
    this.activeModal = 'errorPaymentDecline';
    this.notify();
  }

  triggerSimConnectionLoss() {
    if (this.chargingSession.status === 'active') {
      this.chargingSession.status = 'interrupted';
    }
    this.activeModal = 'errorConnectionLoss';
    this.notify();
  }

  triggerSimOffline() {
    this.selectedChargerId = 'ch-6'; // Voltline Green Park (Offline)
    this.navigate('chargerUnavailable');
    this.showToast('Simulated Scenario: Station Offline / Under Maintenance', 'error');
  }

  resetSim() {
    if (this.chargingSession.timerId) clearInterval(this.chargingSession.timerId);
    this.chargingSession.status = 'idle';
    this.activeModal = null;
    this.selectedChargerId = 'ch-1';
    this.navigate('home');
    this.showToast('Prototype state reset to default', 'info');
  }

  closeModal() {
    this.activeModal = null;
    this.notify();
  }

  showToast(message, type = 'info') {
    this.toastMessage = { message, type, id: Date.now() };
    this.notify();
    setTimeout(() => {
      if (this.toastMessage && this.toastMessage.id === this.toastMessage.id) {
        this.toastMessage = null;
        this.notify();
      }
    }, 3500);
  }
}

export const store = new AppStore();
