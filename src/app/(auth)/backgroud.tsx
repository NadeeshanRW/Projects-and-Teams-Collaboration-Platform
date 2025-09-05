"use client";

import React from "react";

const Background: React.FC = () => {
  const styles = {
    backgroundContainer: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden" as const,
      zIndex: 0,
    },
    shape: {
      position: "absolute" as const,
      borderRadius: "50%",
      background:
        "linear-gradient(45deg, rgba(255,255,255,0.8), rgba(173,216,230,0.6))",
      animation: "float 8s infinite ease-in-out",
    },
    shape1: {
      width: "200px",
      height: "200px",
      top: "20%",
      left: "10%",
      animationDelay: "0s",
      transform: "rotate(45deg) scale(1.2)",
    },
    shape2: {
      width: "150px",
      height: "150px",
      top: "60%",
      right: "15%",
      animationDelay: "-2s",
      transform: "rotate(-30deg) scale(0.8)",
    },
    shape3: {
      width: "100px",
      height: "100px",
      top: "10%",
      right: "30%",
      animationDelay: "-4s",
      transform: "rotate(60deg) scale(1.5)",
    },
    shape4: {
      width: "180px",
      height: "180px",
      bottom: "20%",
      left: "20%",
      animationDelay: "-6s",
      transform: "rotate(-45deg) scale(0.9)",
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: "50px solid transparent",
      borderRight: "50px solid transparent",
      borderBottom: "87px solid rgba(135,206,250,0.7)",
      position: "absolute" as const,
      top: "40%",
      left: "50%",
      transform: "translateX(-50%) rotate(30deg)",
      animation: "rotate-triangle 10s infinite ease-in-out",
    },
    square: {
      width: "80px",
      height: "80px",
      background: "rgba(176,224,230,0.6)",
      position: "absolute" as const,
      top: "70%",
      right: "40%",
      transform: "rotate(45deg) scale(1.1)",
      animation: "pulse-square 6s infinite ease-in-out",
    },
    hexagon: {
      width: "60px",
      height: "34.64px",
      background: "rgba(240,248,255,0.8)",
      position: "absolute" as const,
      top: "25%",
      left: "70%",
      transform: "rotate(20deg)",
      animation: "wobble 8s infinite ease-in-out",
    },
    overlay: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: `radial-gradient(circle at 30% 70%, rgba(255,255,255,0.3) 0%, transparent 50%),
                   radial-gradient(circle at 80% 20%, rgba(173,216,230,0.4) 0%, transparent 60%)`,
      pointerEvents: "none" as const,
      zIndex: 1,
    },
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-20px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translateY(-40px) rotate(180deg) scale(0.9);
          }
          75% {
            transform: translateY(-20px) rotate(270deg) scale(1.05);
          }
        }

        @keyframes rotate-triangle {
          0%, 100% {
            transform: translateX(-50%) rotate(30deg) scale(1);
          }
          50% {
            transform: translateX(-50%) rotate(210deg) scale(1.3);
          }
        }

        @keyframes pulse-square {
          0%, 100% {
            transform: rotate(45deg) scale(1.1);
            opacity: 0.6;
          }
          50% {
            transform: rotate(225deg) scale(1.4);
            opacity: 0.9;
          }
        }

        @keyframes wobble {
          0%, 100% {
            transform: rotate(20deg) translateX(0px);
          }
          25% {
            transform: rotate(30deg) translateX(10px);
          }
          50% {
            transform: rotate(10deg) translateX(-5px);
          }
          75% {
            transform: rotate(25deg) translateX(8px);
          }
        }

        @media (max-width: 768px) {
          .responsive-shape {
            transform: scale(0.7) !important;
          }
        }
      `}</style>

      <div style={styles.backgroundContainer}>
        {/* Floating circles */}
        <div className="responsive-shape" style={{ ...styles.shape, ...styles.shape1 }} />
        <div className="responsive-shape" style={{ ...styles.shape, ...styles.shape2 }} />
        <div className="responsive-shape" style={{ ...styles.shape, ...styles.shape3 }} />
        <div className="responsive-shape" style={{ ...styles.shape, ...styles.shape4 }} />

        {/* Geometric shapes */}
        <div style={styles.triangle} />
        <div style={styles.square} />

        {/* Hexagon with pseudo */}
        <div style={styles.hexagon}>
          <div
            style={{
              position: "absolute",
              width: 0,
              borderLeft: "30px solid transparent",
              borderRight: "30px solid transparent",
              bottom: "100%",
              borderBottom: "17.32px solid rgba(240,248,255,0.8)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 0,
              borderLeft: "30px solid transparent",
              borderRight: "30px solid transparent",
              top: "100%",
              borderTop: "17.32px solid rgba(240,248,255,0.8)",
            }}
          />
        </div>

        {/* Overlay */}
        <div style={styles.overlay} />
      </div>
    </>
  );
};

export default Background;
