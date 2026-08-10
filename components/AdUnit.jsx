'use client';

import { useEffect } from 'react';

export default function AdUnit() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-4171876147164529"
      data-ad-slot="8338386480"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
