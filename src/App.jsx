import './style/App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>
                <TwitterFollowCard 
                    initialIsFollowing={true}
                    userName="midudev">
                        Miguel Duran
                </TwitterFollowCard>

                <TwitterFollowCard 
                    userName="G-911"> 
                    Gabriel Avila
                </TwitterFollowCard>

                <TwitterFollowCard 
                    userName="elonmusk"> 
                    Elon Musk
                </TwitterFollowCard>

                <TwitterFollowCard  
                    userName="vxnder"> 
                    Vanderhart
                </TwitterFollowCard>
        </section>
    )
}