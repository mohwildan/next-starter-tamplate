import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  request.cookies.set('token', '1234')
  return NextResponse.json({ message: 'Hello World!' })
}
export async function POST(request: NextRequest) {
  request.cookies.set('token', '1234')
}
