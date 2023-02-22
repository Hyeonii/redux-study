import React, { useState } from "react";
import { connect } from "react-redux";
import { addLikes, cancelLikes } from "../redux";

const likes = ({ count, addLikes, cancelLikes }) => {
    const [likeBtnOn, setLikeBtnOn] = useState(false);

    const handleLikeBtn = () => {
        if (likeBtnOn) {
            setLikeBtnOn(false);
            cancelLikes();
        } else if (!likeBtnOn) {
            setLikeBtnOn(true);
            addLikes();
        }
    };

    return (
        <div className="items">
            <h4>
                {likeBtnOn ? "💓" : "🤍"} {count}
            </h4>
            <button onClick={handleLikeBtn}>좋아요</button>
        </div>
    );
};

const mapSateToProps = ({ like }) => {
    return {
        count: like.count,
    };
};

const mapDispatchToFunction = {
    addLikes,
    cancelLikes,
};

export default connect(mapSateToProps, mapDispatchToFunction)(likes);
