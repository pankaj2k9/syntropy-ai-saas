"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [isLogin, setIsLogin] = React.useState<boolean>(false)
  const [err, setErr] = React.useState<any>(null)
  const [email, setEmail] = React.useState<any>("")
  const [password, setPassword] = React.useState<any>("")

  const router = useRouter();
  async function onSubmit(e: any) {
    e.preventDefault();
    try {
    const response:any= await signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
    });

    if (!response?.error) {
      router.push('/dashboard');
      router.refresh();
    } else {
      setErr(response?.error)
    }
  } catch (err) {
    setErr(err)
  }
  setLoading(false)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
            {err && <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {err}
        </AlertDescription>
      </Alert>}
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              onChange={(e) => setEmail(e?.target?.value)}
            />

            <Input
              id="password"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              onChange={(e) => setPassword(e?.target?.value)}
            />
          </div>
          <Button disabled={loading}>
            {loading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
    </div>
  )
}