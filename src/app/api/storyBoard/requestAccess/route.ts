import { NextResponse } from "next/server";
import { allStoryboards } from '@/app/types/storyBoard';

export async function GET() {
  const stbWithAccess = allStoryboards.filter((stb) => stb.access_requested);
  return NextResponse.json(stbWithAccess, { status: 200 });
}