import { useEffect } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;

export function useKeyboard(keyMap: Record<string, KeyHandler>) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Don't trigger shortcuts when typing in inputs
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      const key = [
        event.ctrlKey || event.metaKey ? 'mod' : '',
        event.shiftKey ? 'shift' : '',
        event.key.toLowerCase(),
      ]
        .filter(Boolean)
        .join('+');

      if (keyMap[key]) {
        event.preventDefault();
        keyMap[key](event);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyMap]);
}
