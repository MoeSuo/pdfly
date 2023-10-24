import Dashboard from '@/components/Dashboard'
import { buttonVariants } from '@/components/ui/button'
import { db } from '@/db'
// import { getUserSubscriptionPlan } from '@/lib/stripe'
import { LogoutLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

const Page = async () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id
    }
  })

  if(!dbUser) redirect('/auth-callback?origin=dashboard')

  // const subscriptionPlan = await getUserSubscriptionPlan()


  return (<>
    <Dashboard />
        <h2>Welcome: {user.given_name}</h2>
        <h2>Your Email is: {user.email}</h2>
        <h2>Your ID: {user.id}</h2>
  <LogoutLink
  className={buttonVariants({
    variant: 'ghost',
    size: 'sm',
  })}>
  Logout
</LogoutLink>
    </>
  )
}

export default Page