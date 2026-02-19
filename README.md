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
