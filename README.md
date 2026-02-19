## ABOUT

This is a work in progress.  I eventually intend
to have tools to create my resume from code. My
code should produce both a browser experience
(i.e. HTML+TS) and a PDF doc.

For now this project is also a good example of
a quick-start project using vite.


## SETUP

Setting up initial project:

* crib these files from other projects
    * README.md
    * index.html
    * tsconfig.json
    * .gitignore
    * src/main.ts
* git add README.md index.html tsconfig.json .gitignore src/main.ts
* npm install vite --save-dev
* look for compiler errors (separate terminal)
    * npm install typescript
    * npx tsc -w --noEmit
* launch server (separate terminal)
    * npx vite
* open in browser (vite shows port)
    * e.g. http://localhost:5173/
* git add package-lock.json package.json
* git status
* git commit -am "start"

Terminal setup
* code editor
* dev server: `npx vite`
* TS compiler: `npx tsc -w --noEmit`
* misc (mostly git)

Oxlint:
* `npm add -D oxlint`
* `npx oxlint`
* steal `.oxlintrc.json` as needed

Prettier:
* grab .prettierrc for 4-space tabs
* `npx prettier src/*.ts --write`
* git add .prettierrc

## PDF

* npm install --save pdf-lib
* maybe later: https://github.com/Hopding/pdf-lib/tree/master?tab=readme-ov-file#fontkit-installation
* npm install vite-node --save-dev
* npx vite-node src/pdf.ts
* npm i --save-dev @types/node
