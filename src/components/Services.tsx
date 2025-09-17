import React, { useState, useEffect, useRef } from 'react';

// NOTE: In a real-world app, you would install and import these icons.
// For this single-file demonstration, we'll use inline SVGs to represent them.
const icons = {
  Globe: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  Layout: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  MonitorCheck: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <path d="M11 12l2 2 4-4" />
    </svg>
  ),
  Handshake: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M11 16h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2zM15 16h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2zM9 16h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2zM11 16l2 2" />
    </svg>
  ),
  Kanban: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 3v18M7 3v18" />
    </svg>
  ),
  Smartphone: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  ),
  Palette: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    </svg>
  ),
  ShoppingCart: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 12.87a2 2 0 0 0 2 1.63h9.72a2 2 0 0 0 2-1.63L23 6H6" />
    </svg>
  ),
  Lightbulb: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 14h.01" />
      <path d="M9 14h.01" />
      <path d="M12 17h.01" />
      <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
    </svg>
  ),
  Briefcase: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
      <path d="M8 7V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
    </svg>
  ),
  BarChart3: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 20V10" />
      <path d="M18 20V4" />
      <path d="M6 20v-4" />
    </svg>
  ),
  Code: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  CheckCircle: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-8.64" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  ),
  Crown: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 10s-1 1-1 3 2 4 4 4 4-2 4-4-1-3-1-3L9 6l-3-2V1" />
      <path d="M19 10s1 1 1 3-2 4-4 4-4-2-4-4 1-3 1-3l-2-5 3-2V1" />
      <path d="M12 16s-2 1-2 3" />
    </svg>
  ),
  PencilRuler: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z" />
      <path d="M15 5l-2 2" />
    </svg>
  ),
  Megaphone: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 11H8a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3z" />
      <path d="M22 17a3 3 0 0 0-3-3h-2" />
    </svg>
  ),
  TrendingUp: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="18 4 22 8 18 12" />
      <path d="M2 20L18 4" />
    </svg>
  ),
  Mail: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  ),
  Layers: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Target: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Tag: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 12l-1.41-1.41a2 2 0 0 0-2.83 0L14 12V3a1 1 0 0 0-1-1H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4l1.41 1.41c.78.78 2.05.78 2.83 0l1.41-1.41a2 2 0 0 0 0-2.83z" />
    </svg>
  ),
  Printer: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 9 12 12" />
      <path d="M12 12v5m0-5h-3" />
      <rect x="3" y="10" width="18" height="8" rx="2" ry="2" />
      <path d="M7 10v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" />
    </svg>
  ),
  Building: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="6" width="18" height="16" rx="2" ry="2" />
      <path d="M12 2v4" />
      <line x1="12" y1="12" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12" y2="16" />
      <line x1="8" y1="12" x2="8" y2="12" />
      <line x1="16" y1="12" x2="16" y2="12" />
    </svg>
  ),
  Link: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  Smile: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  ListChecks: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="10" y1="6" x2="20" y2="6" />
      <line x1="10" y1="12" x2="20" y2="12" />
      <line x1="10" y1="18" x2="20" y2="18" />
      <polyline points="3 6 5 8 7 6" />
      <polyline points="3 12 5 14 7 12" />
      <polyline points="3 18 5 20 7 18" />
    </svg>
  ),
  Award: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 18s2.5-2 4-2c1.5 0 2.5 2 4 2 1.5 0 2.5-2 4-2v-4c0-2.5-1.5-4-3-4s-2.5 1.5-4 1.5-2.5-1.5-4-1.5-2.5 1.5-4 1.5-3 1.5-3 4v4c1.5 0 2.5-2 4-2s2.5 2 4 2z" />
    </svg>
  ),
  Sparkles: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2L12 2" />
      <path d="M22 12L22 12" />
      <path d="M2 12L2 12" />
      <path d="M12 22L12 22" />
      <path d="M12.5 7.5L14 9l1.5-1.5L14 6l1.5-1.5L14 3l-1.5 1.5L11 3l1.5 1.5L12 6z" />
      <path d="M12.5 15.5L14 17l1.5-1.5L14 14l1.5-1.5L14 11l-1.5 1.5L11 11l1.5 1.5L12 14z" />
      <path d="M17.5 7.5L19 9l1.5-1.5L19 6l1.5-1.5L19 3l-1.5 1.5L16 3l1.5 1.5L17 6z" />
    </svg>
  ),
  Users: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <path d="M20 8v.5a2.5 2.5 0 0 1-5 0V8a2.5 2.5 0 0 1 5 0z" />
      <path d="M21 21v-2a4 4 0 0 0-4-4h-3.5" />
    </svg>
  ),
  BookA: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V6.5A2.5 2.5 0 0 0 17.5 4H4a2 2 0 0 0-2 2v13.5a2.5 2.5 0 0 0 2.5 2.5z" />
      <path d="M12 11h2l-2 5" />
      <path d="M10 16h4" />
    </svg>
  ),
  Shapes: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12l10 5 10-5" />
      <path d="M12 2l10 5 10 5" />
      <path d="M12 22l10-5 10-5" />
      <path d="M12 2v5" />
    </svg>
  ),
  ShieldCheck: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  MessageCircle: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 11.5a8.3 8.3 0 0 1-5.1 7.2L12 22l-3.9-3.3a8.3 8.3 0 0 1-5.1-7.2V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5z" />
    </svg>
  ),
  Mic: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="22" />
    </svg>
  ),
  Search: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  GalleryHorizontal: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 20V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" />
      <path d="M16 11.08V12a10 10 0 1 1-5.93-8.64" />
      <path d="M18 4h-2" />
    </svg>
  ),
  FolderOpen: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 19V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16h18a2 2 0 0 0 2-2z" />
      <path d="M22 19H2" />
    </svg>
  ),
  GalleryVerticalEnd: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 16h20" />
      <path d="M12 22l-6-6-6 6" />
      <path d="M22 16l-6 6-6-6" />
      <path d="M12 2l-6 6-6-6" />
      <path d="M22 8l-6-6-6 6" />
    </svg>
  ),
  Send: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22l-3-11-8-3z" />
    </svg>
  ),
  Zap: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  ChartPie: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10.1 2.3c.6.6 1.3.9 2 .9s1.4-.3 2-.9c.6-.6.9-1.3.9-2s-.3-1.4-.9-2c-.6-.6-1.3-.9-2-.9s-1.4.3-2 .9c-.6.6-.9 1.3-.9 2s.3 1.4.9 2z" />
      <path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2" />
    </svg>
  ),
  Trophy: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 9H4.5A2.5 2.5 0 0 1 2 6.5V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v.5a2.5 2.5 0 0 1-2.5 2.5H18" />
      <path d="M12 22v-8.3" />
      <path d="M12 14v-2" />
      <path d="M12 22a7 7 0 0 0-7-7h14a7 7 0 0 0-7 7z" />
    </svg>
  ),
  Headset: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 12s-4 0-4-2c0-2 4-2 4-4" />
      <path d="M2 12s4 0 4-2c0-2-4-2-4-4" />
      <path d="M16 16v-4" />
      <path d="M8 16v-4" />
      <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 5 5h0a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z" />
    </svg>
  ),
  Rocket: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.5 22.5l3-3m0-13a2.5 2.5 0 0 1 2.5-2.5h10a2.5 2.5 0 0 1 2.5 2.5V17a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 5.5 17v-13z" />
      <path d="M9.5 22.5l3-3" />
      <path d="M16.5 22.5l3-3" />
      <path d="M11 9l-4 4" />
      <path d="M16 8l-4 4" />
      <path d="M18 10l-4 4" />
    </svg>
  ),
};

