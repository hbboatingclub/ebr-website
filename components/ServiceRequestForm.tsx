'use client';

import { useEffect, useRef, useState } from 'react';
import { trackServiceRequestLead } from '@/lib/analytics';
import {
  isServiceRequestServerFailure,
  mapServiceRequestApiError,
} from '@/lib/contactForm';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/siteContact';

const SERVICE_OPTIONS = [
  'Controller Repair / Rebuild',
  'Motor Repair',
  'Battery Upgrade / Replacement',
  'Charger Upgrade',
  'Electrical Diagnostics',
  'Throttle Repair',
  'Steering / Helm Repair',
  'Duffy Boat Restoration',
  'Fiberglass / Gelcoat Repair',
  'Bottom Paint',
  'Buff & Wax',
  'Cushions & Upholstery',
  'Surrey Top / Isinglass',
  'Harbor Care Program',
  'Boat Transport',
  'Other / Not Sure',
];

const FALLBACK_ERROR = `Something went wrong. Please call us directly at ${SITE_PHONE_DISPLAY}.`;

interface FormProps {
  compact?: boolean;
  luxury?: boolean;
}

function validateClientForm(data: {
  name: string;
  phone: string;
  email: string;
  serviceNeeded: string;
}): string | null {
  if (!data.name.trim()) {
    return 'Please enter your name.';
  }

  if (!data.phone.trim() && !data.email.trim()) {
    return 'Please enter a phone number or email address.';
  }

  if (!data.serviceNeeded.trim()) {
    return 'Please select a service.';
  }

  return null;
}

function getUserFacingApiError(status: number, apiError: string): string {
  const mapped = mapServiceRequestApiError(apiError);
  if (mapped) {
    return mapped;
  }

  if (status >= 500 || isServiceRequestServerFailure(apiError)) {
    return FALLBACK_ERROR;
  }

  if (status === 400 && apiError.trim()) {
    return apiError;
  }

  return FALLBACK_ERROR;
}

export default function ServiceRequestForm({ compact = false, luxury = false }: FormProps) {
  const labelClass = luxury ? 'form-label-luxury' : 'form-label';
  const inputClass = luxury ? 'form-input-luxury' : 'form-input';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    boatType: '',
    boatLocation: '',
    serviceNeeded: '',
    description: '',
    contactPreference: 'phone',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const leadTrackedRef = useRef(false);

  useEffect(() => {
    if (!submitted || leadTrackedRef.current) {
      return;
    }

    leadTrackedRef.current = true;
    trackServiceRequestLead();
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (e.target instanceof HTMLSelectElement || e.target instanceof HTMLInputElement) {
      e.target.setCustomValidity('');
    }
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const clientError = validateClientForm(formData);
    if (clientError) {
      setError(clientError);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        let apiError = '';
        try {
          const payload = (await response.json()) as { error?: string };
          apiError = payload.error?.trim() ?? '';
        } catch {
          // Non-JSON error response — use fallback below.
        }
        setError(getUserFacingApiError(response.status, apiError));
        return;
      }

      setSubmitted(true);
    } catch {
      setError(FALLBACK_ERROR);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-teal-DEFAULT/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-teal-DEFAULT" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-navy-DEFAULT mb-2">Request Received</h3>
        <p className="text-gray-600">We&apos;ll reach out within 24 hours. For urgent repairs, call us directly.</p>
        <a href={SITE_PHONE_TEL} className="btn-primary mt-6 inline-flex">
          Call Now: {SITE_PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={luxury ? 'space-y-4' : 'space-y-5'}>
      <div className={`grid ${luxury ? 'gap-4' : 'gap-5'} ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
        {/* Name */}
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass}>Phone *</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder={SITE_PHONE_DISPLAY}
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>

        {/* Boat Type */}
        <div>
          <label className={labelClass}>Boat Type / Model</label>
          <input
            type="text"
            name="boatType"
            value={formData.boatType}
            onChange={handleChange}
            placeholder="e.g. Duffy 21 Electric Cruiser"
            className={inputClass}
          />
        </div>

        {/* Boat Location */}
        <div>
          <label className={labelClass}>Boat Location / Marina</label>
          <input
            type="text"
            name="boatLocation"
            value={formData.boatLocation}
            onChange={handleChange}
            placeholder="e.g. Newport Harbor, Slip 42"
            className={inputClass}
          />
        </div>

        {/* Service Needed */}
        <div>
          <label className={labelClass}>Service Needed *</label>
          <select
            name="serviceNeeded"
            required
            value={formData.serviceNeeded}
            onChange={handleChange}
            onInvalid={(e) => {
              e.currentTarget.setCustomValidity('Please select a service.');
            }}
            className={inputClass}
          >
            <option value="">Select a service...</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Description */}
      <div>
        <label className={labelClass}>Describe the Issue or Project</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={luxury ? 3 : 4}
          placeholder="Tell us what's going on with your boat. The more detail, the better."
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Contact Preference */}
      <div>
        <label className={labelClass}>Preferred Contact Method</label>
        <div className="flex gap-4 mt-2">
          {['phone', 'text', 'email'].map((pref) => (
            <label key={pref} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="contactPreference"
                value={pref}
                checked={formData.contactPreference === pref}
                onChange={handleChange}
                className="accent-teal-DEFAULT"
              />
              <span className={`text-sm capitalize ${luxury ? 'form-luxury-option' : 'text-gray-700'}`}>{pref}</span>
            </label>
          ))}
        </div>
      </div>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-3">{error}</p>
      )}

      <div className={`flex flex-col sm:flex-row gap-3 pt-2 ${luxury ? 'form-luxury-actions' : ''}`}>
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary flex-1 justify-center text-sm disabled:opacity-60"
        >
          {submitting ? 'Sending...' : 'Request Service'}
        </button>
        <a href={SITE_PHONE_TEL} className="btn-outline flex-1 justify-center text-sm">
          📞 Call / Text Now
        </a>
      </div>

      {!luxury && (
        <style jsx>{`
          .form-label {
            display: block;
            font-family: var(--font-mono);
            font-size: 0.6875rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #6b7280;
            margin-bottom: 0.375rem;
          }
          .form-input {
            width: 100%;
            padding: 0.625rem 0.875rem;
            background: white;
            border: 1px solid #e5e7eb;
            font-family: var(--font-body);
            font-size: 0.9375rem;
            color: #111827;
            outline: none;
            transition: border-color 0.15s;
          }
          .form-input:focus {
            border-color: #53D1C8;
            box-shadow: 0 0 0 3px rgba(83,209,200,0.1);
          }
        `}</style>
      )}
    </form>
  );
}
