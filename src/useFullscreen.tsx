import {
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
    if (active) {
      const currentNode = node.current as HTMLDivElement & {
        requestFullscreen(): Promise<void>;
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };
      if (currentNode) {
        if (currentNode.requestFullscreen) {
          currentNode.requestFullscreen().catch(error => Promise.resolve(error));
        } else if (currentNode.mozRequestFullScreen) { /* Firefox */
          currentNode.mozRequestFullScreen().catch(error => Promise.resolve(error));
        } else if (currentNode.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          currentNode.webkitRequestFullscreen().catch(error => Promise.resolve(error));
        } else if (currentNode.msRequestFullscreen) { /* IE/Edge */
          currentNode.msRequestFullscreen().catch(error => Promise.resolve(error));
        }
      }
    } else {
      const doc = document as Document & {
        exitFullscreen(): Promise<void>;
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };
      if (doc.exitFullscreen) {
        doc.exitFullscreen().catch(error => Promise.resolve(error));
      } else if (doc.mozCancelFullScreen) { /* Firefox */
        doc.mozCancelFullScreen().catch(error => Promise.resolve(error));
      } else if (doc.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        doc.webkitExitFullscreen().catch(error => Promise.resolve(error));
      } else if (doc.msExitFullscreen) { /* IE/Edge */
        doc.msExitFullscreen().catch(error => Promise.resolve(error));
      }
    }
  }, [active])

  const enter = () => {
    setActive(true);
  };

  const exit = () => {
    setActive(false);
  };

  return {
    active,
    enter,
    exit,
    node,
  };
}
