"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export interface GlobeConfig {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: { lat: number; lng: number };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
}

export interface Arc {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Arc[];
}

export const World = ({ globeConfig, data }: WorldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [globeData, setGlobeData] = useState<any>(null);
  const [r, setR] = useState(0);

  useEffect(() => {
    // Load the globe.json data
    fetch('/globe.json')
      .then((response) => response.json())
      .then((data) => setGlobeData(data))
      .catch((error) => console.error('Error loading globe data:', error));
  }, []);

  useEffect(() => {
    // Start without waiting for globe data, as COBE has built-in world data

    let phi = 0;
    let width = 0;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    // Setup overlay canvas if it exists
    if (overlayCanvasRef.current) {
      overlayCanvasRef.current.width = width * 2;
      overlayCanvasRef.current.height = width * 2;
    }

    // Create markers from arc data
    const markers = data.flatMap((arc: Arc) => [
      {
        location: [arc.startLat, arc.startLng] as [number, number],
        size: 0.03,
      },
      {
        location: [arc.endLat, arc.endLng] as [number, number],
        size: 0.03,
      }
    ]);

    const regularMarkers = data.flatMap((arc: Arc) => [
      {
        location: [arc.startLat, arc.startLng] as [number, number],
        size: 0.02,
      },
      {
        location: [arc.endLat, arc.endLng] as [number, number],
        size: 0.02,
      }
    ]);

    // const highlightedMarkers = highlightedLocations.map(location => ({
    //   location: location as [number, number],
    //   size: 0.08,
    // }));

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 2,
      baseColor: [0.1, 0.2, 0.4], // Dark blue base like the image
      markerColor: [0, 0.8, 1], // Bright cyan markers
      glowColor: [0.2, 0.5, 1], // Blue glow
      markers: regularMarkers,
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += globeConfig.autoRotateSpeed || 0.005;
        }
        state.phi = phi + r;
        state.width = width * 2;
        state.height = width * 2;
        
        // No highlighted markers - just clear the overlay canvas
        if (overlayCanvasRef.current) {
          const overlayCtx = overlayCanvasRef.current.getContext('2d');
          if (overlayCtx) {
            overlayCtx.clearRect(0, 0, width * 2, width * 2);
          }
        }
      },
    });

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1";
      if (overlayCanvasRef.current) overlayCanvasRef.current.style.opacity = "1";
    });

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [globeConfig.autoRotateSpeed, r, data]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        aspectRatio: 1,
        margin: "auto",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          contain: "layout style size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
      <canvas
        ref={overlayCanvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseDown={(e) => {
          pointerInteracting.current = e.clientX;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onMouseUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseLeave={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onTouchStart={(e) => {
          if (e.touches[0]) {
            pointerInteracting.current = e.touches[0].clientX;
            if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onTouchEnd={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            setR(delta / 200);
            pointerInteracting.current = e.clientX; // Update the reference point
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            setR(delta / 200);
            pointerInteracting.current = e.clientX; // Update the reference point
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            setR(delta / 200);
            pointerInteracting.current = e.touches[0].clientX; // Update the reference point
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
};