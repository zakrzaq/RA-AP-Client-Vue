import { HomeMenuOption } from "@/data/HomeMenuOptions";

export const sapLinks: HomeMenuOption[] = [
  // { id: 1, label: 'AP LOG', url: '/open_log', color: 'secondary' },
  { id: 2, label: "SAP", url: "/open_sap", color: "secondary" },
  {
    id: 3,
    label: "SALES_TEXT",
    url: "/single_sap?table=text",
    color: "primary",
  },
  { id: 4, label: "MARA", url: "/single_sap?table=mara", color: "primary" },
  { id: 5, label: "MARC", url: "/single_sap?table=marc", color: "primary" },
  { id: 6, label: "MVKE", url: "/single_sap?table=mvke", color: "primary" },
  { id: 7, label: "AUSP", url: "/single_sap?table=ausp", color: "primary" },
  { id: 8, label: "MLAN", url: "/single_sap?table=mlan", color: "primary" },
  { id: 9, label: "PRICE", url: "/single_sap?table=price", color: "primary" },
  { id: 10, label: "GTS", url: "/single_sap?table=gts", color: "primary" },
];
