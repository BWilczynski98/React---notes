import React from 'react';
import Tweet from './Tweet';

const Tweets = () => {
    const tweets = [
        { name: 'Jacob', tweet: 'React ughh, I need Alcohol' },
        { name: 'traversy media', tweet: 'Whats up guys, Im oyt taking abreak' },
        { name: 'webdevsimplified', tweet: 'Hey guys Im simplified the web?' },
    ];
    return (
        <section>
            {tweets.map((el) => (
                <Tweet name={el.name} message={el.tweet} />
            ))}
        </section>
    );
}

export default Tweets;