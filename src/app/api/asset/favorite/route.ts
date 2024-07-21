import { allAssets } from "@/app/types/assets";
import { NextResponse } from "next/server";

// This method is to get all the favorite assets
export async function GET() {
  const favoriteAssets = allAssets.filter((asset) => asset.is_favorite);
  return NextResponse.json(favoriteAssets, { status: 200 });
}