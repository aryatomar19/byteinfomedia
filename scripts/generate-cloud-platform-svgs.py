#!/usr/bin/env python3
"""Enterprise cloud platform UI mockups (AWS/Azure/K8s style) — no stock photography."""

from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "public" / "images" / "cloud"

DEFS = """
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1a2332"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>
    <linearGradient id="sidebar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#161b22"/>
      <stop offset="100%" stop-color="#0d1117"/>
    </linearGradient>
    <linearGradient id="aws" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FF9900"/>
      <stop offset="100%" stop-color="#FF6B2C"/>
    </linearGradient>
    <linearGradient id="azure" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0078D4"/>
      <stop offset="100%" stop-color="#50e6ff"/>
    </linearGradient>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" fill="none" stroke="#ffffff" stroke-opacity="0.03"/>
    </pattern>
  </defs>
"""

def wrap(body: str, label: str = "") -> str:
    tag = (
        f'<text x="770" y="582" text-anchor="end" font-family="ui-monospace,monospace" '
        f'font-size="10" fill="#6b7280">{label}</text>'
        if label
        else ""
    )
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="none" role="img">
{DEFS}
  <rect width="800" height="600" fill="url(#bg)"/>
  <rect width="800" height="600" fill="url(#grid)"/>
{body}
  {tag}
</svg>'''

def chrome(sidebar_items: list[str], title: str, content: str, accent: str = "#FF9900") -> str:
    nav = ""
    for i, item in enumerate(sidebar_items):
        active = ' fill="#21262d" stroke="' + accent + '"' if i == 0 else ' fill="none"'
        nav += f'<rect x="12" y="{72 + i * 36}" width="136" height="28" rx="6"{active} opacity="0.9"/>'
        nav += f'<text x="24" y="{90 + i * 36}" font-family="system-ui,sans-serif" font-size="10" fill="#{"f0f6fc" if i == 0 else "8b949e"}">{item}</text>'
    return f'''
  <rect x="0" y="0" width="160" height="600" fill="url(#sidebar)"/>
  <rect x="160" y="0" width="640" height="48" fill="#161b22" stroke="#30363d" stroke-width="1"/>
  <text x="180" y="30" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#f0f6fc">{title}</text>
  <circle cx="760" cy="24" r="6" fill="{accent}"/>
  {nav}
  <rect x="176" y="64" width="608" height="520" rx="8" fill="#0d1117" stroke="#30363d"/>
  {content}
'''

def bar_chart(x, y, bars: list[tuple[int, str]]) -> str:
    out = ""
    for i, (h, color) in enumerate(bars):
        out += f'<rect x="{x + i * 52}" y="{y + 120 - h}" width="36" height="{h}" rx="4" fill="{color}" opacity="0.9"/>'
    return out

SVGS = {
    "hero-cloud.svg": wrap(
        chrome(
            ["Overview", "EC2", "S3", "VPC", "IAM", "CloudWatch"],
            "AWS Management Console · Multi-Cloud",
            '''
  <text x="200" y="100" font-size="11" fill="#8b949e">Regions · Accounts · Organizations</text>
  <rect x="200" y="120" width="180" height="100" rx="8" fill="#21262d" stroke="#FF9900" stroke-width="2"/>
  <text x="220" y="155" font-size="12" font-weight="700" fill="#FF9900">AWS</text>
  <text x="220" y="175" font-size="9" fill="#8b949e">24 services active</text>
  <rect x="400" y="120" width="180" height="100" rx="8" fill="#21262d" stroke="#0078D4" stroke-width="2"/>
  <text x="420" y="155" font-size="12" font-weight="700" fill="#50e6ff">Azure</text>
  <text x="420" y="175" font-size="9" fill="#8b949e">18 resources</text>
  <rect x="200" y="250" width="560" height="140" rx="8" fill="#161b22" stroke="#30363d"/>
  <text x="220" y="280" font-size="11" fill="#f0f6fc">Cloud Architecture Map</text>
  <circle cx="280" cy="330" r="20" fill="#FF9900" opacity="0.3"/><text x="272" y="335" font-size="8" fill="#f0f6fc">VPC</text>
  <circle cx="400" cy="310" r="24" fill="#0078D4" opacity="0.3"/><text x="388" y="315" font-size="8" fill="#f0f6fc">EKS</text>
  <circle cx="520" cy="340" r="18" fill="#22c55e" opacity="0.3"/><text x="508" y="345" font-size="8" fill="#f0f6fc">RDS</text>
  <line x1="300" y1="330" x2="380" y2="315" stroke="#FF9900" stroke-width="1.5"/>
  <line x1="420" y1="315" x2="500" y2="335" stroke="#50e6ff" stroke-width="1.5"/>
