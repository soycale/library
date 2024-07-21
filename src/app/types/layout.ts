import { Kpi, allKpis } from "./kpi";

export type Layout = {
  id: string;
  name: string;
  description: string;
  amountOfPages: number;
  updated_at: string;
  descriptive_name: string;
  kpis: Kpi[];
};

const [
  kpi1,
  kpi2,
  kpi3,
  kpi4,
  kpi5,
  kpi6,
  kpi7,
  kpi8,
  kpi9,
  kpi10,
  kpi11,
  kpi12,
  kpi13,
  kpi14,
] = allKpis;

const layout1: Layout = {
  id: "LAY001",
  name: "Sales Dashboard",
  description: "A comprehensive dashboard showing sales metrics.",
  amountOfPages: 5,
  updated_at: "2024-07-18T15:00:00Z",
  descriptive_name: "Sales Dashboard Layout",
  kpis: [kpi1, kpi13, kpi6, kpi14],
};

const layout2: Layout = {
  id: "LAY002",
  name: "Marketing Overview",
  description: "Overview of key marketing metrics.",
  amountOfPages: 4,
  updated_at: "2024-07-18T15:00:00Z",
  descriptive_name: "Marketing Overview Layout",
  kpis: [kpi2, kpi8, kpi12],
};

const layout3: Layout = {
  id: "LAY003",
  name: "Customer Insights",
  description: "Insights into customer behavior and satisfaction.",
  amountOfPages: 6,
  updated_at: "2024-07-18T15:00:00Z",
  descriptive_name: "Customer Insights Layout",
  kpis: [kpi4, kpi5, kpi11],
};

const layout4: Layout = {
  id: "LAY004",
  name: "Financial Performance",
  description: "Overview of key financial performance metrics.",
  amountOfPages: 5,
  updated_at: "2024-07-18T15:00:00Z",
  descriptive_name: "Financial Performance Layout",
  kpis: [kpi1, kpi6, kpi7],
};

const layout5: Layout = {
  id: "LAY005",
  name: "HR Dashboard",
  description: "Dashboard showing HR metrics.",
  amountOfPages: 3,
  updated_at: "2024-07-18T15:00:00Z",
  descriptive_name: "HR Dashboard Layout",
  kpis: [kpi9, kpi11],
};

const layout6: Layout = {
  id: "LAY006",
  name: "Product Development",
  description: "Metrics related to product development timelines.",
  amountOfPages: 4,
  updated_at: "2024-07-18T15:00:00Z",
  descriptive_name: "Product Development Layout",
  kpis: [kpi10, kpi3],
};

const layout7: Layout = {
  id: "LAY007",
  name: "Market Analysis",
  description: "Detailed analysis of market share and competition.",
  amountOfPages: 5,
  updated_at: "2024-07-18T15:00:00Z",
  descriptive_name: "Market Analysis Layout",
  kpis: [kpi14, kpi13],
};

const layout8: Layout = {
  id: "LAY008",
  name: "Customer Feedback",
  description: "Analysis of customer feedback and satisfaction.",
  amountOfPages: 4,
  updated_at: "2024-07-18T15:00:00Z",
  descriptive_name: "Customer Feedback Layout",
  kpis: [kpi5, kpi11],
};


export const allLayouts: Layout[] = [
  layout1,
  layout2,
  layout3,
  layout4,
  layout5,
  layout6,
  layout7,
  layout8,
];