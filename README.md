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
- ```/posts/:postId/replies/:replyId/likes```
- ```/posts/:postId/likes```
-------------------
- ```/accounts```
- ```/accounts/:username```
-------------------
- ```/settings```

## How stuff is stored in the DB:

### Accounts:

```json
{
    "username": "0rbite",
    "realname": "Jannis Kohle",
    "picture": "images.nuntius.yzx/ne746fh3856.jpg",
    "followers": ["elonmusk", "darthvader"],
    "following": ["randomuser", "elonmusk", "darthvader"],
    "likedPosts": ["78q34tnd5q394", "4t895ft4653q8", "q847n5ftgq483z5f"],
    "likedReplies": ["q847n5ftgq483z5f/n8tq34986qv054"],
    "posts": ["q9347bvq348v0", "8q0374fz5qer8t"],
    "replies": ["84730qtng3q4nt6/q497zfnqt80gd2", "8q043zfqt89q084tg/084q3tgq34tgcn9", "4q893gn83gqtc8/9ng238zt3489qtv03q"]
}
```
