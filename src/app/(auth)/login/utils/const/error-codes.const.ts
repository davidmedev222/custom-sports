export type ErrorCodes = keyof typeof ERROR_CODES

interface ErrorCode {
  OAuthSignin: string
  OAuthCallback: string
  OAuthCreateAccount: string
  Callback: string
  OAuthAccountNotLinked: string
  Default: string
}

export const ERROR_CODES: ErrorCode = {
  OAuthSignin: 'Oops! There was a problem logging in with this service. Please try again.',
  OAuthCallback: 'Oops, it looks like something went wrong when processing your request. Please try again.',
  OAuthCreateAccount: 'Sorry, we were unable to create your account at this time. Please try again later.',
  Callback: 'An error seems to have occurred in the login process. Please try again.',
  OAuthAccountNotLinked: 'This email address is already linked to an account, but not with this login service.',
  Default: 'Something unexpected happened. Please contact support for assistance.'
}
