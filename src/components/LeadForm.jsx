'use client'

import { useEffect, useRef, useState } from 'react'

export default function LeadForm({ formId = 'lead-form' }) {
  const [loading, setLoading] = useState(false)
  const [tfToken, setTfToken] = useState('')
  const tfHiddenRef = useRef(null)

  useEffect(() => {
    if (!tfHiddenRef.current) return
    // Ya cargamos el script global en layout.tsx con field=trusted_form_cert_id
    const applyFromGlobal = () => {
      try {
        const val = (window.TrustedForm && window.TrustedForm.getCertUrl && window.TrustedForm.getCertUrl()) || ''
        if (val) {
          if (tfHiddenRef.current) tfHiddenRef.current.value = val
          setTfToken(val)
        }
      } catch {}
    }
    applyFromGlobal()
    const obs = new MutationObserver(() => {
      if (tfHiddenRef.current?.value) setTfToken(tfHiddenRef.current.value)
    })
    obs.observe(tfHiddenRef.current, { attributes: true, attributeFilter: ['value'] })
    const id = setInterval(applyFromGlobal, 300)
    return () => { obs.disconnect(); clearInterval(id) }
  }, [])

  async function waitForTrustedFormToken(maxWaitMs = 2000) {
    const start = Date.now()
    const poll = async () => {
      const hiddenVal = tfHiddenRef.current?.value || ''
      let fromApi = ''
      try { fromApi = (window.TrustedForm && window.TrustedForm.getCertUrl && window.TrustedForm.getCertUrl()) || '' } catch {}
      const val = hiddenVal || fromApi
      if (val) {
        if (!hiddenVal && tfHiddenRef.current) tfHiddenRef.current.value = val
        setTfToken(val)
        return val
      }
      if (Date.now() - start >= maxWaitMs) return ''
      await new Promise(r => setTimeout(r, 150))
      return poll()
    }
    return poll()
  }

  async function onSubmit(e) {
    e.preventDefault()
    const formEl = e.currentTarget
    setLoading(true)
    // Espera breve para que TrustedForm complete el token
    await waitForTrustedFormToken(2000)
    const f = new FormData(formEl)

    const payload = {
      lp_campaign_id: process.env.NEXT_PUBLIC_LP_CAMPAIGN_ID || 'Provided',
      lp_campaign_key: process.env.NEXT_PUBLIC_LP_CAMPAIGN_KEY || 'Provided',
      lp_s1: process.env.NEXT_PUBLIC_LP_S1 || 'Provided',
      lp_s2: process.env.NEXT_PUBLIC_LP_S2 || 'Your tracking ID',
      lp_response: 'JSON',
      city: f.get('city')?.toString().trim() || '',
      state: f.get('state')?.toString().trim() || '',
      zip_code: f.get('zip_code')?.toString().trim() || '',
      first_name: f.get('first_name')?.toString().trim() || '',
      last_name: f.get('last_name')?.toString().trim() || '',
      address: f.get('address')?.toString().trim() || '',
      phone_home: f.get('phone_home')?.toString().trim() || '',
      email_address: f.get('email_address')?.toString().trim() || '',
      trusted_form_cert_id: (tfHiddenRef.current?.value || tfToken || f.get('trusted_form_cert_id')?.toString() || ''),
      landing_page: window.location.href,
      repair_or_replace: f.get('repair_or_replace')?.toString() || '',
      tcpaText: document.getElementById('tcpa_text')?.innerText || '',
      tcpa_consent: f.get('tcpa_consent') === 'on',
    }

    try {
      const res = await fetch('/api/zapier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const ct = res.headers.get('content-type') || ''
        let msg = 'Request failed'
        if (ct.includes('application/json')) {
          try { const j = await res.json(); msg = j?.error || JSON.stringify(j) } catch {}
        } else {
          try { msg = await res.text() } catch {}
        }
        throw new Error(msg)
      }
      formEl.reset()
      setTfToken('')
      window.location.href = '/thank-you'
    } catch (err) {
      console.error(err)
      const msg = err instanceof Error ? err.message : 'Error sending form.'
      alert(`Error sending form: ${msg}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form id={formId} onSubmit={onSubmit} className="max-w-2xl mx-auto p-[1px] rounded-2xl bg-gradient-to-r from-primary-200 to-secondary-200">
      <div className="bg-white/90 backdrop-blur rounded-2xl p-6 md:p-8 shadow-xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">Request Your Free Quote</h3>
        <p className="text-gray-600 text-sm">Fast response. No obligation.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">First name</label>
          <input name="first_name" required className="mt-1 w-full rounded-xl border p-3" />
        </div>
        <div>
          <label className="block text-sm font-medium">Last name</label>
          <input name="last_name" required className="mt-1 w-full rounded-xl border p-3" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Address</label>
        <input name="address" required className="mt-1 w-full rounded-xl border p-3" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">City</label>
          <input name="city" required className="mt-1 w-full rounded-xl border p-3" />
        </div>
        <div>
          <label className="block text-sm font-medium">State</label>
          <input name="state" required className="mt-1 w-full rounded-xl border p-3" placeholder="CA or California" />
        </div>
        <div>
          <label className="block text-sm font-medium">ZIP</label>
          <input name="zip_code" required className="mt-1 w-full rounded-xl border p-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email_address" required className="mt-1 w-full rounded-xl border p-3" />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input name="phone_home" required className="mt-1 w-full rounded-xl border p-3" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Service of interest</label>
        <div className="mt-2 flex gap-6">
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="repair_or_replace" value="repair" required />
            <span>Repair</span>
          </label>
          <label className="inline-flex items-center gap-2">
            <input type="radio" name="repair_or_replace" value="replace" />
            <span>Replace</span>
          </label>
        </div>
      </div>

      <input ref={tfHiddenRef} type="hidden" name="trusted_form_cert_id" />

      <div className="rounded-xl border p-3 bg-gray-50">
        <p id="tcpa_text" className="text-xs leading-relaxed">
          By clicking Submit, You agree to give express consent to receive marketing communications regarding HomeImprovement services by automatic dialing system and pre-recorded calls and artificial voice messages from Home Services Partners at the phone number and E-mail address provided by you, including wireless numbers, if applicable, even if you have previously registered the provided number on the Do not Call Registery. SMS/MMS and data messaging rates may apply. You understand that my consent here is not a condition for buying any goods or services. You agree to the 
          <a className="underline" href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> and 
          <a className="underline ml-1" href="/terms-conditions" target="_blank" rel="noreferrer">Terms & Conditions</a>. See 
          <a className="underline ml-1" href="https://offers.homequotepos.com/bathroom/v4" target="_blank" rel="noreferrer">Home Services Partners</a>.
        </p>
        <label className="mt-2 flex items-center gap-2">
          <input type="checkbox" name="tcpa_consent" required />
          <span className="text-sm">I agree to be contacted.</span>
        </label>
      </div>

      <button type="submit" disabled={loading} className="w-full rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 font-semibold shadow-lg hover:shadow-xl transition disabled:opacity-60">
        {loading ? 'Sending…' : 'Get My Free Quote'}
      </button>
      </div>
    </form>
  )
}


