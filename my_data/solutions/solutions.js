import { ROUTE } from "@/route/app_routes.js";

// SmartTech Solutions holds formal implementation-partner status for Odoo
// and Zoho only (`isPartner: true`). For NetSuite, SAP Business One, and
// Dynamics 365 Business Central we are hands-on implementation specialists
// without a formal partner certification — copy for those three must never
// claim "partner" status. This is the single source of truth for the
// Solutions nav dropdown (name/icon/href only) and the 5 solution pages.
export const SOLUTIONS = [
  {
    slug: "netsuite",
    href: ROUTE.netsuite_solution,
    name: "NetSuite",
    fullName: "Oracle NetSuite",
    icon: "feather-cloud",
    accent: "39,120,255",
    isPartner: false,
    heroImage: "/app_images/solutions/netsuite.webp",
    eyebrow: "Oracle NetSuite Implementation Specialists",
    heroTitle: "Run finance, inventory, and operations on one cloud ERP",
    heroDesc:
      "SmartTech Solutions implements Oracle NetSuite — the cloud ERP built for growing businesses that have outgrown spreadsheets and disconnected tools.",
    about:
      "NetSuite is Oracle's cloud-based ERP suite, unifying financial management, inventory, order management, and CRM in a single system used by tens of thousands of growing businesses worldwide.",
    stats: [
      { value: "1", label: "Unified system of record" },
      { value: "Real-time", label: "Financial visibility" },
      { value: "100%", label: "Cloud-native, no servers to manage" },
    ],
    capabilities: [
      { title: "Financial management", desc: "General ledger, AP/AR, and real-time financial reporting in one place." },
      { title: "Inventory & order management", desc: "Multi-location inventory visibility and automated order workflows." },
      { title: "CRM & sales", desc: "Pipeline, quoting, and customer data connected directly to fulfillment and billing." },
      { title: "Custom workflows & SuiteScript", desc: "Automation and custom logic built on NetSuite's native scripting platform." },
      { title: "Data migration", desc: "Clean, validated migration from your legacy systems with zero data loss." },
      { title: "Integrations", desc: "Connect NetSuite to your existing ecommerce, payment, and internal tools." },
    ],
    whyPoints: [
      "Certified implementation experience across financials, inventory, and CRM modules",
      "Custom SuiteScript and workflow automation, not just default configuration",
      "Careful, validated data migration from legacy systems",
      "Ongoing support after go-live, not just a handoff",
      "Integration experience connecting NetSuite to the tools you already run",
    ],
    faqs: [
      { q: "How long does a NetSuite implementation take?", a: "Timelines vary by scope, but a focused financials + inventory rollout typically runs 8-16 weeks; a full multi-module implementation can take longer. We scope this precisely during discovery." },
      { q: "Can you migrate our data from QuickBooks or another legacy system?", a: "Yes — data migration and validation from legacy accounting and ERP systems is a core part of every NetSuite engagement we run." },
      { q: "Do you customize NetSuite with SuiteScript?", a: "Yes — where native configuration isn't enough, we build custom SuiteScript workflows and scripts tailored to your specific processes." },
      { q: "Do you provide support after go-live?", a: "Yes — we offer ongoing support and optimization after launch, since real usage patterns often surface refinements native configuration alone won't catch." },
    ],
  },
  {
    slug: "sap-business-one",
    href: ROUTE.sap_solution,
    name: "SAP Business One",
    fullName: "SAP Business One",
    icon: "feather-briefcase",
    accent: "0,112,242",
    isPartner: false,
    heroImage: "/app_images/solutions/sap.webp",
    eyebrow: "SAP Business One Implementation Specialists",
    heroTitle: "Enterprise-grade ERP, sized for small and midsize business",
    heroDesc:
      "SmartTech Solutions implements SAP Business One — SAP's ERP built specifically for small and midsize businesses that need enterprise discipline without enterprise complexity.",
    about:
      "SAP Business One is SAP's ERP solution purpose-built for small and midsize businesses, covering financials, sales, inventory, and production planning in a single integrated system, available on-premise or in the cloud.",
    stats: [
      { value: "1", label: "System across finance & operations" },
      { value: "On-prem or cloud", label: "Deployment flexibility" },
      { value: "SME-focused", label: "Built for growing teams" },
    ],
    capabilities: [
      { title: "Financial management", desc: "Accounting, budgeting, and banking in one connected module." },
      { title: "Sales & customer management", desc: "Opportunity tracking, quoting, and order management in one pipeline." },
      { title: "Purchasing & inventory", desc: "Procurement and multi-warehouse inventory control with real-time visibility." },
      { title: "Production planning", desc: "Bill-of-materials and production order management for manufacturers." },
      { title: "Reporting & analytics", desc: "Built-in dashboards and SAP Crystal Reports integration." },
      { title: "Custom add-ons", desc: "Tailored extensions built on the SAP Business One SDK where standard modules aren't enough." },
    ],
    whyPoints: [
      "Implementation experience across financials, sales, and inventory modules",
      "Deployment flexibility — on-premise or cloud-hosted, based on your needs",
      "Custom add-on development on the SAP Business One SDK",
      "Structured onboarding and staff training, not just a system handoff",
      "Ongoing support tuned to how your team actually works day to day",
    ],
    faqs: [
      { q: "Is SAP Business One right for a small business, or only larger companies?", a: "SAP Business One was purpose-built for small and midsize businesses — it brings SAP's enterprise discipline in a package sized and priced for growing teams, not large enterprises." },
      { q: "Cloud or on-premise — which do you recommend?", a: "It depends on your IT resources and compliance needs; we walk through both options during discovery and recommend based on your specific constraints, not a one-size-fits-all default." },
      { q: "Can you build custom add-ons for our specific workflow?", a: "Yes — where standard modules don't fully match your process, we build custom extensions on the SAP Business One SDK." },
      { q: "Do you handle staff training after implementation?", a: "Yes — structured onboarding and training for your team is part of our standard implementation process, not an optional extra." },
    ],
  },
  {
    slug: "zoho-crm",
    href: ROUTE.zoho_solution,
    name: "Zoho CRM",
    fullName: "Zoho CRM & Zoho One",
    icon: "feather-users",
    accent: "196,42,50",
    isPartner: true,
    heroImage: "/app_images/solutions/zoho.webp",
    eyebrow: "Certified Zoho Implementation Partner",
    heroTitle: "A CRM your sales team will actually use",
    heroDesc:
      "SmartTech Solutions implements and customizes Zoho CRM — and the wider Zoho One suite — turning an out-of-the-box tool into a system shaped around how your team actually sells.",
    about:
      "Zoho CRM is part of Zoho's broader Zoho One suite of 45+ business apps spanning sales, marketing, finance, and HR. We implement Zoho CRM as a standalone system or as part of a wider Zoho One rollout, depending on what your business needs.",
    stats: [
      { value: "45+", label: "Apps available in Zoho One" },
      { value: "Custom", label: "Pipelines & automation" },
      { value: "Connected", label: "Sales, support & marketing data" },
    ],
    capabilities: [
      { title: "Custom pipeline setup", desc: "Sales stages, fields, and deal flow configured around your actual process." },
      { title: "Workflow automation", desc: "Automated lead routing, follow-ups, and approval flows using Zoho's automation engine." },
      { title: "Zoho One suite rollout", desc: "Extend beyond CRM into Zoho Books, Zoho Desk, Zoho Campaigns, and more." },
      { title: "Custom functions & integrations", desc: "Deluge scripting and API integrations connecting Zoho to your other tools." },
      { title: "Data migration", desc: "Clean import from spreadsheets or a legacy CRM with deduplication and validation." },
      { title: "Reporting dashboards", desc: "Sales and pipeline reporting built around the KPIs your leadership actually tracks." },
    ],
    whyPoints: [
      "Implementation experience across Zoho CRM and the wider Zoho One suite",
      "Custom automation built with Zoho's Deluge scripting, not just default rules",
      "Clean data migration from spreadsheets or legacy CRM systems",
      "Integration experience connecting Zoho to your existing marketing and support tools",
      "Ongoing optimization as your sales process evolves",
    ],
    faqs: [
      { q: "Should we start with just Zoho CRM or the full Zoho One suite?", a: "Most teams start with Zoho CRM and expand into Zoho One (books, desk, campaigns, and more) once the core sales process is dialed in — we help you sequence this instead of over-buying up front." },
      { q: "Can you migrate our data from Salesforce or HubSpot?", a: "Yes — full data migration with deduplication and validation from another CRM is a standard part of a Zoho implementation." },
      { q: "Do you build custom automation, not just standard workflows?", a: "Yes — where Zoho's built-in automation isn't enough, we write custom Deluge functions and API integrations to match your exact process." },
      { q: "Can Zoho CRM connect to our marketing and support tools?", a: "Yes — we regularly integrate Zoho CRM with marketing, support, and finance tools so your team works from one connected customer view." },
    ],
  },
  {
    slug: "odoo",
    href: ROUTE.odoo_solution,
    name: "Odoo",
    fullName: "Odoo ERP",
    icon: "feather-grid",
    accent: "113,75,229",
    isPartner: true,
    heroImage: "/app_images/solutions/odoo.webp",
    eyebrow: "Certified Odoo Implementation Partner",
    heroTitle: "One modular ERP that grows one app at a time",
    heroDesc:
      "SmartTech Solutions implements and customizes Odoo — the open-source, modular ERP that lets you start with what you need today and add modules as your business grows.",
    about:
      "Odoo is an open-source suite of business applications covering CRM, accounting, inventory, manufacturing, HR, and ecommerce — all natively integrated, so businesses can adopt exactly the modules they need without paying for what they don't.",
    stats: [
      { value: "40+", label: "Natively integrated apps" },
      { value: "Modular", label: "Adopt only what you need" },
      { value: "Open-source", label: "Fully customizable core" },
    ],
    capabilities: [
      { title: "Module selection & rollout", desc: "Sales, inventory, accounting, manufacturing, HR — implemented in the order that matters to you first." },
      { title: "Custom module development", desc: "New Odoo modules built in Python when standard apps don't cover your workflow." },
      { title: "Data migration", desc: "Structured migration from spreadsheets or a legacy system into Odoo's data model." },
      { title: "Third-party integrations", desc: "Connect Odoo to your ecommerce platform, payment gateway, or existing tools." },
      { title: "Workflow automation", desc: "Automated approvals, notifications, and business rules across modules." },
      { title: "Ongoing customization", desc: "Odoo evolves with your business — we keep building as new needs surface." },
    ],
    whyPoints: [
      "Implementation experience across Odoo's sales, inventory, accounting, and manufacturing apps",
      "Custom Python module development for workflows standard apps don't cover",
      "Open-source flexibility — no vendor lock-in on core functionality",
      "Phased rollout strategy so you're not paying for modules you don't need yet",
      "Ongoing development as your processes and headcount grow",
    ],
    faqs: [
      { q: "Do we have to implement all of Odoo's modules at once?", a: "No — Odoo's modular design means you can start with just accounting and inventory, for example, and add CRM, manufacturing, or HR modules later without disrupting what's already running." },
      { q: "Can you build custom modules if Odoo doesn't cover our exact process?", a: "Yes — we build custom Odoo modules in Python when the standard apps don't fully match your workflow." },
      { q: "Is Odoo a good fit for a manufacturing business?", a: "Yes — Odoo's Manufacturing app handles bill-of-materials, work orders, and production planning, and we've implemented it for production-focused businesses." },
      { q: "Can you migrate us off our current accounting software into Odoo?", a: "Yes — structured, validated data migration from your existing system is a standard part of every Odoo implementation we run." },
    ],
  },
  {
    slug: "dynamics-365-business-central",
    href: ROUTE.dynamics_365_bc_solution,
    name: "Dynamics 365 Business Central",
    fullName: "Microsoft Dynamics 365 Business Central",
    icon: "feather-pie-chart",
    accent: "0,164,111",
    isPartner: false,
    heroImage: "/app_images/solutions/dynamics365.webp",
    eyebrow: "Microsoft Dynamics 365 Implementation Specialists",
    heroTitle: "ERP that lives inside the Microsoft tools your team already uses",
    heroDesc:
      "SmartTech Solutions implements Microsoft Dynamics 365 Business Central — cloud ERP for small and midsize businesses, deeply integrated with Excel, Outlook, and the Power Platform.",
    about:
      "Dynamics 365 Business Central is Microsoft's cloud ERP for small and midsize businesses, covering finance, sales, service, and operations — with native integration into Excel, Outlook, Teams, and Power BI that most ERPs can't match.",
    stats: [
      { value: "Native", label: "Excel, Outlook & Teams integration" },
      { value: "Power Platform", label: "Ready — Power BI, Power Automate" },
      { value: "Cloud or hybrid", label: "Deployment options" },
    ],
    capabilities: [
      { title: "Financial management", desc: "General ledger, budgeting, and financial reporting connected directly to Excel." },
      { title: "Sales & service management", desc: "Quote-to-cash workflows and customer service case tracking in one system." },
      { title: "Supply chain & inventory", desc: "Demand forecasting, procurement, and warehouse management." },
      { title: "Power Platform integration", desc: "Power BI dashboards and Power Automate workflows built directly on your ERP data." },
      { title: "Custom extensions (AL language)", desc: "Custom functionality built with Microsoft's modern AL extension model." },
      { title: "Data migration", desc: "Migration from Dynamics NAV, GP, or other legacy systems." },
    ],
    whyPoints: [
      "Implementation experience across finance, sales, and supply chain modules",
      "Deep Power Platform integration — Power BI reporting and Power Automate workflows",
      "Custom AL-language extensions where standard configuration isn't enough",
      "Migration experience from Dynamics NAV, GP, and other legacy ERPs",
      "Training built around tools your team already knows — Excel, Outlook, Teams",
    ],
    faqs: [
      { q: "We're migrating from Dynamics NAV or GP — can you help?", a: "Yes — migrating from Dynamics NAV, GP, or another legacy ERP into Business Central is one of the most common engagements we run." },
      { q: "Does Business Central really integrate with Excel and Outlook?", a: "Yes — natively. You can edit data directly in Excel and sync it back, and Outlook integration surfaces customer and sales data right inside your inbox." },
      { q: "Can you connect Business Central to Power BI for reporting?", a: "Yes — we build Power BI dashboards directly on your Business Central data, alongside Power Automate workflows where useful." },
      { q: "Do you build custom extensions if we need something Business Central doesn't do out of the box?", a: "Yes — we build custom AL-language extensions for functionality that falls outside standard configuration." },
    ],
  },
];

export const getSolutionBySlug = (slug) => SOLUTIONS.find((s) => s.slug === slug);
