# BigTalkApp

**TL;DR:** This repo holds a small 2019 Angular prototype, built on top of an "Angular 6 Firebase CRUD" tutorial, where a visitor picks categories, fills a multi-step form to create a user with an avatar, and lands on a thank-you page; the users are saved in Firebase. Nobody uses it, and what "Big Talk" was meant to be is not stated anywhere.

## What it is

Written on 2019-01-22. The pages are: category pick (the start
page), new user (a step-by-step form), thanks, a list of all users, and a user
detail page for editing or deleting. The Firebase project is `bigtalkdemo`; its
Hosting address returns 404. The Cloud Functions folder holds only the commented-out
sample function.

## What's in here

| Path | What it is |
|---|---|
| `src/app/` | The Angular app (Angular 6/7 era): category-pick, new-user, thanks, show-all, edit-user, avatar dialog, a Firebase service |
| `functions/` | An empty Cloud Functions scaffold |
| `public/` | The default Firebase Hosting placeholder pages |
| `dist/` | A committed build output |
| `firebase.json`, `.firebaserc`, `*.rules` | Firebase configuration for `bigtalkdemo` |
| `6.0.0-beta`, `=2.3.1`, `=6.0.0-beta.0` | Empty files, left over from mistyped `npm install` commands |
| `mycelium.json` | The repo's Mycelium manifest (kind `poc`) |

## Run and build

`npm install`, then `npm start` (`ng serve`) or `npm run build` (`ng build`, into `dist/angular6-firebase-crud/`, the folder `firebase.json` hosts). The dependencies are Angular 6 and 7 mixed, with AngularFire 5 and Angular Material 6; expect a Node from that era (2019).

## Deploy

No CI or deploy workflow. `firebase.json` points Hosting at `dist/angular6-firebase-crud/` in project `bigtalkdemo`; that project's Hosting address answers 404.

## Status

Dormant since 2019-01-22. Version `0.0.0` (`package.json`); no tags or GitHub releases.
