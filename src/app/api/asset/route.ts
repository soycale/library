import { allAssets } from "@/app/types/assets";
import { NextResponse } from "next/server";


export const GET = async (req: Request) => {
  return NextResponse.json(allAssets)
};