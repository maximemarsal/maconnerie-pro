"use client";

import { motion } from "framer-motion";

interface FranceMapProps {
  className?: string;
}

export default function FranceMap({ className = "" }: FranceMapProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 600 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* France outline - simplified */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          d="M280 50 L350 45 L420 60 L480 90 L520 130 L540 180 L560 240 L550 300 L530 350 L500 400 L520 450 L510 500 L480 530 L420 550 L360 560 L300 550 L240 560 L180 540 L140 500 L100 450 L80 400 L70 350 L80 300 L100 250 L120 200 L150 150 L200 100 L250 70 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
        />

        {/* Department 72 - Sarthe (Nord-Ouest) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <circle
            cx="200"
            cy="220"
            r="35"
            fill="#8B4513"
            className="drop-shadow-lg"
          />
          <text
            x="200"
            y="215"
            textAnchor="middle"
            className="fill-white font-bold"
            style={{ fontSize: "18px" }}
          >
            72
          </text>
          <text
            x="200"
            y="232"
            textAnchor="middle"
            className="fill-white/80"
            style={{ fontSize: "10px" }}
          >
            Sarthe
          </text>
        </motion.g>

        {/* Department 01 - Ain (Est) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <circle
            cx="420"
            cy="280"
            r="35"
            fill="#8B4513"
            className="drop-shadow-lg"
          />
          <text
            x="420"
            y="275"
            textAnchor="middle"
            className="fill-white font-bold"
            style={{ fontSize: "18px" }}
          >
            01
          </text>
          <text
            x="420"
            y="292"
            textAnchor="middle"
            className="fill-white/80"
            style={{ fontSize: "10px" }}
          >
            Ain
          </text>
        </motion.g>

        {/* Department 06 - Alpes-Maritimes (Sud-Est) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <circle
            cx="480"
            cy="420"
            r="35"
            fill="#8B4513"
            className="drop-shadow-lg"
          />
          <text
            x="480"
            y="415"
            textAnchor="middle"
            className="fill-white font-bold"
            style={{ fontSize: "18px" }}
          >
            06
          </text>
          <text
            x="480"
            y="432"
            textAnchor="middle"
            className="fill-white/80"
            style={{ fontSize: "9px" }}
          >
            Alpes-Mar.
          </text>
        </motion.g>

        {/* Department 13 - Bouches-du-Rhone (Sud) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <circle
            cx="380"
            cy="460"
            r="35"
            fill="#8B4513"
            className="drop-shadow-lg"
          />
          <text
            x="380"
            y="455"
            textAnchor="middle"
            className="fill-white font-bold"
            style={{ fontSize: "18px" }}
          >
            13
          </text>
          <text
            x="380"
            y="472"
            textAnchor="middle"
            className="fill-white/80"
            style={{ fontSize: "9px" }}
          >
            B-du-Rhone
          </text>
        </motion.g>

        {/* Connection lines */}
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          d="M200 255 Q300 350 380 425"
          stroke="#D4A574"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          d="M420 315 Q430 370 420 420"
          stroke="#D4A574"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
        />
        <motion.path
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          d="M415 455 L445 435"
          stroke="#D4A574"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
        />

        {/* Legend */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <rect
            x="50"
            y="480"
            width="180"
            height="80"
            rx="10"
            fill="rgba(0,0,0,0.3)"
          />
          <text
            x="140"
            y="505"
            textAnchor="middle"
            className="fill-white font-semibold"
            style={{ fontSize: "12px" }}
          >
            Zones d&apos;intervention
          </text>
          <circle cx="75" cy="525" r="6" fill="#8B4513" />
          <text x="88" y="529" className="fill-white/80" style={{ fontSize: "10px" }}>
            Le Mans, Nice
          </text>
          <circle cx="75" cy="545" r="6" fill="#8B4513" />
          <text x="88" y="549" className="fill-white/80" style={{ fontSize: "10px" }}>
            Marseille, Bourg-en-Bresse
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
