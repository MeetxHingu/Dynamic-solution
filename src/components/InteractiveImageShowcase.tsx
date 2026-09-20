import React, { useState, useRef, useEffect } from 'react';
import { 
  Scan, ZoomIn, ZoomOut, RotateCcw, Smartphone, Laptop, 
  Layers, Cpu, ShieldCheck, Zap, Terminal, Play, 
  CheckCircle2, ArrowRight, Eye, Crosshair, Sparkles, Server,
  Lock, RefreshCw, Activity, Compass
} from 'lucide-react';

interface Hotspot {
  id: string;
  number: number;
  x: number; // percentage from left
  y: number; // percentage from top
  title: string;
  category: 'frontend' | 'backend' | 'security' | 'ai';
  categoryLabel: string;
  component: string;
  techStack: string[];
  metrics: { label: string; value: string; status: 'optimal' | 'live' | 'secure' }[];
  description: string;
  codeSnippet: string;
  simulationLabel: string;
  simulationSuccess: string;
}

interface ShowcaseProject {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  deviceDefault: 'laptop' | 'mobile' | 'blueprint';
  desktopImage: string;
  mobileImage: string;
  blueprintImage: string;
  hotspots: Hotspot[];
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'santram-hospital',
    name: 'Santram Hospital Portal',
    subtitle: 'Custom healthcare website with OPD appointment inquiry & 1-year maintenance',
    badge: 'Custom Web & AMC · ₹21,500 Delivered',
    deviceDefault: 'laptop',
    desktopImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    blueprintImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      {
        id: 'santram-1',
        number: 1,
        x: 28,
        y: 32,
        title: 'Patient Appointment & OPD Inquiry Form',
        category: 'frontend',
        categoryLabel: 'Frontend UI',
        component: 'PatientAppointmentForm.tsx',
        techStack: ['React 19', 'Tailwind CSS', 'Form Validation', 'EmailJS'],
        metrics: [
          { label: 'Form Submission', value: '< 1.1s', status: 'optimal' },
          { label: 'Mobile Optimized', value: '100% Pass', status: 'live' },
          { label: 'Patient Inquiries', value: '5x Increase', status: 'optimal' }
        ],
        description: 'Clean, accessible form for elderly and local patients to request doctor appointments with automated phone and SMS verification.',
        codeSnippet: `// Santram Hospital - Patient Appointment Dispatcher
export async function submitAppointmentInquiry(appointmentData: PatientData) {
  const sanitized = validatePhoneAndName(appointmentData);
  // Sends notification simultaneously to hospital desk and WhatsApp
  await Promise.all([
    sendStaffNotificationEmail(sanitized),
    dispatchWhatsAppConfirmation(sanitized.phone)
  ]);
  return { status: "CONFIRMED", appointmentRef: generateToken() };
}`,
        simulationLabel: 'Test Patient Appointment Submission Loop',
        simulationSuccess: 'Patient form validated! Automated SMS alert and hospital desk email dispatched in 1.1s.'
      },
      {
        id: 'santram-2',
        number: 2,
        x: 74,
        y: 28,
        title: 'Instant WhatsApp Emergency & OPD Chat',
        category: 'ai',
        categoryLabel: 'Inquiry Routing',
        component: 'WhatsAppQuickWidget.tsx',
        techStack: ['WhatsApp Click-to-Chat API', 'Pre-filled Routing', 'Local Webhooks'],
        metrics: [
          { label: 'Response Latency', value: 'Direct Link', status: 'optimal' },
          { label: 'Contact Availability', value: '24/7 Monitored', status: 'live' },
          { label: 'Conversion Rate', value: '+42% Leads', status: 'secure' }
        ],
        description: 'Persistent emergency button opening WhatsApp with pre-filled department selection for instant assistance without waiting on hold.',
        codeSnippet: `// Direct WhatsApp Inquiry Link Generator
export function getWhatsAppInquiryUrl(department: string, patientName: string) {
  const base = "https://wa.me/919510351986";
  const text = encodeURIComponent(\`Hello Santram Hospital, my name is \${patientName}. I need an inquiry for \${department}.\`);
  return \`\${base}?text=\${text}\`;
}`,
        simulationLabel: 'Simulate WhatsApp Emergency Chat Trigger',
        simulationSuccess: 'WhatsApp API opened with pre-filled OPD query template for immediate reply.'
      },
      {
        id: 'santram-3',
        number: 3,
        x: 62,
        y: 74,
        title: '365-Day Annual Maintenance & Security Care',
        category: 'backend',
        categoryLabel: 'Annual AMC',
        component: 'MaintenanceMonitor.ts',
        techStack: ['Automated Cloud Backups', 'SSL Auto-Renewal', 'Uptime Kuma', 'Security Shield'],
        metrics: [
          { label: 'Uptime SLA', value: '99.9% Uptime', status: 'optimal' },
          { label: 'Backup Schedule', value: 'Weekly Offsite', status: 'secure' },
          { label: 'AMC Price', value: '₹3,500 / yr', status: 'optimal' }
        ],
        description: 'Yearly Maintenance Contract (INV-2026-05) protecting the hospital website from unexpected downtime, malware, and expired SSL certificates.',
        codeSnippet: `// Dynamic Automations - Hospital AMC Healthcheck & Backup
export async function executeHospitalMaintenanceRun() {
  const sslStatus = await verifySSLCertificateExpiry("santramhospital.com");
  const backupArchive = await createCompressedDatabaseSnapshot();
  await syncToOffsiteCloudBucket(backupArchive);
  return { status: "HEALTHY", daysRemainingOnSSL: sslStatus.daysRemaining };
}`,
        simulationLabel: 'Run Annual AMC Automated Backup & Security Check',
        simulationSuccess: 'Weekly offsite cloud snapshot created. SSL certificate verified with 99.9% uptime.'
      }
    ]
  },
  {
    id: 'whatsapp-bot',
    name: 'WhatsApp Business Lead Bot',
    subtitle: '24/7 automated inquiry responder & Google Sheets lead capture system',
    badge: 'Automation · ₹1,500 Delivered (24h)',
    deviceDefault: 'mobile',
    desktopImage: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1600&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    blueprintImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      {
        id: 'bot-1',
        number: 1,
        x: 35,
        y: 28,
        title: 'Instant 2-Second Auto-Greeting & Menu',
        category: 'frontend',
        categoryLabel: 'Automation Bot',
        component: 'WhatsAppMenuRouter.ts',
        techStack: ['WhatsApp Cloud API', 'Node.js', 'Webhook Handler'],
        metrics: [
          { label: 'Response Time', value: '< 2.0s', status: 'optimal' },
          { label: 'Setup Turnaround', value: '24 Hours', status: 'live' },
          { label: 'Project Invoice', value: '₹1,500 [PAID]', status: 'optimal' }
        ],
        description: 'Automated greeting system built for Kapdadiya Priyanka (INV-2026-01). Responds instantly to customer inquiries day and night with interactive menu choices.',
        codeSnippet: `// Automated WhatsApp Response Trigger
export async function onIncomingMessage(message: IncomingWhatsAppMessage) {
  if (message.type === "text") {
    await replyWithInteractiveMenu(message.from, {
      header: "Thank you for contacting us!",
      body: "Please choose from our services below or reply with your question.",
      options: ["1. Product Catalog", "2. Price List", "3. Talk to Team"]
    });
  }
}`,
        simulationLabel: 'Trigger WhatsApp Bot Automated Greeting',
        simulationSuccess: 'Customer greeted in 1.4s! Interactive service menu delivered with zero human delay.'
      },
      {
        id: 'bot-2',
        number: 2,
        x: 65,
        y: 62,
        title: 'Real-Time Google Sheets Lead Logging',
        category: 'backend',
        categoryLabel: 'Data Sync',
        component: 'SheetsWebhookSync.ts',
        techStack: ['Google Sheets API v4', 'OAuth Service Account', 'Node.js'],
        metrics: [
          { label: 'Lead Capture', value: '100% Captured', status: 'optimal' },
          { label: 'Sync Latency', value: '350ms', status: 'live' },
          { label: 'Data Security', value: 'Encrypted', status: 'secure' }
        ],
        description: 'Every customer name, phone number, and inquiry timestamp is automatically logged into a Google Sheet so the business owner never loses a lead.',
        codeSnippet: `// Lead logging directly into client Google Sheet
export async function logLeadToGoogleSheet(lead: { name: string; phone: string; inquiry: string }) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: CLIENT_SHEET_ID,
    range: "Inquiries!A:D",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [[new Date().toLocaleDateString(), lead.name, lead.phone, lead.inquiry]] }
  });
}`,
        simulationLabel: 'Simulate Automated Lead Record to Google Sheet',
        simulationSuccess: 'Lead logged to row 42 in Google Sheet! Mobile push alert sent to business owner.'
      }
    ]
  },
  {
    id: 'bug-fixing-canada',
    name: 'Website Troubleshooting & Repairs',
    subtitle: 'Cross-border remote code diagnostics & performance optimization',
    badge: 'Bug Fixing · ₹7,000 & ₹4,166 Delivered',
    deviceDefault: 'laptop',
    desktopImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
    mobileImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    blueprintImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
    hotspots: [
      {
        id: 'bug-1',
        number: 1,
        x: 25,
        y: 35,
        title: 'Mobile Responsive Layout Alignment (CSS)',
        category: 'frontend',
        categoryLabel: 'Bug Fixing',
        component: 'ResponsivePatch.css',
        techStack: ['CSS Grid', 'Flexbox', 'Media Queries', 'Cross-Browser DevTools'],
        metrics: [
          { label: 'Layout Overflow', value: '0px (Fixed)', status: 'optimal' },
          { label: 'Turnaround Time', value: '< 48 Hours', status: 'live' },
          { label: 'Client Trust', value: 'Canada Client', status: 'secure' }
        ],
        description: 'Fixed broken horizontal scrolling, misaligned mobile navigation menus, and distorted image containers as delivered to Bhargav Patel (Canada).',
        codeSnippet: `/* Fix viewport clipping and horizontal scrolling */
@media (max-width: 768px) {
  .site-container {
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
  }
  .mobile-menu-drawer {
    display: flex;
    flex-direction: column;
    z-index: 9999;
  }
}`,
        simulationLabel: 'Run Cross-Browser Layout Diagnostic',
        simulationSuccess: 'Viewport bounds verified on iPhone 16 & Galaxy S24! Horizontal overflow eliminated.'
      },
      {
        id: 'bug-2',
        number: 2,
        x: 72,
        y: 68,
        title: 'Broken Contact Form & Script Debugging',
        category: 'backend',
        categoryLabel: 'Troubleshooting',
        component: 'FormSubmissionPatch.js',
        techStack: ['JavaScript ES6+', 'REST Endpoints', 'CORS Headers', 'Error Handling'],
        metrics: [
          { label: 'Form Success Rate', value: '100%', status: 'optimal' },
          { label: 'Invoices Paid', value: '₹7,000 + ₹4,166', status: 'optimal' },
          { label: 'Downtime', value: 'Zero Minutes', status: 'secure' }
        ],
        description: 'Patched silent JavaScript uncaught promise rejections that were causing inquiries to disappear without notifying the site owner.',
        codeSnippet: `// Patched Form Handler with Fallback & Error Trapping
export async function safeSubmitInquiry(formData) {
  try {
    const res = await fetch("/api/inquire", { method: "POST", body: JSON.stringify(formData) });
    if (!res.ok) throw new Error(\`Server returned status \${res.status}\`);
    return await res.json();
  } catch (err) {
    // Graceful fallback to direct WhatsApp submission
    return triggerWhatsAppFallback(formData);
  }
}`,
        simulationLabel: 'Simulate Form Failure & Auto-Fallback',
        simulationSuccess: 'Form error trapped! Graceful fallback dispatched inquiry without losing client lead.'
      }
    ]
  }
];

