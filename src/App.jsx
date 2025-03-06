import './style/App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Duran',
        isFollowing: true,
    },
    {
        userName: 'g-911',
        name: 'Gabriel Avila',
        isFollowing: true,
    },
    {
        userName: 'pheralb',
        name: 'Paco Hernandez',
        isFollowing: false,
    }
]
    
export function App () {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const{ userName, name, isFollowing} = user
                    return(
                        <TwitterFollowCard
                        key={userName}
                        userName = {userName}
                        initialIsFollowing = {isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}