''',
        ),
        "cloud console",
    ),
    "private-cloud.svg": wrap(
        chrome(
            ["VMware Cloud", "Private Cloud", "vCenter", "NSX", "Storage", "Compliance"],
            "Private Cloud · Hybrid Platform",
            '''
  <rect x="200" y="100" width="520" height="200" rx="8" fill="#161b22" stroke="#6366f1" stroke-width="1.5"/>
  <text x="220" y="130" font-size="11" fill="#a5b4fc">Hybrid Cloud Architecture</text>
  <rect x="220" y="150" width="140" height="120" rx="6" fill="#1e1b4b" stroke="#818cf8"/>
  <text x="240" y="185" font-size="10" fill="#c4b5fd">On-Prem DC</text>
  <text x="240" y="205" font-size="9" fill="#8b949e">VMware · OpenStack</text>
  <path d="M370 210 H430" stroke="#FF6B2C" stroke-width="2"/><polygon points="430,210 418,204 418,216" fill="#FF6B2C"/>
  <rect x="440" y="150" width="260" height="120" rx="6" fill="#0f172a" stroke="#22c55e"/>
  <text x="460" y="185" font-size="10" fill="#86efac">Private VPC</text>
  <text x="460" y="205" font-size="9" fill="#8b949e">Encrypted · Isolated</text>
  <rect x="200" y="320" width="520" height="80" rx="6" fill="#21262d"/>
  <text x="220" y="350" font-size="10" fill="#8b949e">Status: Healthy · Compliance: SOC2 aligned</text>
''',
        ),
        "private cloud",
    ),
    "public-cloud.svg": wrap(
        chrome(
            ["Portal", "Subscriptions", "Resources", "Cost", "Advisor", "Monitor"],
            "Microsoft Azure · Public Cloud",
            '''
  <rect x="200" y="95" width="250" height="90" rx="8" fill="#21262d" stroke="url(#azure)" stroke-width="2"/>
  <text x="220" y="125" font-size="13" font-weight="700" fill="#50e6ff">Azure</text>
  <text x="220" y="145" font-size="9" fill="#8b949e">East US · West Europe · APAC</text>
  <rect x="470" y="95" width="250" height="90" rx="8" fill="#21262d" stroke="url(#aws)" stroke-width="2"/>
  <text x="490" y="125" font-size="13" font-weight="700" fill="#FF9900">AWS</text>
  <text x="490" y="145" font-size="9" fill="#8b949e">Multi-region deployment</text>
  <rect x="200" y="210" width="520" height="180" rx="8" fill="#161b22" stroke="#30363d"/>
  <text x="220" y="240" font-size="11" fill="#f0f6fc">Resource Groups</text>
  <rect x="220" y="260" width="480" height="24" rx="4" fill="#21262d"/><text x="230" y="276" font-size="9" fill="#8b949e">prod-web-rg · Running</text>
  <rect x="220" y="292" width="480" height="24" rx="4" fill="#21262d"/><text x="230" y="308" font-size="9" fill="#8b949e">prod-data-rg · Running</text>
  <rect x="220" y="324" width="480" height="24" rx="4" fill="#21262d"/><text x="230" y="340" font-size="9" fill="#8b949e">shared-network · Active</text>
