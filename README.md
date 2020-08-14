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

- ```/search?q=yxz```
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

## How stuff is stored:

The DB has 3 collections: ```posts```, ```accounts``` and ```replies``` and 4 Schemas / Models: ```Account```, ```Post```, ```Reply``` and ```userSettings``` which is a Subschema of ```Account```.

Whenever you're referencing another user, you use their username. The username
cannot contain spaces and nobody can change it later. The real name, which is also
displayed on the person's profile, can contain spaces and can be changed because
it is never used to link to someone's profile (with a ```@``` or in an url).

Whenever you're referencing a post, you use the post's Id.
Whenever you're referencing a reply, you use the reply's Id.

### Accounts:

```json
{
    "username": "0rbite",
    "realname": "Jannis Kohle",
    "picture": "images.nuntius.yzx/ne746fh3856.jpg",
    "email": "0rbite@0rbite.0rbite",
    "password": "iDontUseArchBtw",
    "followersNum": 2,
    "followingNum": 3,
    "likedPostsNum": 3,
    "likedRepliesNum": 1,
    "postsNum": 2,
    "repliesNum": 3,
    "followers": ["elonmusk", "darthvader"],
    "following": ["randomuser", "elonmusk", "darthvader"],
    "likedPosts": ["78q34tnd5q394", "4t895ft4653q8", "q847n5ftgq483z5f"],
    "likedReplies": ["n8tq34986qv054"],
    "posts": ["q9347bvq348v0", "8q0374fz5qer8t"],
    "replies": ["q497zfnqt80gd2", "084q3tgq34tgcn9", "9ng238zt3489qtv03q"],
    "date": "...",
    "userSettings": {
        "theme": "dark",
        "notificationType": "email",
        "notifications": ["mentioned", "replies", "..."]
    }
}
```

### Posts:

```json
{
    "_id": "q8n3074nt56gqv353nz3576vg",
    "text": "Who is dream?",
    "writer": "realbenex",
    "image": "images.nuntius.yzx/34078z57834bv5g.jpg",
    "likesNum": 4,
    "repliesNum": 2,
    "likes": ["illumina1337", "nicetwice", "dreamwasnottaken", "goergeisfound"],
    "replies": ["9ch37gh853vft68", "8743qt0zfnq6vq03"],
    "date": "..."
}
```

### Replies:

```json
{
    "_id": "8743qt0zfnq6vq03",
    "text": "that's a funny one",
    "writer": "dreamwasnottaken",
    "likesNum": 2,
    "likes": ["illumina1337", "goergeisfound"],
    "date": "..."
}
```
