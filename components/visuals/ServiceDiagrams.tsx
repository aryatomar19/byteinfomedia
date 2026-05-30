"use client";

import type { VisualBlock } from "@/data/service-page-types";
import { cn } from "@/lib/utils";

type DiagramProps = { className?: string };

export function AwsArchitectureDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 720 400" className={className} aria-label="AWS architecture diagram">
      <defs>
        <linearGradient id="awsG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF9900" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="720" height="400" rx="20" fill="#0f1a30" />
      <rect x="40" y="40" width="640" height="320" rx="12" fill="url(#awsG)" stroke="rgba(255,255,255,0.1)" />
      {[
        { x: 80, y: 80, w: 140, h: 70, label: "VPC" },
        { x: 260, y: 80, w: 160, h: 70, label: "EKS / ECS" },
        { x: 460, y: 80, w: 180, h: 70, label: "RDS / Aurora" },
        { x: 80, y: 200, w: 180, h: 70, label: "S3 · Backup" },
        { x: 300, y: 200, w: 160, h: 70, label: "CloudWatch" },
        { x: 500, y: 200, w: 140, h: 70, label: "WAF · Shield" },
      ].map((box) => (
        <g key={box.label}>
          <rect x={box.x} y={box.y} width={box.w} height={box.h} rx="8" fill="rgba(255,255,255,0.06)" stroke="#FF6B2C" strokeOpacity="0.4" />
          <text x={box.x + box.w / 2} y={box.y + box.h / 2 + 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="600">
            {box.label}
          </text>
        </g>
      ))}
      <path d="M220 115 L260 115" stroke="#3884FF" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M420 115 L460 115" stroke="#3884FF" strokeWidth="2" />
      <path d="M200 150 L200 200" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" />
      <text x="360" y="360" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11">
        Landing Zone · IAM · Multi-Account
      </text>
    </svg>
  );
}

export function MigrationRoadmapDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 720 200" className={className} aria-label="Migration roadmap">
      <rect width="720" height="200" rx="16" fill="#0f1a30" />
      {["Assess", "Plan", "Migrate", "Validate", "Optimize"].map((phase, i) => (
        <g key={phase}>
          <rect x={40 + i * 135} y={60} width="110" height="80" rx="10" fill={i === 2 ? "rgba(255,107,44,0.25)" : "rgba(255,255,255,0.06)"} stroke="#FF6B2C" strokeOpacity={i === 2 ? 0.8 : 0.3} />
          <text x={95 + i * 135} y={108} textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
            {phase}
          </text>
          {i < 4 && <path d={`M${150 + i * 135} 100 L${175 + i * 135} 100`} stroke="#FF6B2C" strokeWidth="2" />}
        </g>
      ))}
    </svg>
  );
}

export function FinOpsDashboard({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 720 280" className={className} aria-label="FinOps dashboard">
      <rect width="720" height="280" rx="16" fill="#0f1a30" />
      <text x="40" y="40" fill="white" fontSize="14" fontWeight="700">
        Cost Optimization Dashboard
      </text>
      {[120, 180, 90, 200, 150, 220].map((h, i) => (
        <rect key={i} x={60 + i * 100} y={280 - h} width="60" height={h} rx="4" fill={i % 2 ? "#FF6B2C" : "#3884FF"} opacity="0.7" />
      ))}
      <rect x="40" y="240" width="640" height="1" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}

export function NocDashboard({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 720 320" className={className} aria-label="NOC dashboard">
      <rect width="720" height="320" rx="16" fill="#0a1628" />
      <rect x="24" y="24" width="200" height="120" rx="8" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeOpacity="0.5" />
      <text x="124" y="90" textAnchor="middle" fill="#22c55e" fontSize="28" fontWeight="800">
        24/7
      </text>
      <text x="124" y="115" textAnchor="middle" fill="white" fontSize="11">
        NOC Active
      </text>
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={250 + c * 150}
            y={30 + r * 90}
            width="130"
            height="70"
            rx="8"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,107,44,0.3)"
          />
        )),
      )}
      <circle cx="600" cy="260" r="40" fill="none" stroke="#FF6B2C" strokeWidth="3" strokeDasharray="180 60" />
      <text x="600" y="265" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">
        99.9%
      </text>
    </svg>
  );
}

export function SocDashboard({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 720 300" className={className} aria-label="SOC dashboard">
      <rect width="720" height="300" rx="16" fill="#0a0f1c" />
      <rect x="0" y="0" width="720" height="48" fill="rgba(255,107,44,0.15)" />
      <text x="40" y="32" fill="#FF6B2C" fontSize="13" fontWeight="700">
        Security Operations Center
      </text>
      {["Threats", "Alerts", "Incidents", "Blocked"].map((m, i) => (
        <g key={m}>
          <rect x={40 + i * 170} y={70} width="150" height="90" rx="10" fill="rgba(255,255,255,0.05)" />
          <text x={115 + i * 170} y={110} textAnchor="middle" fill="white" fontSize="22" fontWeight="800">
            {[12, 48, 3, 847][i]}
          </text>
          <text x={115 + i * 170} y={135} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10">
            {m}
          </text>
        </g>
      ))}
      <path d="M40 200 Q200 160 360 220 T680 190" stroke="#22c55e" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function AiWorkflowDiagram({ className }: DiagramProps) {
  return (
    <svg viewBox="0 0 720 280" className={className} aria-label="AI workflow">
      <rect width="720" height="280" rx="16" fill="#0f1a30" />
      {["Data", "LLM", "RAG", "API", "App"].map((n, i) => (
        <g key={n}>
          <circle cx={100 + i * 140} cy="140" r="45" fill={i === 2 ? "rgba(255,107,44,0.3)" : "rgba(56,132,255,0.2)"} stroke="#FF6B2C" strokeOpacity="0.5" />
          <text x={100 + i * 140} y={145} textAnchor="middle" fill="white" fontSize="12" fontWeight="700">
            {n}
          </text>
          {i < 4 && <path d={`M${145 + i * 140} 140 L${195 + i * 140} 140`} stroke="#FF6B2C" strokeWidth="2" />}
        </g>
      ))}
    </svg>
  );
}

const diagramMap: Record<VisualBlock["visual"], React.FC<DiagramProps>> = {
  "aws-architecture": AwsArchitectureDiagram,
  "migration-roadmap": MigrationRoadmapDiagram,
  "landing-zone": AwsArchitectureDiagram,
  finops: FinOpsDashboard,
  governance: AwsArchitectureDiagram,
  noc: NocDashboard,
  monitoring: NocDashboard,
  incident: MigrationRoadmapDiagram,
  support: MigrationRoadmapDiagram,
  soc: SocDashboard,
  threat: SocDashboard,
  compliance: SocDashboard,
  "security-lifecycle": MigrationRoadmapDiagram,
  risk: MigrationRoadmapDiagram,
  "ai-workflow": AiWorkflowDiagram,
  chatbot: AiWorkflowDiagram,
  "llm-flow": AiWorkflowDiagram,
  "ai-adoption": MigrationRoadmapDiagram,
  "ai-automation": AiWorkflowDiagram,
};

export function DiagramByType({ type, className }: { type: VisualBlock["visual"]; className?: string }) {
  const Component = diagramMap[type] ?? AwsArchitectureDiagram;
  return <Component className={cn("h-auto w-full", className)} />;
}
