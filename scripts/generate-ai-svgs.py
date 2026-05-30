#!/usr/bin/env python3
"""Generate enterprise Generative AI interface SVGs (no stock photography)."""

from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "public" / "images" / "ai"

DEFS = """
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0A0F1C"/>
      <stop offset="45%" stop-color="#151032"/>
      <stop offset="100%" stop-color="#1e1b4b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FF6B2C"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
    <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#a855f7" stop-opacity="0.1"/>
    </linearGradient>
    <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M28 0H0V28" fill="none" stroke="#ffffff" stroke-opacity="0.05"/>
    </pattern>
  </defs>
"""

def wrap(body: str, label: str = "") -> str:
    tag = (
        f'<text x="780" y="575" text-anchor="end" font-family="system-ui,sans-serif" '
        f'font-size="11" font-weight="700" fill="#a78bfa" letter-spacing="0.14em">{label.upper()}</text>'
        if label
        else ""
    )
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" role="img">
{DEFS}
  <rect width="800" height="600" fill="url(#bg)"/>
  <rect width="800" height="600" fill="url(#grid)"/>
  <ellipse cx="400" cy="300" rx="280" ry="180" fill="url(#glow)"/>
{body}
  {tag}
</svg>'''

def panel(x, y, w, h, title=""):
    t = (
        f'<text x="{x+16}" y="{y+28}" font-family="system-ui,sans-serif" font-size="11" '
        f'font-weight="700" fill="#c4b5fd">{title}</text>'
        if title
        else ""
    )
    return (
        f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="14" fill="#0f172a" '
        f'stroke="#6366f1" stroke-opacity="0.45" stroke-width="1.5"/>{t}'
    )

def chat_bubble(x, y, w, h, user=False):
    fill = "#312e81" if user else "#1e293b"
    stroke = "#a855f7" if user else "#6366f1"
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="10" fill="{fill}" stroke="{stroke}" stroke-opacity="0.5"/>'

def node(cx, cy, r=8):
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="#FF6B2C" opacity="0.9"/><circle cx="{cx}" cy="{cy}" r="{r+4}" fill="#a855f7" opacity="0.25"/>'

def neural_net(cx, cy, spread=100):
    parts = [node(cx, cy, 10)]
    for dx, dy in [(-spread, -40), (spread, -40), (-spread, 40), (spread, 40), (0, -60), (0, 60)]:
        x, y = cx + dx, cy + dy
        parts.append(node(x, y, 6))
        parts.append(
            f'<line x1="{cx}" y1="{cy}" x2="{x}" y2="{y}" stroke="#6366f1" stroke-opacity="0.5" stroke-width="1.5"/>'
        )
    return "".join(parts)

SVGS = {
    "hero-ai.svg": wrap(
        neural_net(400, 280, 120)
        + panel(120, 120, 560, 320, "Enterprise AI Platform")
        + '<text x="400" y="380" text-anchor="middle" font-size="22" font-weight="800" fill="#f8fafc">Generative AI</text>'
        + '<text x="400" y="410" text-anchor="middle" font-size="12" fill="#94a3b8">LLM · Agents · Automation · Analytics</text>',
        "Enterprise AI",
    ),
    "custom-ai-agents.svg": wrap(
        panel(100, 100, 600, 400, "AI Agent Orchestration")
        + node(200, 220)
        + node(400, 180)
        + node(600, 220)
        + node(400, 340)
        + '<line x1="200" y1="220" x2="400" y2="180" stroke="#FF6B2C" stroke-width="2" opacity="0.7"/>'
        + '<line x1="400" y1="180" x2="600" y2="220" stroke="#FF6B2C" stroke-width="2" opacity="0.7"/>'
        + '<line x1="400" y1="180" x2="400" y2="340" stroke="#a855f7" stroke-width="2" opacity="0.7"/>'
        + '<text x="400" y="260" text-anchor="middle" font-size="11" fill="#e2e8f0">Autonomous Agents</text>',
        "AI Agents",
    ),
    "enterprise-chatbots.svg": wrap(
        panel(80, 80, 640, 440, "Conversational AI")
        + chat_bubble(120, 140, 320, 56)
        + '<text x="140" y="175" font-size="11" fill="#e2e8f0">How can I help with your cloud migration?</text>'
        + chat_bubble(360, 220, 300, 56, user=True)
        + '<text x="380" y="255" font-size="11" fill="#e2e8f0">Show me the assessment checklist.</text>'
        + chat_bubble(120, 300, 380, 56)
        + '<text x="140" y="335" font-size="11" fill="#c4b5fd">✓ Generated enterprise response</text>',
        "Chatbots",
    ),
    "gpt-integration.svg": wrap(
        panel(100, 110, 600, 380, "GPT / LLM Integration")
        + '<rect x="160" y="200" width="120" height="80" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>'
        + '<text x="220" y="248" text-anchor="middle" font-size="12" font-weight="700" fill="#86efac">OpenAI</text>'
        + '<rect x="340" y="200" width="120" height="80" rx="10" fill="#1e293b" stroke="#60a5fa" stroke-width="2"/>'
        + '<text x="400" y="248" text-anchor="middle" font-size="12" font-weight="700" fill="#93c5fd">Bedrock</text>'
        + '<rect x="520" y="200" width="120" height="80" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>'
        + '<text x="580" y="248" text-anchor="middle" font-size="11" font-weight="700" fill="#d8b4fe">Azure AI</text>'
        + '<path d="M280 240 H340 M460 240 H520" stroke="#FF6B2C" stroke-width="2"/>'
        + '<rect x="300" y="320" width="200" height="50" rx="8" fill="#312e81" stroke="#6366f1"/>'
        + '<text x="400" y="352" text-anchor="middle" font-size="10" fill="#e2e8f0">API Gateway · Guardrails</text>',
        "GPT Integration",
    ),
    "ai-workflow-automation.svg": wrap(
        panel(90, 100, 620, 400, "Workflow Intelligence")
        + '<rect x="140" y="240" width="90" height="50" rx="8" fill="#312e81" stroke="#6366f1"/><text x="185" y="272" text-anchor="middle" font-size="10" fill="#e2e8f0">Trigger</text>'
        + '<rect x="280" y="240" width="90" height="50" rx="8" fill="#312e81" stroke="#a855f7"/><text x="325" y="272" text-anchor="middle" font-size="10" fill="#e2e8f0">AI Step</text>'
        + '<rect x="420" y="240" width="90" height="50" rx="8" fill="#312e81" stroke="#FF6B2C"/><text x="465" y="272" text-anchor="middle" font-size="10" fill="#e2e8f0">Action</text>'
        + '<rect x="560" y="240" width="90" height="50" rx="8" fill="#312e81" stroke="#22c55e"/><text x="605" y="272" text-anchor="middle" font-size="10" fill="#e2e8f0">Complete</text>'
        + '<path d="M230 265 H280 M370 265 H420 M510 265 H560" stroke="#FF6B2C" stroke-width="2"/>',
        "Automation",
    ),
    "knowledge-management.svg": wrap(
        panel(80, 90, 640, 420, "RAG · Knowledge Assistant")
        + '<circle cx="400" cy="280" r="80" fill="none" stroke="#6366f1" stroke-width="2" opacity="0.5"/>'
        + node(400, 280, 12)
        + node(320, 220, 6)
        + node(480, 220, 6)
        + node(340, 340, 6)
        + node(460, 340, 6)
        + '<line x1="400" y1="280" x2="320" y2="220" stroke="#a855f7" stroke-width="1.5"/>'
        + '<line x1="400" y1="280" x2="480" y2="220" stroke="#a855f7" stroke-width="1.5"/>'
        + '<line x1="400" y1="280" x2="340" y2="340" stroke="#a855f7" stroke-width="1.5"/>'
        + '<line x1="400" y1="280" x2="460" y2="340" stroke="#a855f7" stroke-width="1.5"/>'
        + '<text x="400" y="400" text-anchor="middle" font-size="11" fill="#94a3b8">Enterprise Knowledge Graph</text>',
        "Knowledge AI",
    ),
    "ai-analytics.svg": wrap(
        panel(100, 100, 600, 400, "AI Analytics")
        + '<rect x="180" y="340" width="40" height="80" rx="4" fill="url(#accent)" opacity="0.85"/>'
        + '<rect x="240" y="300" width="40" height="120" rx="4" fill="#6366f1" opacity="0.8"/>'
        + '<rect x="300" y="260" width="40" height="160" rx="4" fill="#a855f7" opacity="0.85"/>'
        + '<rect x="360" y="220" width="40" height="200" rx="4" fill="url(#accent)" opacity="0.9"/>'
        + '<rect x="420" y="280" width="40" height="140" rx="4" fill="#6366f1" opacity="0.75"/>'
        + '<path d="M180 220 Q320 180 520 200" stroke="#FF6B2C" stroke-width="2" fill="none"/>'
        + '<text x="400" y="200" text-anchor="middle" font-size="12" fill="#e2e8f0">Predictive Insights</text>',
        "AI Analytics",
    ),
    "customer-support.svg": wrap(
        panel(90, 90, 620, 420, "AI Support Platform")
        + chat_bubble(130, 160, 500, 48)
        + '<text x="150" y="192" font-size="11" fill="#86efac">● AI Agent resolving ticket #4821</text>'
        + '<rect x="130" y="240" width="500" height="120" rx="10" fill="#0f172a" stroke="#334155"/>'
        + '<text x="150" y="270" font-size="10" fill="#94a3b8">Sentiment: Positive · SLA: On track</text>'
        + '<rect x="150" y="290" width="200" height="8" rx="4" fill="#312e81"/><rect x="150" y="290" width="160" height="8" rx="4" fill="#22c55e"/>',
        "Support AI",
    ),
    "document-intelligence.svg": wrap(
        panel(100, 100, 600, 400, "Document Intelligence")
        + '<rect x="200" y="180" width="100" height="130" rx="6" fill="#1e293b" stroke="#6366f1"/>'
        + '<rect x="220" y="210" width="60" height="6" rx="2" fill="#475569"/>'
        + '<rect x="220" y="230" width="60" height="6" rx="2" fill="#475569"/>'
        + '<rect x="220" y="250" width="40" height="6" rx="2" fill="#475569"/>'
        + '<path d="M310 245 L380 245" stroke="#FF6B2C" stroke-width="2"/>'
        + '<polygon points="380,245 368,239 368,251" fill="#FF6B2C"/>'
        + '<rect x="400" y="200" width="180" height="90" rx="8" fill="#312e81" stroke="#a855f7"/>'
        + '<text x="490" y="240" text-anchor="middle" font-size="11" fill="#e2e8f0">OCR · Extract · Classify</text>',
        "Doc Intelligence",
    ),
    "internal-knowledge.svg": wrap(
        panel(90, 90, 620, 420, "Internal Knowledge Assistant")
        + '<rect x="140" y="160" width="520" height="44" rx="22" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>'
        + '<text x="170" y="188" font-size="11" fill="#94a3b8">Search policies, runbooks, architecture...</text>'
        + '<rect x="140" y="230" width="520" height="180" rx="12" fill="#0f172a" stroke="#334155"/>'
        + '<text x="170" y="270" font-size="11" fill="#c4b5fd">▸ RAG result: Cloud security baseline v3.2</text>'
        + '<text x="170" y="300" font-size="11" fill="#94a3b8">▸ Related: IAM guardrails, SOC2 controls</text>',
        "Knowledge Assistant",
    ),
    "sales-automation.svg": wrap(
        panel(100, 100, 600, 400, "AI Sales Intelligence")
        + '<rect x="160" y="220" width="480" height="12" rx="6" fill="#312e81"/>'
        + '<rect x="160" y="220" width="380" height="12" rx="6" fill="url(#accent)"/>'
        + '<text x="400" y="200" text-anchor="middle" font-size="12" fill="#e2e8f0">Lead Score: 92 · Pipeline AI</text>'
        + '<rect x="180" y="280" width="100" height="60" rx="8" fill="#1e293b" stroke="#6366f1"/><text x="230" y="318" text-anchor="middle" font-size="9" fill="#94a3b8">Prospect</text>'
        + '<rect x="320" y="280" width="100" height="60" rx="8" fill="#1e293b" stroke="#a855f7"/><text x="370" y="318" text-anchor="middle" font-size="9" fill="#94a3b8">Qualify</text>'
        + '<rect x="460" y="280" width="100" height="60" rx="8" fill="#1e293b" stroke="#FF6B2C"/><text x="510" y="318" text-anchor="middle" font-size="9" fill="#94a3b8">Close</text>',
        "Sales AI",
    ),
    "ai-content-generation.svg": wrap(
        panel(90, 90, 620, 420, "Generative Content Studio")
        + '<rect x="140" y="170" width="520" height="200" rx="12" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>'
        + '<text x="170" y="210" font-size="11" fill="#c4b5fd">Prompt: Create executive cloud briefing...</text>'
        + '<rect x="170" y="230" width="460" height="8" rx="4" fill="#312e81"/><rect x="170" y="230" width="320" height="8" rx="4" fill="#a855f7"/>'
        + '<text x="170" y="280" font-size="11" fill="#e2e8f0">✓ Generated marketing copy · ✓ Summaries · ✓ Localization</text>',
        "Content AI",
    ),
    "business-analytics.svg": wrap(
        panel(100, 100, 600, 400, "Executive AI Dashboard")
        + '<rect x="160" y="180" width="160" height="100" rx="10" fill="#1e293b" stroke="#6366f1"/>'
        + '<text x="240" y="220" text-anchor="middle" font-size="20" font-weight="800" fill="#f8fafc">847</text>'
        + '<text x="240" y="245" text-anchor="middle" font-size="10" fill="#94a3b8">KPI Index</text>'
        + '<rect x="360" y="180" width="280" height="100" rx="10" fill="#0f172a" stroke="#334155"/>'
        + '<path d="M380 250 L420 220 L460 235 L500 200 L540 210 L600 190" stroke="#FF6B2C" stroke-width="2" fill="none"/>'
        + '<text x="500" y="270" text-anchor="middle" font-size="10" fill="#86efac">↑ Forecast confidence 94%</text>',
        "Business Analytics",
    ),
}

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for name, svg in SVGS.items():
        (OUT / name).write_text(svg, encoding="utf-8")
        print("wrote", name)
    print("done:", len(SVGS))

if __name__ == "__main__":
    main()
