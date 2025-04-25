// app/api/stats.ts
export async function GET() {
  return new Response(
    JSON.stringify({
      totalBets: 1500,
      totalWinnings: 500000,
    }),
    {
      status: 200,
    }
  );
}
