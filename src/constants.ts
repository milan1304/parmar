import { 
  Server, 
  Network, 
  Shield, 
  Cloud, 
  Smartphone, 
  Key, 
  Users, 
  Database, 
  Mail, 
  Globe 
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Milan Parmar",
  title: "IT Infrastructure and Systems Engineer",
  phone: "226-346-2570",
  email: "parmar.milan13@gmail.com",
  address: "Cloverdale, BC",
  summary: "Experienced Systems Administrator/Engineer with 10 years of experience in managing servers, networks, virtualization, cloud migrations, and backups in large and medium size enterprises. Expert skills to manage M365 Admin Centers such as Teams, M365, SharePoint, Exchange Online, Entra and Defender. Specialized in handling various firewalls and VPN including site-to-site tunnel (IPSec) and SSL-VPN (Cisco Meraki, Paloalto, FortiGate), L2/L3 Switches, VoIP and access points. Demonstrated expertise in the Azure environment, Applications integration, Azure AD (Entra). Additionally, highly skilled in configuring, monitoring, and managing virtual environments such as Azure, Citrix, VMWare, and Hyper-V. Possesses advanced knowledge in security applications, including TrendMicro, Defender, Proofpoint, Barracuda, and AppRiver."
};

export const SKILLS_DATA = [
  {
    category: "Windows Server",
    icon: Server,
    description: "Windows server upgrades from 2012 to 2019/2022, including migrating and configuring roles such as Active Directory, PS Scripting, File Server (SMB), DNS, DHCP, Terminal (RDS), DFS, group policies (GPO) and Azure AD Connect."
  },
  {
    category: "Virtualization",
    icon: Database,
    description: "Created and managed Hyper-V with failover cluster nodes, VMs, SET. Configured and managed VMware ESXi hosts (over 15 hosts and 650 VMs) and VCSA with clustering. VMware migration from vSphere 5.5 to 6.7 and then to 7."
  },
  {
    category: "Firewall & Security",
    icon: Shield,
    description: "Setup new and upgraded firewalls (Paloalto, FortiGate, SonicWall). Created firewall policies, NAT/PAT, LACP, BGP, SD-WAN, DHCP, LDAP/SAML SSO, security profiles, VPN tunnels (L2TP, IPSec, SSLVPN). Implemented cloud security policies for MFA, Passwordless keys, and geo-blocking."
  },
  {
    category: "Networking",
    icon: Network,
    description: "Configured managed switches, SNMP, VLANs, tags, port mirroring and trunk/access ports. Experience with Aruba, UniFi, Cisco. Configured WiFi channels for APs to avoid conflicts and optimize performance."
  },
  {
    category: "Cloud (Azure/M365)",
    icon: Cloud,
    description: "Azure storage, VMs, RBAC, ExpressRoute, Sentinel, API integration, Microsoft Graph, vNet. Managed Exchange Online, Entra admin with B2B cross-tenant sync. Teams & M365 Migrations."
  },
  {
    category: "MDM / Intune",
    icon: Smartphone,
    description: "ABM, SCCM, Defender, EDR/XDR and managed policies. Handled Intune project of over 1000 devices, configured Configuration & Compliance policies."
  },
  {
    category: "SSO & Auth",
    icon: Key,
    description: "Setup SAML authentication from Entra IdP to authenticate FortiGate VPN users. Implemented robust SSO solutions."
  },
  {
    category: "Communication",
    icon: Users,
    description: "Microsoft Teams Migration for over 300 users from RingCentral/3CX. Setup auto-attendants, service accounts, and call queues."
  },
  {
    category: "SharePoint",
    icon: Globe,
    description: "Migration from Dropbox and on-prem file servers. Managed highly complex SharePoint environments with complex user permissions for 800+ sites. Automated tasks via Entra queries."
  },
  {
    category: "Email Defense",
    icon: Mail,
    description: "Setup and configured email defense such as Proofpoint, Barracuda. M365 email migration from IMAP (cPanel), Gmail, and Exchange."
  }
];

