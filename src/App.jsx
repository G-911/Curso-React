import './style/App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
                <TwitterFollowCard 
                    formatUserName={formatUserName} 
                    isFollowing={true} 
                    userName="midudev" 
                    name="Miguel Duran"
                />

                <TwitterFollowCard 
                    formatUserName={formatUserName} 
                    isFollowing={false} 
                    userName="G-911" 
                    name="Gabriel Avila"
                />

                <TwitterFollowCard 
                    formatUserName={formatUserName} 
                    isFollowing 
                    userName="elonmusk" 
                    name="Elon Musk"
                />
                <TwitterFollowCard 
                    formatUserName={formatUserName} 
                    userName="vxnder" 
                    name="Vanderhart"
                />
        </section>
    )
}