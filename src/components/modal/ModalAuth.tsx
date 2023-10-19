import { Button, GithubIcon, GoogleIcon, Modal } from '../index'

function ModalAuth() {
  return (
    <Modal>
      <div className='grid max-w-sm gap-y-3 text-center'>
        <p className='my-4 text-3xl font-semibold sm:text-4xl'>Custom Sports</p>
        <p className='text-xl font-medium sm:text-2xl'>Welcome to Custom Sports!</p>
        <p>Choose how you want to continue to create an account.</p>
        <div className='my-4 grid gap-y-4'>
          <Button variant='google' iconLeft={<GoogleIcon size={24} />}>
            Continue with Google
          </Button>
          <Button variant='github' iconLeft={<GithubIcon size={24} />}>
            Continue with Github
          </Button>
        </div>
        <p className='text-xs'>
          By clicking the button, you agree to the Terms of Use and Privacy Policy and also confirm that you are 18
          years of age or older.
        </p>
      </div>
    </Modal>
  )
}

export default ModalAuth
