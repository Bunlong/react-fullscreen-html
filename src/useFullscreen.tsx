import {
  useCallback,
  useState,
  useRef,
  useEffect,
} from 'react';

export interface UseFullscreenProps {
  active: boolean;
  enter: () => void;
  exit: () => void;
  node: React.MutableRefObject<HTMLDivElement | null>;
}

export function useFullscreen(): UseFullscreenProps {
  const [active, setActive] = useState<boolean>(false)
  const node = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const currentNode = node.current;
    if (currentNode) {
      const handleChange = () => {
        setActive(true);
      }
      currentNode.addEventListener('fullscreenchange', handleChange)
      return () => currentNode.removeEventListener('fullscreenchange', handleChange)
    }
    return undefined;
  }, [])

  const enter = useCallback(() => {
    const currentNode = node.current;
    if (currentNode) {
      currentNode.requestFullscreen()
    }
  }, [])

  const exit = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }, [])

  return {
    active,
    enter,
    exit,
    node,
  }
}
