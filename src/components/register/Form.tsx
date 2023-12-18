"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Icons } from "../icons/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Form({ className, ...props }: UserAuthFormProps) {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [isLogin, setIsLogin] = React.useState<boolean>(false)
  const [err, setErr] = React.useState<any>(null)
  const [email, setEmail] = React.useState<any>("")
  const [password, setPassword] = React.useState<any>("")

  async function onSubmit(e: any) {
    e.preventDefault();
    try {
      setLoading(true)
      const response: any = await fetch(`/api/auth/register`, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      console.log("response", response)
      if (!response?.error) {
        setIsLogin(true)

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
          {isLogin && (<>
            <p>Registration Successful</p>
            <Link href="login">
              <Button>
                Login here
              </Button></Link></>)}
          <Button disabled={loading}>
            {loading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Register with Email
          </Button>
        </div>
      </form>

    </div>
  )
}