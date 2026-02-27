/**
 * Tracking Service
 * Sends booking click events to Google Apps Script
 */

// Placeholder URL - will be updated after deployment
const TRACKING_URL = 'YOUR_DEPLOYED_APPS_SCRIPT_URL';

interface TrackingData {
    event?: string;
    action?: string;
    lang?: 'ua' | 'en';
    page?: string;
    context?: string;
}

export const trackBookingClick = async (data: TrackingData = {}) => {
    if (TRACKING_URL === 'YOUR_DEPLOYED_APPS_SCRIPT_URL') {
        console.warn('Tracking URL is not set. Event ignored:', data);
        return;
    }

    try {
        const payload = {
            event: 'booking_click',
            action: 'click',
            lang: 'ua',
            page: window.location.pathname,
            ...data
        };

        // Use sendBeacon for more reliable tracking on navigation
        if (navigator.sendBeacon) {
            const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
            navigator.sendBeacon(TRACKING_URL, blob);
        } else {
            await fetch(TRACKING_URL, {
                method: 'POST',
                mode: 'no-cors', // Apps Script requires no-cors if not handling OPTIONS
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
                keepalive: true,
            });
        }
    } catch (error) {
        console.error('Failed to send tracking event:', error);
    }
};
