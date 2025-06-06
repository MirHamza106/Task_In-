import LoginForm from '@/components/onboard/LoginForm'
import Facebook from '@/public/images/logo/facebook.svg'
import Google from '@/public/images/logo/google.svg'
import { Button, Divider } from 'keep-react'
import Image from 'next/image'

export default function Login() {
  return (
    <div className="shape col-span-12 grid min-h-screen place-items-center xl:col-span-5">
      <div className="mx-auto max-w-[370px] p-4">
        <div className="mx-auto max-w-[338px] space-y-1 text-center">
          <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Login to Continue</h2>
          <p className="text-body-4 font-normal text-metal-600 dark:text-metal-300">
            Welcome back! Please enter your details.
          </p>
        </div>
        <div className="space-y-3 pt-8">
          <Button className="w-full gap-2 dark:border dark:border-metal-700" color="secondary" variant="outline">
            <Image src={Google} alt="google" />
            Create With Google
          </Button>
          <Button className="w-full gap-2 dark:border dark:border-metal-700" color="secondary" variant="outline">
            <Image src={Facebook} alt="facebook" />
            Create With Facebook
          </Button>
        </div>
        <div className="py-4">
          <Divider color="secondary">Or</Divider>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
