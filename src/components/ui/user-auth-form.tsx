"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn, useSession } from "next-auth/react"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
        console.log(session.user);
        router.push('/');
    }
}, [session, router]);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  function handleClick() {
    signIn("google").then(() => {
        // After signing in, the useEffect above will take care of the redirection and logging
    });
}

  return (
    <div className={cn("grid gap-6", className)} {...props} >
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only text-white" htmlFor="email">
              Email
            </Label>
            
          </div>
          <Button className=" rounded-lg bg-yellow-400 text-white" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 text-white h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-white text-muted-foreground ">
            Or continue with
          </span>
        </div>
      </div>
      <Button onClick={handleClick} variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  )
}