''',
            "#0078D4",
        ),
        "public cloud",
    ),
    "application-modernization.svg": wrap(
        chrome(
            ["Clusters", "Workloads", "Services", "Deployments", "Helm", "Logs"],
            "EKS · Cloud-Native Platform",
            '''
  <text x="200" y="100" font-size="11" fill="#8b949e">Microservices · Kubernetes workloads</text>
  <rect x="200" y="120" width="100" height="70" rx="6" fill="#334155"/><text x="225" y="160" font-size="9" fill="#94a3b8">Legacy</text>
  <path d="M310 155 H360" stroke="#FF9900" stroke-width="2"/><polygon points="360,155 348,149 348,161" fill="#FF9900"/>
  <rect x="370" y="110" width="70" height="45" rx="6" fill="#1e3a5f" stroke="#326ce5"/><text x="385" y="138" font-size="8" fill="#93c5fd">API</text>
  <rect x="455" y="110" width="70" height="45" rx="6" fill="#1e3a5f" stroke="#326ce5"/><text x="468" y="138" font-size="8" fill="#93c5fd">Svc-1</text>
  <rect x="540" y="110" width="70" height="45" rx="6" fill="#1e3a5f" stroke="#326ce5"/><text x="553" y="138" font-size="8" fill="#93c5fd">Svc-2</text>
  <rect x="370" y="170" width="70" height="45" rx="6" fill="#1e3a5f" stroke="#326ce5"/><text x="385" y="198" font-size="8" fill="#93c5fd">Svc-3</text>
  <rect x="455" y="170" width="70" height="45" rx="6" fill="#1e3a5f" stroke="#326ce5"/><text x="468" y="198" font-size="8" fill="#93c5fd">Data</text>
  <rect x="200" y="260" width="520" height="120" rx="8" fill="#161b22" stroke="#30363d"/>
  <text x="220" y="290" font-size="10" fill="#22c55e">● 12 pods running · HPA enabled · GitOps sync</text>
''',
            "#326ce5",
        ),
        "modernization",
    ),
    "finops.svg": wrap(
        chrome(
            ["Cost Explorer", "Budgets", "Reports", "Anomalies", "RI/SP", "Forecast"],
            "AWS Cost Explorer · FinOps",
            '''
  <text x="200" y="100" font-size="11" fill="#8b949e">Last 30 days · All linked accounts</text>
  ''' + bar_chart(200, 120, [(90, "#FF9900"), (70, "#FF9900"), (110, "#f59e0b"), (60, "#22c55e"), (85, "#FF9900"), (95, "#ef4444")]) + '''
  <rect x="200" y="260" width="250" height="100" rx="8" fill="#21262d" stroke="#30363d"/>
  <text x="220" y="290" font-size="22" font-weight="800" fill="#f0f6fc">$124,580</text>
  <text x="220" y="315" font-size="10" fill="#22c55e">↓ 18% vs last month</text>
  <rect x="470" y="260" width="250" height="100" rx="8" fill="#21262d" stroke="#30363d"/>
  <text x="490" y="290" font-size="11" fill="#f0f6fc">Optimization</text>
  <text x="490" y="315" font-size="9" fill="#8b949e">RI coverage: 72%</text>
  <text x="490" y="335" font-size="9" fill="#8b949e">Savings Plans: Active</text>
''',
        ),
        "finops",
    ),
    "cloud-migration.svg": wrap(
        chrome(
            ["Migration Hub", "Servers", "Databases", "Tracking", "Cutover", "Validation"],
            "AWS Migration Hub",
            '''
  <rect x="200" y="110" width="160" height="120" rx="8" fill="#334155" stroke="#64748b"/>
  <text x="230" y="150" font-size="11" fill="#e2e8f0">Source</text>
  <text x="230" y="170" font-size="9" fill="#94a3b8">On-premises</text>
  <path d="M370 170 L450 170" stroke="url(#aws)" stroke-width="3"/>
  <polygon points="450,170 438,164 438,176" fill="#FF9900"/>
  <text x="385" y="155" font-size="9" fill="#FF9900">Migrate</text>
  <rect x="460" y="110" width="260" height="120" rx="8" fill="#21262d" stroke="#FF9900" stroke-width="2"/>
  <text x="490" y="150" font-size="11" fill="#FF9900">AWS Target</text>
  <text x="490" y="170" font-size="9" fill="#8b949e">EC2 · RDS · S3</text>
  <rect x="200" y="270" width="520" height="130" rx="8" fill="#161b22"/>
  <text x="220" y="300" font-size="10" fill="#f0f6fc">Migration Progress</text>
  <rect x="220" y="320" width="400" height="12" rx="6" fill="#21262d"/><rect x="220" y="320" width="320" height="12" rx="6" fill="url(#aws)"/>
  <text x="220" y="355" font-size="10" fill="#22c55e">80% complete · 24 workloads migrated</text>
