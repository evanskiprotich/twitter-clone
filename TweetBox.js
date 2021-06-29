import React, {useState} from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = e => {
       e.preventDefault();
       
       db.collection('posts').add({
           displayName:'sharon chebet',
           username: 'sharonchebe',
           verified: true,
           text: tweetMessage,
           avatar:'https://www.istockphoto.com/photo/businesswoman-icon-as-avatar-profile-picture-gm514585871-47611478?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&referrer_url=http%3A//pixabay.com/images/search/avatar/&utm_term=avatar',
           image: tweetImage,
       });
       setTweetMessage("");
       setTweetImage("");
    }

    return( 
    <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
                <Avatar src="avatar-alt.svg"/>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
                 placeholder="What is happening now"
                  type="text"/> 
            </div>
            <input
                value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox_imageInput" placeholder="Optional: Enter Image url" type="text"/>
            <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>   
        </div>
    );

}

export default TweetBox
