export interface HomeMenuOption {
  id: number;
  url: string;
  label: string;
  color?: string;
}

export const amOptions: HomeMenuOption[] = [
  { id: 1, url: "/requests", label: "Get current requests", color: "primary" },
  { id: 2, url: "/mif_soerf", label: "Generate MIF / SOERF requests", color: "primary" },
  { id: 3, url: "/am_status", label: "Update Material Statuses pre MM", color: "primary" },
  { id: 4, url: "/am_emails", label: "Generate AM Price & PCE requests", color: "primary" },
];

export const pmOptions: HomeMenuOption[] = [
  {
    id: 1,
    url: "/reconcile_pce",
    label: "Reconcile PCE / Update ORG Source",
    color: "secondary",
  },
  {
    id: 2,
    url: "/pm_status",
    label: "Update Material Statuses post MM",
    color: "secondary",
  },
  {
    id: 3,
    url: "/pm_emails",
    label: "Generate PM CCC, Localization & GTS Requests",
    color: "secondary",
  },
];

export const utilOptions: HomeMenuOption[] = [
  { id: 1, url: "/get_sap_data", label: "Download SAP Data", color: "tertiary" },
  { id: 2, url: "/proc_sap_data", label: "Bring SAP Data", color: "tertiary" },
  {
    id: 3,
    url: "/clean_desktop",
    label: "Archive Requests / working dir",
    color: "quaternary",
  },
  {
    id: 4,
    url: "/mif_soerf_check",
    label: "Check for MIF/SOERF submitted",
    color: "quaternary",
  },
  {
    id: 5,
    url: "/check_daily_report",
    label: "Check for the EOD report",
    color: "quaternary",
  },
];
