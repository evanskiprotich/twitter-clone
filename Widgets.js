import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1409168472802828292"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="_kiprotichevans"
                    options={{height:400}}
                />
                <TwitterShareButton
                    url={"https://www.facebook.com/evans.kipngetich.9231/"}
                    options={{text:"#reactjs is awesome", via:"evanskiprotich"}}
                    />
                    </div>
        </div>
    )
}

export default Widgets
