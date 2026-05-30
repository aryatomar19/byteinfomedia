#!/usr/bin/env python3
"""Generate enterprise cloud architecture SVGs (no stock photography)."""

from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "public" / "images" / "cloud"

DEFS = """
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0A0F1C"/>
      <stop offset="55%" stop-color="#121A2E"/>
      <stop offset="100%" stop-color="#1a2744"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FF6B2C"/>
      <stop offset="100%" stop-color="#ff8f5c"/>
    </linearGradient>
    <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
      <path d="M32 0H0V32" fill="none" stroke="#ffffff" stroke-opacity="0.06"/>
    </pattern>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
"""

def wrap(body: str, label: str = "") -> str:
    label_el = (
        f'<text x="800" y="580" text-anchor="end" font-family="system-ui,sans-serif" '
        f'font-size="13" font-weight="600" fill="#94a3b8" letter-spacing="0.12em">{label.upper()}</text>'
        if label
        else ""
    )
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" role="img">
{DEFS}
  <rect width="800" height="600" fill="url(#bg)"/>
  <rect width="800" height="600" fill="url(#grid)"/>
{body}
  {label_el}
</svg>'''

def node(x, y, w=88, h=52, fill="#1e293b", stroke="#FF6B2C", label=""):
    t = f'<text x="{x+w/2}" y="{y+h/2+4}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="600" fill="#e2e8f0">{label}</text>' if label else ""
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="10" fill="{fill}" stroke="{stroke}" stroke-opacity="0.55" stroke-width="1.5"/>{t}'

def line(x1, y1, x2, y2, dashed=False):
    d = ' stroke-dasharray="6 4"' if dashed else ""
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="#FF6B2C" stroke-opacity="0.7" stroke-width="2"{d}/>'

def cloud_shape(cx, cy, scale=1, opacity=0.35):
    s = scale
    return f'''<g transform="translate({cx},{cy}) scale({s})" opacity="{opacity}">
  <path d="M-60 10c0-28 22-50 50-50 12 0 23 4 32 12 7-24 30-40 56-40 32 0 57 25 57 57 0 2 0 4-.1 6h18c20 0 36 16 36 36s-16 36-36 36H-90c-20 0-36-16-36-36s16-36 36-36h14z" fill="#3b82f6"/>
