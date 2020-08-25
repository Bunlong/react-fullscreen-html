import React, { useEffect } from 'react';
import { UseFullscreenProps } from './useFullscreen';

export interface FullscreenProps {
  handle: UseFullscreenProps;
  onChange?: (state: boolean, handle: UseFullscreenProps) => void;
}

export const Fullscreen: React.FC<FullscreenProps> = ({
  handle,
  onChange,
  children
}) => {
  const classNames = ['fullscreen']
  if (handle.active) {
    classNames.push('fullscreen-enabled')
  }

  useEffect(() => {
    if (onChange) {
      onChange(handle.active, handle)
    }
  }, [handle.active])

  return (
    <div
      className={classNames.join(' ')}
      ref={handle.node}
      style={handle.active ? { height: '100%', width: '100%' } : undefined}
    >
      {children}
    </div>
  )
}
