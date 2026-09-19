/* ==========================================================================
   COMPASS EV CHARGING APP — MAIN ENTRY POINT & CONTROLLER
   Client: Voltline Mobility
   Connects State Store, UI Components, Screen Router, and Interaction Handlers
   ========================================================================== */

import { store } from './store.js';
import { renderFilterModal, renderErrorModal } from './components.js';
import {
  renderWelcomeScreen,
  renderAuthScreen,
  renderAddVehicleScreen,
  renderAddPaymentScreen,
  renderHomeScreen,
  renderChargerDetailScreen,
  renderChargerUnavailableScreen,
  renderStartChargingScreen,
  renderLiveChargingScreen,
  renderStopConfirmationScreen,
  renderPaymentScreen,
  renderReceiptScreen,
  renderPlanTripScreen,
  renderTripResultsScreen,
  renderWalletScreen,
  renderTopUpScreen,
  renderReceiptsListScreen,
  renderProfileScreen,
  renderVehicleProfileScreen,
  renderNotificationsScreen,
  renderHelpScreen
} from './screens.js';
import { renderCaseStudyView } from './caseStudy.js';

import { renderLandingPage } from './landing.js';

// DOM Elements
const screenContainer = document.getElementById('screen-container');
const casestudyContainer = document.getElementById('view-casestudy-container');
const appContainer = document.getElementById('view-app-container');
const landingContainer = document.getElementById('view-landing-container');
const phoneFrame = document.getElementById('phone-frame');
const toastContainer = document.getElementById('toast-container');
const simulatorDrawer = document.getElementById('simulator-drawer');

// MASTER RENDER ROUTER
function renderApp() {
  // 1. View Mode (Landing Website vs App Prototype vs Case Study)
  if (store.viewMode === 'landing') {
    landingContainer.classList.remove('hidden');
    appContainer.classList.add('hidden');
    casestudyContainer.classList.add('hidden');
    document.getElementById('landing-content').innerHTML = renderLandingPage();
    updateHeaderToggles();
    return;
  } else if (store.viewMode === 'casestudy') {
    landingContainer.classList.add('hidden');
    appContainer.classList.add('hidden');
    casestudyContainer.classList.remove('hidden');
    document.getElementById('casestudy-content').innerHTML = renderCaseStudyView();
    updateHeaderToggles();
    return;
  } else {
    landingContainer.classList.add('hidden');
    appContainer.classList.remove('hidden');
    casestudyContainer.classList.add('hidden');
  }

  // 2. Device Frame Sizing
  phoneFrame.className = `relative bg-slate-900 border-[10px] border-slate-800 rounded-[48px] shadow-2xl shadow-emerald-950/40 overflow-hidden flex flex-col transition-all duration-300 mobile-frame-${store.deviceFrame}`;

  // 3. Screen Router
  let html = '';
  switch (store.currentScreen) {
    case 'welcome':
      html = renderWelcomeScreen();
      break;
    case 'login':
      html = renderAuthScreen(false);
      break;
    case 'signup':
      html = renderAuthScreen(true);
      break;
    case 'addVehicle':
      html = renderAddVehicleScreen();
      break;
    case 'addPayment':
      html = renderAddPaymentScreen();
      break;
    case 'home':
      html = renderHomeScreen();
      break;
    case 'chargerDetail':
      html = renderChargerDetailScreen();
      break;
    case 'chargerUnavailable':
      html = renderChargerUnavailableScreen();
      break;
    case 'startCharging':
      html = renderStartChargingScreen();
      break;
    case 'liveCharging':
      html = renderLiveChargingScreen();
      break;
    case 'stopConfirmation':
      html = renderStopConfirmationScreen();
      break;
    case 'payment':
      html = renderPaymentScreen();
      break;
    case 'receipt':
      html = renderReceiptScreen();
      break;
    case 'planTrip':
      html = renderPlanTripScreen();
      break;
    case 'tripResults':
      html = renderTripResultsScreen();
      break;
    case 'wallet':
      html = renderWalletScreen();
      break;
    case 'topUp':
      html = renderTopUpScreen();
      break;
    case 'receiptsList':
      html = renderReceiptsListScreen();
      break;
    case 'profile':
      html = renderProfileScreen();
      break;
    case 'vehicleProfile':
      html = renderVehicleProfileScreen();
      break;
    case 'notifications':
      html = renderNotificationsScreen();
      break;
    case 'help':
      html = renderHelpScreen();
      break;
    default:
      html = renderHomeScreen();
  }

  // Inject Active Overlays / Modals
  if (store.activeModal === 'filterSheet') {
    html += renderFilterModal(store.filters);
  } else if (store.activeModal === 'errorPaymentDecline') {
    html += renderErrorModal({
      title: 'Payment Declined',
      message: 'Your bank declined the transaction for Visa •••• 4821. Your charging session data is safe.',
      primaryLabel: 'Try Again',
      primaryAction: 'retry-payment',
      secondaryLabel: 'Change Payment Method',
      secondaryAction: 'nav-wallet'
    });
  } else if (store.activeModal === 'errorConnectionLoss') {
    html += renderErrorModal({
      title: 'Connection Interrupted',
      message: 'Lost wireless communication with Station Port A03. Reconnecting...',
      primaryLabel: 'Restore Session',
      primaryAction: 'restore-session',
      secondaryLabel: 'Contact Support',
      secondaryAction: 'nav-help'
    });
  }

  screenContainer.innerHTML = html;
  updateHeaderToggles();
  renderToast();
}

