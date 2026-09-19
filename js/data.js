/* ==========================================================================
   COMPASS EV CHARGING APP — DATA PROVIDER
   Client: Voltline Mobility
   Realistic dataset: Chargers, Vehicles, Trips, Payments, Receipts, Notifications
   ========================================================================== */

export const INITIAL_CHARGERS = [
  {
    id: 'ch-1',
    name: 'Voltline Central Mall',
    address: 'Anna Salai, Thousand Lights, Chennai',
    distanceKm: 2.4,
    estArrivalMin: 6,
    powerKw: 150,
    type: 'Fast Charger',
    connectors: [
      { type: 'CCS', total: 4, available: 2, power: '150 kW DC' },
      { type: 'Type 2', total: 2, available: 1, power: '22 kW AC' }
    ],
    status: 'Available', // Available, Busy, Offline
    availablePorts: 3,
    totalPorts: 6,
    pricePerKwh: 18,
    rating: 4.8,
    reviewsCount: 142,
    amenities: ['Parking', 'Restroom', 'Café', 'Wi-Fi'],
    openingHours: 'Open 24/7',
    lat: 13.0604,
    lng: 80.2496,
    mapX: 48, // SVG map percentage coordinates
    mapY: 42,
    description: 'Ultra-fast DC charging station located at Central Mall Basement Level B2. High security with 24/7 CCTV and staff.'
  },
  {
    id: 'ch-2',
    name: 'Voltline Express Terminal',
    address: 'GST Road, Guindy, Chennai',
    distanceKm: 1.1,
    estArrivalMin: 3,
    powerKw: 240,
    type: 'Ultra-Fast Charger',
    connectors: [
      { type: 'CCS', total: 4, available: 0, power: '240 kW DC' },
      { type: 'CHAdeMO', total: 2, available: 0, power: '100 kW DC' }
    ],
    status: 'Busy',
    availablePorts: 0,
    totalPorts: 6,
    pricePerKwh: 22,
    rating: 4.7,
    reviewsCount: 98,
    amenities: ['Parking', 'Restroom', 'Café'],
    openingHours: 'Open 24/7',
    lat: 13.0067,
    lng: 80.2020,
    mapX: 25,
    mapY: 65,
    busyDetails: {
      chargingVehicles: 2,
      waitingVehicles: 1,
      estWaitMin: 18
    },
    description: 'High-speed highway feeder station. Currently at peak occupancy.'
  },
  {
    id: 'ch-3',
    name: 'Voltline Highway Hub',
    address: 'NH44, Sriperumbudur, Tamil Nadu',
    distanceKm: 8.7,
    estArrivalMin: 14,
    powerKw: 180,
    type: 'Fast Charger',
    connectors: [
      { type: 'CCS', total: 6, available: 1, power: '180 kW DC' }
    ],
    status: 'Available',
    availablePorts: 1,
    totalPorts: 6,
    pricePerKwh: 20,
    rating: 4.9,
    reviewsCount: 215,
    amenities: ['Parking', 'Restroom', '24/7 Dining', 'Wi-Fi'],
    openingHours: 'Open 24/7',
    lat: 12.9696,
    lng: 79.9493,
    mapX: 82,
    mapY: 28,
    description: 'Spacious rest stop charger equipped with fast DC charging guns and gourmet food court.'
  },
  {
    id: 'ch-4',
    name: 'Voltline Riverside Walk',
    address: 'Boat Club Road, R.A. Puram, Chennai',
    distanceKm: 5.2,
    estArrivalMin: 11,
    powerKw: 60,
    type: 'Standard Charger',
    connectors: [
      { type: 'Type 2', total: 4, available: 3, power: '60 kW DC' }
    ],
    status: 'Available',
    availablePorts: 3,
    totalPorts: 4,
    pricePerKwh: 15,
    rating: 4.5,
    reviewsCount: 64,
    amenities: ['Parking', 'Park View', 'Wi-Fi'],
    openingHours: '6:00 AM – 11:00 PM',
    lat: 13.0232,
    lng: 80.2520,
    mapX: 68,
    mapY: 72,
    description: 'Scenic charging point along the river walk. Great place for a quick break while topping up.'
  },
  {
    id: 'ch-5',
    name: 'Voltline Tech City Hub',
    address: 'OMR, Karapakkam, Chennai',
    distanceKm: 3.8,
    estArrivalMin: 8,
    powerKw: 150,
    type: 'Fast Charger',
    connectors: [
      { type: 'CCS', total: 6, available: 4, power: '150 kW DC' }
    ],
    status: 'Available',
    availablePorts: 4,
    totalPorts: 6,
    pricePerKwh: 17,
    rating: 4.8,
    reviewsCount: 180,
    amenities: ['Parking', 'Restroom', 'Café', 'Wi-Fi'],
    openingHours: 'Open 24/7',
    lat: 12.9150,
    lng: 80.2280,
    mapX: 35,
    mapY: 30,
    description: 'Located in the heart of the IT corridor. Dedicated EV parking bays with automatic boom barriers.'
  },
  {
    id: 'ch-6',
    name: 'Voltline Green Park Hub',
    address: 'Vadapalani, Chennai',
    distanceKm: 12.4,
    estArrivalMin: 22,
    powerKw: 120,
    type: 'Fast Charger',
    connectors: [
      { type: 'CCS', total: 2, available: 0, power: '120 kW DC' }
    ],
    status: 'Offline',
    availablePorts: 0,
    totalPorts: 2,
    pricePerKwh: 18,
    rating: 4.2,
    reviewsCount: 38,
    amenities: ['Parking'],
    openingHours: 'Under Maintenance',
    lat: 13.0500,
    lng: 80.2120,
    mapX: 18,
    mapY: 15,
    description: 'Station temporarily offline for grid hardware upgrades.'
  }
];