export const EXPERIENCE_DATA = [
  {
    company: "Yukon Hospitals Corporation (contract)",
    role: "IT Infrastructure Engineer / Network Analyst",
    period: "07/24 - 10/24",
    highlights: [
      "Delivered Tier 3/4 configuration and support for Cisco ecosystem (VoIP, CUCM, CMX, UCS) and VMware across three locations.",
      "Spearheaded storage migration from legacy EMC Isilon systems.",
      "Led MS365 Intune and Defender migration for 1000+ devices using hybrid Azure AD join and GPO.",
      "Managed virtual infrastructure of 600+ VMs on VMware (15+ hosts).",
      "Executed advanced networking configurations (STP, VLANs, HSRP) on Catalyst core switches.",
      "Collaborated on AP replacement project deploying 180+ access points."
    ]
  },
  {
    company: "Cloud9 Solutions (MSP)",
    role: "L2/L3 IT Systems Administrator (Systems Engineer)",
    period: "10/23 - 06/24",
    highlights: [
      "Provided support for escalated L2/L3 tickets and IT Infrastructure.",
      "Azure cloud management: VMs, Storage, vNet.",
      "Planned and designed IT infrastructures including firewalls, switches, and servers.",
      "Extensive support for M365 products: Teams, Exchange, SharePoint, Defender, Intune, Entra.",
      "Upgraded and secured firewalls: Palo Alto, FortiGate, Cisco Meraki, SonicWall.",
      "Setup Site-to-site VPN and SSL-VPN with SAML SSO."
    ]
  },
  {
    company: "Third Octet Inc (MSP)",
    role: "Systems Administrator",
    period: "05/22 - 08/23",
    highlights: [
      "Provided IT support for Accounting, Law firms, and Manufacturing clients.",
      "Managed Cisco Meraki and SonicWall firewalls.",
      "Managed Cisco Switches, CUCM, VoIP, and ISE.",
      "Configured EMC storage, UCS server, HP Nimble.",
      "Email defense: Barracuda, Microsoft Defender.",
      "Cloud migration from on-prem servers to Office 365."
    ]
  },
  {
    company: "Infinus Technology, BMC Networks (MSP)",
    role: "Sr Systems Administrator",
    period: "12/21 - 04/23",
    highlights: [
      "Provided Tier 2/3 IT support and handled Infrastructure projects.",
      "Implemented SSO using ADFS and Azure, reducing unauthorized access by 50%.",
      "Managed Office 365, Azure AD, on-prem ADDS, DNS records/zones.",
      "Managed SharePoint online permissions and subsite creation.",
      "Email server setup and troubleshooting (Exchange Online, on-prem, cPanel)."
    ]
  },
  {
    company: "CareIT Computer Services (MSP)",
    role: "IT Specialist",
    period: "07/17 - 11/21",
    highlights: [
      "Managed VMware and Hyper-V environments.",
      "Windows Server Administration: DHCP, AD, DNS, SMTP, IIS, RDS, GPO.",
      "Firewall administration (Sophos, Fortinet, SonicWall).",
      "MFA implementation and O365 account setup.",
      "Setup Azure AD and on-prem domain sync."
    ]
  },
  {
    company: "Gorilla IT Services (MSP)",
    role: "Manager, IT Support Technician",
    period: "05/15 - 06/17",
    highlights: [
      "Hardware and software IT support for electronics.",
      "Managed Windows server, AD diagnosis/troubleshooting.",
      "VLAN creation and LAN/WAN administration.",
      "Retail store management and team leadership."
    ]
  }
];

export const EDUCATION_DATA = [
  {
    school: "Lambton College of Applied Arts and Technology",
    location: "Sarnia, ON",
    degree: "Information Technology Professional, Post Graduate",
    subtitle: "ICTC National IT Post Graduate Certificate",
    year: "2013 - 2015"
  },
  {
    school: "Charotar University of Science and Technology",
    location: "GU, India",
    degree: "Electronic & Communication Engineering",
    subtitle: "Bachelor of Technology",
    year: "2009 - 2013"
  }
];

export const CERTIFICATIONS_DATA = [
  "Microsoft 365 Certified: Administrator Expert",
  "Microsoft Certified: Azure Administrator",
  "Microsoft 365 Certified: Teams Administrator",
  "Fortinet Certified: Associate in Cybersecurity",
  "Microsoft Certified Professional",
  "Certified Server Virtualization with Windows Server Hyper-V & System Center (SCCM)",
  "Microsoft Certified: Windows Server Administrator",
  "CompTIA Certified: CompTIA Project+"
];
