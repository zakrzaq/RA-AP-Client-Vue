import { HomeMenuOption } from "@/data/HomeMenuOptions"

export const sapLinks: HomeMenuOption[] = [
  // { id: 1, label: 'AP LOG', url: '/open_log', color: 'quaternary' },
  { id: 2, label: "SAP", url: "/open_sap", color: "quaternary" },
  { id: 3, label: "SALES_TEXT", url: "/single_sap?table=text", color: "tertiary" },
  { id: 4, label: "MARA", url: "/single_sap?table=mara", color: "tertiary" },
  { id: 5, label: "MARC", url: "/single_sap?table=marc", color: "tertiary" },
  { id: 6, label: "MVKE", url: "/single_sap?table=mvke", color: "tertiary" },
  { id: 7, label: "AUSP", url: "/single_sap?table=ausp", color: "tertiary" },
  { id: 8, label: "MLAN", url: "/single_sap?table=mlan", color: "tertiary" },
  { id: 9, label: "PRICE", url: "/single_sap?table=price", color: "tertiary" },
  { id: 10, label: "GTS", url: "/single_sap?table=gts", color: "tertiary" },
];
