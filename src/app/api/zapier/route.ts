import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    let body: any = null
    try { body = await req.json() } catch {}
    if (!body) {
      try { const fd = await req.formData(); body = Object.fromEntries(fd.entries()) } catch {}
    }
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ ok: false, error: 'Invalid body' }, { status: 400 })
    }

    const fwd = req.headers.get('x-forwarded-for')
    const ip = (fwd && fwd.split(',')[0].trim()) || req.headers.get('x-real-ip') || '0.0.0.0'

    const payload = {
      lp_campaign_id: body.lp_campaign_id ?? process.env.NEXT_PUBLIC_LP_CAMPAIGN_ID ?? 'Provided',
      lp_campaign_key: body.lp_campaign_key ?? process.env.NEXT_PUBLIC_LP_CAMPAIGN_KEY ?? 'Provided',
      lp_s1: body.lp_s1 ?? process.env.NEXT_PUBLIC_LP_S1 ?? 'Provided',
      lp_s2: body.lp_s2 ?? process.env.NEXT_PUBLIC_LP_S2 ?? 'Your tracking ID',
      lp_response: 'JSON',
      city: body.city ?? '',
      state: body.state ?? '',
      zip_code: body.zip_code ?? '',
      first_name: body.first_name ?? '',
      last_name: body.last_name ?? '',
      address: body.address ?? '',
      phone_home: body.phone_home ?? '',
      email_address: body.email_address ?? '',
      ip_address: ip,
      trusted_form_cert_id: body.trusted_form_cert_id ?? 'NOT_PROVIDED',
      landing_page: body.landing_page ?? '',
      repair_or_replace: body.repair_or_replace ?? '',
      tcpaText: body.tcpaText ?? '',
      tcpa_consent: !!body.tcpa_consent,
    }

    const hook = process.env.ZAPIER_HOOK_URL
    if (!hook) {
      return NextResponse.json({ ok: false, error: 'Missing ZAPIER_HOOK_URL' }, { status: 500 })
    }
    const r = await fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })
    if (!r.ok) {
      const text = await r.text()
      return NextResponse.json({ ok: false, error: text || 'Upstream error' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Server error' }, { status: 500 })
  }
}
