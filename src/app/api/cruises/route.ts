// app/api/cruises/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
    try {
        const response = await fetch('https://sandbox.cruisebound-qa.com/sailings', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        return NextResponse.json(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
        return NextResponse.json(
            { error: 'Failed to fetch cruises' },
            { status: 500 }
        );
    }
}