import apolloClient from './connection';
import { userQuery, subredditQuery } from './Query';
import { APIControllerResponse } from '../Common/Helpers';

export function getUserData() {
    return new Promise((resolve) => {
        apolloClient.query({
            query: userQuery
        }).then(response => {
            resolve(new APIControllerResponse(response.data.reddit.user, null))
        }).catch(error => {
            resolve(new APIControllerResponse(null, error))
        });
    })
}

export function getSubreddits() {
    return new Promise((resolve) => {
        apolloClient.query({
            query: subredditQuery
        }).then(response => {
            resolve(new APIControllerResponse(response.data.reddit.subreddit.newListings, null))
        }).catch(error => {
            resolve(new APIControllerResponse(null, error))
        });
    })
}


