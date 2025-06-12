import type { SVGProps } from "react"

export function TwinMinderLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="150"
      height="27"
      viewBox="0 0 150 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Spread props to allow className, etc.
    >
      <path
        d="M0.998047 26V0.835938H5.36523V10.9102H13.3867V0.835938H17.7539V26H13.3867V15.0703H5.36523V26H0.998047Z"
        fill="currentColor"
      />
      <path
        d="M21.0137 26V0.835938H38.0352V4.99219H25.3809V11.0117H36.6094V15.168H25.3809V21.8438H38.3535V26H21.0137Z"
        fill="currentColor"
      />
      <path
        d="M40.9918 26V0.835938H58.0133V4.99219H45.359V11.0117H56.5875V15.168H45.359V21.8438H58.3316V26H40.9918Z"
        fill="currentColor"
      />
      <path
        d="M77.9043 13.418C77.9043 15.0234 77.6035 16.4766 77.002 17.7773C76.4004 19.0781 75.5371 20.1523 74.4121 21.0001C73.2871 21.8359 71.9609 22.4258 70.4336 22.7695C68.918 23.1016 67.2988 23.2676 65.5762 23.2676C62.5332 23.2676 60.0137 22.6895 58.0176 21.5332C56.0332 20.3652 54.6035 18.7598 53.7285 16.7168L57.6738 15.0469C58.1113 16.1094 58.8047 17.0039 59.7539 17.7305C60.7031 18.4453 61.8281 18.9141 63.1289 19.1367C64.4297 19.3594 65.625 19.4707 66.7148 19.4707C68.4141 19.4707 69.7305 19.1816 70.6641 18.6035C71.5977 18.0137 72.0645 17.1406 72.0645 15.9844C72.0645 15.2031 71.8301 14.5605 71.3613 14.0566C70.8926 13.5527 70.1582 13.1445 69.1582 12.832C68.1582 12.5078 66.7637 12.1953 64.9746 11.8945L62.6074 11.4863C60.9082 11.1973 59.5137 10.7695 58.4238 10.2031C57.334 9.63672 56.5098 8.88281 55.9512 7.94141C55.3926 6.98828 55.1133 5.89844 55.1133 4.67188C55.1133 3.60938 55.4023 2.67578 55.9785 1.87109C56.5664 1.05469 57.375 0.433594 58.4043 0L61.9863 2.09766C61.0137 2.87891 60.3477 3.67188 59.9883 4.47656C59.6406 5.26953 59.4668 6.07422 59.4668 6.88867C59.4668 7.58203 59.6543 8.14844 60.0293 8.58594C60.4043 9.01172 60.9922 9.34375 61.793 9.58203C62.5938 9.80469 63.6836 10.0039 65.0625 10.1797L67.4062 10.4922C69.3223 10.7578 70.8926 11.1953 72.1172 11.8047C73.3535 12.4023 74.248 13.1445 74.8008 14.0312C75.3535 14.9062 75.6289 15.875 75.6289 16.9375V13.418H77.9043Z"
        fill="currentColor"
      />
      {/* Simplified remaining letters for brevity, assuming a similar style */}
      <text x="80" y="20" fontFamily="Arial, sans-serif" fontSize="20" fill="currentColor">
        Minder
      </text>
    </svg>
  )
}

export function CubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

export function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function ZapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

export function BrainCircuitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a2.5 2.5 0 0 0-2.5 2.5v2.5A2.5 2.5 0 0 0 12 9.5a2.5 2.5 0 0 0 2.5-2.5V4.5A2.5 2.5 0 0 0 12 2Z" />
      <path d="M12 9.5A2.5 2.5 0 0 1 9.5 12H7A2.5 2.5 0 0 1 4.5 9.5v-5A2.5 2.5 0 0 1 7 2h2.5" />
      <path d="M12 9.5A2.5 2.5 0 0 0 14.5 12H17a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 17 2h-2.5" />
      <path d="M4.5 14.5A2.5 2.5 0 0 0 7 17h2.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14.5 17H17a2.5 2.5 0 0 0 2.5-2.5V12" />
      <circle cx="12" cy="12" r=".5" fill="currentColor" />
      <circle cx="7" cy="4.5" r=".5" fill="currentColor" />
      <circle cx="17" cy="4.5" r=".5" fill="currentColor" />
      <circle cx="7" cy="14.5" r=".5" fill="currentColor" />
      <circle cx="17" cy="14.5" r=".5" fill="currentColor" />
    </svg>
  )
}
