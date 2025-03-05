export function TwitterFollowCard ({ children, userName, isFollowing }) {
    console.log(isFollowing)
    const addAt = (userName) => `@${userName}`

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    src={ `https://unavatar.io/${ userName }` }
                    alt="El avatar de midudev" />

                <div className='tw-followCard-info'>
                    <strong>{ children }</strong>
                    <span className='tw-followCard-infoUserName'>{ addAt (userName) }</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}