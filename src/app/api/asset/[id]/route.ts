import { NextRequest, NextResponse } from 'next/server';
import { allAssets } from '@/app/types/assets';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const asset = allAssets.find(as => as.id === id);

  if (!asset) {
    return NextResponse.json({ message: "Asset not found" }, { status: 404 });
  }

  return NextResponse.json(asset, { status: 200 });
};