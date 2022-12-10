# How to install

It's recommended to use a node manager like [nvm](https://github.com/nvm-sh/nvm).
Make sure to run node version found in `.nvmrc`

- Install packages

```
npm i
```

- Run Migrations
```
npx prisma migrate dev --name init
```

- Start Server
```
npm start
```

Alternatively, while developing you can run [nodemon](https://www.npmjs.com/package/nodemon)
```
npm run dev
```
