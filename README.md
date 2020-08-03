# nuntius

A very great twitter clone written in Node; Express; Mongo; Vue or vanilla JS

## How it works:

It works pretty much just like twitter:
- You can create an account
- You can write small posts (or tweets)
- You can include pictures in posts
- You can like other posts and reply to them
- If you want to reply to other replies, you need to use ```@username``` - **no nested replies**
- You can follow other people

## The rest api:

### Endpoints:

- ```/search?s={keyword}```
-------------------
- ```/postLists/recommendations``` <- Recommended posts for you
- ```/postLists/trending``` <- Trending posts
- ```/postLists/following``` <- Posts from people that you're following
-------------------
- ```/posts```
- ```/posts/:postId```
- ```/posts/:postId/replies```
- ```/posts/:postId/replies/:replyId```
- ```/posts/:postId/likes```
-------------------
- ```/accounts```
- ```/accounts/:username```
-------------------
- ```/settings```
