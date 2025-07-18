"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Activity,
  BarChart3,
  Calendar,
  CreditCard,
  MessageSquare,
  Settings,
  Target,
  Trophy,
  Users,
  X,
  Home,
  Camera,
} from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

// Update the navigation array to include proper hrefs for the new routes
const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home, current: true },
  { name: "Alunos", href: "/dashboard/students", icon: Users, current: false },
  { name: "Treinos", href: "/dashboard/workouts", icon: Target, current: false },
  { name: "Agenda", href: "/dashboard/calendar", icon: Calendar, current: false },
  { name: "Mensagens", href: "/dashboard/messages", icon: MessageSquare, current: false },
  { name: "Relatórios", href: "/dashboard/reports", icon: BarChart3, current: false },
  { name: "Provas", href: "/dashboard/races", icon: Trophy, current: false },
  { name: "Rede Social", href: "/dashboard/social", icon: Camera, current: false },
  { name: "Financeiro", href: "/dashboard/billing", icon: CreditCard, current: false },
  { name: "Configurações", href: "/dashboard/settings", icon: Settings, current: false },
]

export function DashboardSidebar({ isOpen, onClose }: SidebarProps) {
  // Add the handleLogout function before the return statement
  const handleLogout = () => {
    // Clear any stored data
    localStorage.clear()
    sessionStorage.clear()

    // Redirect to login
    window.location.href = "/login"
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-orange-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">RunCoach</span>
          </div>
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    item.current
                      ? "bg-orange-100 text-orange-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5",
                      item.current ? "text-orange-500" : "text-gray-400 group-hover:text-gray-500",
                    )}
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-orange-600">CS</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Carlos Silva</p>
              <p className="text-xs text-gray-500 truncate">Treinador</p>
            </div>
          </div>
          {/* Add logout button */}
          <Button variant="ghost" size="sm" className="mt-4 w-full" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </>
  )
}
