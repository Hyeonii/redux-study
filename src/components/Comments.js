import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchComments } from "../redux";

const Comments = ({ fetchComments, loading, comments }) => {
    useEffect(() => {
        fetchComments();
    }, []);

    const commentsItems = loading ? (
        <div>is loading...</div>
    ) : (
        comments.map((comment) => (
            <div key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
            </div>
        ))
    );

    return (
        <div className="comments">
            <h3 style={{ marginTop: 50 }}>구매 후기</h3>
            {commentsItems}
        </div>
    );
};
const mapStateToProps = ({ comment }) => {
    console.log("sdfsdfsdfsdf", comment);
    return {
        comments: comment.items,
    };
};

const mapDispatchToProps = {
    fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
