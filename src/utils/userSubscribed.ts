interface User {
    email: string
    firstName: string
    lastName: string
    pk: number
    subscription: 'trialing' | 'active' | 'complete' | 'past_due' | 'unpaid' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'paused'
    username: string
}

export const userSubscribed = (user: User) => {
    const subscribed = ['trialing', 'active', 'completed']
    console.log(user, subscribed.includes(user?.subscription))
    return subscribed.includes(user?.subscription)
}
