import jsonPlaceholder from '../apis/jsonPaceholder';

export const fetchPosts = () => {
    return {
        type: 'FETCH_POSTS'
    };
};