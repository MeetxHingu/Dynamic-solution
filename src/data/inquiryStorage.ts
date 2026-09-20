import { Inquiry, InquiryStatus } from '../types';

const STORAGE_KEY = 'dynamic_automations_inquiries_db';

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-101',
    ticketId: 'DA-849201',
    name: 'Santram Hospital (Admin)',
    phone: '+91 94281 92040',
    email: 'admin@santramhospital.org',
    businessName: 'Santram Hospital',
    serviceRequested: 'Hospital Web Portal & OPD Doctor Schedule',
    budgetTier: '₹18,000',
    timeline: '10 Days (Delivered & Verified)',
    projectDescription: 'Full responsive website with doctor specialty tables, visiting hours, emergency contact lines, and Google Maps location.',
    source: 'manual_entry',
    status: 'completed',
    notes: 'Invoices INV-2026-02 & INV-2026-05 paid in full. AMC contract active for 2026-2027.',
    createdAt: '2026-01-15T10:30:00.000Z',
    updatedAt: '2026-02-01T14:20:00.000Z'
  },
  {
    id: 'inq-102',
    ticketId: 'DA-739210',
    name: 'Kapdadiya Priyanka',
    phone: '+91 98982 11923',
    email: 'priyanka.k@gmail.com',
    businessName: 'Customer Inquiries & Retail',
    serviceRequested: 'WhatsApp Business Automated Response Bot',
    budgetTier: '₹1,500',
    timeline: '24 Hours',
    projectDescription: 'Automated greeting message, interactive services menu, and real-time logging into Google Sheets.',
    source: 'contact_modal',
    status: 'completed',
    notes: 'INV-2026-01 paid via UPI. Delivered bot scripts and connected Google Sheet webhook.',
    createdAt: '2026-01-28T16:15:00.000Z',
    updatedAt: '2026-01-29T18:00:00.000Z'
  },
  {
    id: 'inq-103',
    ticketId: 'DA-610482',
    name: 'Bhargav Patel',
    phone: '+1 647 820 4912',
    email: 'bhargav.canada@outlook.com',
    businessName: 'Remote Client (Canada)',
    serviceRequested: 'Website Mobile Layout & Form Bug Fix',
    budgetTier: '$50 (~₹4,166)',
    timeline: '24–48 Hours',
    projectDescription: 'Fix broken CSS grid viewport collapsing on iPhone 15 and fix contact form submit handler.',
    source: 'contact_modal',
    status: 'completed',
    notes: 'INV-2026-03 settled via Wise / direct transfer. Git commit merged successfully.',
    createdAt: '2026-02-12T20:45:00.000Z',
    updatedAt: '2026-02-13T22:30:00.000Z'
  },
  {
    id: 'inq-104',
    ticketId: 'DA-902315',
    name: 'Dr. Rajesh Shah',
    phone: '+91 98250 81234',
    email: 'dr.shah.pediatrics@gmail.com',
    businessName: 'Anand Children & Pediatric Clinic',
    serviceRequested: 'Doctor Appointment Booking & Clinic Showcase',
    budgetTier: '₹12,000',
    timeline: 'Within 1 Week',
    projectDescription: 'Seeking clean clinic website with WhatsApp appointment integration and patient education section.',
    source: 'estimator',
    status: 'in_progress',
    notes: 'Sent initial wireframe and quotation. Meeting scheduled at clinic on Sunday 11 AM.',
    createdAt: '2026-03-02T11:00:00.000Z',
    updatedAt: '2026-03-04T09:15:00.000Z'
  },
  {
    id: 'inq-105',
    ticketId: 'DA-551928',
    name: 'Sonalben Parekh',
    phone: '+91 94270 45891',
    email: 'parekh.textiles@rediffmail.com',
    businessName: 'Parekh Sarees & Textiles (Umreth)',
    serviceRequested: 'WhatsApp Catalog & Local Google Maps Listing',
    budgetTier: '₹4,500',
    timeline: 'Immediate (Within 48 hours)',
    projectDescription: 'Wants festival catalog online so customers can browse sarees and order directly via WhatsApp.',
    source: 'seo_audit',
    status: 'new',
    notes: 'Ran free website audit. Current site has no mobile responsiveness. Follow up today.',
    createdAt: '2026-03-18T14:30:00.000Z',
    updatedAt: '2026-03-18T14:30:00.000Z'
  }
];

export const getStoredInquiries = (): Inquiry[] => {
  if (typeof window === 'undefined') return INITIAL_INQUIRIES;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INQUIRIES));
      return INITIAL_INQUIRIES;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load inquiries from localStorage:', err);
    return INITIAL_INQUIRIES;
  }
};

export const saveInquiry = (inquiry: Omit<Inquiry, 'id' | 'ticketId' | 'createdAt' | 'status'> & Partial<Inquiry>): Inquiry => {
  const current = getStoredInquiries();
  const newTicketId = inquiry.ticketId || `DA-${Math.floor(100000 + Math.random() * 900000)}`;
  
  const newEntry: Inquiry = {
    id: `inq-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    ticketId: newTicketId,
    name: inquiry.name,
    phone: inquiry.phone,
    email: inquiry.email,
    businessName: inquiry.businessName || '',
    serviceRequested: inquiry.serviceRequested,
    budgetTier: inquiry.budgetTier,
    timeline: inquiry.timeline,
    projectDescription: inquiry.projectDescription || '',
    source: inquiry.source || 'contact_modal',
    status: inquiry.status || 'new',
    notes: inquiry.notes || 'Submitted via website.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const updated = [newEntry, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('dynamic_automations_inquiries_updated'));
  } catch (e) {
    console.error('Error writing inquiry:', e);
  }

  return newEntry;
};

export const updateInquiryStatus = (id: string, status: InquiryStatus, notes?: string): boolean => {
  const current = getStoredInquiries();
  const updated = current.map(item => {
    if (item.id === id) {
      return {
        ...item,
        status,
        notes: notes !== undefined ? notes : item.notes,
        updatedAt: new Date().toISOString()
      };
    }
    return item;
  });

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('dynamic_automations_inquiries_updated'));
    return true;
  } catch (e) {
    console.error('Error updating inquiry status:', e);
    return false;
  }
};

export const deleteInquiry = (id: string): boolean => {
  const current = getStoredInquiries();
  const updated = current.filter(item => item.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('dynamic_automations_inquiries_updated'));
    return true;
  } catch (e) {
    console.error('Error deleting inquiry:', e);
    return false;
  }
};

export const exportInquiriesToCsv = (): void => {
  const inquiries = getStoredInquiries();
  const headers = ['Ticket ID', 'Date', 'Client Name', 'Phone', 'Email', 'Business', 'Service', 'Budget', 'Timeline', 'Status', 'Source', 'Notes'];
  
  const rows = inquiries.map(i => [
    `"${i.ticketId}"`,
    `"${new Date(i.createdAt).toLocaleDateString('en-IN')}"`,
    `"${i.name.replace(/"/g, '""')}"`,
    `"${i.phone}"`,
    `"${i.email}"`,
    `"${(i.businessName || '').replace(/"/g, '""')}"`,
    `"${i.serviceRequested.replace(/"/g, '""')}"`,
    `"${i.budgetTier}"`,
    `"${i.timeline}"`,
    `"${i.status}"`,
    `"${i.source}"`,
    `"${(i.notes || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `dynamic_automations_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
