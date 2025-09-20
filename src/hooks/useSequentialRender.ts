import { useEffect, useState } from 'react';

interface UseSequentialRenderOptions {
  delay?: number;
  startImmediately?: boolean;
}

export function useSequentialRender<T>(
  items: T[], 
  options: UseSequentialRenderOptions = {}
) {
  const { delay = 500, startImmediately = true } = options;
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!startImmediately) return;

    let currentIndex = 0;
    const timers: NodeJS.Timeout[] = [];

    const addNextItem = () => {
      if (currentIndex < items.length) {
        setVisibleItems(prev => [...prev, items[currentIndex]]);
        currentIndex++;

        if (currentIndex < items.length) {
          const timer = setTimeout(addNextItem, delay);
          timers.push(timer);
        } else {
          setIsComplete(true);
        }
      }
    };

    // Start the sequence
    addNextItem();

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [items, delay, startImmediately]);

  const reset = () => {
    setVisibleItems([]);
    setIsComplete(false);
  };

  return {
    visibleItems,
    isComplete,
    reset
  };
}
