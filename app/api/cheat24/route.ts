import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/navigation';

import { NextRequest, NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const ans = await prisma.datagame24.findMany();
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('number');
  const fillterNumber = query
    ? ans.filter((num) => num.solution.includes(query))
    : ans;
  if (fillterNumber.length > 0) {
    return NextResponse.json(fillterNumber);
  } else {
    return redirect(`/api/cheat24/${query}`);
  }
}
