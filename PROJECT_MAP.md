# PROJECT_MAP.md — Living Project Index (Nexiiva)

## 1. Project Overview & Brand Identity
- **Product**: Nexiiva — Operator Training Simulator (OTS) for refining, petrochemicals, and gas processing facilities.
- **Core Purpose**: Operators practice start-ups, upsets, and shutdowns on dynamic virtual units so errors happen in training and not at the live plant.
- **Brand Colors**:
  - Primary Logo Sky-Blue: `#0084D3` / `#0284C7`
  - Deep Navy Accent: `#101622`
  - Subtle Surface: `#F8FBFE` / `#FFFFFF`
  - Line Border: `#E3E8EE`
  - Signal Amber (Alarm): `#F69D0B` / `#F59E0B`
  - WhatsApp Emerald: `#006145` / `#10B981`
- **Official Contacts**:
  - WhatsApp: `01004131154` (`+201004131154`)
  - Email: `Mostafa.adel.esmaiel@gmail.com`
  - Location: Cairo / Alexandria, Egypt

---

## 2. Routing Table & Page Structure
| Route | Type | Description |
|---|---|---|
| `/[locale]` | Dynamic (SSG) | Homepage featuring Hero with Process Schematic, Live Demo Video, Operational Impact, About Experience, Team, Products Gallery with Lightbox, 3 Plans (Pilot / On-Prem / Cloud), and Direct Contact |
| `/[locale]/solutions` | Dynamic (SSG) | Solutions & Simulation Suite (OTS, OTS Builder, Instructor Console, SOP Certification) |
| `/[locale]/pilot` | Dynamic (SSG) | Industrial Pilot Programme details, qualification criteria, and scoping FAQ |
| `/[locale]/platform` | Dynamic (SSG) | Dynamic calculation engine, 1:1 DCS console emulation & thermodynamic architecture |
| `/[locale]/about` | Dynamic (SSG) | Company genesis story, founding leadership profiles, and mission |
| `/[locale]/industries` | Dynamic (SSG) | Supported industry domains (Refining, Gas Processing, Petrochemicals, Institutes) |
| `/[locale]/insights` | Dynamic (SSG) | Engineering technical articles and operational case studies |
| `/[locale]/insights/[slug]` | Dynamic (SSG) | MDX article reader with KaTeX and reading-time estimates |
| `/[locale]/contact` | Dynamic (SSG) | Standalone Contact & Booking page |
| `/[locale]/investors` | Dynamic (SSG) | Pre-revenue deck, commercial traction milestones & regional energy TAM |
| `/api/lead` | Route Handler (API) | Lead capturing endpoint for inquiries & pilots |

---

## 3. Component Registry (`src/components/`)
| Component | Path | Responsibility |
|---|---|---|
| `Header` | `src/components/Header.tsx` | Sticky navbar with logo, smooth section hash navigation, language toggle (`EN`/`عربي`), WhatsApp quick button, mobile menu |
| `Footer` | `src/components/Footer.tsx` | Minimalist footer with legal links, contact metadata, and copyright |
| `HeroSection` | `src/components/home/HeroSection.tsx` | Process Training Simulator Hero with distillation column schematic, high level alarm, PIC-101 trend, and primary CTAs |
| `DemoSection` | `src/components/home/DemoSection.tsx` | Interactive video player with language toggle (EN `x400rPgBSo4` / AR `hYILfbdodzQ`) |
| `ImpactSection` | `src/components/home/ImpactSection.tsx` | Operational impact ("How it helps"): 3 direct value statements with border accents |
| `AboutSection` | `src/components/home/AboutSection.tsx` | "Built with real plant experience": grounded founders' operational background |
| `TeamSection` | `src/components/home/TeamSection.tsx` | Leadership & founders: Mostafa Adel (CEO), Mohamed Osman (CTO), Gehad Ashraf, Rodayna Emam |
| `ProductsSection` | `src/components/home/ProductsSection.tsx` | Nexiiva OTS product showcase with 5-image screenshot gallery, lightbox zoom, and OTS Builder roadmap |
| `PlansSection` | `src/components/home/PlansSection.tsx` | 3 clear plans: Pilot (3 months), On-premises license, Cloud license |
| `ContactSection` | `src/components/home/ContactSection.tsx` | Interactive booking form with 5 interests (`Demo`, `Pilot`, `On-premises`, `Cloud`, `Not sure yet`), WhatsApp and Email integration |
| `Lightbox` | `src/components/Lightbox.tsx` | Full-screen image modal for inspecting process screenshots |

---

## 4. State & Data Flow
- **Localization**: Handled by `next-intl` reading `content/messages/en.json` and `content/messages/ar.json`.
- **Direction**: Automatic `dir="ltr"` for `/en` and `dir="rtl"` for `/ar`.
- **Form Actions**: Selection of any plan in `PlansSection` automatically populates the `I'm interested in` dropdown in `ContactSection` and smoothly scrolls into view.
- **Direct Communication**: One-click WhatsApp link directly opens WhatsApp with pre-composed inquiry details.

---

## 5. Changelog
- **v8.0.0 (Current)**: Aligned site design, content, and section rhythm with `nexiiva-site-v8.html`. Extracted 5 high-res WebP screenshots, integrated interactive video player with language switcher, consolidated commercial tiers (Pilot / On-prem / Cloud), and preserved zero-AI authentic industrial engineering tone.
