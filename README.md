<!--- STARTEXCLUDE --->
# 🎓 Introduction to GraphQL + React + Java + Astra DB

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)
[![License Apache2](https://img.shields.io/hexpm/l/plug.svg)](http://www.apache.org/licenses/LICENSE-2.0)
[![Discord](https://img.shields.io/discord/685554030159593522)](https://discord.com/widget?id=685554030159593522&theme=dark)

*50 minutes, Beginner/Intermediate, [Start Building](#1-login-or-register-to-astradb-and-create-database)*

Both a simple **graphQL** enabled **ReactJS** app built using [**create-react-app**](https://create-react-app.dev/) AND a simple **Java** backend **graphQL** service built with [**Spring Initializr**](https://start.spring.io/) and using [**The Netflix DGS framework**](https://netflix.github.io/dgs/getting-started/) PLUS **Astra DB** hooked up and ready to rock! :heart_eyes_cat:

This is a companion to our [Netflix Clone using Astra DB and GraphQL](https://github.com/datastaxdevs/appdev-week3-graphql) workshop and is essentially a "prologue" to that content. Once complete, feel free to to go deploy a Netflix clone using what you learned here.

Finally, this content uses **React/JS** concepts. If you are not familiar with those or need a refresher, [take a look HERE](https://github.com/datastaxdevs/react-basics) to get up to date.

The materials have been built by the DataStax developer advocates team.

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
> * [node 15 or 16 and npm 7 or later](https://www.whitesourcesoftware.com/free-developer-tools/blog/update-node-js/)
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

<img src="tutorial/images/graphql-badge.png?raw=true" width="200" align="right" />

Don't forget to complete your upgrade and get your verified skill badge! Finish and submit your homework!

1. Complete the practice steps from this repository, as described below, to the end;
2. Insert (mutate) a **new show** or a **new genre** of your choice in the database;
3. Take a single **screenshot** of the React app with all of the working Astra DB sections and showing the entry you just added;
4. Submit your homework [here](https://docs.google.com/forms/d/1ZJ2K5MfWnYqKzPDtDi_uxFLq925e7S2J1-7LtAqwx94/viewform).

That's it, done.
We will then grade the submissions: expect an email in a few days!
  
# Let's start


### Extra resources
[graphql.org](https://graphql.org/) - The first place to learn about GraphQL

[The Netflix DGS framework Tutorial](https://netflix.github.io/dgs/getting-started/) - Java/Spring GraphQL backend (used to generate this code)

[Spring Initializr](https://start.spring.io/) - Used in the ^above tutorial to generate the Java/Spring backend starter

[GraphiQL](https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/) - GraphQL IDE included with The Netflix DGS Framework

[Apollo client](https://www.apollographql.com/docs/react/) - Awesome GraphQL client for React/JS (not used here, but really solid, Netflix uses this)

[Top 7 GraphQL IDEs](https://hasura.io/blog/top-7-graphql-ides-you-should-know-about-in-2021/) - A nice collection of cool GraphQL IDEs to use

[create-react-app tutorial](https://create-react-app.dev/) - Create a React app from scratch (used to generate this code)

[A Beginner's Guide to GraphQL](https://www.youtube.com/watch?v=c2fJ7T0N1Sk) - Ali Spittel's really awesome GraphQL starter video

# Part 1 - DB Setup & Data Ingest

## 1. Login or Register to AstraDB and create database

**`ASTRADB`** is the simplest way to use Cassandra in an application with almost zero operations  - just push the button and get your cluster. No credit card required, $25.00 USD credit every month, roughly 20M reads/writes, 80GB storage monthly - sufficient to run small production workloads. Click here to start:

<a href="https://astra.dev/6-29"><img src="tutorial/images/create_astra_db.png?raw=true" /></a>

Follow the instructions on [creating an Astra DB instance](https://awesome-astra.github.io/docs/pages/astra/create-instance/#c-procedure) and use the following values:

|Field| Value|
|---|---|
|**database name**| `workshops` |
|**keyspace**| `intrographql` |

_Note: If you already have a database named `workshops` you can just add the keyspace name `intrographql` to it. You may need to "Resume" the database first._

The status will change from `Pending` to `Active` when the database is ready, this will only take 2-3 minutes. You will also receive an email when it is ready.

> Notice: you may see that, along with your new database, also a Token is created for you.
> That's great: you can simply copy the token
> values and store them somewhere safe and skip the next step!

[🏠 Back to Table of Contents](#table-of-contents)


## 2. Create a security token

[Create a token for your app](https://awesome-astra.github.io/docs/pages/astra/create-token/#c-procedure), _using the "Database Administrator" role_. Keep it handy for later use (best to download the CSV token, as the values
will not be visible afterward). The token you'll need looks like `AstraCS:KDfdKeNREyWQvDpDrBqwBsUB:ec80667c....`

[🏠 Back to Table of Contents](#table-of-contents)

## 3. Launch Gitpod

[Gitpod](https://www.gitpod.io/) is an 100% online IDE based on [VS Code](https://github.com/gitpod-io/vscode/blob/gp-code/LICENSE.txt?lang=en-US). To initialize your environment simply click on the button below _(CTRL + Click to open in new tab)_ You will be asked for you github account, as needed.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/datastaxdevs/workshop-intro-to-graphql)


This will bootstrap your demo environment. Be patient, it will take a couple minutes as everything loads up.

You may be asked if it's OK to launch a new tab (for the GraphiQL IDE that will be used subsequently. Click on Open to make sure the new tab opens as shown below.

![image](./tutorial/images/NewTabOpen.png?raw=true)

## 4. Experiment with GraphiQL
It just so happens that [The Netflix DGS framework](https://netflix.github.io/dgs/getting-started/) comes with GraphiQL already integrated and ready for use. This is a wonderful tool you can use to explore graphQL queries and mutations. Let's experiement with this now!

#### Here's the schema defined in our java backend per `graphql-backend-examples/src/main/resources/schema/schema.graphqls`

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

Something to point out here is there is no database just yet. We are powering the graphQL schema via the back-end Java application and the graphQL data is completely hardcoded. Take a look at both **`ShowsDatafetcher.java`** and **`GenresDatafetcher.java`** located in **`graphql-backend-examples/src/main/java/com/example/demo`** to find the simple implementations using DGS annotations `@DgsComponent` and `@DgsQuery`.

#### Now, let's try out some graphQL queries
Plug these into the GraphiQL IDE that launched into a new tab from GitPod.

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
query getOneShow {
  shows (titleFilter: "Ozark") {
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

![Screen Shot 2021-09-14 at 10 56 10 AM](https://user-images.githubusercontent.com/23346205/133281572-9f42d927-639b-4993-aefe-18c700a1575a.png)


## 5. Start up React
Ok, so we've played a bit with some graphQL queries on the backend and looked at how a basic schema works, but how do we hook this into our React JS app?

#### First, we need to run a couple commands to get things setup
In your **`GitPod`** IDE navigate to the **`workshop-intro-to-graphql/graphql-client-examples`** terminal on the bottom left *(it should already be open for you)*.

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

Take a look at **`Shows.js`** and **`Genres.js`** located in **`graphql-client-examples/src/components/`**. In both cases they use **React** state, `gqlResult`

```javascript
  const [gqlResult, setGqlResult] = useState(null)
```

to receive the responseBody from from our **graphQL** queries, set the **React** state, and inject the values dyanmically into the DOM. Check out the following javascript snippet from **`Shows.js`**.

```javascript
// Asynchronously fetch any "shows" graphQL data from the Java backend
// using the getShowsBackend serverless function to call out to the
// Netflix DGS Java graphQL endpoint
const response = await fetch("/.netlify/functions/getShowsBackend", {
    method: "POST",
})
const responseBody = await response.json()
setGqlResult(responseBody) // on reponse set our graphQL result state
```

Notice how the fields (title, releaseYear) match our **graphQL** `Shows` schema exactly.

```javascript
// Finally, if all other checks pass get the data
// from the payload via gqlResult state and inject it into the DOM
// Notice how the payload example below and the fields "title" and "releaseYear" match exactly
// {"data":{"shows":[{"title":"Stranger Things","releaseYear":2016},{"title":"Ozark","releaseYear":2017}...
return gqlResult.data.shows.map(({ title, releaseYear }) => (
    <div key={title}>
        <p>
        {title}: {releaseYear}
        </p>
    </div>
  ));
```

Notice how the field (value) matches our **graphQL** `Genres` schema exactly.

```javascript
// Finally, if all other checks pass get the data
// from the payload via gqlResult state and inject it into the DOM
// Notice how the payload example below and the fields "title" and "releaseYear" match exactly
// {"data":{"genres":[{"value":"Action"},{"value":"Anime"}...
return gqlResult.data.genres.map(({ value }) => (
    <div key={value}>
        <p>
        {value}
        </p>
    </div>
  ));
```

## 6. Hook up the data layer with Astra DB
Ok, let's take this a step further and hook our app up to a data layer. As this point you should have already created your Astra DB database. Follow the instructions below to launch the **GraphQL Playground** provided in **Astra**

#### ✅  Step 6a: Open GraphQL Playground by
1. Click on your active database
2. Click `Connect` TAB
3. Click `GRAPHQL API`
4. Click link to your playground.

*As show on the picture below.*
![image](tutorial/images/open-playground.png?raw=true)

> *Note that values in the picture do no reflect the database name `workshops`, reason is we do not reproduce every picture each time*

#### ✅  Step 6b: In GraphQL Playground, **Populate HTTP HEADER** variable `x-cassandra-token` on the bottom of the page with your token as shown below
✅ Ensure you have the **`graphql-schema`** tab selected for this step

![image](tutorial/images/graphql-playground.png?raw=true)

#### ✅  Step 6c: In GraphQL Playground, create a table with the following mutation, making sure to replace `intrographql` if you used a different name:

- Copy the following mutation on the left panel

```GraphQL
mutation {
  reference_list: createTable(
    keyspaceName:"intrographql",
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

#### ✅  Step 7a: In graphQL playground, change tab to now use `graphql`. Edit the end of the URl to change from `system` to the name of your keyspace: `intrographql`

#### ✅  Step 7b: Populate **HTTP HEADER** variable `x-cassandra-token` on the bottom of the page with your token as shown below (again !! yes this is not the same tab)

![image](tutorial/images/graphql-playground-2.png?raw=true)

#### ✅  Step 7c: In GraphQL Playground,populate the `reference_list` table with the following values

- Copy the following mutation on the left panel

```GraphQL
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

#### ✅  Step 8a: In GraphQL Playground, not changing tab (yeah) list values from the table with the following query.

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
So, you just created a table, inserted (mutated) some rows into the table, and then retrieved all of the genres with the "getAllGenre" query using the GraphQL Playground provided as part of Astra DB. Now, let's hook our client up to our Astra DB graphQL endpiont and render the results to our website with React.

#### ✅ Step 9a: Configure database credentials
In your **`GitPod`** IDE navigate to the **`workshop-intro-to-graphql/graphql-client-examples`** terminal on the bottom right *(it should already be open for you)*. **This is running your nodejs/React app.**

#### ✅ Execute the following command in your terminal to stop the React app
*You will need to hold the control button and the letter C at the same time*
```shell
CTRL-C 
```

#### ✅ Now execute the following command to configure the database
 Note that this does require Node 15 and NPM 7 to work.  You can install a node version manager like `nvm` or `n` to use multiple versions on your system. **If you are using GitPod this should simply work since we pre-installed all of the dependcies for you.**

```shell
npm exec astra-setup workshops intrographql
```

You will be asked to: **Please paste the Database Admin Token here** so copy over the Token you saved earlier, and hit enter. It will start with AstraCS:cvdPRONUrUUT:...

![Screen Shot 2021-09-13 at 9 42 46 PM](https://user-images.githubusercontent.com/23346205/133180758-ff2a9cc9-73a2-4602-8e41-d78fada9932b.png)

This will add a set of envrionment variables for database authentication to your `.env` file at the root of **`workshop-intro-to-graphql/graphql-client-examples`**. It should look something like this.

![Screen Shot 2021-09-13 at 9 45 41 PM](https://user-images.githubusercontent.com/23346205/133181009-928f4172-a687-43eb-b9ee-8c3d2e7483dd.png)

> If you have multiple keyspaces, chances are the ending of the entry for
> `ASTRA_GRAPHQL_ENDPOINT` will have them all in a comma-separated list
> (e.g. `https://1960a[...]api/graphql/ks1,ks2,intrographql,ks3`).
> This is due to a known bug in the `astra-setup` tool.
> In this case, please manually correct the entry to simply
> `[...]api/graphql/intrographql`.

#### ✅ Start your React app back up with the following command
```shell
netlify dev
```

#### ✅ Step 9b: Verify data load
At this point your app should be running with a bunch of data displayed in the **`Shows`**, **`Genres,`** and **`ReferenceList`** sections, but notice the **`ShowsByName`** section displays **"Error :("**

![Screen Shot 2021-09-13 at 10 00 26 PM](tutorial/images/error_shows_by_name.png?raw=true)

#### Can you figure out what's going on here?
Let's break this down.

* We just added the database configuration and the **`ReferenceList`** section is populated which tells us our DB config and graphQL endpoints are configured properly

* In the GraphQL Playground we added a schema for the **`reference_list`** table and added some data to the table, but we never created a schema for the **`ShowsByName`** section

* If you take a look at the **`getShowsAstra.js`** script in **`graphql-client-examples/functions`** you can see the graphQL being used to query for data
```javascript
exports.handler = async function (event) {
  const query = `
    query getAllShows {
      show_by_name {
        values {
          title
          releaseYear
        }
      }
    }
  `
```

#### ✅  Test this query in the GraphQL Playground **`graphQL`** tab
Copy this into the playground and press the _"play"_ button to execute the query. **NOTE, you can simply append the query to the end of the list and then choose the query you wish to execute when you hit the "play" button.**

```GraphQL
query getAllShows {
      show_by_name {
        values {
          title
          releaseYear
        }
      }
    }
```

![Screen Shot 2021-09-13 at 10 22 16 PM](https://user-images.githubusercontent.com/23346205/133184337-94f3fe7b-4f25-47d4-acda-86e1e47af117.png)

#### View Results
Notice what happened here. We have a validation error because there is no schema associated with the query we just executed. GraphQL uses a typed validation system so this is something to expect if a query is malformed, missing a schema, or something along those lines. You will want to control for this in your code.

![Screen Shot 2021-09-13 at 10 25 31 PM](https://user-images.githubusercontent.com/23346205/133184395-5436558a-bb80-4b45-a852-193cfbef2ba8.png)

#### ✅ Step 9c: Create the **`ShowsByName`** table with a graphQL mutation to fix the app
Ok, so let's fix up the schema issue to resolve the error.

#### ✅ Execute the following mutation in the **`graph-schema`** tab of the GraphQL Playground
```GraphQL
mutation CreateShowsTable {
  createTable(
    keyspaceName: "intrographql"
    tableName: "show_by_name"
    partitionKeys: [{
      name: "title", type: {basic:TEXT}
    }]
    values:[{
      name: "releaseYear", type: {basic:INT}
    }]
  )
}
```

![Screen Shot 2021-09-13 at 10 34 26 PM](https://user-images.githubusercontent.com/23346205/133185375-5f25a859-0a7d-49b5-a660-a8a6c484caaf.png)

#### ✅ Verify result
Once executed you should see a result like this

![Screen Shot 2021-09-13 at 10 34 34 PM](https://user-images.githubusercontent.com/23346205/133185415-72ed5950-2b36-44b4-96d5-a64456252d71.png)

#### ✅ Add some data
Now, go back to the **`graphql`** tab of the GraphQL Playground and add the following mutation
```GraphQL
mutation insertShows {
  stranger: insertshow_by_name (
    value: {
      title: "Stranger Things",
      releaseYear: 2016}) {
  	value{title}
  }
  ozark: insertshow_by_name (
    value: {
      title: "Ozark",
      releaseYear: 2017}) {
  	value{title}
  }
}
```

![Screen Shot 2021-09-13 at 10 39 50 PM](https://user-images.githubusercontent.com/23346205/133185954-56a3ce2b-1649-47ce-8eb6-b474bdbc88d8.png)

#### ✅ Check the result

![Screen Shot 2021-09-13 at 10 39 58 PM](https://user-images.githubusercontent.com/23346205/133185982-95f4e84b-242e-4317-9605-e8585caa8e8e.png)

#### ✅ Finally, refresh your React app
Notice this no longer displays **"Error :("**, but now correctly displays the data you just inserted (mutated). It might be fun to add some of your own data to this schema and refresh your page.

![Screen Shot 2021-09-13 at 10 41 03 PM](https://user-images.githubusercontent.com/23346205/133186039-9c5a06a1-6ac9-47c5-a984-c8809683636f.png)

#### Feel free to experiment with a couple more graphQL queries now that you have some data in the table

Notice in this case we are passing a "title" parameter "Ozark" to only return the show values that match that title.

```GraphQL
query getOneShow {
  show_by_name (value: {title: "Ozark"}) {
    values {
      title
      releaseYear
    }
  }
}
```

```GraphQL
query getAllShows {
  show_by_name {
    values {
      title
      releaseYear
    }
  }
}
```

### That's it, you did it! Nice job!
We hope this workshop gave you enough information on GraphQL to be dangerous and start you on a journey to using GraphQL in your own apps. Also, don't forget to do the [HOMEWORK](#homework)
