import {createAuthClient} from 'better-auth/react'
import {emailOTPClient, magicLinkClient} from 'better-auth/client/plugins'
import { emailOTP } from 'better-auth/plugins/email-otp'


export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
    plugins: [
        magicLinkClient(),
        emailOTPClient(),
    ]
})
