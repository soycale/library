import { NextResponse } from 'next/server';
import { allStoryboards } from '@/app/types/storyBoard';

export async function GET() {
  return NextResponse.json(allStoryboards, { status: 200 });
}