const servicesData = [
  {
    category: "Development Services",
    icon: icons.Globe,
    description: "Building a robust online presence from the ground up, tailored to your business needs.",
    services: [
      {
        title: "Website Development",
        description: "Crafting custom, high-performance websites optimized for every device and user.",
        icon: icons.Layout,
      },
      {
        title: "Responsive Website",
        description: "Ensuring your site looks flawless and performs perfectly on any screen size.",
        icon: icons.MonitorCheck,
      },
      {
        title: "Web Maintenance",
        description: "Ensuring your website remains secure, updated, and performs flawlessly.",
        icon: icons.Handshake,
      },
      {
        title: "Landing Pages",
        description: "Designing high-converting, targeted landing pages to maximize your campaign ROI.",
        icon: icons.Kanban,
      },
      {
        title: "Mobile Application",
        description: "Developing native and cross-platform mobile apps for iOS and Android.",
        icon: icons.Smartphone,
      },
      {
        title: "UI/UX Designing",
        description: "Creating intuitive and elegant user interfaces for maximum engagement and conversion.",
        icon: icons.Palette,
      },
      {
        title: "E-commerce",
        description: "Building secure, scalable, and feature-rich online stores to boost your sales.",
        icon: icons.ShoppingCart,
      },
      {
        title: "Microsite",
        description: "Creating dedicated, single-purpose websites for special campaigns and events.",
        icon: icons.Lightbulb,
      },
      {
        title: "Digital Visiting Card",
        description: "Crafting interactive digital cards that showcase your professional brand with elegance.",
        icon: icons.Briefcase,
      },
      {
        title: "Custom QR Code",
        description: "Designing unique QR codes that align with your brand identity and campaigns.",
        icon: icons.BarChart3,
      },
      {
        title: "Custom Software",
        description: "Developing bespoke software solutions to streamline your business operations and unique needs.",
        icon: icons.Code,
      },
      {
        title: "E-commerce Platform Development",
        description: "Building a robust and scalable foundation for your online retail business.",
        icon: icons.ShoppingCart,
      },
      {
        title: "Quality Assurance & Testing",
        description: "Ensuring your digital products are flawless, bug-free, and ready for market.",
        icon: icons.CheckCircle,
      },
    ],
  },
  {
    category: "Premium Digital Branding",
    icon: icons.Crown,
    description: "Establishing an elite brand identity that resonates with your target audience and stands out from the competition.",
    services: [
      {
        title: "Elite Website Design & Development",
        description: "Architecting a visually stunning online presence that reflects your brand's luxury and exclusivity.",
        icon: icons.PencilRuler,
      },
      {
        title: "Exclusive Social Media Management",
        description: "Managing your social media presence with sophisticated content and engagement strategies.",
        icon: icons.Megaphone,
      },
      {
        title: "Decadent SEO Strategies",
        description: "Implementing top-tier SEO techniques to ensure your brand dominates search engine rankings.",
        icon: icons.TrendingUp,
      },
      {
        title: "Opulent PPC Advertising Campaigns",
        description: "Designing high-impact pay-per-click campaigns that deliver exceptional ROI.",
        icon: icons.BarChart3,
      },
      {
        title: "Majestic Email Marketing Automation",
        description: "Automating elegant and personalized email campaigns to nurture your customer relationships.",
        icon: icons.Mail,
      },
      {
        title: "Sumptuous Content Creation",
        description: "Producing captivating and high-quality content that tells your brand story.",
        icon: icons.Layers,
      },
      {
        title: "Tailored Landing Page",
        description: "Crafting bespoke landing pages that are perfectly optimized for your specific campaigns.",
        icon: icons.Kanban,
      },
      {
        title: "Royal Social Media Analytics",
        description: "Providing in-depth analysis to measure and optimize your social media performance.",
        icon: icons.BarChart3,
      },
      {
        title: "Mobile Responsive Elegance",
        description: "Designing for a seamless, luxurious user experience on all mobile devices.",
        icon: icons.Smartphone,
      },
      {
        title: "Regal Campaign Optimization",
        description: "Refining your campaigns for peak performance and unparalleled results.",
        icon: icons.Target,
      },
    ],
  },
  {
    category: "Product Launch & Development",
    icon: icons.Rocket,
    description: "From concept to market, we execute a seamless product launch that captivates your audience and drives early adoption.",
    services: [
      {
        title: "Exclusive Market Research & Analysis",
        description: "Conducting in-depth research to identify market gaps and opportunities for your product.",
        icon: icons.Target,
      },
      {
        title: "Strategic Launch Blueprint",
        description: "Developing a comprehensive plan that outlines every step of your product's journey to market.",
        icon: icons.Layout,
      },
      {
        title: "Premium Brand Positioning Strategies",
        description: "Defining a clear and compelling position for your product in a competitive market.",
        icon: icons.Crown,
      },
      {
        title: "Expert Pricing Consultation",
        description: "Providing strategic guidance to establish the optimal pricing for your product.",
        icon: icons.Tag,
      },
      {
        title: "Bespoke Promotional Materials",
        description: "Designing custom promotional assets that create excitement and anticipation.",
        icon: icons.Printer,
      },
      {
        title: "Exclusive Launch Events",
        description: "Planning and executing memorable launch events that generate buzz and media coverage.",
        icon: icons.Building,
      },
      {
        title: "Luxury Distribution Channels",
        description: "Establishing high-end distribution networks to get your product to the right audience.",
        icon: icons.Link,
      },
      {
        title: "Celebrity Collaborations",
        description: "Securing partnerships with influential figures to amplify your brand's reach.",
        icon: icons.Smile,
      },
      {
        title: "Milestone-Laden Timeline",
        description: "Creating a detailed timeline with key milestones for a smooth and successful launch.",
        icon: icons.ListChecks,
      },
      {
        title: "Post-Launch Assessment",
        description: "Analyzing launch performance and providing strategic recommendations for future growth.",
        icon: icons.BarChart3,
      },
    ],
  },
  {
    category: "Social Media Marketing",
    icon: icons.TrendingUp,
    description: "Creating and managing a powerful social media presence that drives engagement and growth.",
    services: [
      {
        title: "Bespoke Social Media Strategy Development",
        description: "Crafting a custom social media roadmap tailored to your unique brand goals.",
        icon: icons.Layers,
      },
      {
        title: "Opulent Content Creation & Management",
        description: "Producing and managing high-end content that captivates your audience.",
        icon: icons.Sparkles,
      },
      {
        title: "Royal Influencer Partnership Collaborations",
        description: "Connecting you with top-tier influencers for authentic brand endorsements.",
        icon: icons.Users,
      },
      {
        title: "Lavish Social Media Campaigns & Contests",
        description: "Designing engaging campaigns that create buzz and drive user participation.",
        icon: icons.Megaphone,
      },
      {
        title: "Exclusive Social Media Analytics & Reporting",
        description: "Providing detailed insights into your social performance to refine your strategy.",
        icon: icons.BarChart3,
      },
    ],
  },
  {
    category: "Elevated Branding Services",
    icon: icons.Award,
    description: "Crafting a sophisticated brand identity that speaks volumes and leaves a lasting impression.",
    services: [
      {
        title: "Luxury Logo Design",
        description: "Creating a timeless and elegant logo that serves as the centerpiece of your brand identity.",
        icon: icons.PencilRuler,
      },
      {
        title: "Opulent Brand Style Guide",
        description: "Developing a comprehensive guide to ensure consistent and luxurious brand representation.",
        icon: icons.BookA,
      },
      {
        title: "Sumptuous Brand Collateral",
        description: "Designing beautiful business cards, letterheads, and other branded materials.",
        icon: icons.Shapes,
      },
      {
        title: "Consistent Brand Representation",
        description: "Ensuring your brand's look and feel are consistent across all channels and platforms.",
        icon: icons.ShieldCheck,
      },
      {
        title: "Tailored Brand Messaging",
        description: "Crafting a unique brand voice and key messages that resonate with your audience.",
        icon: icons.MessageCircle,
      },
      {
        title: "Refined Brand Voice & Tone",
        description: "Defining a distinct tone of voice that communicates your brand's personality and values.",
        icon: icons.Mic,
      },
      {
        title: "Royal Tagline Creation",
        description: "Developing a memorable and powerful tagline that captures your brand's essence.",
        icon: icons.Lightbulb,
      },
      {
        title: "Exclusive Brand Storytelling",
        description: "Crafting a compelling narrative that connects with your audience on an emotional level.",
        icon: icons.Briefcase,
      },
      {
        title: "Regal Presentation Templates",
        description: "Designing sophisticated presentation templates for impactful and professional pitches.",
        icon: icons.Briefcase,
      },
      {
        title: "Aristocratic Brand Audit",
        description: "A deep dive into your brand's performance to identify opportunities for growth and refinement.",
        icon: icons.Search,
      },
      {
        title: "High-End Packaging Design",
        description: "Crafting exquisite packaging designs that elevate the unboxing experience for your customers.",
        icon: icons.GalleryHorizontal,
      },
      {
        title: "Luxury Stationery Design",
        description: "Creating elegant, custom stationery that makes a statement.",
        icon: icons.FolderOpen,
      },
      {
        title: "Exquisite Product Photography",
        description: "Showcasing your products with professional, high-end photography.",
        icon: icons.GalleryVerticalEnd,
      },
    ],
  },
  {
    category: "Print Media & Advertising",
    icon: icons.Printer,
    description: "Bringing your brand to life in the physical world with premium print and outdoor advertising.",
    services: [
      {
        title: "Luxury Print Collateral Design",
        description: "Designing high-quality brochures, flyers, and other materials that reflect your brand's elegance.",
        icon: icons.Layers,
      },
      {
        title: "High-End Magazine Advertisements",
        description: "Crafting visually stunning ads for top-tier publications to reach your desired audience.",
        icon: icons.Send,
      },
      {
        title: "Opulent Billboard & Outdoor Advertising",
        description: "Creating impactful and memorable outdoor campaigns that capture attention.",
        icon: icons.Building,
      },
      {
        title: "Aristocratic Direct Mail Campaigns",
        description: "Designing personalized, high-touch mailers for exclusive outreach.",
        icon: icons.Mail,
      },
      {
        title: "Bespoke Print Media Campaigns",
        description: "Executing custom print strategies to complement your digital presence.",
        icon: icons.Briefcase,
      },
    ],
  },
  {
    category: "Tailored Digital Work",
    icon: icons.Target,
    description: "Precision-driven digital services designed to optimize performance and achieve your specific goals.",
    services: [
      {
        title: "Exclusive Monthly Analytics Reports",
        description: "Providing detailed, custom reports to track your digital performance and inform strategy.",
        icon: icons.BarChart3,
      },
      {
        title: "Lavish A/B Testing",
        description: "Conducting sophisticated A/B tests to optimize every aspect of your user experience.",
        icon: icons.Kanban,
      },
      {
        title: "Luxurious Tracking & Attribution",
        description: "Implementing advanced tracking to precisely measure the effectiveness of your marketing efforts.",
        icon: icons.Zap,
      },
      {
        title: "Elite Customer Segmentation",
        description: "Dividing your audience into precise segments for highly-targeted marketing campaigns.",
        icon: icons.Users,
      },
      {
        title: "Bespoke Data Visualization",
        description: "Transforming complex data into beautiful, easy-to-understand visuals.",
        icon: icons.ChartPie,
      },
      {
        title: "Opulent Competitor Analysis",
        description: "A detailed analysis of your competitors to identify opportunities and stay ahead.",
        icon: icons.Search,
      },
      {
        title: "Extravagant Marketing Automation",
        description: "Setting up powerful automation flows to nurture leads and convert customers at scale.",
        icon: icons.Briefcase,
      },
      {
        title: "Decadent Social Listening",
        description: "Monitoring social media conversations to understand your brand's perception and public opinion.",
        icon: icons.MessageCircle,
      },
      {
        title: "Exclusive Content Strategy",
        description: "Crafting a content plan that positions your brand as an authority in your industry.",
        icon: icons.ListChecks,
      },
      {
        title: "Exclusive Training & Support",
        description: "Providing dedicated training and ongoing support to your team.",
        icon: icons.Handshake,
      },
      {
        title: "VIP Customer Engagement Programs",
        description: "Designing bespoke programs to foster deep connections and loyalty with your most valuable customers.",
        icon: icons.Award,
      },
      {
        title: "Luxury Loyalty Programs",
        description: "Creating rewarding loyalty programs that incentivize repeat business and brand advocacy.",
        icon: icons.Trophy,
      },
      {
        title: "High-Touch Customer Service Portals",
        description: "Building private, elegant portals to provide personalized and efficient customer support.",
        icon: icons.Headset,
      },
      {
        title: "Interactive Web Experiences",
        description: "Developing dynamic and interactive web elements that captivate and engage your audience.",
        icon: icons.Palette,
      },
    ],
  },
  {
    category: "Public Relations (PR)",
    icon: icons.Megaphone,
    description: "Shaping your brand's public image and building strong relationships with media and key stakeholders.",
    services: [
      {
        title: "VIP Media Relations & Press Releases",
        description: "Cultivating relationships with top-tier media to secure premium placements and press coverage.",
        icon: icons.Users,
      },
      {
        title: "Exquisite Event Publicity & Coverage",
        description: "Ensuring your events receive widespread media attention and are showcased beautifully.",
        icon: icons.Building,
      },
      {
        title: "Royal Brand Ambassador Programs",
        description: "Managing exclusive ambassador programs to promote your brand through trusted voices.",
        icon: icons.Crown,
      },
      {
        title: "Luxury Brand Partnership & Sponsorships",
        description: "Forging strategic partnerships with complementary luxury brands to expand your reach.",
        icon: icons.Handshake,
      },
      {
        title: "High-Profile Media Placements & Features",
        description: "Securing featured articles and mentions in prestigious publications to elevate your brand's status.",
        icon: icons.Send,
      },
    ],
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const ServiceDetail = ({ category }) => {
    return (
      <div className="p-8 mt-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-2xl hover:shadow-[0_12px_40px_rgba(0,255,200,0.25)] transition-all duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
          {category.services.map((service, serviceIndex) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={serviceIndex}
                className="p-4 rounded-xl bg-white/5 border backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] rounded-2xl hover:shadow-[0_12px_40px_rgba(0,255,200,0.25)] transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-2">
                  {ServiceIcon && (
                    <ServiceIcon
                      className={`h-6 w-6 text-cyan-300 transition-colors duration-300 ease-in-out group-hover:text-cyan-300`}
                    />
                  )}
                  <h4 className="font-semibold text-white group-hover:text-white/90 transition-colors duration-300 ease-in-out">
                    {service.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 ease-in-out">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const ServiceCategory = ({ category, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.2 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <div
        ref={ref}
        className={`group transition-all   duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 animate-pulse-glow' : 'opacity-0 translate-y-10 animate-pulse-glow'
        }`}
        onMouseEnter={() => setActiveCategory(category.category)}
        onMouseLeave={() => setActiveCategory(null)}
      >
        <div
          className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 transform backdrop-blur-md overflow-hidden
            ${
              activeCategory === category.category
                ? '.card-glass  shadow-[0_0_40px_rgba(255,255,255,0.05)] scale-105 border border-white/50'
                : '.card-glass hover:bg-white/10 shadow-lg hover:scale-[1.02] border border-white/20'
            }
          `}
        >
          <div className="flex items-center space-x-4 mb-4 ">
            {category.icon && (
              <category.icon
                className={`h-8 w-8 transition-colors  duration-300 ease-in-out
                  ${activeCategory === category.category ? 'text-cyan-300' : 'text-cyan-400'}
                `}
              />
            )}
            <h3
              className={`text-xl font-semibold transition-colors duration-300 ease-in-out
                ${activeCategory === category.category ? 'text-white' : 'text-gray-200'}
              `}
            >
              {category.category}
            </h3>
          </div>
          <p className={`text-sm text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-200`}>
            {category.description}
          </p>
        </div>
        {activeCategory === category.category && <ServiceDetail category={category} />}
      </div>
    );
  };

  return (
    <div className="bg-gradient-space text-white p-4 sm:p-8 min-h-screen">
   
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 leading-tight bg-clip-text text-transparent title-gradient">
          Technology We Provide
        </h1>
        <p className="text-sm sm:text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Explore our range of digital solutions, crafted to elevate your brand and exceed your goals.
        </p>
        <div className="flex flex-col gap-8">
          {servicesData.map((category, index) => (
            <ServiceCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
