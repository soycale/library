import { allAssets } from "@/app/types/assets";
import { NextRequest, NextResponse } from "next/server";

// Helper function to find the asset by id
const findAssetIndexById = (id: string) => {
  return allAssets.findIndex((asset) => asset.id === id);
};

// Function to toggle the is_favorite property of an asset
const toggleFavoriteStatus = (index: number) => {
  allAssets[index].is_favorite = !allAssets[index].is_favorite;
  return allAssets[index];
};

// PATCH method to toggle is_favorite in the assets array
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const assetIndex = findAssetIndexById(id);

  if (assetIndex === -1) {
    return NextResponse.json({ message: "Asset not found" }, { status: 404 });
  }

  const updatedAsset = toggleFavoriteStatus(assetIndex);
  return NextResponse.json(updatedAsset, { status: 200 });
}
