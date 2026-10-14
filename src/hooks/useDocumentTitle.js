import { useEffect } from 'react';

const BASE = 'Aditya Naulakha';

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${BASE}` : `${BASE} — Software Developer`;
    return () => {
      document.title = `${BASE} — Software Developer`;
    };
  }, [title]);
}
