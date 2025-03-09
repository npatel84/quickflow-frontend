'use client'

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  avatar?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in on initial load
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token")
        if (token) {
          // This is a mock implementation - in a real app, you'd validate the token
          // with your backend and fetch the user data
          const userData = JSON.parse(localStorage.getItem("user") || "{}")
          if (userData.id) {
            setUser(userData)
          }
        }
      } catch (error) {
        console.error("Authentication error:", error)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock implementation - replace with actual API call
      // Simulating API response for development
      const mockUser = {
        id: "user-1",
        name: "Demo User",
        email: email,
        avatar: null,
      }
      
      // In a real app, you'd make an API call here and get a token
      localStorage.setItem("token", "mock-jwt-token")
      localStorage.setItem("user", JSON.stringify(mockUser))
      
      setUser(mockUser)
      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock implementation - replace with actual API call
      const mockUser = {
        id: "user-" + Date.now(),
        name,
        email,
        avatar: null,
      }
      
      localStorage.setItem("token", "mock-jwt-token")
      localStorage.setItem("user", JSON.stringify(mockUser))
      
      setUser(mockUser)
      router.push("/dashboard")
    } catch (error) {
      console.error("Signup error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser(null)
    router.push("/login")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
} 