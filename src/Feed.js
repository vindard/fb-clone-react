import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://avatars.githubusercontent.com/u/183140"
                image="https://images.squarespace-cdn.com/content/v1/5e2372d18e3cf11ebaf2d20d/bcf9009f-9076-432e-903c-d0915b5b7d16/ke17ZwdGBToddI8pDm48kKaw-yiWCUT_dIkH-tML1b17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmgbBA9KfxWpJIziZzus6eiKk2902cuAFAxZ2IsJyg1YVeZUliRyJ_WuC65h3JNMsj/Cover_Vol11_%281000x1333_150dpi%29.jpg"
                username="johnsbeharry"
                timestamp="This is a timestamp"
                message="WOW this works!"
            />
            <Post
                profilePic="https://avatars.githubusercontent.com/u/288011"
                image=""
                username="lopp"
                timestamp="This is a timestamp"
                message="Not impressed..."
            />
            <Post />
        </div>
    )
}

export default Feed