export const INITIAL_VEHICLES = [
  {
    id: 'v-1',
    brand: 'Tesla',
    model: 'Model 3 Long Range',
    year: '2023',
    nickname: 'Red Lightning',
    batteryCapacityKwh: 75,
    connectorType: 'CCS',
    currentBatteryPct: 34,
    rangeKmMax: 480,
    isDefault: true,
    imageBg: 'from-red-500 to-rose-700'
  },
  {
    id: 'v-2',
    brand: 'Tata',
    model: 'Nexon EV Max',
    year: '2024',
    nickname: 'City Commuter',
    batteryCapacityKwh: 40.5,
    connectorType: 'CCS',
    currentBatteryPct: 62,
    rangeKmMax: 312,
    isDefault: false,
    imageBg: 'from-emerald-500 to-teal-700'
  },
  {
    id: 'v-3',
    brand: 'Hyundai',
    model: 'Ioniq 5',
    year: '2023',
    nickname: 'Highway Cruiser',
    batteryCapacityKwh: 72.6,
    connectorType: 'CCS',
    currentBatteryPct: 88,
    rangeKmMax: 450,
    isDefault: false,
    imageBg: 'from-blue-500 to-indigo-700'
  }
];

export const INITIAL_SAVED_TRIPS = [
  {
    id: 'trip-1',
    title: 'Chennai → Pondicherry',
    origin: 'Chennai Central',
    destination: 'White Town, Pondicherry',
    distanceKm: 156,
    driveTime: '3h 20m',
    chargeTimeMin: 32,
    estTotalCost: 540,
    lastUpdated: '2 days ago',
    stops: [
      {
        name: 'Voltline Chengalpattu Plaza',
        distanceFromStartKm: 42,
        arrivalBatteryPct: 24,
        chargeTimeMin: 20,
        targetBatteryPct: 80,
        powerKw: 150,
        pricePerKwh: 18,
        cost: 340
      },
      {
        name: 'Voltline Villupuram Highway',
        distanceFromStartKm: 110,
        arrivalBatteryPct: 38,
        chargeTimeMin: 12,
        targetBatteryPct: 75,
        powerKw: 180,
        pricePerKwh: 20,
        cost: 200
      }
    ]
  },
  {
    id: 'trip-2',
    title: 'Chennai → Coimbatore',
    origin: 'Chennai',
    destination: 'Coimbatore Airport',
    distanceKm: 505,
    driveTime: '8h 40m',
    chargeTimeMin: 75,
    estTotalCost: 1420,
    lastUpdated: '1 week ago',
    stops: [
      { name: 'Voltline Tindivanam', distanceFromStartKm: 120, arrivalBatteryPct: 22, chargeTimeMin: 25, powerKw: 150, cost: 450 },
      { name: 'Voltline Salem Bypass', distanceFromStartKm: 340, arrivalBatteryPct: 18, chargeTimeMin: 30, powerKw: 180, cost: 620 },
      { name: 'Voltline Erode South', distanceFromStartKm: 430, arrivalBatteryPct: 35, chargeTimeMin: 20, powerKw: 120, cost: 350 }
    ]
  }
];