</g>'''

SVGS = {
    "hero-cloud.svg": wrap(
        cloud_shape(200, 180, 0.9, 0.4)
        + cloud_shape(520, 140, 1.1, 0.45)
        + cloud_shape(620, 280, 0.75, 0.35)
        + node(120, 320, 100, 56, label="AWS")
        + node(280, 380, 100, 56, label="Azure")
        + node(440, 300, 100, 56, label="GCP")
        + node(600, 380, 100, 56, label="Hybrid")
        + line(220, 348, 280, 408)
        + line(380, 408, 440, 328)
        + line(540, 328, 600, 408)
        + '<circle cx="400" cy="220" r="6" fill="#FF6B2C" filter="url(#glow)"/>'
        + '<path d="M200 250 L400 220 L600 250 L400 180 Z" stroke="#60a5fa" stroke-opacity="0.5" fill="none" stroke-width="1.5"/>',
        "Multi-Cloud Architecture",
    ),
    "private-cloud.svg": wrap(
        '<rect x="140" y="120" width="520" height="360" rx="20" fill="#0f172a" stroke="#FF6B2C" stroke-opacity="0.4" stroke-width="2"/>'
        + '<text x="400" y="155" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#94a3b8">PRIVATE VPC</text>'
        + node(200, 200, 120, 64, label="Compute")
        + node(360, 200, 120, 64, label="Storage")
        + node(520, 200, 100, 64, label="Network")
        + node(280, 320, 240, 64, stroke="#60a5fa", label="Secure Zone")
        + '<rect x="180" y="420" width="440" height="8" rx="4" fill="#FF6B2C" opacity="0.3"/>'
        + '<rect x="180" y="420" width="280" height="8" rx="4" fill="url(#accent)"/>',
        "Private Cloud",
    ),
    "public-cloud.svg": wrap(
        cloud_shape(400, 200, 1.2, 0.5)
        + node(160, 360, 90, 50, label="Region A")
        + node(355, 400, 90, 50, label="Region B")
        + node(550, 360, 90, 50, label="Region C")
        + line(250, 385, 355, 425)
        + line(445, 425, 550, 385)
        + '<path d="M300 280 L400 240 L500 280" stroke="#60a5fa" stroke-width="2" fill="none" opacity="0.6"/>',
        "Public Cloud",
    ),
    "application-modernization.svg": wrap(
        node(140, 280, 140, 100, fill="#334155", stroke="#64748b", label="Legacy")
        + '<path d="M300 330 L380 330" stroke="url(#accent)" stroke-width="3" marker-end="url(#arrow)"/>'
        + '<polygon points="380,330 368,324 368,336" fill="#FF6B2C"/>'
        + node(400, 220, 72, 48, label="API")
        + node(490, 220, 72, 48, label="Svc A")
        + node(580, 220, 72, 48, label="Svc B")
        + node(400, 300, 72, 48, label="Svc C")
        + node(490, 300, 72, 48, label="Svc D")
        + node(580, 300, 72, 48, label="Data")
        + '<text x="520" y="180" text-anchor="middle" font-size="11" fill="#94a3b8">Cloud-Native</text>',
        "Modernization",
    ),
    "finops.svg": wrap(
        '<rect x="120" y="140" width="560" height="320" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1"/>'
        + '<rect x="160" y="360" width="48" height="60" rx="4" fill="#FF6B2C" opacity="0.9"/>'
        + '<rect x="230" y="320" width="48" height="100" rx="4" fill="#FF6B2C" opacity="0.7"/>'
        + '<rect x="300" y="280" width="48" height="140" rx="4" fill="#FF6B2C" opacity="0.85"/>'
        + '<rect x="370" y="300" width="48" height="120" rx="4" fill="#60a5fa" opacity="0.8"/>'
        + '<rect x="440" y="250" width="48" height="170" rx="4" fill="#60a5fa" opacity="0.65"/>'
        + '<rect x="510" y="310" width="48" height="110" rx="4" fill="#22c55e" opacity="0.75"/>'
        + '<path d="M160 220 L620 200" stroke="#64748b" stroke-width="1" stroke-dasharray="4 4"/>'
        + '<text x="400" y="175" text-anchor="middle" font-size="14" font-weight="700" fill="#e2e8f0">Cloud Cost Analytics</text>',
        "FinOps",
    ),
    "cloud-migration.svg": wrap(
        node(120, 300, 120, 80, fill="#334155", stroke="#64748b", label="On-Prem")
        + '<path d="M260 340 L340 340" stroke="url(#accent)" stroke-width="3"/>'
        + '<polygon points="340,340 328,334 328,346" fill="#FF6B2C"/>'
        + cloud_shape(480, 260, 1, 0.55)
        + node(420, 360, 200, 70, label="Target Cloud")
        + '<text x="400" y="200" text-anchor="middle" font-size="12" fill="#94a3b8">Migration Workflow</text>',
        "Cloud Migration",
    ),
    "cloud-security.svg": wrap(
        '<path d="M400 160 L480 200 V280 C480 340 400 380 400 380 C400 380 320 340 320 280 V200 Z" fill="#1e293b" stroke="#FF6B2C" stroke-width="2"/>'
        + '<path d="M385 290 L398 305 L420 275" stroke="#22c55e" stroke-width="3" fill="none"/>'
        + '<rect x="140" y="400" width="200" height="100" rx="10" fill="#0f172a" stroke="#334155"/>'
        + '<rect x="460" y="400" width="200" height="100" rx="10" fill="#0f172a" stroke="#334155"/>'
        + '<circle cx="240" cy="440" r="4" fill="#ef4444"/><circle cx="260" cy="460" r="4" fill="#f59e0b"/>'
        + '<text x="240" y="480" text-anchor="middle" font-size="10" fill="#94a3b8">SOC</text>'
        + '<text x="560" y="480" text-anchor="middle" font-size="10" fill="#94a3b8">Threat Intel</text>',
        "Cloud Security",
    ),
    "kubernetes.svg": wrap(
        '<polygon points="400,160 480,200 480,280 400,320 320,280 320,200" fill="#1e293b" stroke="#326ce5" stroke-width="2"/>'
        + '<text x="400" y="250" text-anchor="middle" font-size="11" font-weight="700" fill="#60a5fa">K8s</text>'
        + node(180, 380, 70, 44, label="Pod")
        + node(280, 420, 70, 44, label="Pod")
        + node(450, 420, 70, 44, label="Pod")
        + node(550, 380, 70, 44, label="Pod")
        + line(400, 320, 215, 380)
        + line(400, 320, 315, 420)
        + line(400, 320, 485, 420)
        + line(400, 320, 585, 380),
        "Kubernetes",
    ),
    "containerization.svg": wrap(
        '<rect x="280" y="180" width="240" height="280" rx="12" fill="#1e293b" stroke="#2496ed" stroke-width="2"/>'
        + '<rect x="300" y="210" width="200" height="50" rx="6" fill="#0f172a" stroke="#2496ed" stroke-opacity="0.5"/>'
        + '<rect x="300" y="280" width="200" height="50" rx="6" fill="#0f172a" stroke="#2496ed" stroke-opacity="0.5"/>'
        + '<rect x="300" y="350" width="200" height="50" rx="6" fill="#0f172a" stroke="#2496ed" stroke-opacity="0.5"/>'
        + '<text x="400" y="242" text-anchor="middle" font-size="10" fill="#94a3b8">Container</text>'
        + '<text x="400" y="312" text-anchor="middle" font-size="10" fill="#94a3b8">Container</text>'
        + '<text x="400" y="382" text-anchor="middle" font-size="10" fill="#94a3b8">Container</text>',
        "Containerization",
    ),
    "disaster-recovery.svg": wrap(
        node(160, 280, 100, 56, label="Primary")
        + node(540, 280, 100, 56, label="DR Site")
        + line(260, 308, 540, 308)
        + '<path d="M400 308 L388 302 M400 308 L388 314" stroke="#FF6B2C" stroke-width="2"/>'
        + '<text x="400" y="340" text-anchor="middle" font-size="10" fill="#FF6B2C">Replication</text>'
        + '<rect x="300" y="400" width="200" height="60" rx="8" fill="#0f172a" stroke="#22c55e" stroke-opacity="0.6"/>'
        + '<text x="400" y="435" text-anchor="middle" font-size="11" fill="#86efac">Failover Ready</text>',
        "Disaster Recovery",
    ),
    "devops-automation.svg": wrap(
        node(100, 300, 90, 50, label="Build")
        + node(230, 300, 90, 50, label="Test")
        + node(360, 300, 90, 50, label="Deploy")
        + node(490, 300, 90, 50, label="Monitor")
        + node(620, 300, 90, 50, label="Release")
        + line(190, 325, 230, 325)
        + line(320, 325, 360, 325)
        + line(450, 325, 490, 325)
        + line(580, 325, 620, 325)
        + '<rect x="200" y="180" width="400" height="60" rx="10" fill="#0f172a" stroke="#334155"/>'
        + '<text x="400" y="218" text-anchor="middle" font-size="12" font-weight="600" fill="#e2e8f0">CI/CD Pipeline</text>',
        "DevOps",
    ),
}

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for name, content in SVGS.items():
        (OUT / name).write_text(content, encoding="utf-8")
        print("wrote", name)
    print("done:", len(SVGS), "files")

if __name__ == "__main__":
    main()
