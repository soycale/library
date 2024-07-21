import { DataViz, allDataViz } from "./dataViz";

export type Storyboard = {
  id: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
  author: string;
  access_requested: boolean;
  descriptive_name: string;
  data_viz: DataViz[];
};

const [
  dataViz1,
  dataViz2,
  dataViz3,
  dataViz4,
  dataViz5,
  dataViz6,
  dataViz7,
  dataViz8,
  dataViz9,
  dataViz10,
  dataViz13,
  dataViz14,
] = allDataViz;

const storyboard1: Storyboard = {
  id: "SB001",
  title: "Q2 Financial Overview",
  description: "An overview of key financial metrics for Q2.",
  created_at: "2024-07-18T15:00:00Z",
  updated_at: "2024-07-18T15:00:00Z",
  author: "Juan Perez",
  access_requested: false,
  descriptive_name: "Q2 Financial Overview Storyboard",
  data_viz: [dataViz1, dataViz6, dataViz7],
};

const storyboard2: Storyboard = {
  id: "SB002",
  title: "Customer Insights",
  description: "Insights into customer behavior and satisfaction.",
  created_at: "2024-07-18T15:00:00Z",
  updated_at: "2024-07-18T15:00:00Z",
  author: "Maria Garcia",
  access_requested: true,
  descriptive_name: "Customer Insights Storyboard",
  data_viz: [dataViz4, dataViz5, dataViz9],
};

const storyboard3: Storyboard = {
  id: "SB003",
  title: "Marketing Performance",
  description: "Analysis of marketing KPIs and conversion rates.",
  created_at: "2024-07-18T15:00:00Z",
  updated_at: "2024-07-18T15:00:00Z",
  author: "Carlos Lopez",
  access_requested: false,
  descriptive_name: "Marketing Performance Storyboard",
  data_viz: [dataViz2, dataViz8, dataViz10],
};

const storyboard4: Storyboard = {
  id: "SB004",
  title: "Employee Metrics",
  description: "Key metrics related to employee turnover and satisfaction.",
  created_at: "2024-07-18T15:00:00Z",
  updated_at: "2024-07-18T15:00:00Z",
  author: "Ana Martinez",
  access_requested: true,
  descriptive_name: "Employee Metrics Storyboard",
  data_viz: [dataViz9, dataViz5],
};

const storyboard5: Storyboard = {
  id: "SB005",
  title: "Product Development Analysis",
  description: "Metrics and analysis of product development timelines.",
  created_at: "2024-07-18T15:00:00Z",
  updated_at: "2024-07-18T15:00:00Z",
  author: "Luis Rodriguez",
  access_requested: false,
  descriptive_name: "Product Development Analysis Storyboard",
  data_viz: [dataViz10, dataViz3],
};

const storyboard6: Storyboard = {
  id: "SB006",
  title: "Market Share Analysis",
  description: "Analysis of market share and competitive positioning.",
  created_at: "2024-07-18T15:00:00Z",
  updated_at: "2024-07-18T15:00:00Z",
  author: "Sofia Hernandez",
  access_requested: false,
  descriptive_name: "Market Share Analysis Storyboard",
  data_viz: [dataViz14, dataViz13],
};

export const allStoryboards: Storyboard[] = [
  storyboard1,
  storyboard2,
  storyboard3,
  storyboard4,
  storyboard5,
  storyboard6,
];