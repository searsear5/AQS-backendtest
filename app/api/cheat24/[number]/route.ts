import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { number: string } },
) {
  try {
    const fournumber = params.number;
    const id = Number(fournumber);
    const numberArr = fournumber.split('');
    const digitArr = numberArr.map((char) => parseInt(char, 10));
    const perms: string[] = [];
    const play24Game = () => {
      const nums = digitArr;
      const operator = ['+', '-', '*', '/'];

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          for (let k = 0; k < 4; k++) {
            // Build the expression
            const expression = `(${nums[0]} ${operator[i]} ${nums[1]}) ${operator[j]} (${nums[2]} ${operator[k]} ${nums[3]})`;

            // Solve expression and check if it equals 24
            if (eval(expression) === 24) {
              const perm = `(${nums[0]} ${operator[i]} ${nums[1]}) ${operator[j]} (${nums[2]} ${operator[k]} ${nums[3]})`;
              perms.push(perm);
            }
          }
        }
      }
      if (perms.length == 0) {
        perms.push('no solution to make ans = 24');
      }
    };

    play24Game();

    const existingData = await prisma.datagame24.findUnique({
      where: { number: id },
    });

    if (existingData) {
      return NextResponse.json(existingData);
    } else {
      const createData = await prisma.datagame24.create({
        data: {
          number: id,
          solution: perms,
        },
      });

      return NextResponse.json(createData);
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error processing request' },
      { status: 500 },
    );
  }
}
