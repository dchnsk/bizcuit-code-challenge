# ✅ TODO App - Bizcuit Code Challange

Launching guides for frontend and backend are described in detail in README's in their dirs

Unfortonately, I could not implement in time authentication/authorization(User's mock data is hardcoded into userStore) and TODO's deadline adding functionality, that's why it is in initial state. If I had had some more time, I would have implemented it without any problems. I've decided to implement frontend of the app with the todoist-like design first and had on the backend much less time left

## 💅 Frontend Web Stack

-   TypeScript
-   React
-   Next.js - for SSR
-   Zustand - lighweight and very laconic state manager, perfectly fits small-medium sized projects, that is why I have chosen it
-   Tailwind - for quick styling
-   Flowbit - UI lib

## 🧠 Backend Web Stack

-   TypeScript
-   Express: firstly I wanted to use Nest.js, but since time is limited, I've decided that I will create functionaloty faster with Express
-   Sequelize - used as main ORM
-   postgreSQL

## What would I have done if I had more time:

On Frontend:

-   Add sign in/sign up pages
-   Add unit-tests
-   Add ability to navigate with keyboard for dropdown menu for priorities
-   Add ability to filter tasks to see only those, which are completed
-   Add normal data serialization
-   Add pagination
-   Add favicon
-   Add String constants, localization
-   Get rid of all the any types

On Backend:

-   Implement secure authentication/authorization
-   Add unit-tests
-   Share interfaces/types between frontend and backend
-   Add normal DI
