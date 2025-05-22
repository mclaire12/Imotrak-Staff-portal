'use client';
import React, { useState } from 'react';
import { MapPin, FileText, StickyNote, CheckCircle, Trash2, Pencil, Eye } from 'lucide-react';

const ISSUE_TYPES = [
  'Mechanical Problem',
  'Flat Tire',
  'Accident',
  'Fuel Issue',
  'Electrical Issue',
  'Other',
];

const ISSUES = [
  { id: 'REQ-001', date: '2024-02-22', purpose: 'Field Trip', destination: 'Huye Campus', passengers: 15, issueType: 'Accident', location: 'Musanze' },
  { id: 'REQ-002', date: '2024-02-21', purpose: 'Conference', destination: 'Kigali Convention Center', passengers: 4, issueType: 'Delay', location: 'Kirehe' },
  { id: 'REQ-003', date: '2024-02-20', purpose: 'Research Visit', destination: 'Kigali Heights', passengers: 3, issueType: 'Fuel', location: 'Nyagatare' },
];

function issueBadge(type: string) {
  const base = 'px-3 py-1 rounded-full text-xs font-semibold';
  switch (type) {
    case 'Accident':
      return <span className={base + ' bg-yellow-300 text-gray-900'}>Accident</span>;
    case 'Delay':
      return <span className={base + ' bg-green-400 text-white'}>Delay</span>;
    case 'Fuel':
      return <span className={base + ' bg-red-400 text-white'}>Fuel</span>;
    default:
      return <span className={base + ' bg-gray-200 text-gray-700'}>{type}</span>;
  }
}

function exportCSV(data: any[]) {
  const header = ['Request ID', 'Date', 'Purpose', 'Destination', 'Passengers', 'Issue Type', 'Location When Issue Occurred'];
  const rows = data.map(issue => [issue.id, issue.date, issue.purpose, issue.destination, issue.passengers, issue.issueType, issue.location]);
  const csv = [header, ...rows].map(row => row.map(String).map(cell => '"' + cell.replace(/"/g, '""') + '"').join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'movement-issues.csv';
  a.click();
  URL.revokeObjectURL(url);
}

export default function IssueReportPage() {
  const [issueType, setIssueType] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('');
  const [time, setTime] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  const filtered = ISSUES.filter(i => !status || i.issueType === status);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e6f2fa] via-gray-50 to-[#e6f2fa] relative overflow-x-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10 select-none" aria-hidden="true">
        <svg width="100%" height="100%" className="w-full h-full">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="2" fill="#0872B3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-8 flex items-center gap-2" style={{ color: '#0872B3' }}>
            <FileText className="w-7 h-7" style={{ color: '#0872B3' }} /> Report Movement Issue
          </h1>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-[#b3d6ec] p-8 space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#0872B3' }}>Issue Type</label>
                <select
                  value={issueType}
                  onChange={e => setIssueType(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 pl-11 text-sm focus:outline-none focus:ring-2 focus:ring-[#0872B3] bg-white transition-shadow focus:shadow-lg appearance-none"
                  required
                >
                  <option value="" disabled>Select issue type</option>
                  {ISSUE_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <FileText className="absolute left-3 top-10" style={{ color: '#b3d6ec' }}  />
              </div>
              <div className="relative">
                <label className="block text-sm font-semibold mb-2" style={{ color: '#0872B3' }}>Location When Issue Occurred</label>
                <input
                  type="text"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  placeholder="Where the vehicle was when the issue occurred (District, sector, village and street code)"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 pl-11 text-sm focus:outline-none focus:ring-2 focus:ring-[#0872B3] bg-white transition-shadow focus:shadow-lg"
                />
                <MapPin className="absolute left-3 top-10" style={{ color: '#b3d6ec' }} />
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-semibold mb-2" style={{ color: '#0872B3' }}>Notes</label>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Enter any additional information about the trip or vehicle condition"
                rows={6}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 pl-11 text-sm focus:outline-none focus:ring-2 focus:ring-[#0872B3] bg-white resize-none transition-shadow focus:shadow-lg"
              />
              <StickyNote className="absolute left-3 top-10" style={{ color: '#b3d6ec' }} />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-10 py-3 rounded-xl font-bold text-lg shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#0872B3]"
                style={{ backgroundColor: '#0872B3', color: 'white' }}
              >
                <CheckCircle className="w-6 h-6" style={{ color: 'white' }} /> Submit Issue
              </button>
            </div>
            {submitted && (
              <div className="flex items-center gap-2 justify-center text-green-600 font-semibold mt-2 animate-fade-in">
                <CheckCircle className="w-5 h-5" /> Issue submitted successfully!
              </div>
            )}
          </form>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in { animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both; }
      `}</style>
    </main>
  );
}
