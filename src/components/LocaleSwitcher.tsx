'use client';
import { useEffect } from 'react';

import i18n from '@/locales/i18n';


export default function LocaleSwitcher() {
  useEffect(() => {
    i18n.init();
  }, []);
  return (''
  )
}