'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/providers/LanguageProvider';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant={language === 'hi' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('hi')}
      >
        हि
      </Button>
    </div>
  );
}