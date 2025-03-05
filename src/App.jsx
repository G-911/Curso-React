import './style/App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    
    return (
        <section className='App'>
                <TwitterFollowCard 
                    formatUserName={formatUserName} 
                    isFollowing={true} 
                    userName="midudev">
                        Miguel Duran
                </TwitterFollowCard>

                <TwitterFollowCard 
                    formatUserName={formatUserName} 
                    isFollowing={false} 
                    userName="G-911"> 
                    Gabriel Avila
                </TwitterFollowCard>

                <TwitterFollowCard 
                    formatUserName={formatUserName} 
                    isFollowing 
                    userName="elonmusk"> 
                    Elon Musk
                </TwitterFollowCard>

                <TwitterFollowCard 
                    formatUserName={formatUserName} 
                    userName="vxnder"> 
                    Vanderhart
                </TwitterFollowCard>
        </section>
    )
}