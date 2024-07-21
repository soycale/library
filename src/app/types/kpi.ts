import { Chart } from "./enums";

export type Kpi = {
  id: string;
  name: string;
  type: string;
  description: string;
  descriptive_name: string;
  calculation: string;
  visuals_available: Chart[];
  business_questions: string[];
  affiliate_applicability: string;
};

const kpi1: Kpi = {
  id: "KPI001",
  name: "Revenue Growth",
  type: "Financial",
  description: "Measures the percentage increase in revenue over a specific period.",
  calculation: "((Current Period Revenue - Previous Period Revenue) / Previous Period Revenue) * 100",
  visuals_available: [Chart.LINE_CHART, Chart.BAR_CHART],
  business_questions: [
    "What is the revenue growth rate?",
    "How does the revenue growth compare to last period?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "Revenue Growth Rate"
};

const kpi2: Kpi = {
  id: "KPI002",
  name: "Customer Acquisition Cost",
  type: "Marketing",
  description: "The cost associated with acquiring a new customer.",
  calculation: "Total Marketing Cost / Number of New Customers",
  visuals_available: [Chart.PIE_CHART, Chart.BAR_CHART],
  business_questions: [
    "What is the customer acquisition cost?",
    "How efficient are our marketing campaigns?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "CAC"
};

const kpi3: Kpi = {
  id: "KPI003",
  name: "Customer Lifetime Value",
  type: "Financial",
  description: "Predicted net profit attributed to the entire future relationship with a customer.",
  calculation: "Average Purchase Value * Purchase Frequency * Customer Lifespan",
  visuals_available: [Chart.LINE_CHART, Chart.BAR_CHART],
  business_questions: [
    "What is the customer lifetime value?",
    "How can we increase customer lifetime value?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "CLV"
};

const kpi4: Kpi = {
  id: "KPI004",
  name: "Churn Rate",
  type: "Customer",
  description: "The rate at which customers stop doing business with an entity.",
  calculation: "(Number of Customers Lost / Number of Customers at Start of Period) * 100",
  visuals_available: [Chart.LINE_CHART, Chart.PIE_CHART],
  business_questions: [
    "What is the churn rate?",
    "What factors are contributing to customer churn?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "Customer Churn Rate"
};

const kpi5: Kpi = {
  id: "KPI005",
  name: "Net Promoter Score",
  type: "Customer",
  description: "Measures customer loyalty and satisfaction.",
  calculation: "Percentage of Promoters - Percentage of Detractors",
  visuals_available: [Chart.BAR_CHART, Chart.PIE_CHART],
  business_questions: [
    "What is our Net Promoter Score?",
    "How can we improve customer satisfaction?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "NPS"
};

const kpi6: Kpi = {
  id: "KPI006",
  name: "Gross Margin",
  type: "Financial",
  description: "Represents the percentage of total sales revenue that the company retains after incurring direct costs.",
  calculation: "(Total Sales - Cost of Goods Sold) / Total Sales * 100",
  visuals_available: [Chart.BAR_CHART, Chart.LINE_CHART],
  business_questions: [
    "What is our gross margin?",
    "How can we improve our gross margin?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "Gross Margin Percentage"
};

const kpi7: Kpi = {
  id: "KPI007",
  name: "Operating Margin",
  type: "Financial",
  description: "Measures what proportion of a company's revenue is left over after paying for variable costs of production.",
  calculation: "Operating Income / Net Sales * 100",
  visuals_available: [Chart.LINE_CHART, Chart.BAR_CHART],
  business_questions: [
    "What is our operating margin?",
    "How efficiently are we managing our operations?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "Operating Margin Percentage"
};

const kpi8: Kpi = {
  id: "KPI008",
  name: "Conversion Rate",
  type: "Marketing",
  description: "The percentage of visitors who take a desired action.",
  calculation: "(Number of Conversions / Total Visitors) * 100",
  visuals_available: [Chart.LINE_CHART, Chart.BAR_CHART],
  business_questions: [
    "What is our conversion rate?",
    "How can we improve our conversion rate?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "CR"
};

const kpi9: Kpi = {
  id: "KPI009",
  name: "Employee Turnover Rate",
  type: "HR",
  description: "The percentage of employees who leave an organization during a certain period.",
  calculation: "(Number of Employees Leaving / Average Number of Employees) * 100",
  visuals_available: [Chart.PIE_CHART, Chart.BAR_CHART],
  business_questions: [
    "What is our employee turnover rate?",
    "How can we reduce employee turnover?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "Employee Turnover"
};

const kpi10: Kpi = {
  id: "KPI010",
  name: "Time to Market",
  type: "Product Development",
  description: "The period of time it takes from a product being conceived until its being available for sale.",
  calculation: "Time taken for development and launch",
  visuals_available: [Chart.LINE_CHART, Chart.BAR_CHART],
  business_questions: [
    "What is our time to market?",
    "How can we reduce our time to market?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "Time to Market"
};

const kpi11: Kpi = {
  id: "KPI011",
  name: "Customer Satisfaction",
  type: "Customer",
  description: "Measures the satisfaction level of customers.",
  calculation: "Total Satisfaction Scores / Number of Surveys",
  visuals_available: [Chart.PIE_CHART, Chart.BAR_CHART],
  business_questions: [
    "What is our customer satisfaction rate?",
    "How can we improve customer satisfaction?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "Customer Satisfaction Score"
};

const kpi12: Kpi = {
  id: "KPI012",
  name: "Website Traffic",
  type: "Marketing",
  description: "Measures the number of visitors to the website.",
  calculation: "Total Visitors",
  visuals_available: [Chart.LINE_CHART, Chart.BAR_CHART],
  business_questions: [
    "What is the website traffic?",
    "How can we increase website traffic?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "Website Traffic"
};

const kpi13: Kpi = {
  id: "KPI013",
  name: "Sales Growth",
  type: "Financial",
  description: "Measures the increase in sales over a specific period.",
  calculation: "((Current Period Sales - Previous Period Sales) / Previous Period Sales) * 100",
  visuals_available: [Chart.LINE_CHART, Chart.BAR_CHART],
  business_questions: [
    "What is the sales growth rate?",
    "How does the sales growth compare to last period?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "Sales Growth Rate"
};

const kpi14: Kpi = {
  id: "KPI014",
  name: "Market Share",
  type: "Financial",
  description: "Represents the percentage of an industry's sales that a particular company controls.",
  calculation: "(Company's Sales / Total Market Sales) * 100",
  visuals_available: [Chart.PIE_CHART, Chart.BAR_CHART],
  business_questions: [
    "What is our market share?",
    "How can we increase our market share?"
  ],
  affiliate_applicability: "All Affiliates",
  descriptive_name: "Market Share Percentage"
};

export const allKpis: Kpi[] = [kpi1, kpi2, kpi3, kpi4, kpi5, kpi6, kpi7, kpi8, kpi9, kpi10, kpi11, kpi12, kpi13, kpi14];
