# ainc-gatsby-sanity-studio

How to do get new schemas to show up on gatsby/\_\_\_graphql
1.) `npm install -g @sanity/cli@2.33.2`
2.) cd to folder with sanity.json in it (studio)
3.) `sanity login`
4.) thne login using the options
5.) `sanity graphql deploy`
6.) run `yarn run dev` to boot up sanity and gatsby local

How to kill ports if Ctrl + C

- `npx kill-port [port number]`
- Ex: `npx kill-port 8000`
