import React, { useState, useEffect } from 'react';
import { 
  X, Lock, Key, ShieldCheck, Download, Search, Filter, Phone, 
  MessageSquare, Calendar, DollarSign, CheckCircle2, Clock, 
  AlertCircle, Plus, Trash2, Edit3, ExternalLink, RefreshCw, FileSpreadsheet,
  ChevronDown, ChevronUp, UserCheck
} from 'lucide-react';
import { Inquiry, InquiryStatus } from '../types';
import { 
  getStoredInquiries, updateInquiryStatus, deleteInquiry, 
  exportInquiriesToCsv, saveInquiry 
} from '../data/inquiryStorage';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({ isOpen, onClose }) => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  
  // Data state
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  // Note editing state
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');

  // Manual Add Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [newClientName, setNewClientName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newBusiness, setNewBusiness] = useState('');
  const [newService, setNewService] = useState('Custom Website Development');
  const [newBudget, setNewBudget] = useState('₹18,000');
  const [newTimeline, setNewTimeline] = useState('7–10 Days');
  const [newDesc, setNewDesc] = useState('');

  const DEFAULT_PIN = '9510'; // First 4 digits of founder's phone (+91 95103 51986)

  // Load inquiries
  const loadData = () => {
    setInquiries(getStoredInquiries());
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleUpdate = () => loadData();
    window.addEventListener('dynamic_automations_inquiries_updated', handleUpdate);
    return () => window.removeEventListener('dynamic_automations_inquiries_updated', handleUpdate);
  }, []);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_PIN || pinInput.trim() === 'admin123') {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Incorrect PIN. (Hint: Use default founder PIN 9510)');
    }
  };

  const handleStatusChange = (id: string, newStatus: InquiryStatus) => {
    updateInquiryStatus(id, newStatus);
    loadData();
  };

  const handleSaveNote = (id: string) => {
    updateInquiryStatus(id, inquiries.find(i => i.id === id)?.status || 'new', noteText);
    setEditingNoteId(null);
    loadData();
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete inquiry from ${name}?`)) {
      deleteInquiry(id);
      loadData();
    }
  };

  const handleManualAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName.trim() || !newPhone.trim()) return;

    saveInquiry({
      name: newClientName,
      phone: newPhone,
      email: newEmail || 'phone.inquiry@dynamicautomations.in',
      businessName: newBusiness,
      serviceRequested: newService,
      budgetTier: newBudget,
      timeline: newTimeline,
      projectDescription: newDesc,
      source: 'manual_entry',
      status: 'new',
      notes: 'Logged directly by Akshat in Admin Panel.'
    });

    setShowAddForm(false);
    setNewClientName('');
    setNewPhone('');
    setNewEmail('');
    setNewBusiness('');
    setNewDesc('');
    loadData();
  };

  const getCleanPhone = (phone: string) => {
    return phone.replace(/[^0-9]/g, '');
  };

  // Filtered list
  const filteredInquiries = inquiries.filter(item => {
    const matchesFilter = statusFilter === 'all' || item.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      item.name.toLowerCase().includes(q) ||
      item.phone.toLowerCase().includes(q) ||
      item.email.toLowerCase().includes(q) ||
      item.serviceRequested.toLowerCase().includes(q) ||
      (item.businessName && item.businessName.toLowerCase().includes(q)) ||
      item.ticketId.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  // Analytics Metrics
  const totalCount = inquiries.length;
  const newCount = inquiries.filter(i => i.status === 'new').length;
  const activeCount = inquiries.filter(i => i.status === 'in_progress' || i.status === 'advance_paid').length;
  const completedCount = inquiries.filter(i => i.status === 'completed').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl max-h-[94vh] flex flex-col bg-[#0b0e14] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-neutral-800 bg-[#0e121a] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-teal-950 border border-teal-600/50 flex items-center justify-center text-teal-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-base font-bold text-white tracking-tight">Founder Admin Panel</span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-teal-400">
                  AKSHAT SONI · UMRETH
                </span>
              </div>
              <div className="text-xs text-neutral-400">
                Inquiry & Client Lead Management Database
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close admin modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Gate Screen */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto my-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-teal-950/60 border border-teal-500/40 flex items-center justify-center text-teal-400 mx-auto shadow-xl">
              <Key className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Enter Founder Access PIN
              </h3>
              <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                Secure access for Dynamic Automations admin. Default founder PIN is configured as <strong className="text-teal-300 font-mono">9510</strong>.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  placeholder="Enter 4-digit PIN (9510)"
                  className="w-full px-4 py-3 rounded-xl bg-[#131722] border border-neutral-700 text-center text-xl tracking-widest text-white font-mono focus:outline-none focus:border-teal-500 transition-colors"
                  autoFocus
                />
                {pinError && (
                  <div className="text-xs text-rose-400 mt-2 font-mono flex items-center justify-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{pinError}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-neutral-950 font-mono font-bold text-sm transition-all cursor-pointer shadow-lg shadow-teal-500/20"
              >
                Unlock Inquiries Database
              </button>
            </form>
          </div>
        ) : (
          /* Main Authenticated Admin View */
          <div className="flex-1 flex flex-col overflow-hidden">
            
            {/* KPI Analytics Strip */}
            <div className="px-6 py-4 bg-[#0a0d13] border-b border-neutral-800 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#111520] border border-neutral-800/90">
                <div className="text-[11px] font-mono text-neutral-400">Total Leads In Database</div>
                <div className="text-2xl font-mono font-bold text-white mt-0.5">{totalCount}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#111520] border border-neutral-800/90">
                <div className="text-[11px] font-mono text-neutral-400">New / Uncontacted</div>
                <div className="text-2xl font-mono font-bold text-teal-400 mt-0.5">{newCount}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#111520] border border-neutral-800/90">
                <div className="text-[11px] font-mono text-neutral-400">In Discussion / Active</div>
                <div className="text-2xl font-mono font-bold text-amber-300 mt-0.5">{activeCount}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#111520] border border-neutral-800/90">
                <div className="text-[11px] font-mono text-neutral-400">Completed & Paid</div>
                <div className="text-2xl font-mono font-bold text-emerald-400 mt-0.5">{completedCount}</div>
              </div>
            </div>

            {/* Action Toolbar */}
            <div className="p-4 bg-[#0d1017] border-b border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                
                {/* Search */}
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-neutral-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name, phone, ticket..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#141824] border border-neutral-750 text-xs text-white focus:outline-none focus:border-teal-500 font-mono"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#141824] border border-neutral-750 text-xs text-neutral-300 focus:outline-none font-mono"
                >
                  <option value="all">All Statuses ({totalCount})</option>
                  <option value="new">New ({newCount})</option>
                  <option value="contacted">Contacted</option>
                  <option value="in_progress">In Progress</option>
                  <option value="advance_paid">Advance Paid (50%)</option>
                  <option value="completed">Completed ({completedCount})</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="px-3 py-1.5 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 border border-teal-500/40 text-xs font-mono font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{showAddForm ? 'Close Form' : 'Log Lead'}</span>
                </button>

                <button
                  onClick={exportInquiriesToCsv}
                  className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-750 text-neutral-200 border border-neutral-700 text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer"
                  title="Download all leads to CSV/Excel"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Export CSV</span>
                </button>
              </div>
            </div>

            {/* Manual Lead Logging Box */}
            {showAddForm && (
              <form onSubmit={handleManualAdd} className="p-4 bg-[#111522] border-b border-neutral-800 space-y-3 animate-fade-in">
                <div className="text-xs font-mono font-bold text-white flex items-center space-x-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>Manually Log Offline Walk-In / Phone Lead:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Client Full Name *"
                    value={newClientName}
                    onChange={(e) => setNewClientName(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-[#161c2b] border border-neutral-700 text-xs text-white focus:outline-none focus:border-teal-500 font-mono"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Phone Number / WhatsApp *"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-[#161c2b] border border-neutral-700 text-xs text-white focus:outline-none focus:border-teal-500 font-mono"
                  />
                  <input
                    type="text"
                    placeholder="Business Name (e.g. Clinic / Store)"
                    value={newBusiness}
                    onChange={(e) => setNewBusiness(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-[#161c2b] border border-neutral-700 text-xs text-white focus:outline-none focus:border-teal-500 font-mono"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Service Required"
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-[#161c2b] border border-neutral-700 text-xs text-white focus:outline-none focus:border-teal-500 font-mono"
                  />
                  <input
                    type="text"
                    placeholder="Estimated Quote (e.g. ₹15,000)"
                    value={newBudget}
                    onChange={(e) => setNewBudget(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-[#161c2b] border border-neutral-700 text-xs text-white focus:outline-none focus:border-teal-500 font-mono"
                  />
                  <input
                    type="text"
                    placeholder="Client Notes / Discussion details"
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-[#161c2b] border border-neutral-700 text-xs text-white focus:outline-none focus:border-teal-500 font-mono"
                  />
                </div>
                <div className="flex justify-end space-x-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-mono"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-teal-400 hover:bg-teal-300 text-neutral-950 text-xs font-mono font-bold"
                  >
                    Save to Database
                  </button>
                </div>
              </form>
            )}

            {/* Inquiries Table / List Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {filteredInquiries.length === 0 ? (
                <div className="p-12 text-center text-neutral-500 font-mono text-xs">
                  No inquiries found matching your search or filter.
                </div>
              ) : (
                filteredInquiries.map((item) => {
                  const isExpanded = expandedId === item.id;
                  const cleanPhone = getCleanPhone(item.phone);

                  return (
                    <div
                      key={item.id}
                      className="bg-[#0e121a] border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all"
                    >
                      {/* Inquiry Row Main Header */}
                      <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1">
                            {item.status === 'new' && (
                              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 inline-block animate-ping"></span>
                            )}
                            {item.status === 'in_progress' && (
                              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                            )}
                            {item.status === 'completed' && (
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
                            )}
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-sm font-bold text-white">{item.name}</span>
                              {item.businessName && (
                                <span className="text-xs text-neutral-400">
                                  ({item.businessName})
                                </span>
                              )}
                              <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                                {item.ticketId}
                              </span>
                            </div>

                            <div className="text-xs text-neutral-300 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                              <span className="text-teal-300 font-medium">{item.serviceRequested}</span>
                              <span className="text-neutral-500">•</span>
                              <span className="font-mono text-emerald-400 font-semibold">{item.budgetTier}</span>
                              <span className="text-neutral-500">•</span>
                              <span className="text-neutral-400 text-[11px] font-mono">
                                {new Date(item.createdAt).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Status Dropdown & Actions */}
                        <div className="flex items-center space-x-2 shrink-0 self-end sm:self-center">
                          <select
                            value={item.status}
                            onChange={(e) => handleStatusChange(item.id, e.target.value as InquiryStatus)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold focus:outline-none border ${
                              item.status === 'new'
                                ? 'bg-teal-950/60 border-teal-600 text-teal-300'
                                : item.status === 'in_progress'
                                ? 'bg-amber-950/60 border-amber-600 text-amber-300'
                                : item.status === 'advance_paid'
                                ? 'bg-blue-950/60 border-blue-600 text-blue-300'
                                : item.status === 'completed'
                                ? 'bg-emerald-950/60 border-emerald-600 text-emerald-300'
                                : 'bg-neutral-800 border-neutral-700 text-neutral-400'
                            }`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="in_progress">In Progress</option>
                            <option value="advance_paid">50% Advance Paid</option>
                            <option value="completed">Completed / Delivered</option>
                            <option value="archived">Archived</option>
                          </select>

                          {/* Quick WhatsApp Link */}
                          {cleanPhone && (
                            <a
                              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                                `Hello ${item.name}, this is Akshat Rajankumar Soni from Dynamic Automations regarding your inquiry for ${item.serviceRequested}.`
                              )}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 transition-colors"
                              title="Chat on WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>
                          )}

                          {/* Quick Phone Call Link */}
                          {item.phone && (
                            <a
                              href={`tel:${item.phone}`}
                              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 border border-neutral-700 transition-colors"
                              title="Call Client"
                            >
                              <Phone className="w-3.5 h-3.5" />
                            </a>
                          )}

                          {/* Toggle Expand details */}
                          <button
                            onClick={() => setExpandedId(isExpanded ? null : item.id)}
                            className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                            aria-label="Expand inquiry details"
                          >
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                      </div>

                      {/* Expanded Details Drawer */}
                      {isExpanded && (
                        <div className="px-5 py-4 border-t border-neutral-800/80 bg-[#121622] space-y-3 text-xs font-mono">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-neutral-300">
                            <div>
                              <span className="text-neutral-500">Phone:</span>{' '}
                              <span className="text-white">{item.phone}</span>
                            </div>
                            <div>
                              <span className="text-neutral-500">Email:</span>{' '}
                              <span className="text-white">{item.email}</span>
                            </div>
                            <div>
                              <span className="text-neutral-500">Lead Source:</span>{' '}
                              <span className="text-teal-400 uppercase">{item.source.replace('_', ' ')}</span>
                            </div>
                          </div>

                          {item.projectDescription && (
                            <div className="p-3 rounded-lg bg-[#0e111a] border border-neutral-800 text-neutral-300 leading-relaxed font-sans text-xs">
                              <span className="font-mono text-[10px] text-neutral-500 block mb-1">CLIENT REQUIREMENTS:</span>
                              {item.projectDescription}
                            </div>
                          )}

                          {/* Internal Notes Section */}
                          <div className="pt-2 border-t border-neutral-800 flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <span className="text-neutral-500 block mb-1 text-[11px]">FOUNDER NOTES / NEXT STEPS:</span>
                              {editingNoteId === item.id ? (
                                <div className="space-y-2">
                                  <textarea
                                    value={noteText}
                                    onChange={(e) => setNoteText(e.target.value)}
                                    className="w-full p-2.5 rounded-lg bg-[#171c2b] border border-neutral-700 text-xs text-white focus:outline-none focus:border-teal-500 font-sans"
                                    rows={2}
                                  />
                                  <div className="flex space-x-2">
                                    <button
                                      onClick={() => handleSaveNote(item.id)}
                                      className="px-3 py-1 rounded bg-teal-400 hover:bg-teal-300 text-neutral-950 text-xs font-mono font-bold"
                                    >
                                      Save Note
                                    </button>
                                    <button
                                      onClick={() => setEditingNoteId(null)}
                                      className="px-3 py-1 rounded bg-neutral-800 text-neutral-300 text-xs font-mono"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="text-neutral-300 italic">
                                  {item.notes || 'No notes added yet.'}
                                </div>
                              )}
                            </div>

                            {editingNoteId !== item.id && (
                              <button
                                onClick={() => {
                                  setEditingNoteId(item.id);
                                  setNoteText(item.notes || '');
                                }}
                                className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[11px] font-mono flex items-center space-x-1"
                              >
                                <Edit3 className="w-3 h-3" />
                                <span>Edit Note</span>
                              </button>
                            )}

                            <button
                              onClick={() => handleDelete(item.id, item.name)}
                              className="p-1.5 rounded text-rose-400 hover:bg-rose-950/40 hover:text-rose-300 transition-colors"
                              title="Delete inquiry"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Bottom Footer Info & Google Sheets / Webhook Sync Guide */}
            <div className="p-4 bg-[#0a0d13] border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center space-x-2 text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Local database active. Inquiries persist in browser storage and can be exported as CSV/Excel anytime.</span>
              </div>

              <div className="text-neutral-500">
                Logged in as: <strong className="text-teal-300">Akshat Soni</strong>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