export const InteractiveImageShowcase: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('santram-hospital');
  const [deviceMode, setDeviceMode] = useState<'laptop' | 'mobile' | 'blueprint'>('laptop');
  const [selectedHotspotId, setSelectedHotspotId] = useState<string>('santram-1');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'frontend' | 'backend' | 'security' | 'ai'>('all');
  
  // Interactive Viewport Controls
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isScanning, setIsScanning] = useState<boolean>(true);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [cursorCoords, setCursorCoords] = useState<{ x: number; y: number } | null>(null);
  const [simulationState, setSimulationState] = useState<{ loading: boolean; message: string | null }>({
    loading: false,
    message: null
  });

  const imageContainerRef = useRef<HTMLDivElement>(null);

  const currentProject = SHOWCASE_PROJECTS.find(p => p.id === selectedProjectId) || SHOWCASE_PROJECTS[0];
  const activeHotspot = currentProject.hotspots.find(h => h.id === selectedHotspotId) || currentProject.hotspots[0];

  // Pick current image based on device mode
  const currentImage = deviceMode === 'mobile' 
    ? currentProject.mobileImage 
    : deviceMode === 'blueprint' 
    ? currentProject.blueprintImage 
    : currentProject.desktopImage;

  // Filtered hotspots
  const filteredHotspots = currentProject.hotspots.filter(h => 
    activeCategoryFilter === 'all' ? true : h.category === activeCategoryFilter
  );

  // Switch project handler
  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    const proj = SHOWCASE_PROJECTS.find(p => p.id === projectId);
    if (proj) {
      setDeviceMode(proj.deviceDefault);
      setSelectedHotspotId(proj.hotspots[0].id);
      setZoomLevel(1);
      setPanOffset({ x: 0, y: 0 });
      setSimulationState({ loading: false, message: null });
    }
  };

  // Track cursor coordinates over image
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const xPct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const yPct = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setCursorCoords({ x: Math.max(0, Math.min(100, xPct)), y: Math.max(0, Math.min(100, yPct)) });
  };

  const handleMouseLeave = () => {
    setCursorCoords(null);
  };

  // Zoom controls
  const handleZoomIn = () => setZoomLevel(prev => Math.min(1.75, Number((prev + 0.25).toFixed(2))));
  const handleZoomOut = () => {
    setZoomLevel(prev => {
      const next = Math.max(1, Number((prev - 0.25).toFixed(2)));
      if (next === 1) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Trigger interactive simulation
  const handleRunSimulation = () => {
    if (!activeHotspot) return;
    setSimulationState({ loading: true, message: null });
    setTimeout(() => {
      setSimulationState({
        loading: false,
        message: activeHotspot.simulationSuccess
      });
    }, 900);
  };

  return (
    <section id="showcase" className="py-24 bg-[#080a0e] relative border-t border-neutral-850 overflow-hidden">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-teal-400 mb-3 shadow-inner">
              <Crosshair className="w-3.5 h-3.5 text-teal-400" />
              <span>INTERACTIVE SYSTEM VISUALIZER</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-400">TOUCH & INSPECT ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Inspect production software under the hood.
            </h2>
            <p className="mt-3 text-base text-neutral-400 max-w-2xl">
              Interact directly with applications we engineered. Click or hover any hotspot pin to reveal real-time component telemetry, security specs, and raw production code snippets.
            </p>
          </div>

          {/* Project Switcher Pills */}
          <div className="mt-6 md:mt-0 flex items-center space-x-1 bg-neutral-900/90 border border-neutral-800 p-1 rounded-xl">
            {SHOWCASE_PROJECTS.map((proj) => {
              const active = proj.id === selectedProjectId;
              return (
                <button
                  key={proj.id}
                  onClick={() => handleSelectProject(proj.id)}
                  className={`px-3 py-2 rounded-lg font-mono text-xs font-medium transition-all cursor-pointer ${
                    active
                      ? 'bg-teal-400 text-neutral-950 font-bold shadow-md shadow-teal-500/20'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  {proj.name.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Header Info Banner */}
        <div className="bg-[#0e1117] border border-neutral-800 rounded-2xl p-4 sm:p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2.5">
              <h3 className="text-lg sm:text-xl font-bold text-white">{currentProject.name}</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-teal-950 border border-teal-800/80 text-[11px] font-mono text-teal-300">
                {currentProject.badge}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">{currentProject.subtitle}</p>
          </div>

          {/* Device Viewport Toggle & Scanner Controls */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {/* Device Switcher */}
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-0.5">
              <button
                onClick={() => setDeviceMode('laptop')}
                className={`px-2.5 py-1.5 rounded flex items-center space-x-1.5 transition-colors cursor-pointer ${
                  deviceMode === 'laptop' ? 'bg-neutral-800 text-teal-300 font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
                title="Desktop Retina Display"
              >
                <Laptop className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`px-2.5 py-1.5 rounded flex items-center space-x-1.5 transition-colors cursor-pointer ${
                  deviceMode === 'mobile' ? 'bg-neutral-800 text-teal-300 font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
                title="Mobile iOS/Android Phone View"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile</span>
              </button>
              <button
                onClick={() => setDeviceMode('blueprint')}
                className={`px-2.5 py-1.5 rounded flex items-center space-x-1.5 transition-colors cursor-pointer ${
                  deviceMode === 'blueprint' ? 'bg-neutral-800 text-teal-300 font-semibold' : 'text-neutral-400 hover:text-white'
                }`}
                title="Architecture Topology Blueprint"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Blueprint</span>
              </button>
            </div>

            {/* Laser Scanner Radar Button */}
            <button
              onClick={() => setIsScanning(!isScanning)}
              className={`px-3 py-1.5 rounded-lg border flex items-center space-x-1.5 transition-all cursor-pointer ${
                isScanning
                  ? 'bg-teal-950/60 border-teal-500/50 text-teal-300'
                  : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white'
              }`}
            >
              <Scan className="w-3.5 h-3.5 animate-pulse text-teal-400" />
              <span>Laser Radar: {isScanning ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>

        {/* Main Stage Grid: Interactive Image Stage (Left 7 Cols) & Live Inspector HUD (Right 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Image Frame (Desktop / Mobile / Blueprint) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Interactive Image Frame Container */}
            <div className="relative rounded-2xl bg-[#0a0d13] border border-neutral-800 shadow-2xl overflow-hidden group">
              
              {/* Device Frame Window Header Bar */}
              <div className="px-4 py-2.5 bg-neutral-900/90 border-b border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-[11px] text-neutral-400 ml-2 font-mono truncate max-w-[200px] sm:max-w-xs">
                    app.cofounder.studio/{currentProject.id}
                  </span>
                </div>

                {/* Live Coordinates HUD */}
                <div className="flex items-center space-x-3 text-[11px]">
                  {cursorCoords ? (
                    <span className="text-teal-400 font-mono flex items-center space-x-1">
                      <Crosshair className="w-3 h-3 text-teal-400" />
                      <span>X:{cursorCoords.x}% Y:{cursorCoords.y}%</span>
                    </span>
                  ) : (
                    <span className="text-neutral-500 font-mono">Hover to inspect coordinates</span>
                  )}
                  <div className="flex items-center space-x-1 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-emerald-400 font-mono text-[10px]">LIVE RENDER</span>
                  </div>
                </div>
              </div>

              {/* Viewport Stage */}
              <div 
                ref={imageContainerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative overflow-hidden bg-neutral-950 flex items-center justify-center min-h-[380px] sm:min-h-[440px] max-h-[580px] select-none"
              >
                {/* Laser Radar Scan Line Animation */}
                {isScanning && (
                  <div 
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent shadow-[0_0_15px_#2dd4bf] pointer-events-none z-20 animate-radar-scan"
                  />
                )}

                {/* Target Frame Render */}
                <div 
                  className="w-full h-full relative transition-transform duration-200 ease-out"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`
                  }}
                >
                  {/* The Image Itself */}
                  <img
                    src={currentImage}
                    alt={currentProject.name}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      deviceMode === 'mobile' ? 'max-w-xs mx-auto my-4 rounded-3xl border-4 border-neutral-800 shadow-2xl' : 'aspect-video object-cover'
                    }`}
                  />

                  {/* Dark subtle overlay for contrast */}
                  <div className="absolute inset-0 bg-neutral-950/25 pointer-events-none"></div>

                  {/* Interactive Hotspots Overlay */}
                  {filteredHotspots.map((hotspot) => {
                    const isSelected = hotspot.id === activeHotspot?.id;
                    return (
                      <div
                        key={hotspot.id}
                        style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group/pin"
                        onClick={() => setSelectedHotspotId(hotspot.id)}
                      >
                        {/* Radar Pulse Halo */}
                        <div className="relative flex items-center justify-center">
                          <span className={`absolute w-9 h-9 rounded-full transition-all duration-500 ${
                            isSelected 
                              ? 'bg-teal-400/40 animate-ping opacity-90' 
                              : 'bg-teal-400/20 group-hover/pin:scale-125'
                          }`}></span>

                          {/* Outer Border Ring */}
                          <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 shadow-lg ${
                            isSelected
                              ? 'bg-teal-400 text-neutral-950 border-white scale-110 shadow-teal-500/50 ring-4 ring-teal-500/30'
                              : 'bg-neutral-900/90 text-teal-300 border-teal-500/60 hover:bg-teal-400 hover:text-neutral-950'
                          }`}>
                            {hotspot.number}
                          </div>

                          {/* Hover Tooltip Preview */}
                          <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-neutral-950/95 border border-neutral-700 text-[11px] font-mono whitespace-nowrap text-white pointer-events-none transition-all duration-200 z-40 shadow-xl ${
                            isSelected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 group-hover/pin:opacity-100 group-hover/pin:translate-y-0'
                          }`}>
                            <div className="font-bold text-teal-300 flex items-center space-x-1">
                              <span>[{hotspot.categoryLabel}]</span>
                              <span>{hotspot.title}</span>
                            </div>
                            <div className="text-[10px] text-neutral-400">Click to inspect code & telemetry</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Floating Bottom Viewport Controls Toolbar */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-1 bg-neutral-950/90 border border-neutral-800 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-xl font-mono text-xs text-neutral-300">
                  <span className="text-[11px] text-neutral-400 mr-2 hidden sm:inline">Zoom:</span>
                  <button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 1}
                    className="p-1 rounded hover:bg-neutral-800 disabled:opacity-30 transition-colors"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-teal-400 font-bold px-1">{Math.round(zoomLevel * 100)}%</span>
                  <button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 1.75}
                    className="p-1 rounded hover:bg-neutral-800 disabled:opacity-30 transition-colors"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  {zoomLevel > 1 && (
                    <button
                      onClick={handleResetZoom}
                      className="ml-2 pl-2 border-l border-neutral-800 text-neutral-400 hover:text-white flex items-center space-x-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span className="text-[10px]">Reset</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Stage Footer: Hotspots Filter Bar */}
              <div className="px-4 py-3 bg-neutral-900/80 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center space-x-2 text-neutral-400">
                  <Compass className="w-3.5 h-3.5 text-teal-400" />
                  <span>Filter Hotspots:</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {(['all', 'frontend', 'backend', 'security', 'ai'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategoryFilter(cat)}
                      className={`px-2.5 py-1 rounded text-[11px] uppercase transition-colors cursor-pointer ${
                        activeCategoryFilter === cat
                          ? 'bg-teal-500/20 border border-teal-500/40 text-teal-300 font-bold'
                          : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-850'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Micro-Instructions */}
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 px-2">
              <span>💡 Tip: Click numbered markers on the image to inspect system metrics</span>
              <span>100% Client-Owned Source IP</span>
            </div>
          </div>

          {/* Right Column: Live Hotspot Inspector & Code Telemetry HUD */}
          <div className="lg:col-span-5 space-y-4">
            {activeHotspot ? (
              <div className="bg-[#0e1118] border border-neutral-800 rounded-2xl p-6 shadow-2xl relative">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-7 h-7 rounded-lg bg-teal-400 text-neutral-950 font-mono font-bold flex items-center justify-center text-xs">
                      #{activeHotspot.number}
                    </span>
                    <div>
                      <div className="text-[11px] font-mono text-teal-400 uppercase font-semibold tracking-wider">
                        {activeHotspot.categoryLabel}
                      </div>
                      <div className="text-xs font-mono text-neutral-400">{activeHotspot.component}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1.5 px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-emerald-400">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>Active Telemetry</span>
                  </div>
                </div>

                {/* Subsystem Title & Description */}
                <div className="mt-4">
                  <h4 className="text-lg font-bold text-white leading-snug">
                    {activeHotspot.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {activeHotspot.description}
                  </p>
                </div>

                {/* Live Real-Time Telemetry Gauges */}
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {activeHotspot.metrics.map((m, idx) => (
                    <div key={idx} className="bg-neutral-950 p-2.5 rounded-xl border border-neutral-800/90 text-left">
                      <div className="text-xs font-mono text-neutral-400">{m.label}</div>
                      <div className="text-sm sm:text-base font-bold text-white font-mono mt-0.5 flex items-center space-x-1">
                        <span>{m.value}</span>
                        {m.status === 'optimal' && <CheckCircle2 className="w-3 h-3 text-teal-400 inline" />}
                        {m.status === 'secure' && <ShieldCheck className="w-3 h-3 text-emerald-400 inline" />}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="mt-5">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
                    Implementation Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeHotspot.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 font-mono text-xs text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Production Code Snippet HUD */}
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1.5 text-[11px] font-mono text-neutral-400 uppercase">
                      <Terminal className="w-3 h-3 text-teal-400" />
                      <span>Production Code Excerpt</span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500">TypeScript / React 19</span>
                  </div>
                  <div className="bg-[#07090d] border border-neutral-850 rounded-xl p-3 overflow-x-auto text-[11px] font-mono text-teal-300/90 leading-relaxed max-h-48">
                    <pre className="font-mono">{activeHotspot.codeSnippet}</pre>
                  </div>
                </div>

                {/* Interactive Event Simulation Trigger */}
                <div className="mt-6 pt-5 border-t border-neutral-800/80">
                  <button
                    onClick={handleRunSimulation}
                    disabled={simulationState.loading}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-400 text-neutral-950 font-mono font-bold text-xs shadow-md shadow-teal-500/20 hover:scale-[1.01] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                  >
                    {simulationState.loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-neutral-950" />
                        <span>Running In-Memory Benchmark...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-neutral-950 text-neutral-950" />
                        <span>{activeHotspot.simulationLabel}</span>
                      </>
                    )}
                  </button>

                  {/* Simulation Feedback Alert */}
                  {simulationState.message && (
                    <div className="mt-3 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/50 font-mono text-xs text-emerald-300 flex items-start space-x-2 animate-fadeIn">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold">Execution Simulated Successfully:</div>
                        <div className="text-[11px] text-emerald-200 mt-0.5">{simulationState.message}</div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            ) : (
              <div className="bg-[#0e1118] border border-neutral-800 rounded-2xl p-8 text-center text-neutral-400 font-mono text-xs">
                Select any numbered pin on the image to inspect system telemetry.
              </div>
            )}

            {/* Quick Consultation Callout */}
            <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">Need a custom architecture for your app?</span>
              <a 
                href="#estimator" 
                className="text-teal-400 hover:text-teal-300 font-bold flex items-center space-x-1"
              >
                <span>Scope in 60s</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