''',
        ),
        "migration",
    ),
    "cloud-security.svg": wrap(
        chrome(
            ["Security Hub", "GuardDuty", "IAM", "WAF", "Config", "Inspector"],
            "AWS Security Hub",
            '''
  <rect x="200" y="95" width="520" height="60" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="1"/>
  <text x="220" y="130" font-size="11" fill="#fca5a5">2 critical · 5 high · 12 medium findings</text>
  <rect x="200" y="175" width="250" height="200" rx="8" fill="#161b22" stroke="#30363d"/>
  <text x="220" y="205" font-size="11" fill="#f0f6fc">IAM · Access Analyzer</text>
  <rect x="220" y="220" width="200" height="24" rx="4" fill="#21262d"/><text x="230" y="236" font-size="9" fill="#22c55e">MFA enforced</text>
  <rect x="220" y="252" width="200" height="24" rx="4" fill="#21262d"/><text x="230" y="268" font-size="9" fill="#22c55e">Least privilege roles</text>
  <rect x="470" y="175" width="250" height="200" rx="8" fill="#161b22" stroke="#30363d"/>
  <text x="490" y="205" font-size="11" fill="#f0f6fc">Threat Monitoring</text>
  <circle cx="520" cy="250" r="4" fill="#ef4444"/><text x="535" y="254" font-size="9" fill="#8b949e">Alert: Unusual API</text>
  <circle cx="520" cy="280" r="4" fill="#f59e0b"/><text x="535" y="284" font-size="9" fill="#8b949e">GuardDuty finding</text>
''',
        ),
        "security",
    ),
    "kubernetes.svg": wrap(
        chrome(
            ["Clusters", "Nodes", "Workloads", "Services", "Config", "Storage"],
            "Amazon EKS · Kubernetes",
            '''
  <polygon points="460,130 500,150 500,190 460,210 420,190 420,150" fill="#326ce5" opacity="0.3" stroke="#326ce5" stroke-width="2"/>
  <text x="445" y="175" font-size="11" font-weight="700" fill="#93c5fd">EKS</text>
  <rect x="200" y="230" width="120" height="50" rx="6" fill="#1e3a5f" stroke="#326ce5"/><text x="235" y="260" text-anchor="middle" font-size="9" fill="#93c5fd">Pod</text>
  <rect x="340" y="230" width="120" height="50" rx="6" fill="#1e3a5f" stroke="#326ce5"/><text x="375" y="260" text-anchor="middle" font-size="9" fill="#93c5fd">Pod</text>
  <rect x="480" y="230" width="120" height="50" rx="6" fill="#1e3a5f" stroke="#326ce5"/><text x="515" y="260" text-anchor="middle" font-size="9" fill="#93c5fd">Pod</text>
  <rect x="200" y="300" width="520" height="100" rx="8" fill="#161b22" stroke="#30363d"/>
  <text x="220" y="330" font-size="10" fill="#22c55e">Cluster: prod-eks · Nodes: 6 · CPU: 42%</text>
  <text x="220" y="355" font-size="10" fill="#8b949e">Namespaces: 14 · Deployments: 38</text>
''',
            "#326ce5",
        ),
        "kubernetes",
    ),
    "containerization.svg": wrap(
        chrome(
            ["Containers", "Images", "Registries", "Tasks", "ECS", "Fargate"],
            "Container Platform · Docker",
            '''
  <rect x="280" y="100" width="240" height="200" rx="10" fill="#0e7490" opacity="0.15" stroke="#2496ed" stroke-width="2"/>
  <rect x="300" y="130" width="200" height="45" rx="6" fill="#161b22" stroke="#2496ed"/><text x="320" y="158" font-size="10" fill="#7dd3fc">app-container:v2.4</text>
  <rect x="300" y="185" width="200" height="45" rx="6" fill="#161b22" stroke="#2496ed"/><text x="320" y="213" font-size="10" fill="#7dd3fc">api-container:v1.8</text>
  <rect x="300" y="240" width="200" height="45" rx="6" fill="#161b22" stroke="#2496ed"/><text x="320" y="268" font-size="10" fill="#7dd3fc">worker-container:v3.1</text>
  <rect x="200" y="320" width="520" height="80" rx="8" fill="#21262d"/>
  <text x="220" y="355" font-size="10" fill="#8b949e">Registry: ECR · Orchestration: ECS/EKS · Status: Deployed</text>
