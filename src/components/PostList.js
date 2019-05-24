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
