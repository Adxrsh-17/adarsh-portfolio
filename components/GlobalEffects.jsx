'use client';
import { useEffect } from 'react';

// Keeping scroll reveal intersection observers.

export default function GlobalEffects() {
  useEffect(() => {
    // ── Scroll reveal ────────────────────────────────────────────
    const revObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('reveal-visible');
          revObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));

    return () => {
      revObs.disconnect();
    };
  }, []);

  return null;
}
