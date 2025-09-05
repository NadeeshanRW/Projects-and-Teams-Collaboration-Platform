"use client";

import React from "react";
import { Loader } from "lucide-react";

const LoadingPage: React.FC = () => {
  const styles = {
    loaderContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "300px",
      height: "300px",
      background: "rgba(255, 255, 255, 0.95)",
      borderRadius: "24px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
    particleContainer: {
      position: "relative" as const,
      width: "200px",
      height: "200px",
    },
  };

  return (
    <>
      <style>{`
        @keyframes floatingUp {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
          50% {
            transform: translateY(-40px) scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-25px) scale(1.1);
            opacity: 0.9;
          }
        }

        @keyframes centerPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
          }
        }

        @keyframes progressBar {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @media (max-width: 768px) {
          .loader-container {
            width: 250px !important;
            height: 250px !important;
          }
        }
      `}</style>

      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen flex items-center justify-center">
        <div className="loader-container" style={styles.loaderContainer}>
          <div style={styles.particleContainer}>
            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`particle-${i}`}
                style={{
                  position: "absolute" as const,
                  width: `${8 + (i % 3) * 4}px`,
                  height: `${8 + (i % 3) * 4}px`,
                  borderRadius: "50%",
                  background: `linear-gradient(45deg, #3b82f6, #8b5cf6)`,
                  top: `${15 + (i % 4) * 20}%`,
                  left: `${10 + (i % 5) * 18}%`,
                  animation: `floatingUp 4s infinite ease-in-out`,
                  animationDelay: `${i * 0.3}s`,
                  boxShadow: "0 0 12px rgba(59, 130, 246, 0.6)",
                }}
              />
            ))}

            {/* Center Loading Indicator */}
            <div
              style={{
                position: "absolute" as const,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                color: "white",
                fontWeight: "bold",
                animation: "centerPulse 2s infinite ease-in-out",
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
            >
              {/* Lucide Loader in center */}
              <Loader className="size-6 animate-spin text-white mb-2" />

              <div style={{ fontSize: "0.9rem", marginBottom: "4px" }}>
                Loading
              </div>

              {/* Progress bar */}
              <div
                style={{
                  width: "50px",
                  height: "3px",
                  background: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  position: "relative" as const,
                }}
              >
                <div
                  style={{
                    position: "absolute" as const,
                    top: 0,
                    left: 0,
                    width: "50%",
                    height: "100%",
                    background: "white",
                    borderRadius: "2px",
                    animation: "progressBar 2s infinite ease-in-out",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingPage;
