'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
// import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Star, Mail, FileText, MessageCircle, Calendar, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

interface Notification {
    id: number
    archived?: boolean
    message: string
    date: string
    icon: string
}

interface NotificationItemProps {
    notification: Notification
    index: number
    isFavorite: boolean
    onToggleFavorite: (id: number) => void
    onDismiss: (id: number) => void
}

const iconMap: { [key: string]: React.ElementType } = {
    mail: Mail,
    file: FileText,
    message: MessageCircle,
    calendar: Calendar,
    star: Star,
}

const NotificationItem = ({ notification, index, isFavorite, onToggleFavorite, onDismiss }: NotificationItemProps) => {
    const Icon = iconMap[notification.icon] || Mail

    return (
        <motion.div
        key={notification.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="flex items-start gap-3 p-4 border rounded-lg hover:bg-accent dark:bg-[#0A0A0A] cursor-pointer"
    >
        <Checkbox className="mt-1 flex-shrink-0" />
        <div className="flex items-center gap-2 flex-1">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => onToggleFavorite(notification.id)}
                className={`h-4 w-4 p-0 ${isFavorite ? 'text-yellow-500 fill-current' : ''}`}
            >
                <Star className="h-3 w-3" />
            </Button>
            <div className="flex items-center gap-2 text-sm font-medium">
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span className="truncate flex-1">{notification.message}</span>
            </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-muted-foreground">{notification.date}</span>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => onDismiss(notification.id)}
                className="h-6 w-6 p-0 rounded-full hover:bg-destructive hover:text-destructive-foreground"
            >
                <Trash2 className="h-3 w-3" />
            </Button>
        </div>
        </motion.div>
    )
}
const Notification = () => {
    const [activeFilter, setActiveFilter] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')
    const [favorites, setFavorites] = useState(new Set([2, 6, 9]))
    const [notifications, setNotifications] = useState([
        { id: 1, message: "We're pleased to inform you that a new customer has registered. Please follow up promptly by contacting.", date: 'Just Now', icon: 'mail' },
        { id: 2, message: "Hello Sales Marketing Team, We have a special offer for our customers: Enjoy a 20% discount on selected...", date: '30 min ago', icon: 'mail' },
        { id: 3, message: "Hello Sales Marketing Team, This is a reminder to achieve this month's sales target. Currently, we've...", date: '2 days ago', icon: 'file' },
        { id: 4, message: "Hello Sales Marketing Team, We've received a product information request from a potential customer.", date: '5 days ago', icon: 'message' },
        { id: 5, message: "Hello Sales Marketing Team, We've received a product information request from a potential customer.", date: '07 Feb, 2024', icon: 'message', archived: true },
        { id: 6, message: "Hello Sales Marketing Team, A meeting or presentation has been scheduled with a customer/prospect.", date: '01 Feb, 2024', icon: 'calendar' },
        { id: 7, message: "Hello Sales Marketing Team, This is a reminder to review the contract or proposal currently under...", date: '28 Jan, 2024', icon: 'file', archived: true },
        { id: 8, message: "Hello Sales Marketing Team, It's time for a follow-up with a customer after their recent purchase/meeting.", date: '27 Jan, 2024', icon: 'mail' },
        { id: 9, message: "Hello Sales Marketing Team, We've received positive feedback/testimonial from a satisfied customer.", date: '26 Jan, 2024', icon: 'star' },
        { id: 10, message: "Hello Sales Marketing Team, This is a reminder regarding an outstanding payment from a customer.", date: '28 Jan, 2024', icon: 'file', archived: true },
    ])

    const filteredNotifications = notifications.filter(notif => {
        const matchesSearch = notif.message.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesFilter = activeFilter === 'all' ||
            (activeFilter === 'favorite' && favorites.has(notif.id)) ||
            (activeFilter === 'archive' && notif.archived) // Assuming archived flag
        return matchesSearch && matchesFilter
    })

    const archivedCount = notifications.filter(n => n.archived).length
    const favoriteCount = favorites.size

    const toggleFavorite = (id: number) => {
        setFavorites(prev => {
            const newSet = new Set(prev)
            if (newSet.has(id)) {
                newSet.delete(id)
            } else {
                newSet.add(id)
            }
            return newSet
        })
    }

    const dismissNotification = (id: number) => {
        setNotifications(prev => prev.filter(n => n.id !== id))
    }

    return (
        <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8 dark:bg-[#1F1F1F] ">
            <div className=" mx-auto h-full flex flex-col">
                <div className="flex-1 flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between ">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-xs font-bold text-primary-foreground">188</span>
                                </div>
                                List Notification
                            </div>
                            <Input
                                placeholder="Search by Name/Product"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-64 max-w-sm"
                            />
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col space-y-4  ">
                        {/* Filter Buttons */}
                        <div className="flex items-center gap-2">
                            <Button
                                variant={activeFilter === 'all' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setActiveFilter('all')}
                            >
                                All ({notifications.length})
                            </Button>
                            <Button
                                variant={activeFilter === 'archive' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setActiveFilter('archive')}
                            >
                                Archive ({archivedCount})
                            </Button>
                            <Button
                                variant={activeFilter === 'favorite' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setActiveFilter('favorite')}
                            >
                                Favorite ({favoriteCount})
                            </Button>
                        </div>

                        {/* Notifications List */}
                        <div className="flex-1 space-y-3 overflow-y-auto pr-2 ">
                            {filteredNotifications.map((notification, index) => (
                                <NotificationItem
                                    key={notification.id}
                                    notification={notification}
                                    index={index}
                                    isFavorite={favorites.has(notification.id)}
                                    onToggleFavorite={toggleFavorite}
                                    onDismiss={dismissNotification}
                                />
                            ))}
                            {filteredNotifications.length === 0 && (
                                <p className="text-center text-muted-foreground py-8">No notifications found.</p>
                            )}
                        </div>
                    </CardContent>
                </div>
            </div>
        </div>
    )
}

export default Notification