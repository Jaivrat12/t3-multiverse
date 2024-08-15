# T3 Multiverse Server

## Getting Started
Create a `.env` file and add these lines:

```
PORT=8000
MONGODB_URL=mongodb://localhost:27017/temp
```

> **Note**: You'll have to install MongoDB locally on your machine first. Or you can get a URL from MongoDB Atlas and use that instead.

Install dependencies and run the development server:

```bash
npm i
npm run dev
```

The server will then start listening to the requests on this URL:
> http://localhost:8000/