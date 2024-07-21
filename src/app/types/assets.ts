import { AssetType } from "./enums";
import { Kpi, allKpis } from "./kpi";
import { Layout, allLayouts } from "./layout";
import { Storyboard, allStoryboards } from "./storyBoard";

export type Asset = {
  type: AssetType;
  name: string;
  description: string;
  is_favorite: boolean;
  id: string;
  asset_id: string;
  asset_data: Kpi | Layout | Storyboard;
};

const [
  kpi1,
  kpi10,
  kpi11,
  kpi12,
  kpi13,
  kpi14,
  kpi2,
  kpi3,
  kpi4,
  kpi5,
  kpi6,
  kpi7,
  kpi8,
  kpi9,
] = allKpis;

const [layout1, layout2, layout3, layout4, layout5, layout6, layout7, layout8] =
  allLayouts;

const [
  storyboard1,
  storyboard2,
  storyboard3,
  storyboard4,
  storyboard5,
  storyboard6,
] = allStoryboards;

// KPI Assets
 const asset1: Asset = {
  type: AssetType.KPI,
  name: kpi1.name,
  description: kpi1.description,
  is_favorite: true,
  id: "asset001",
  asset_id: kpi1.id,
  asset_data: kpi1,
};

 const asset2: Asset = {
  type: AssetType.KPI,
  name: kpi2.name,
  description: kpi2.description,
  is_favorite: false,
  id: "asset002",
  asset_id: kpi2.id,
  asset_data: kpi2,
};

 const asset3: Asset = {
  type: AssetType.KPI,
  name: kpi3.name,
  description: kpi3.description,
  is_favorite: true,
  id: "asset003",
  asset_id: kpi3.id,
  asset_data: kpi3,
};

 const asset4: Asset = {
  type: AssetType.KPI,
  name: kpi4.name,
  description: kpi4.description,
  is_favorite: false,
  id: "asset004",
  asset_id: kpi4.id,
  asset_data: kpi4,
};

 const asset5: Asset = {
  type: AssetType.KPI,
  name: kpi5.name,
  description: kpi5.description,
  is_favorite: true,
  id: "asset005",
  asset_id: kpi5.id,
  asset_data: kpi5,
};

 const asset6: Asset = {
  type: AssetType.KPI,
  name: kpi6.name,
  description: kpi6.description,
  is_favorite: false,
  id: "asset006",
  asset_id: kpi6.id,
  asset_data: kpi6,
};

 const asset7: Asset = {
  type: AssetType.KPI,
  name: kpi7.name,
  description: kpi7.description,
  is_favorite: true,
  id: "asset007",
  asset_id: kpi7.id,
  asset_data: kpi7,
};

 const asset8: Asset = {
  type: AssetType.KPI,
  name: kpi8.name,
  description: kpi8.description,
  is_favorite: false,
  id: "asset008",
  asset_id: kpi8.id,
  asset_data: kpi8,
};

 const asset9: Asset = {
  type: AssetType.KPI,
  name: kpi9.name,
  description: kpi9.description,
  is_favorite: true,
  id: "asset009",
  asset_id: kpi9.id,
  asset_data: kpi9,
};

 const asset10: Asset = {
  type: AssetType.KPI,
  name: kpi10.name,
  description: kpi10.description,
  is_favorite: false,
  id: "asset010",
  asset_id: kpi10.id,
  asset_data: kpi10,
};

 const asset11: Asset = {
  type: AssetType.KPI,
  name: kpi11.name,
  description: kpi11.description,
  is_favorite: true,
  id: "asset011",
  asset_id: kpi11.id,
  asset_data: kpi11,
};

 const asset12: Asset = {
  type: AssetType.KPI,
  name: kpi12.name,
  description: kpi12.description,
  is_favorite: false,
  id: "asset012",
  asset_id: kpi12.id,
  asset_data: kpi12,
};

 const asset13: Asset = {
  type: AssetType.KPI,
  name: kpi13.name,
  description: kpi13.description,
  is_favorite: true,
  id: "asset013",
  asset_id: kpi13.id,
  asset_data: kpi13,
};

 const asset14: Asset = {
  type: AssetType.KPI,
  name: kpi14.name,
  description: kpi14.description,
  is_favorite: false,
  id: "asset014",
  asset_id: kpi14.id,
  asset_data: kpi14,
};

