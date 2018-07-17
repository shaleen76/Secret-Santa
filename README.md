HBC Front End Coding Challenge
===============================

Guidelines
----------
* Use whichever libraries you prefer, or deem suitable for coding/styling purposes. Using libraries linked from public CDNs is preferable (e.g. [cdnjs.com](https://cdnjs.com/)).
* The solution will be expected to work via one of the following protocols: http, https.
* We support all major browsers from IE9 and up. If you have the time to also support these this is a bonus. Please specify which browsers you have aimed to support with your solution.

The Challenge
-------------
* Develop a web UI that loads the contents of users.json and renders a list of random assignments for [Secret Santa](http://en.wikipedia.org/wiki/Secret_Santa)
* Extra interactivity/styling will be considered a bonus.
* Use the included index.html and user.json to begin with but do not modify the structure of the users.json. You are free to modify index.html as you wish.

### Secret Santa Application

This application, (Secret Santa) is a Western Christmas tradition in which members of a group or community are randomly assigned a person to whom they give a gift. The identity of the gift giver is a secret not to be revealed.

### Application Screnshot Demonstration in Chrome Browser

![Alt text](/Secret%20Santa%20Application.png "Secret Santa Application")

### Tools Used

The application is responsive in nature and is designed using:

1. **_HTML_**
2. **_CSS_** 
3. **_JavaScript_**
4. **_React JS_**
5. **_Node JS_**
6. **_Semantic UI_**
7. **_Webpack_**
8. **_Babel_**
9. **_VS Code Editor_**
10. **_GitHub_** 
11. **_Mac_**

### Browser Support

This application is tested in all browsers Chrome, Firefox, IE 9 and above, Safari, Android, IPhone and Opera.

### CDNs

We have made use of the Semantic UI development framework that helps us in creating beautiful, responsive layouts using human-friendly HTML.

We included the **CDN for Semantic UI** in `index.html` file.


```
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css" />
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.js"></script>
```

### Running the Secret Santa Application

1. Install all the dependencies required by the application using NPM:

```
npm install
```

2. Build the application, using webpack and execute the command:

```
npm run-script build
```

3. Run the application using webpack in development mode, by executing the command:

```
npm run start
```

4. Go to the URL in any browser by clciking the Secret Santa Application Link [Secret Santa Application.](http://localhost:8080)

