import { Kpi, allKpis } from "./kpi";
import { Chart } from "./enums";

export type DataViz = {
  id: string;
  kpi: Kpi;
  type: string;
  context: string;
  data: any[];
  chart_type: Chart;
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

const dataViz1: DataViz = {
  id: "DV001",
  kpi: kpi1,
  type: "Time Series",
  context: "Shows the revenue growth over the last quarter.",
  data: [
    { date: "2024-04-01", value: 1000 },
    { date: "2024-05-01", value: 1500 },
    { date: "2024-06-01", value: 1200 },
  ],
  chart_type: Chart.LINE_CHART,
};

const dataViz2: DataViz = {
  id: "DV002",
  kpi: kpi2,
  type: "Distribution",
  context: "Breakdown of customer acquisition cost.",
  data: [
    { category: "Advertising", value: 5000 },
    { category: "Salaries", value: 3000 },
    { category: "Software", value: 2000 },
  ],
  chart_type: Chart.PIE_CHART,
};

const dataViz3: DataViz = {
  id: "DV003",
  kpi: kpi3,
  type: "Projection",
  context: "Projects the customer lifetime value based on historical data.",
  data: [
    { year: 2021, value: 1000 },
    { year: 2022, value: 1500 },
    { year: 2023, value: 2000 },
  ],
  chart_type: Chart.BAR_CHART,
};

const dataViz4: DataViz = {
  id: "DV004",
  kpi: kpi4,
  type: "Percentage",
  context: "Shows the churn rate over the past year.",
  data: [
    { month: "January", value: 5 },
    { month: "February", value: 4.5 },
    { month: "March", value: 4 },
  ],
  chart_type: Chart.LINE_CHART,
};

const dataViz5: DataViz = {
  id: "DV005",
  kpi: kpi5,
  type: "Customer Feedback",
  context: "Displays the Net Promoter Score (NPS) for Q2.",
  data: [
    { category: "Promoters", value: 70 },
    { category: "Passives", value: 20 },
    { category: "Detractors", value: 10 },
  ],
  chart_type: Chart.BAR_CHART,
};

const dataViz6: DataViz = {
  id: "DV006",
  kpi: kpi6,
  type: "Financial",
  context: "Shows the gross margin for the fiscal year.",
  data: [
    { quarter: "Q1", value: 40 },
    { quarter: "Q2", value: 45 },
    { quarter: "Q3", value: 42 },
    { quarter: "Q4", value: 47 },
  ],
  chart_type: Chart.LINE_CHART,
};

const dataViz7: DataViz = {
  id: "DV007",
  kpi: kpi7,
  type: "Financial",
  context: "Displays the operating margin over the last two years.",
  data: [
    { year: 2022, value: 20 },
    { year: 2023, value: 22 },
    { year: 2024, value: 21 },
  ],
  chart_type: Chart.BAR_CHART,
};

const dataViz8: DataViz = {
  id: "DV008",
  kpi: kpi8,
  type: "Marketing",
  context: "Shows the conversion rate by month.",
  data: [
    { month: "January", value: 5 },
    { month: "February", value: 6 },
    { month: "March", value: 7 },
  ],
  chart_type: Chart.LINE_CHART,
};

const dataViz9: DataViz = {
  id: "DV009",
  kpi: kpi9,
  type: "HR",
  context: "Displays the employee turnover rate for the last quarter.",
  data: [
    { month: "April", value: 2 },
    { month: "May", value: 2.5 },
    { month: "June", value: 3 },
  ],
  chart_type: Chart.PIE_CHART,
};

const dataViz10: DataViz = {
  id: "DV010",
  kpi: kpi10,
  type: "Product Development",
  context: "Shows the time to market for various products.",
  data: [
    { product: "Product A", value: 6 },
    { product: "Product B", value: 8 },
    { product: "Product C", value: 5 },
  ],
  chart_type: Chart.BAR_CHART,
};

const dataViz11: DataViz = {
  id: "DV011",
  kpi: kpi11,
  type: "Customer Feedback",
  context: "Displays customer satisfaction scores.",
  data: [
    { category: "Very Satisfied", value: 50 },
    { category: "Satisfied", value: 30 },
    { category: "Neutral", value: 10 },
    { category: "Dissatisfied", value: 7 },
    { category: "Very Dissatisfied", value: 3 },
  ],
  chart_type: Chart.PIE_CHART,
};

const dataViz12: DataViz = {
  id: "DV012",
  kpi: kpi12,
  type: "Website Analytics",
  context: "Displays the website traffic over the past year.",
  data: [
    { month: "January", value: 5000 },
    { month: "February", value: 6000 },
    { month: "March", value: 7000 },
  ],
  chart_type: Chart.LINE_CHART,
};

const dataViz13: DataViz = {
  id: "DV013",
  kpi: kpi13,
  type: "Financial",
  context: "Shows the sales growth over the past year.",
  data: [
    { month: "January", value: 50000 },
    { month: "February", value: 52000 },
    { month: "March", value: 54000 },
  ],
  chart_type: Chart.LINE_CHART,
};

const dataViz14: DataViz = {
  id: "DV014",
  kpi: kpi14,
  type: "Market Analysis",
  context: "Displays the market share distribution.",
  data: [
    { company: "Company A", value: 40 },
    { company: "Company B", value: 30 },
    { company: "Company C", value: 20 },
    { company: "Company D", value: 10 },
  ],
  chart_type: Chart.PIE_CHART,
};

export const allDataViz: DataViz[] = [
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
  dataViz11,
  dataViz12,
  dataViz13,
  dataViz14,
];