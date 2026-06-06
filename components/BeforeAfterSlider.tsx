'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeObjectPosition = 'center center',
  afterObjectPosition = 'center center',
}: Props) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const setPositionFromClientX = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const stopDragging = useCallback(() => {
    draggingRef.current = false;
  }, []);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      if (!draggingRef.current) return;
      setPositionFromClientX(event.clientX);
    };

    const onPointerUp = () => {
      stopDragging();
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [setPositionFromClientX, stopDragging]);

  const nudge = (delta: number) => {
    setPosition((current) => Math.min(100, Math.max(0, current + delta)));
  };

  return (
    <div
      ref={containerRef}
      className="projects-before-after"
      onPointerDown={(event) => {
        if ((event.target as HTMLElement).closest('.projects-before-after__handle')) return;
        draggingRef.current = true;
        setPositionFromClientX(event.clientX);
      }}
    >
      <div className="projects-before-after__layer projects-before-after__layer--after">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="projects-before-after__photo object-cover"
          style={{ objectPosition: afterObjectPosition }}
          sizes="(max-width: 768px) 100vw, 1280px"
          quality={100}
          priority
        />
      </div>

      <div
        className="projects-before-after__layer projects-before-after__layer--before"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="projects-before-after__photo object-cover"
          style={{ objectPosition: beforeObjectPosition }}
          sizes="(max-width: 768px) 100vw, 1280px"
          quality={100}
          priority
        />
      </div>

      <div
        className="projects-before-after__handle"
        style={{ left: `${position}%` }}
        aria-hidden
      >
        <span className="projects-before-after__handle-line" />
        <span className="projects-before-after__handle-grip">
          <span />
          <span />
        </span>
      </div>

      <button
        type="button"
        className="projects-before-after__slider-control"
        role="slider"
        aria-label="Compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        style={{ left: `${position}%` }}
        onPointerDown={(event) => {
          event.stopPropagation();
          draggingRef.current = true;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (!draggingRef.current) return;
          setPositionFromClientX(event.clientX);
        }}
        onPointerUp={(event) => {
          draggingRef.current = false;
          event.currentTarget.releasePointerCapture(event.pointerId);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            nudge(-4);
          }
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            nudge(4);
          }
          if (event.key === 'Home') {
            event.preventDefault();
            setPosition(0);
          }
          if (event.key === 'End') {
            event.preventDefault();
            setPosition(100);
          }
        }}
      />

      <span className="projects-before-after__label projects-before-after__label--before">Before</span>
      <span className="projects-before-after__label projects-before-after__label--after">After</span>
    </div>
  );
}
