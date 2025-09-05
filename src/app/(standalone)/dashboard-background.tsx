"use client";

import React from "react";

interface DashboardBackgroundProps {
  children: React.ReactNode;
}

const DashboardBackground = ({ children }: DashboardBackgroundProps) => {
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
    gridLine: {
      position: "absolute" as const,
      background:
        "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)",
      animation: "slideRight 15s infinite linear",
    },
    verticalGrid: {
      width: "2px",
      height: "100%",
      animationDelay: "0s",
    },
    horizontalGrid: {
      width: "100%",
      height: "2px",
      animation: "slideDown 12s infinite linear",
    },
    particle: {
      position: "absolute" as const,
      width: "4px",
      height: "4px",
      background: "rgba(59, 130, 246, 0.6)",
      borderRadius: "50%",
      animation: "particleFloat 10s infinite ease-in-out",
    },
    dataStream: {
      position: "absolute" as const,
      width: "1px",
      height: "100px",
      background:
        "linear-gradient(180deg, transparent 0%, rgba(16, 185, 129, 0.8) 50%, transparent 100%)",
      animation: "streamFlow 8s infinite linear",
    },
    pulse: {
      position: "absolute" as const,
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
      animation: "pulseExpand 6s infinite ease-out",
    },
    floatingCard: {
      position: "absolute" as const,
      width: "60px",
      height: "40px",
      background: "rgba(255, 255, 255, 0.1)",
      borderRadius: "8px",
      border: "1px solid rgba(59, 130, 246, 0.2)",
      animation: "cardFloat 12s infinite ease-in-out",
      backdropFilter: "blur(10px)",
    },
  };

  return (
    <>
      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(-100vw); opacity: 0; }
          10%, 90% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }

        @keyframes slideDown {
          0% { transform: translateY(-100vh); opacity: 0; }
          10%, 90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(30px, -40px) scale(1.5); opacity: 0.8; }
          50% { transform: translate(-20px, -80px) scale(0.8); opacity: 0.6; }
          75% { transform: translate(40px, -60px) scale(1.2); opacity: 0.9; }
        }

        @keyframes streamFlow {
          0% { transform: translateY(-100px) scaleY(0); opacity: 0; }
          20% { transform: translateY(0) scaleY(1); opacity: 1; }
          80% { transform: translateY(calc(100vh - 100px)) scaleY(1); opacity: 1; }
          100% { transform: translateY(100vh) scaleY(0); opacity: 0; }
        }

        @keyframes pulseExpand {
          0% { transform: scale(0.5); opacity: 0.8; }
          50% { transform: scale(2); opacity: 0.3; }
          100% { transform: scale(3); opacity: 0; }
        }

        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); opacity: 0.7; }
          25% { transform: translateY(-30px) rotateX(10deg) rotateY(5deg); opacity: 0.9; }
          50% { transform: translateY(-50px) rotateX(-5deg) rotateY(-10deg); opacity: 0.8; }
          75% { transform: translateY(-25px) rotateX(8deg) rotateY(3deg); opacity: 0.85; }
        }
      `}</style>

      <div style={styles.backgroundContainer}>
        {/* Grid Lines */}
        <div style={{ ...styles.gridLine, ...styles.verticalGrid, left: "20%" }} />
        <div style={{ ...styles.gridLine, ...styles.verticalGrid, left: "40%", animationDelay: "3s" }} />
        <div style={{ ...styles.gridLine, ...styles.verticalGrid, left: "60%", animationDelay: "6s" }} />
        <div style={{ ...styles.gridLine, ...styles.verticalGrid, left: "80%", animationDelay: "9s" }} />

        <div style={{ ...styles.gridLine, ...styles.horizontalGrid, top: "25%" }} />
        <div style={{ ...styles.gridLine, ...styles.horizontalGrid, top: "50%", animationDelay: "4s" }} />
        <div style={{ ...styles.gridLine, ...styles.horizontalGrid, top: "75%", animationDelay: "8s" }} />

        {/* Particles */}
        <div style={{ ...styles.particle, top: "15%", left: "25%", animationDelay: "0s" }} />
        <div style={{ ...styles.particle, top: "35%", left: "70%", animationDelay: "2s" }} />
        <div style={{ ...styles.particle, top: "65%", left: "15%", animationDelay: "4s" }} />
        <div style={{ ...styles.particle, top: "80%", left: "85%", animationDelay: "6s" }} />
        <div style={{ ...styles.particle, top: "45%", left: "45%", animationDelay: "8s" }} />

        {/* Data Streams */}
        <div style={{ ...styles.dataStream, left: "10%", animationDelay: "1s" }} />
        <div style={{ ...styles.dataStream, left: "30%", animationDelay: "3s" }} />
        <div style={{ ...styles.dataStream, left: "50%", animationDelay: "5s" }} />
        <div style={{ ...styles.dataStream, left: "70%", animationDelay: "7s" }} />
        <div style={{ ...styles.dataStream, left: "90%", animationDelay: "9s" }} />

        {/* Pulse */}
        <div style={{ ...styles.pulse, top: "20%", left: "30%", animationDelay: "0s" }} />
        <div style={{ ...styles.pulse, top: "60%", left: "75%", animationDelay: "2s" }} />
        <div style={{ ...styles.pulse, top: "40%", left: "10%", animationDelay: "4s" }} />

        {/* Floating Cards */}
        <div style={{ ...styles.floatingCard, top: "25%", left: "60%", animationDelay: "0s" }} />
        <div style={{ ...styles.floatingCard, top: "55%", left: "20%", animationDelay: "3s" }} />
        <div style={{ ...styles.floatingCard, top: "75%", left: "70%", animationDelay: "6s" }} />
        <div style={{ ...styles.floatingCard, top: "15%", left: "85%", animationDelay: "9s" }} />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">{children}</div>
    </>
  );
};

export default DashboardBackground;
