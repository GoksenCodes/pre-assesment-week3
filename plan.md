1- create 4 routes

- home page
- who is in duty : /GET / doctors
- new patient sign up page ( we need to create a form)
- patient database for doctors : GET / patients

2- Components
1- we are open component with contact details: it will be rendered both in home page and on duty page
2- NavBar component
2- the rest will be inside pages components.

2- build a navbar

- Home
- Doctor schedule(who is on duty)
- Patient sign up (new patient form)
- Patient database (for doctors)

3- Home page

- Some text
- build 2 clickable buttons (onClick & handle click)
- redirect button clikcks to related pages (give a link)

4- Who is on duty page

- import axios
- get response and display it in a table
- keep the text from home page beneath the table (render home page with data???)

5- patient sign up page

- build a form (onChange & onSumbit)
- store the data with useState
- console log the data you get

6 - patient data base page

- get data with axios
- sort doctors by name