''',
            "#2496ed",
        ),
        "containers",
    ),
    "disaster-recovery.svg": wrap(
        chrome(
            ["Backup", "Snapshots", "DR", "Replication", "RTO/RPO", "Failover"],
            "Disaster Recovery · Cross-Region",
            '''
  <rect x="200" y="110" width="200" height="90" rx="8" fill="#21262d" stroke="#22c55e"/>
  <text x="230" y="145" font-size="11" fill="#86efac">Primary us-east-1</text>
  <text x="230" y="165" font-size="9" fill="#8b949e">Backup: Enabled</text>
  <path d="M410 155 H490" stroke="#22c55e" stroke-width="2" stroke-dasharray="6 4"/>
  <polygon points="490,155 478,149 478,161" fill="#22c55e"/>
  <text x="430" y="140" font-size="9" fill="#86efac">Replicate</text>
  <rect x="500" y="110" width="220" height="90" rx="8" fill="#21262d" stroke="#22c55e"/>
  <text x="530" y="145" font-size="11" fill="#86efac">DR eu-west-1</text>
  <rect x="200" y="230" width="520" height="150" rx="8" fill="#161b22" stroke="#30363d"/>
  <text x="220" y="260" font-size="11" fill="#f0f6fc">Business Continuity</text>
  <text x="220" y="290" font-size="10" fill="#22c55e">RTO: 15 min · RPO: 5 min · Last test: Passed</text>
  <rect x="220" y="310" width="460" height="12" rx="6" fill="#21262d"/><rect x="220" y="310" width="460" height="12" rx="6" fill="#22c55e" opacity="0.6"/>
''',
        ),
        "dr",
    ),
    "devops-automation.svg": wrap(
        chrome(
            ["Pipelines", "Builds", "Deploy", "IaC", "Terraform", "Artifacts"],
            "CI/CD · DevOps Platform",
            '''
  <rect x="200" y="120" width="90" height="44" rx="6" fill="#21262d" stroke="#FF6B2C"/><text x="230" y="147" text-anchor="middle" font-size="9" fill="#f0f6fc">Build</text>
  <rect x="310" y="120" width="90" height="44" rx="6" fill="#21262d" stroke="#a855f7"/><text x="340" y="147" text-anchor="middle" font-size="9" fill="#f0f6fc">Test</text>
  <rect x="420" y="120" width="90" height="44" rx="6" fill="#21262d" stroke="#22c55e"/><text x="450" y="147" text-anchor="middle" font-size="9" fill="#f0f6fc">Deploy</text>
  <rect x="530" y="120" width="90" height="44" rx="6" fill="#21262d" stroke="#50e6ff"/><text x="560" y="147" text-anchor="middle" font-size="9" fill="#f0f6fc">Monitor</text>
  <path d="M290 142 H310 M400 142 H420 M510 142 H530" stroke="#8b949e" stroke-width="2"/>
  <rect x="200" y="200" width="520" height="160" rx="8" fill="#161b22" stroke="#30363d"/>
  <text x="220" y="230" font-size="11" fill="#f0f6fc">Infrastructure as Code</text>
  <text x="220" y="260" font-family="ui-monospace,monospace" font-size="10" fill="#7ee787">terraform apply · pipeline #1842 ✓</text>
  <text x="220" y="285" font-family="ui-monospace,monospace" font-size="10" fill="#8b949e">gitlab-ci.yml · jenkins · github actions</text>
''',
        ),
        "devops",
    ),
}

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for name, svg in SVGS.items():
        (OUT / name).write_text(svg, encoding="utf-8")
        print("wrote", name)

if __name__ == "__main__":
    main()
