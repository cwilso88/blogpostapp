import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
               <div key={post.id} className="item">
                <i className="larg middle aligned icon user"></i>
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                </div>
               </div> 
            )
        });
    }
    render() {
        return (
            <div>
                <h1>POST LIST</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(
    mapStateToProps,
    { fetchPosts }
)(PostList);