// Layout Assets
 const asset15: Asset = {
  type: AssetType.Layouts,
  name: layout1.name,
  description: layout1.description,
  is_favorite: true,
  id: "asset015",
  asset_id: layout1.id,
  asset_data: layout1,
};

 const asset16: Asset = {
  type: AssetType.Layouts,
  name: layout2.name,
  description: layout2.description,
  is_favorite: false,
  id: "asset016",
  asset_id: layout2.id,
  asset_data: layout2,
};

 const asset17: Asset = {
  type: AssetType.Layouts,
  name: layout3.name,
  description: layout3.description,
  is_favorite: true,
  id: "asset017",
  asset_id: layout3.id,
  asset_data: layout3,
};

 const asset18: Asset = {
  type: AssetType.Layouts,
  name: layout4.name,
  description: layout4.description,
  is_favorite: false,
  id: "asset018",
  asset_id: layout4.id,
  asset_data: layout4,
};

 const asset19: Asset = {
  type: AssetType.Layouts,
  name: layout5.name,
  description: layout5.description,
  is_favorite: true,
  id: "asset019",
  asset_id: layout5.id,
  asset_data: layout5,
};

 const asset20: Asset = {
  type: AssetType.Layouts,
  name: layout6.name,
  description: layout6.description,
  is_favorite: false,
  id: "asset020",
  asset_id: layout6.id,
  asset_data: layout6,
};

 const asset21: Asset = {
  type: AssetType.Layouts,
  name: layout7.name,
  description: layout7.description,
  is_favorite: true,
  id: "asset021",
  asset_id: layout7.id,
  asset_data: layout7,
};

 const asset22: Asset = {
  type: AssetType.Layouts,
  name: layout8.name,
  description: layout8.description,
  is_favorite: false,
  id: "asset022",
  asset_id: layout8.id,
  asset_data: layout8,
};

// Storyboard Assets
 const asset23: Asset = {
  type: AssetType.Storyboards,
  name: storyboard1.title,
  description: storyboard1.description,
  is_favorite: true,
  id: "asset023",
  asset_id: storyboard1.id,
  asset_data: storyboard1,
};

 const asset24: Asset = {
  type: AssetType.Storyboards,
  name: storyboard2.title,
  description: storyboard2.description,
  is_favorite: false,
  id: "asset024",
  asset_id: storyboard2.id,
  asset_data: storyboard2,
};

 const asset25: Asset = {
  type: AssetType.Storyboards,
  name: storyboard3.title,
  description: storyboard3.description,
  is_favorite: true,
  id: "asset025",
  asset_id: storyboard3.id,
  asset_data: storyboard3,
};

 const asset26: Asset = {
  type: AssetType.Storyboards,
  name: storyboard4.title,
  description: storyboard4.description,
  is_favorite: false,
  id: "asset026",
  asset_id: storyboard4.id,
  asset_data: storyboard4,
};

 const asset27: Asset = {
  type: AssetType.Storyboards,
  name: storyboard5.title,
  description: storyboard5.description,
  is_favorite: true,
  id: "asset027",
  asset_id: storyboard5.id,
  asset_data: storyboard5,
};

 const asset28: Asset = {
  type: AssetType.Storyboards,
  name: storyboard6.title,
  description: storyboard6.description,
  is_favorite: false,
  id: "asset028",
  asset_id: storyboard6.id,
  asset_data: storyboard6,
};

export const allAssets: Asset[] = [
  asset1,
  asset2,
  asset3,
  asset4,
  asset5,
  asset6,
  asset7,
  asset8,
  asset9,
  asset10,
  asset11,
  asset12,
  asset13,
  asset14,
  asset15,
  asset16,
  asset17,
  asset18,
  asset19,
  asset20,
  asset21,
  asset22,
  asset23,
  asset24,
  asset25,
  asset26,
  asset27,
  asset28,
];
