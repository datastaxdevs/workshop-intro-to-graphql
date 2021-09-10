<!--- STARTEXCLUDE --->
# 🎓 Introduction to GraphQL + React + Java + Astra DB

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)
[![License Apache2](https://img.shields.io/hexpm/l/plug.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Discord](https://img.shields.io/discord/685554030159593522)](https://discord.com/widget?id=685554030159593522&theme=dark)

*50 minutes, Beginner/Intermediate, [Start Building](#1-login-or-register-to-astradb-and-create-database)*

Both a simple **graphQL** enabled **ReactJS** app built using [**create-react-app**](https://create-react-app.dev/) AND a simple **Java** backend **graphQL** service built with [**Spring Intializer**](https://start.spring.io/) and using [**The Netflix DGS framework**](https://netflix.github.io/dgs/getting-started/) PLUS **Astra DB** hooked up and ready to rock! :heart_eyes_cat:

This is a companion to our [Netflix Clone using Astra DB and GraphQL](https://github.com/datastaxdevs/appdev-week3-graphql) workshop and is essentially a "prologue" to that content. Once complete, feel free to to go deploy a Netflix clone using what you learned here.

Finally, this content uses **React/JS** concepts. If you are not familiar with those or need a refresher, [take a look HERE](https://github.com/datastaxdevs/react-basics) to get up to date.

The materials have been built by the Datastax developer advocates team.

<!--- ENDEXCLUDE --->

![image](./tutorial/images/graphQL_logo.png)

## 🎯 Objectives
* An overview of what GraphQL is and what makes it cool
* What differs between GraphQL, REST, other APIs, and their pros/cons
* Hands-on examples of GraphQL queries and mutations
* How to build GraphQL APIs for mobile and web applications
* Setting up your Astra DB to store application data via GraphQL

## ℹ️ Frequently asked questions ℹ️ 

- *Can I run the workshop on my computer?*

> There is nothing preventing you from running the workshop on your own machine.
> If you do so, you will need
> * [node 15 and npm 7 or later](https://www.whitesourcesoftware.com/free-developer-tools/blog/update-node-js/)
> * netlify-cli (use "npm install -g netlify-cli")
>
> You will have to adapt commands and paths based on your environment and install the dependencies by yourself. **We won't provide support** to keep on track with schedule. However, we will do our best to give you the info you need to be successful. **This is considered a more advanced path to take.**

- *What other prerequisites are there?*
> * You will need a github account
> * You will need an Astra DB account, but we'll work through that in the exercises
> * Use **Chrome** or **Firefox** for the best experience.

- *Do I need to pay for anything for this workshop?*
> * **No.** All tools and services we provide here are FREE.

- *Will I get a certificate if I attend this workshop?*

> Attending the session is not enough. You can earn yourself a nice badge to brag about if you complete all of the homework.

## Materials for the Session

It doesn't matter if you join our workshop live or you prefer to do at your own pace, we have you covered. In this repository, you'll find everything you need for this workshop:

- [Slide deck](./slides/slides.pdf)
- [Discord chat](https://bit.ly/cassandra-workshop)
- [Questions and Answers](https://community.datastax.com/)

## Homework

<img src="tutorial/images/netflix-badge.png?raw=true" width="200" align="right" />

Don't forget to complete your upgrade and get your verified skill badge! Finish and submit your homework!

1. Complete the practice steps from this repository as described below.
2. Insert a movie of your choice in the database.
3. Make screenshots alongside the steps and show us your deployed production Netflix clone up in Netlify.
4. (Optional extra credit) Watch the 45 minute Ali Spittel video, *A Beginner's Guide to GraphQL* [HERE](https://www.youtube.com/watch?v=c2fJ7T0N1Sk).
5. Submit your homework [here](https://github.com/datastaxdevs/appdev-week3-graphql/issues/new?assignees=HadesArchitect%2C+SonicDMG%2C+RyanWelford&labels=homework%2C+wait+for+review&template=homework-assignment.md&title=%5BHW%5D+%3CNAME%3E)

That's it, you are done! Expect an email within about a week!
  
# Let's start


### Extra resources
[graphql.org](https://graphql.org/)

[The Netflix DGS framework Tutorial](https://netflix.github.io/dgs/getting-started/)

[GraphiQL](https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/)

[Top 7 GraphQL IDEs](https://hasura.io/blog/top-7-graphql-ides-you-should-know-about-in-2021/)

[create-react-app tutorial](https://create-react-app.dev/)

[Spring Intializer](https://start.spring.io/)

# Part 1 - DB Setup & Data Ingest

## 1. Login or Register to AstraDB and create database

> *When creating your instance use the promotion code **ANIA200** to get 200$ of free credit allowing you about 30 million writes + 30 Million reads  + 50GB a month of monthly storage!!*

**`ASTRADB`** is the simplest way to run Cassandra with zero operations at all - just push the button and get your cluster. No credit card required, FREE for roughly 5M writes, 30M reads, 40GB storage monthly - sufficient to run small production workloads.  

✅ **Step 1a:** Click the button to login or register with Datastax. You can use your `Github`, `Google` accounts or register with an `email`.

_Make sure to chose a password with minimum 8 characters, containing upper and lowercase letters, at least one number and special character_

<a href="https://astra.dev/7-22"><img src="tutorial/images/create_astra_db.png?raw=true" /></a>
- <details><summary>Show me!</summary>
    <img src="https://github.com/datastaxdevs/workshop-spring-stargate/raw/main/images/tutorials/astra-create-db.gif?raw=true" />
</details>

**Use the following values when creating the database**
|Field| Value|
|---|---|
|**database name**| `netflix_workshop_db` |
|**keyspace**| `netflix_keyspace` |
|**Cloud Provider**| *Use the one you like, click a cloud provider logo,  pick an Area in the list and finally pick a region.* |

_You can technically use whatever you want and update the code to reflect the keyspace. This is really to get you on a happy path for the first run._

You will see your new database `pending` OR `initializing` in the Dashboard.

![image](./tutorial/images/db-pending.png?raw=true)

The status will change to `Active` when the database is ready, this will only take 2-3 minutes. You will also receive an email when it is ready.

[🏠 Back to Table of Contents](#table-of-contents)


## 2. Create a security token

✅  **Step 2a:**  [Create a token for your app](https://docs.datastax.com/en/astra/docs/manage-application-tokens.html) to use in the settings screen. Use "Database Administrator" permission.

✅  **Step 2b:**  Copy the token value (eg `AstraCS:KDfdKeNREyWQvDpDrBqwBsUB:ec80667c....`) in your clipboard and save the CSV, this value would not be provided afterward.

**👁️ Expected output**
- <details><summary>Show me!</summary>
    <img src="img/astra-create-token.gif?raw=true" />
</details>

[🏠 Back to Table of Contents](#table-of-contents)

## 3. Launch Gitpod

[Gitpod](https://www.gitpod.io/) is an 100% online IDE based on [VS Code](https://github.com/gitpod-io/vscode/blob/gp-code/LICENSE.txt?lang=en-US). To initialize your environment simply click on the button below _(CTRL + Click to open in new tab)_ You will be asked for you github account, as needed.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/datastaxdevs/workshop-intro-to-graphql)

This will startup your demo environment. Be patient, it will take a couple minutes as everything loads up.

## 4. Experiment with GraphiQL
It just so happens that [The Netflix DGS framework](https://netflix.github.io/dgs/getting-started/) comes with GraphiQL already integrated and ready for use. This is a wonderful tool you can use to explore graphQL queries and mutations. Let's experiement with this now!

#### Here's the schema defined in our java backend per `graphql-backend-examples/src/main/resources/schema/schema.graphqls/schema.graphqls`

```GraphQL
type Query {
    shows(titleFilter: String): [Show]
    genres(labelFilter: String): [Genre]
}

type Show {
    title: String
    releaseYear: Int
}

type Genre {
    value: String!
}
```

#### Now, let's try out some graphQL queries

```GraphQL
query justTitle {
  shows {
    title
  }
}
```

```GraphQL
query withReleaseYear {
  shows {
    title
    releaseYear
  }
}
```

```GraphQL
query ShowsAndGenres {
  shows {
    title
    releaseYear
  }
  genres {
    value
  }
}
```

## 5. Start up React
Ok, so we've played a bit with some graphQL queries on the backend and looked at how a basic schema works, but how do we hook this into our React JS app?

#### First, we need to run a couple commands to get things setup
In your **`GitPod`** IDE navigate to the **`workshop-intro-to-graphql/graphql-client-examples`** terminal on the bottom right *(it should already be open for you)*.

#### ✅  Execute the following command
```shell
npm install -g netlify-cli
```

This will install the **Netlify CLI** (command line interface) which our **React/JS** app uses in conjunction with the serverless functions we've setup to talk to our **graphQL** endpoints.

#### ✅  Then, execute
```shell
netlify dev
```

This will start the **React/JS** application and display results from both the **`Shows`** and **`Genres`** **graphQL** queries and endpoints we were just experimenting with.

#### Compare javascript code to our graphQL queries from above
If you take a look at both **`getShowsBackend.js`** and **`getGenresBackend.js`** located in **`graphql-client-examples/functions`** you should notice that both use the **same exact** **graphQL** queries that we used above.

```javascript
const query = `
    query getAllShows {
      shows {
        title
        releaseYear
      }
    }
  `
  ```

  ```javascript
  const query = `
    query getAllGenres {
      genres {
        value
      }
    }
  `
  ```

  All of the javascript wrapped around these is simply there to call the **graphQL** endpoint with the given query and pass the responseBody back to the calling function.

  #### Now for the cool part
  Take a look at **`Shows.js`** and **`Genres.js`** located in **`graphql-client-examples/src/components/Shows.js`**. In both cases they use **React** state, `shows` and `genres` respectively
  ```javascript
  const [shows, setShows] = useState(null)
  ```

  ```javascript
  const [genres, setGenres] = useState(null)
  ```

to receive the responseBody from from our **graphQL** queries, set the **React** state, and inject the values dyanmically into the DOM.

Notice how the fields (title, releaseYear) match our **graphQL** `Shows` schema exactly.
```javascript
return shows.map(({ title, releaseYear }) => (
        <div key={title}>
            <p>
            {title}: {releaseYear}
            </p>
        </div>
    ));
```

Notice how the field (value) matches our **graphQL** `Genres` schema exactly.
```javascript
return genres.map(({ value }) => (
          <div key={value}>
              <p>
              {value}
              </p>
          </div>
      ));
```

## 6. Hook up the data layer with Astra DB
Ok, let's take this a step further and hook our app up to a data layer. As this point you should have already created your Astra DB database. Follow the instructions below to launch the **GraphQL Playground** provided in **Astra**

✅  **Step 6a:** Open **GraphQL Playground** by 
1. Click on your active database
2. Click `Connect` TAB
3. Click `GRAPHQL API`
4. Click link to your playground.

*As show on the picture below.*
![image](tutorial/images/open-playground.png?raw=true)

> *Note that values in the picture do no reflect the database name `netflix_workshop_db`, reason is we do not reproduce every picture each time*

✅  **Step 6b:** In GraphQL Playground, **Populate HTTP HEADER** variable `x-cassandra-token` on the bottom of the page with your token as shown below

![image](tutorial/images/graphql-playground.png?raw=true)

✅  **Step 6c:** In GraphQL Playground, create a table with the following mutation, making sure to replace `netflix_keyspace` if you used a different name:

- Copy the following mutation on the left panel
```yaml
mutation {
  reference_list: createTable(
    keyspaceName:"netflix_keyspace",
    tableName:"reference_list",
    ifNotExists:true
    partitionKeys: [ 
      { name: "label", type: {basic: TEXT} }
    ]
    clusteringKeys: [
      { name: "value", type: {basic: TEXT}, order: "ASC" }
    ]
  )
}
```
* Use the arrow in the middle of the screen to execute the query

![image](tutorial/images/playground-1.png?raw=true)

[🏠 Back to Table of Contents](#table-of-contents)

## 7. Insert data in the Table with GraphQL

✅  **Step 7a:** In graphQL playground, change tab to now use `graphql`. Edit the end of the URl to change from `system` to the name of your keyspace: `netflix_keyspace`

✅  **Step 7b:** Populate **HTTP HEADER** variable `x-cassandra-token` on the bottom of the page with your token as shown below (again !! yes this is not the same tab)

![image](tutorial/images/graphql-playground-2.png?raw=true)

✅  **Step 7c:** In GraphQL Playground,populate the `reference_list` table with the following values

- Copy the following mutation on the left panel

```yaml
mutation insertGenres {
  action: insertreference_list(value: {label:"genre", value:"Action"}) {
    value{value}
  }
  anime: insertreference_list(value: {label:"genre", value:"Anime"}) {
     value{value}
  }
  award: insertreference_list(value: {label:"genre", value:"Award-Winning"}) {
     value{value}
  }
  children: insertreference_list(value: {label:"genre", value:"Children & Family"}) {
     value{value}
  }
  comedies: insertreference_list(value: {label:"genre", value:"Comedies"}) {
     value{value}
  }
  documentaries: insertreference_list(value: {label:"genre", value:"Documentaries"}) {
     value{value}
  }
  drama: insertreference_list(value: {label:"genre", value:"Dramas"}) {
     value{value}
  }
  fantasy: insertreference_list(value: {label:"genre", value:"Fantasy"}) {
     value{value}
  }
  french: insertreference_list(value: {label:"genre", value:"French"}) {
     value{value}
  }
  horror: insertreference_list(value: {label:"genre", value:"Horror"}) {
     value{value}
  }
  independent: insertreference_list(value: {label:"genre", value:"Independent"}) {
     value{value}
  }
  music: insertreference_list(value: {label:"genre", value:"Music & Musicals"}) {
     value{value}
  }
  romance: insertreference_list(value: {label:"genre", value:"Romance"}) {
     value{value}
  }
  scifi: insertreference_list(value: {label:"genre", value:"Sci-Fi"}) {
     value{value}
  }
  thriller: insertreference_list(value: {label:"genre", value:"Thriller"}) {
     value{value}
  }  
}
```

* Use the arrow in the middle of the screen to execute the query

[🏠 Back to Table of Contents](#table-of-contents)

## 8. Retrieving list of values

✅  **Step 5a:** In GraphQL Playground, not changing tab (yeah) list values from the table with the following query.

```yaml
query getAllGenre {
    reference_list (value: {label:"genre"}) {
      values {
      	value
      }
    }
}
```

*👁️ Expected output*
![image](tutorial/images/graphql-playground-3.png?raw=true)

[🏠 Back to Table of Contents](#table-of-contents)

## 9. Hook the database up to our React/JS app