export const INITIAL_PAYMENT_METHODS = [
  {
    id: 'pm-1',
    type: 'Card',
    brand: 'Visa',
    last4: '4821',
    expiry: '08/28',
    holderName: 'Rahul Sharma',
    isDefault: true,
    icon: 'creditCard'
  },
  {
    id: 'pm-2',
    type: 'UPI',
    upiId: 'rahul@okaxis',
    provider: 'Google Pay / Axis Bank',
    isDefault: false,
    icon: 'wallet'
  }
];

export const INITIAL_RECEIPTS = [
  {
    id: 'rc-1092',
    stationName: 'Voltline Central Mall',
    date: '27 Aug 2026, 04:15 PM',
    energyKwh: 10.8,
    durationMin: 18,
    energyCost: 194.4,
    parkingFee: 20.0,
    taxFee: 14.6,
    totalPaid: 229,
    paymentMethod: 'Visa •••• 4821',
    receiptNo: 'VL-884920192',
    batteryChange: '68% → 82%'
  },
  {
    id: 'rc-1088',
    stationName: 'Voltline Highway Hub',
    date: '21 Aug 2026, 11:30 AM',
    energyKwh: 16.5,
    durationMin: 24,
    energyCost: 330.0,
    parkingFee: 0,
    taxFee: 10.0,
    totalPaid: 340,
    paymentMethod: 'Visa •••• 4821',
    receiptNo: 'VL-88481104',
    batteryChange: '22% → 80%'
  },
  {
    id: 'rc-1076',
    stationName: 'Voltline Tech City Hub',
    date: '14 Aug 2026, 07:45 PM',
    energyKwh: 12.0,
    durationMin: 20,
    energyCost: 204.0,
    parkingFee: 15.0,
    taxFee: 10.0,
    totalPaid: 229,
    paymentMethod: 'UPI rahul@okaxis',
    receiptNo: 'VL-88470023',
    batteryChange: '35% → 75%'
  }
];

export const INITIAL_NOTIFICATIONS = [
  {
    id: 'n-1',
    title: 'Charger Available Now',
    message: 'Port A03 at Voltline Central Mall is now free for charging.',
    time: '5 mins ago',
    unread: true,
    type: 'available'
  },
  {
    id: 'n-2',
    title: 'Charging Completed',
    message: 'Your Tesla Model 3 reached 82% charge. Total amount paid: ₹229.',
    time: '2 hours ago',
    unread: false,
    type: 'success'
  },
  {
    id: 'n-3',
    title: 'Payment Successful',
    message: 'Receipt #VL-884920192 has been generated and sent to your email.',
    time: 'Yesterday',
    unread: false,
    type: 'payment'
  },
  {
    id: 'n-4',
    title: 'Trip Plan Updated',
    message: 'New ultra-fast charger added along your Chennai → Pondicherry route.',
    time: '2 days ago',
    unread: false,
    type: 'info'
  }
];

export const FAQS = [
  {
    category: 'Charging Help',
    q: 'How do I start charging at a Voltline station?',
    a: 'Simply plug the connector into your vehicle, select the station port in the COMPASS app, verify estimated cost, and tap "Start Charging". The session will initialize automatically within 5 seconds.'
  },
  {
    category: 'Charging Help',
    q: 'What is the difference between CCS and Type 2 connectors?',
    a: 'CCS (Combined Charging System) delivers high-speed Direct Current (DC) fast charging (up to 240 kW), ideal for highway stops. Type 2 delivers Alternating Current (AC) standard charging (up to 22 kW).'
  },
  {
    category: 'Payment Help',
    q: 'How are charging costs calculated?',
    a: 'Pricing is transparently based on energy consumed (₹/kWh) plus any applicable location parking or local taxes. You are only billed for exact kWh delivered to your battery.'
  },
  {
    category: 'Charger Issues',
    q: 'What if a charger disconnects or stops unexpectedly?',
    a: 'If connection drops, COMPASS will automatically attempt reconnection. If unsuccessful, your session is immediately finalized and you will only be charged for energy delivered up to the interruption.'
  },
  {
    category: 'Account & Wallet',
    q: 'Can I add auto top-up to my Voltline Wallet?',
    a: 'Yes! Go to Wallet > Top-Up > Enable Auto Top-Up to maintain a minimum ₹500 balance for seamless one-tap charging.'
  }
];
