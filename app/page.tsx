'use client';
//import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const perms: any = [];
  function play24Game() {
    const nums = [2, 5, 7, 2];
    const operator = ['+', '-', '*', '/'];

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        for (let k = 0; k < 4; k++) {
          // Build the expression
          const expression = `(${nums[0]} ${operator[i]} ${nums[1]}) ${operator[j]} (${nums[2]} ${operator[k]} ${nums[3]})`;
          console.log(nums[0]);
          // Solve expression and check if it equals 24
          if (eval(expression) === 24) {
            const perm = `(${nums[0]} ${operator[i]} ${nums[1]}) ${operator[j]} (${nums[2]} ${operator[k]} ${nums[3]})`;
            perms.push(perm);
          }
        }
      }
    }
    console.log('Result = ', perms);
  }
  useEffect(() => {
    play24Game();
  }, []);

  return <div>hello</div>;
}
