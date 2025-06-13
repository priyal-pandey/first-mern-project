- What is MERN stack? MongoDB, Express, React, Node.js
- Both frontend(react) and backend(node) use js

- MongoDB-Database to store data
- Express- Web framework is a ready to use toolbox for building web apps faster, saves time, makes code cleaner and organized, handles common tasks like routing, error handling etc
- Node.js is JavaScript Runtime, allows us to run JS on server (otherwise allowed only on browser)
- React fav frontend library


## cd backend

npm init -y (gives us package.json file)
npm install express@4.18.2 (gives package-lock.json and node modules)

create server.js, to run use node server.js
for running with script npm run dev, add "dev": "nodemon src/server.js" in package.json...for development

npm install nodemon -D  server automatically updated after changes without killing terminal

for production, add "start":node src/server.js in package.json

client sends request to server -> server gets data and sends response
API - Application Programming Interface (allows two apps to talk to each other- like waiter in a restaurant - prevents bad user requests)

REST API - uses http methods: get(get posts), put(create a post), post(update post), delete(delete post)

HTTP status codes
1xx - informational
2xx - success (200 ok, 201 created)
3xx - redirection: server tells client - thing ur looking for has moved somewhere else (301 moved permanently)

4xx - client error (404 not found, 400 bad request, 401 unauthorized, 403 forbidden, 429 too many requests)

5xx- server error (500 internal server error, 503 service unavailable (temporarily))

our first API
app.get("/api/notes", (req,res) =>{
    res.send("you got 5 notes");
}); //this is a route
Enpoint - combination on URL + HTTP method that lets the client interact with a specific resource eg get api/notes, post api/notes etc

separate routes, further separate to controllers

MONGODB - NoSQL
flexible data format(json/key-value) vs structured
query lang vs sql
big data, fast changing data, huge amts of data vs complex queries & relations

create a project in mongodb- copy link of cluster, store in .env file
npm install mongoose@latest
connectDB using mongoose.connect(MONGO_URI)

create a schema, and model for Note

middleware - before sending respond back, do something
e.g. app.use((req,res,next) =>{
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
    next();
});
use cases -> auth check

rate limiting - way to control how often someone can do something on a website or on an app like how many times they can refresh a page/ make request to an api or try logging in
429 - too many requests
-protecting servers from getting overwhelmed and prevent abuse
- upstash with redis(key value pairs:user-requests)
- copy tokens, npm install @upstash/ratelimit@2.0.5 @upstash/redis@1.34.9

config upstash.js

## cd frontend

npm create vite@latest
npm i react-router
npm i react-hot-toast
set up pages, router, routes, BrowserRouter, Toaster

tailwind css
daisy ui - themes, components

for icons - npm i lucide-react

for replacing fetch api with axios - npm i axios


CORS - cross origin resource sharing
browser security rule- when website tries to get ata from another website(e.g. frontend calling api on a different domain - the browser might block it for security reasons)

e.g frontend at http://localhost:3000
API backend at http://api.example.com

we made a fetch req to get data, but we are coming from localhost:3000 trying to access api.example.com (diff origin)
need to make sure the api allows this

go to backend
how to fix: add middleware 
npm i cors

app.use(cors({
    origin:"http://localhost:5173"
}
));