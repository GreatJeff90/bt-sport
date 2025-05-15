import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey = process.env.API_FOOTBALL_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 });
    }

    const today = new Date().toISOString().split("T")[0]; // '2025-05-15'
    const url = `https://v3.football.api-sports.io/fixtures?date=${today}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-apisports-key": apiKey,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: "Failed to fetch fixtures", details: errorData }, { status: 500 });
    }

    const data = await response.json();

    // Format data for the frontend
    const matches = data.response.map((item: any) => ({
      id: item.fixture.id,
      homeTeam: item.teams.home.name,
      awayTeam: item.teams.away.name,
      homeLogo: item.teams.home.logo,
      awayLogo: item.teams.away.logo,
      status: item.fixture.status.short, // 'NS', 'FT', '1H', etc.
      time: new Date(item.fixture.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date(item.fixture.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    }));

    return NextResponse.json({ matches });
  } catch (error) {
    console.error("Error fetching fixtures:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
