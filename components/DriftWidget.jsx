'use client';

import { useEffect } from 'react';

export default function DriftWidget({
  appId = 'tmumngnvac5d', // replace with your real ID if different
  userId,
  attributes,
  eventHandlers,
  style,
}) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only add the snippet if drift isn't already present
    if (!window.drift) {
      (function () {
        // Drift snippet (same logic as original)
        var t = (window.driftt = window.drift = window.driftt || []);
        if (!t.init) {
          if (t.invoked) {
            console.error('Drift snippet included twice.');
            return;
          }
          t.invoked = true;
          t.methods = [
            'identify',
            'config',
            'track',
            'reset',
            'debug',
            'show',
            'ping',
            'page',
            'hide',
            'off',
            'on',
            'setUserAttributes',
          ];
          t.factory = function (e) {
            return function () {
              var n = Array.prototype.slice.call(arguments);
              n.unshift(e);
              t.push(n);
              return t;
            };
          };
          t.methods.forEach(function (e) {
            t[e] = t.factory(e);
          });
          t.load = function (id) {
            var e = 3e5;
            var n = Math.ceil(new Date().getTime() / e) * e;
            var o = document.createElement('script');
            o.type = 'text/javascript';
            o.async = true;
            o.crossOrigin = 'anonymous';
            o.src = 'https://js.driftt.com/include/' + n + '/' + id + '.js';
            var i = document.getElementsByTagName('script')[0];
            i.parentNode.insertBefore(o, i);
          };
        }
      })();

      window.drift.SNIPPET_VERSION = '0.3.1';
      window.drift.load(appId);
    }

    // Identify or set attributes
    if (userId) {
      try {
        window.drift.identify(userId, attributes || {});
      } catch (e) {}
    } else if (attributes) {
      try {
        window.drift.on('ready', () => {
          window.drift.api.setUserAttributes(attributes);
        });
      } catch (e) {}
    }

    // Attach event handlers if any
    if (eventHandlers && Array.isArray(eventHandlers)) {
      eventHandlers.forEach(({ event, handler }) => {
        try {
          window.drift.on(event, handler);
        } catch (e) {}
      });
    }

    // Custom CSS rules for the drift iframe (optional)
    let styleTag;
    if (style) {
      styleTag = document.createElement('style');
      const styleString = Object.entries(style)
        .map(([k, v]) => `${k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())}: ${v} !important;`)
        .join(' ');
      styleTag.innerHTML = `iframe#drift-widget { ${styleString} }`;
      document.head.appendChild(styleTag);
    }

    // cleanup
    return () => {
      try {
        if (styleTag) document.head.removeChild(styleTag);
        if (window.drift && window.drift.reset) window.drift.reset();
      } catch (e) {}
    };
  }, [
    appId,
    userId,
    // stringify objects so changes are detected if you ever pass them dynamically
    attributes ? JSON.stringify(attributes) : null,
    eventHandlers ? JSON.stringify(eventHandlers) : null,
    style ? JSON.stringify(style) : null,
  ]);

  return null; // no visible UI — Drift adds its own chat bubble
}
