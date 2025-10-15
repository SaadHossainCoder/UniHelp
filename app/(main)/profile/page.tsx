'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { CheckCircle, XCircle, ChevronRight, Star, Sparkles, Coffee, Gift, Zap, Users, Award, Edit3 } from 'lucide-react'
import Image from 'next/image'

// --- Mock Data ---
// In a real application, this data would likely come from an API
const personalInfo = {
    fullName: 'Sam Raymond',
    dateOfBirth: '1950-03-15', // Correct format for type="date"
    gender: 'Male',
    maritalStatus: 'Single',
    phone: '+1 (555) 456-7890',
    email: 'samraymond@gmail.com',
    address: '23 Maple Street, Springfield Apartment 4B',
}

const teamMembers = [
    { name: 'Harold Cooper', role: 'Chief, Product', avatar: '/harold.jpg' },
    { name: 'Sam Motajabi', role: 'Art Manager, Product', avatar: '/sam-m.jpg' },
    { name: 'Dembe Zuma', role: 'UI Designer', avatar: '/dembe.jpg' },
    { name: 'Katya Rostova', role: 'UX Researcher', avatar: '/katya.jpg' },
    { name: 'Elizabeth Keen', role: 'Copy Writer', avatar: '/elizabeth.jpg' },
]

const completionItems = [
    { label: 'Personal data & resume', completed: true },
    { label: 'Education', completed: true },
    { label: 'Email address', completed: true },
    { label: 'Work experience', completed: true },
    { label: 'Personal statement and consent', completed: false },
    { label: 'Certification', completed: false },
]

const stats = {
    points: 3456,
    level: 80,
    tokens: 34,
    energy: 10,
    kudosSent: 45,
    globalTasksCompleted: 345,
}

const recentTransactions = [
    { task: 'Dashboard design', points: 20 },
    { task: 'Profile', points: 20 },
    { task: 'Dashboard design', points: 20 },
]

const nextQuests = [
    { task: 'Complete a task', reward: 20 },
    { task: 'Complete a subtask', reward: 5 },
    { task: 'Create a task', reward: 10 },
    { task: 'Give kudo', reward: 100 },
]

const trophies = [
    { name: 'Kudo Lover', count: 10, icon: <Gift className="h-6 w-6" /> },
]

const dailyReward = {
    name: 'Morning Coffee',
    energy: 1,
    tokens: 1,
}

const endorsements = [
    { category: 'Performance', value: '+4', total: 345 + 4 },
    { category: 'Teamwork', value: '-2', total: 452 - 2 },
    { category: 'Leadership', value: '+1', total: 212 + 1 },
]

const blogData = [
    { title: 'Dashboard Design Trends 2024', description: 'Exploring the latest UI patterns for modern dashboards', date: 'Oct 10, 2024', type: 'post' },
    { title: 'User-Centered UX Research Methods', description: 'Deep dive into effective user testing and feedback loops', date: 'Sep 25, 2024', type: 'article' },
    { title: 'My Journey in Product Design', description: 'Personal story on transitioning from graphic design to product roles', date: 'Aug 15, 2024', type: 'story' },
]

const tabItems = [
    { value: 'account', label: 'Account settings' },
    { value: 'activity', label: 'Activity' },
    { value: 'orders', label: 'Order history' },
    { value: 'payments', label: 'Payment methods' },
    { value: 'address', label: 'Address' },
    // { value: 'notifications', label: 'Notification' },
    // { value: 'password', label: 'Manage password' },
]

