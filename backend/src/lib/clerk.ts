import { clerkMiddleware } from "@clerk/express"

export const setupClerk = () => {
    return clerkMiddleware();
}