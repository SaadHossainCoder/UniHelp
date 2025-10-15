'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Crown, Trophy, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const leaderboardList = [
    { name: 'Kiana Torff', points: 420, avatar: '/kiana.jpg', rank: 1, battlesWon: '69 / 88' },
    { name: 'Abram Mango', points: 415, avatar: '/abram.jpg', rank: 2, battlesWon: '73 / 100' },
    { name: 'Alfonso Lubin', points: 390, avatar: '/alfons.jpg', rank: 3, battlesWon: '63 / 89' },
    { name: 'Maren Gouse', points: 385, avatar: '/maren.jpg', rank: 4, battlesWon: '49 / 50' },
    { name: 'Desirae Herwitz', points: 360, avatar: '/desiree.jpg', rank: 5, battlesWon: '43 / 12' },
    { name: 'Kianna Torff', points: 324, avatar: '/livia.jpg', rank: 6, battlesWon: '24 / 76' },
    { name: 'Max Cooper', points: 290, avatar: '/max.jpg', rank: 7, battlesWon: '32 / 67' },
    { name: 'Phillip Levin', points: 260, avatar: '/phillip.jpg', rank: 8, battlesWon: '10 / 20' },
    { name: 'Cheyenne Ekstrom', points: 234, avatar: '/cheyenne.jpg', rank: 9, battlesWon: '5 / 15' },
    { name: 'Haylie Press', points: 200, avatar: '/haylie.jpg', rank: 10, battlesWon: '8 / 10' },
]

const moreUsers = [
    { name: 'Livia Bator', avatar: '/livia.jpg' },
    { name: 'Maren Gouse', avatar: '/maren.jpg' },
    { name: 'Desirae Herwitz', avatar: '/desiree.jpg' },
    { name: 'Max Cooper', avatar: '/max.jpg' },
    { name: 'Phillip Levin', avatar: '/phillip.jpg' },
    { name: 'Cheyenne Ekstrom', avatar: '/cheyenne.jpg' },
    { name: 'Haylie Press', avatar: '/haylie.jpg' },
]

for (let i = 11; i <= 100; i++) {
    const user = moreUsers[i % moreUsers.length]
    leaderboardList.push({ name: user.name, points: 200 - (i - 10) * 2, avatar: user.avatar, rank: i, battlesWon: `${Math.floor(Math.random() * 20)} / ${Math.floor(Math.random() * 50) + 20}` })
}

const rewards = [
    { place: 1, amount: 250 },
    { place: 2, amount: 200 },
    { place: 3, amount: 150 },
    { place: 4, amount: 100 },
    { place: 5, amount: 75 },
    { place: 6, amount: 60 },
    { place: 7, amount: 50 },
    { place: 8, amount: 40 },
    { place: 9, amount: 30 },
    { place: 10, amount: 25 },
]

const getOrdinalSuffix = (n: number) => {
    if (n > 3 && n < 21) return 'th'
    switch (n % 10) {
        case 1:
            return 'st'
        case 2:
            return 'nd'
        case 3:
            return 'rd'
        default:
            return 'th'
    }
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
}

export default function Leaderboard() {
    const top3 = leaderboardList.slice(0, 3)

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 text-foreground p-6 transition-colors">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-10 ">Leaderboard</h1>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left: Leaderboard list */}
                    <motion.div variants={itemVariants}>
                        <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/40 transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Badge variant="secondary">Monthly Leaderboard</Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 overflow-y-auto max-h-[500px]">
                                {leaderboardList.slice(3).map((user) => (
                                    <div
                                        key={user.rank }
                                        className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-accent/50 transition-all duration-200"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold w-6 text-center text-muted-foreground">
                                                {user.rank}
                                            </span>
                                            <Avatar className="h-8 w-8 border border-border">
                                                <AvatarImage src={user.avatar} alt={user.name} />
                                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-medium">{user.name}</p>
                                                <p className="text-xs text-muted-foreground">{user.battlesWon} Battles Won</p>
                                            </div>
                                        </div>
                                        <p className="font-semibold">${user.points}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Middle: Podium */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center items-end gap-6 pb-6 lg:pb-0"
                    >
                        {/* 2nd */}
                        <div className="flex flex-col items-center">
                            <Avatar className="h-16 w-16 border-4 border-background shadow-lg -mb-8 z-10">
                                <AvatarImage src={top3[1].avatar} />
                                <AvatarFallback>{top3[1].name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="w-24 h-32 bg-muted rounded-t-2xl flex flex-col items-center justify-end p-3 shadow-lg">
                                <span className="text-2xl font-bold text-muted-foreground">2</span>
                            </div>
                            <p className="mt-3 font-medium">{top3[1].name}</p>
                            <p className="text-sm text-muted-foreground">${top3[1].points}</p>
                        </div>

                        {/* 1st */}
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <Avatar className="h-20 w-20 border-4 border-background shadow-lg -mb-10 z-10">
                                    <AvatarImage src={top3[0].avatar} />
                                    <AvatarFallback>{top3[0].name[0]}</AvatarFallback>
                                </Avatar>
                                <Crown className="absolute -top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 text-yellow-400 drop-shadow-lg" />
                            </div>
                            <div className="w-28 h-48 bg-gradient-to-t from-primary/30 to-primary/10 rounded-t-2xl flex flex-col items-center justify-end p-3 shadow-xl">
                                <span className="text-3xl font-bold text-primary">1</span>
                            </div>
                            <p className="mt-3 text-lg font-bold">{top3[0].name}</p>
                            <p className="text-sm text-muted-foreground">${top3[0].points}</p>
                        </div>

                        {/* 3rd */}
                        <div className="flex flex-col items-center">
                            <Avatar className="h-16 w-16 border-4 border-background shadow-lg -mb-8 z-10">
                                <AvatarImage src={top3[2].avatar} />
                                <AvatarFallback>{top3[2].name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="w-24 h-28 bg-muted rounded-t-2xl flex flex-col items-center justify-end p-3 shadow-lg">
                                <span className="text-2xl font-bold text-muted-foreground">3</span>
                            </div>
                            <p className="mt-3 font-medium">{top3[2].name}</p>
                            <p className="text-sm text-muted-foreground">${top3[2].points}</p>
                        </div>
                    </motion.div>

                    {/* Right: Rewards */}
                    <motion.div variants={itemVariants}>
                        <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/40 transition-colors">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Trophy className="h-5 w-5" />
                                    Monthly Rewards
                                </CardTitle>
                                <CardDescription>
                                    At month’s end, top 10 winners earn USD rewards.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2 overflow-y-auto max-h-[500px]">
                                {rewards.map((reward) => (
                                    <div
                                        key={reward.place}
                                        className="flex items-center justify-between p-3 rounded-xl border bg-accent/30 hover:bg-accent/60 transition-all duration-200"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">
                                                {reward.place}
                                                {getOrdinalSuffix(reward.place)} place
                                            </span>
                                            {reward.place === 1 && (
                                                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                            )}
                                        </div>
                                        <Badge variant="secondary" className="font-bold text-base">
                                            ${reward.amount}
                                        </Badge>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