const Profile = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Tabs defaultValue="account" className="w-full">
                {/* Updated Header with TabsList */}
                <header className="border-b border-border bg-card p-6">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Avatar className="h-16 w-16">
                                    <AvatarImage src="/sam-avatar.jpg" alt="Sam Raymond" />
                                    <AvatarFallback>SR</AvatarFallback>
                                </Avatar>
                                <Button variant="ghost" size="sm" className="absolute -top-1 -right-1 h-6 w-6 p-0 rounded-full">
                                    <Edit3 className="h-3 w-3" />
                                </Button>
                            </div>
                            <div className="space-y-1">
                                <h1 className="text-xl font-semibold">{personalInfo.fullName}</h1>
                                <p className="text-sm text-muted-foreground">{personalInfo.email}</p>
                                <p className="text-sm text-muted-foreground">{personalInfo.phone}</p>
                            </div>
                        </div>
                    </div>
                    <TabsList className="mt-4 w-full justify-start overflow-x-auto">
                        {tabItems.map((tab) => (
                            <TabsTrigger key={tab.value} value={tab.value}>
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </header>

                {/* Account Settings Tab (Old Profile Content) */}
                <TabsContent value="account" className="space-y-6 p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Personal Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Personal Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="fullName">Full Name</Label>
                                            <Input id="fullName" defaultValue={personalInfo.fullName} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="dob">Date of Birth</Label>
                                            <Input id="dob" type="date" defaultValue={personalInfo.dateOfBirth} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="gender">Gender</Label>
                                            <Input id="gender" defaultValue={personalInfo.gender} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="marital">Marital Status</Label>
                                            <Input id="marital" defaultValue={personalInfo.maritalStatus} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input id="phone" defaultValue={personalInfo.phone} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" defaultValue={personalInfo.email} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="address">Address</Label>
                                        <Input id="address" defaultValue={personalInfo.address} />
                                    </div>
                                    <Button className="w-full">Save Changes</Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Blog Stories */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Blog Stories</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {blogData.map((story, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <div className={`h-8 w-8 rounded flex items-center justify-center text-xs font-bold ${story.type === 'post' ? 'bg-blue-500 text-white' : story.type === 'article' ? 'bg-green-500 text-white' : 'bg-purple-500 text-white'}`}>
                                                {story.type === 'post' ? 'POST' : story.type === 'article' ? 'ART' : 'STORY'}
                                            </div>
                                            <div>
                                                <p className="font-medium">{story.title}</p>
                                                <p className="text-sm text-muted-foreground">{story.description}</p>
                                            </div>
                                        </div>
                                        <Badge variant="secondary">{story.date}</Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Org Chart */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Team</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {teamMembers.map((member, index) => (
                                        <div key={index} className="flex items-center gap-4 p-3 border rounded-lg">
                                            <Avatar className="h-10 w-10">
                                                <AvatarImage src={member.avatar} alt={member.name} />
                                                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium">{member.name}</p>
                                                <p className="text-sm text-muted-foreground">{member.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Data Completion */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Data Completion</CardTitle>
                                <CardDescription>2/5</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {completionItems.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span className="text-sm">{item.label}</span>
                                        {item.completed ? <CheckCircle className="h-4 w-4 text-green-500" /> : <XCircle className="h-4 w-4 text-red-500" />}
                                    </div>
                                ))}
                                <Progress value={40} className="w-full" />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Documents (Old Profile Content) */}
                    {/* <Card>
                        <CardHeader>
                            <CardTitle>Documents</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {documents.map((doc, index) => (
                                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-8 w-8 rounded flex items-center justify-center text-xs font-bold ${doc.type === 'pdf' ? 'bg-red-500 text-white' : doc.type === 'doc' ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}>
                                            {doc.type === 'pdf' ? 'PDF' : doc.type === 'doc' ? 'DOC' : 'CERT'}
                                        </div>
                                        <div>
                                            <p className="font-medium">{doc.title}</p>
                                            <p className="text-sm text-muted-foreground">{doc.description}</p>
                                        </div>
                                    </div>
                                    <Badge variant="secondary">{doc.date}</Badge>
                                </div>
                            ))}
                        </CardContent>
                    </Card> */}
                </TabsContent>

                {/* Manage Password Tab */}
                <TabsContent value="password" className="space-y-6 p-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Manage Password</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="currentPassword">Current Password</Label>
                                <Input id="currentPassword" type="password" placeholder="Enter current password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="newPassword">New Password</Label>
                                <Input id="newPassword" type="password" placeholder="Enter new password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
                            </div>
                            <Button className="w-full">Update Password</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Order History Tab */}
                <TabsContent value="orders" className="space-y-6 p-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order History</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {/* Mock order items */}
                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <p className="font-medium">Order #12345</p>
                                        <p className="text-sm text-muted-foreground">Oct 10, 2024</p>
                                    </div>
                                    <Badge variant="secondary">Delivered</Badge>
                                </div>
                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div>
                                        <p className="font-medium">Order #12344</p>
                                        <p className="text-sm text-muted-foreground">Sep 25, 2024</p>
                                    </div>
                                    <Badge variant="default">Processing</Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Payment Methods Tab */}
                <TabsContent value="payments" className="space-y-6 p-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Payment Methods</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center">
                                            <span className="text-xl">****</span>
                                        </div>
                                        <div>
                                            <p className="font-medium">Visa **** 1234</p>
                                            <p className="text-sm text-muted-foreground">Expires 12/28</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">Set Default</Button>
                                </div>
                                <Button variant="outline" className="w-full">Add Payment Method</Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Address Tab */}
                <TabsContent value="address" className="space-y-6 p-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Address</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="street">Street</Label>
                                    <Input id="street" defaultValue={personalInfo.address} />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="city">City</Label>
                                        <Input id="city" defaultValue="Springfield" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="zip">ZIP Code</Label>
                                        <Input id="zip" defaultValue="12345" />
                                    </div>
                                </div>
                                <Button className="w-full">Save Address</Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Notification Tab */}
                <TabsContent value="notifications" className="space-y-6 p-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label className="flex items-center gap-2">
                                    <Input type="checkbox" defaultChecked />
                                    Email Notifications
                                </Label>
                                <p className="text-sm text-muted-foreground ml-6">Receive emails about updates and new features</p>
                            </div>
                            <div className="space-y-2">
                                <Label className="flex items-center gap-2">
                                    <Input type="checkbox" defaultChecked />
                                    Push Notifications
                                </Label>
                                <p className="text-sm text-muted-foreground ml-6">Get push notifications on mobile</p>
                            </div>
                            <div className="space-y-2">
                                <Label className="flex items-center gap-2">
                                    <Input type="checkbox" />
                                    Marketing Emails
                                </Label>
                                <p className="text-sm text-muted-foreground ml-6">Receive promotional content</p>
                            </div>
                            <Button className="w-full">Save Preferences</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Activity Tab (Old Activity Content) */}
                <TabsContent value="activity" className="space-y-6 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Avatar & Points */}
                        <Card>
                            <CardHeader className="text-center">
                                <Avatar className="h-20 w-20 mx-auto mb-2">
                                    <AvatarImage src="/avatar-3d.jpg" />
                                    <AvatarFallback>SR</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-3xl font-bold">3456</CardTitle>
                                <CardDescription>Your Points</CardDescription>
                            </CardHeader>
                        </Card>

                        {/* Level */}
                        <Card>
                            <CardHeader className="text-center">
                                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                                    <Star className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">80</CardTitle>
                                <CardDescription>My Level</CardDescription>
                                <Progress value={74} className="mt-2" />
                                <p className="text-xs text-center text-muted-foreground">2030 to next level</p>
                            </CardHeader>
                        </Card>

                        {/* Tokens */}
                        <Card>
                            <CardHeader className="text-center">
                                <div className="mx-auto h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                                    <Sparkles className="h-8 w-8 text-secondary" />
                                </div>
                                <CardTitle className="text-2xl">34</CardTitle>
                                <CardDescription>Your Tokens</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <Button variant="outline" size="sm" className="w-full">Spend Tokens</Button>
                            </CardContent>
                        </Card>

                        {/* Energy */}
                        <Card>
                            <CardHeader className="text-center">
                                <div className="mx-auto h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mb-2">
                                    <Zap className="h-8 w-8 text-destructive" />
                                </div>
                                <CardTitle className="text-2xl">10</CardTitle>
                                <CardDescription>Energy</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <Button variant="outline" size="sm" className="w-full">Browse People</Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Recent Transactions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Transactions</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {recentTransactions.map((trans, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <span>{trans.task}</span>
                                            <Badge variant="secondary">+{trans.points} pts</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Next Quests */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Next Quests</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {nextQuests.map((quest, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <span>{quest.task}</span>
                                            <Badge variant="outline">{quest.reward} pts</Badge>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Trophies */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Trophies</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {trophies.map((trophy, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            {trophy.icon}
                                            <div>
                                                <p className="font-medium">{trophy.name}</p>
                                                <p className="text-sm text-muted-foreground">{trophy.count} Kudos</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Daily Reward */}
                        <Card>
                            <CardHeader className="text-center">
                                <div className="mx-auto mb-2">
                                    <Coffee className="h-12 w-12 text-primary mx-auto" />
                                </div>
                                <CardTitle>{dailyReward.name}</CardTitle>
                                <CardDescription>Daily Reward</CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <div className="flex items-center justify-center gap-2 text-sm mb-4">
                                    <Sparkles className="h-4 w-4" />
                                    +{dailyReward.energy} Energy
                                </div>
                                <div className="flex items-center justify-center gap-2 text-sm mb-4">
                                    <Star className="h-4 w-4" />
                                    +{dailyReward.tokens} Tokens
                                </div>
                                <Button className="w-full">Collect</Button>
                            </CardContent>
                        </Card>

                        {/* Global Stats */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Global Stats</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold">{stats.globalTasksCompleted}</p>
                                        <p className="text-sm text-muted-foreground">Tasks Completed</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold">{stats.kudosSent}</p>
                                        <p className="text-sm text-muted-foreground">Kudos Sent</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Recent Endorsements */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Endorsements</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {endorsements.map((endorsement, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span>{endorsement.category}</span>
                                        <div className="flex items-center gap-2">
                                            <Badge variant={endorsement.value.startsWith('+') ? 'default' : 'secondary'}>
                                                {endorsement.value}
                                            </Badge>
                                            <span className="text-sm font-medium">{endorsement.total}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Profile