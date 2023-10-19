interface Props {
  size: number
}

function GoogleIcon({ size }: Props) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M22.663 12.7351C22.663 11.9196 22.5899 11.1355 22.454 10.3828H11.623V14.8312H17.8121C17.5455 16.2687 16.7353 17.4867 15.5174 18.3021V21.1876H19.234C21.4085 19.1855 22.663 16.2374 22.663 12.7351Z'
        fill='#4285F4'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.6225 23.9732C14.7275 23.9732 17.3307 22.9434 19.2334 21.1871L15.5168 18.3016C14.4871 18.9916 13.1698 19.3993 11.6225 19.3993C8.62729 19.3993 6.09207 17.3764 5.18775 14.6582H1.3457V17.6377C3.23798 21.3962 7.12707 23.9732 11.6225 23.9732Z'
        fill='#34A853'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M5.18827 14.6591C4.95827 13.9691 4.82759 13.2321 4.82759 12.4741C4.82759 11.7162 4.95827 10.9791 5.18827 10.2891V7.30957H1.34623C0.567365 8.86207 0.123047 10.6184 0.123047 12.4741C0.123047 14.3298 0.567365 16.0862 1.34623 17.6387L5.18827 14.6591Z'
        fill='#FBBC05'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.6225 5.5475C13.3109 5.5475 14.8268 6.12772 16.0187 7.26727L19.3171 3.96886C17.3255 2.11318 14.7223 0.973633 11.6225 0.973633C7.12707 0.973633 3.23798 3.55068 1.3457 7.30909L5.18775 10.2886C6.09207 7.57045 8.6273 5.5475 11.6225 5.5475Z'
        fill='#EA4335'
      />
    </svg>
  )
}

export default GoogleIcon