function updateHeaderToggles() {
  const btnLanding = document.getElementById('btn-view-landing');
  const btnApp = document.getElementById('btn-view-app');
  const btnCase = document.getElementById('btn-view-casestudy');
  
  const activeClass = 'px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 text-slate-950 shadow-sm transition-all';
  const inactiveClass = 'px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white transition-all';

  if (store.viewMode === 'landing') {
    if (btnLanding) btnLanding.className = activeClass;
    if (btnApp) btnApp.className = inactiveClass;
    if (btnCase) btnCase.className = inactiveClass;
  } else if (store.viewMode === 'app') {
    if (btnApp) btnApp.className = activeClass;
    if (btnLanding) btnLanding.className = inactiveClass;
    if (btnCase) btnCase.className = inactiveClass;
  } else {
    if (btnCase) btnCase.className = activeClass;
    if (btnLanding) btnLanding.className = inactiveClass;
    if (btnApp) btnApp.className = inactiveClass;
  }
}

function renderToast() {
  if (store.toastMessage) {
    toastContainer.innerHTML = `
      <div class="toast-msg pointer-events-auto">
        <span>⚡</span> ${store.toastMessage.message}
      </div>
    `;
  } else {
    toastContainer.innerHTML = '';
  }
}

// EVENT DELEGATION FOR ALL INTERACTIVE ELEMENTS
document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-action], [data-tab], [data-charger-id], [data-map-pin], [data-trip-id]');
  if (!target) return;

  // Bottom Nav Tabs
  if (target.dataset.tab) {
    store.switchTab(target.dataset.tab);
    return;
  }

  // Charger selection (card or map pin)
  if (target.dataset.chargerId || target.dataset.mapPin) {
    const id = target.dataset.chargerId || target.dataset.mapPin;
    const charger = store.chargers.find(c => c.id === id);
    if (charger && charger.status === 'Busy') {
      store.selectedChargerId = id;
      store.navigate('chargerUnavailable');
    } else if (charger && charger.status === 'Offline') {
      store.selectedChargerId = id;
      store.navigate('chargerUnavailable');
    } else {
      store.selectedChargerId = id;
      store.navigate('chargerDetail');
    }
    return;
  }

  // Saved Trip selection
  if (target.dataset.tripId) {
    store.navigate('tripResults');
    return;
  }

  // Action Dispatcher
  const action = target.dataset.action;
  switch (action) {
    case 'go-back':
      store.goBack();
      break;

    case 'nav-screen':
      if (target.dataset.target) store.navigate(target.dataset.target);
      break;

    case 'open-filter':
      store.activeModal = 'filterSheet';
      store.notify();
      break;

    case 'close-modal':
      store.closeModal();
      break;

    case 'apply-filters':
      store.closeModal();
      store.showToast('Filters applied! Displaying 4 chargers.', 'success');
      break;

    case 'reset-filters':
      store.closeModal();
      store.showToast('Filters reset.', 'info');
      break;

    case 'start-session':
      store.startChargingSession();
      break;

    case 'stop-charging':
      store.stopChargingSession();
      break;

    case 'confirm-stop':
      store.confirmStopAndProceedPayment();
      break;

    case 'process-payment':
      store.completePayment();
      break;

    case 'generate-trip':
      store.navigate('tripResults');
      break;

    case 'toggle-empty-trips':
      store.savedTrips = store.savedTrips.length > 0 ? [] : [...store.savedTrips];
      store.notify();
      break;

    case 'complete-onboarding':
      store.hasCompletedOnboarding = true;
      store.navigate('home');
      store.showToast('Welcome to COMPASS!', 'success');
      break;

    case 'retry-payment':
      store.closeModal();
      store.completePayment();
      break;

    case 'restore-session':
      store.closeModal();
      if (store.chargingSession.status === 'interrupted') {
        store.chargingSession.status = 'active';
      }
      store.showToast('Session connection restored!', 'success');
      break;
  }
});

// TOP PRESENTATION BAR & SIMULATOR BUTTON HANDLERS
document.getElementById('btn-view-landing')?.addEventListener('click', () => store.setViewMode('landing'));
document.getElementById('btn-view-app')?.addEventListener('click', () => store.setViewMode('app'));
document.getElementById('btn-view-casestudy')?.addEventListener('click', () => store.setViewMode('casestudy'));

// Delegate launch prototype action
document.addEventListener('click', (e) => {
  const launchBtn = e.target.closest('[data-action="launch-app-prototype"]');
  if (launchBtn) {
    store.setViewMode('app');
    store.showToast('Switched to Interactive App Prototype', 'success');
  }
});

document.getElementById('btn-frame-390')?.addEventListener('click', () => store.setDeviceFrame('390'));
document.getElementById('btn-frame-375')?.addEventListener('click', () => store.setDeviceFrame('375'));
document.getElementById('btn-frame-414')?.addEventListener('click', () => store.setDeviceFrame('414'));
document.getElementById('btn-frame-full')?.addEventListener('click', () => store.setDeviceFrame('full'));

// Toggle Simulator Drawer
document.getElementById('btn-toggle-simulator')?.addEventListener('click', () => {
  simulatorDrawer.classList.toggle('hidden');
});

// Simulator Edge Case Triggers
document.getElementById('sim-charger-busy')?.addEventListener('click', () => store.triggerSimBusy());
document.getElementById('sim-payment-fail')?.addEventListener('click', () => store.triggerSimPaymentFail());
document.getElementById('sim-network-loss')?.addEventListener('click', () => store.triggerSimConnectionLoss());
document.getElementById('sim-charger-offline')?.addEventListener('click', () => store.triggerSimOffline());
document.getElementById('sim-reset')?.addEventListener('click', () => store.resetSim());

// STORE SUBSCRIPTION FOR RE-RENDERING
store.subscribe(() => renderApp());

// INITIAL RENDER
renderApp();
