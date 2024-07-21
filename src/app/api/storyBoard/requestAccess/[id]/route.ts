import { NextRequest, NextResponse } from 'next/server';
import { allStoryboards } from '@/app/types/storyBoard';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const storyboardIndex = allStoryboards.findIndex(sb => sb.id === id);

  if (storyboardIndex === -1) {
    return NextResponse.json({ message: "Storyboard not found" }, { status: 404 });
  }

  const body = await request.json();
  allStoryboards[storyboardIndex].access_requested = body.access_requested;

  return NextResponse.json(allStoryboards[storyboardIndex], { status: 200 });
}
