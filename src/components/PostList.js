import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList = () => {
        return this.props.posts.map(post => {
            return (
               <div key={post.id} className="item">
                <i className="larg middle aligned icon user"></i>
                <div className="content">
                    <div className="description">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader />
                </div>
               </div> 
            )
        });
    }
    render() {
        console.log(this.props.posts);
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
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
