import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    let email = ''

    if (contentType.includes('application/json')) {
      const body = await request.json()
      email = (body?.email || '').toString().trim().toLowerCase()
    } else {
      const formData = await request.formData()
      email = ((formData.get('email') as string) || '').trim().toLowerCase()
    }

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB || 'bandaids')
    const collection = db.collection('waitlist')

    const now = new Date()
    await collection.updateOne(
      { email },
      {
        $setOnInsert: {
          email,
          createdAt: now,
        },
        $set: {
          updatedAt: now,
        },
      },
      { upsert: true }
    )

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Waitlist POST error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}


