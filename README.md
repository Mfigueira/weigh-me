# WeighMe App v2.0

## What is this?

This is WeighMe! A Web -Mobile Styled- Application to help you keep tracking of your weight over time.
I developed it as my 'CS50's Introduction to Computer Science' Final Project.
Inspired in solving some of my parents problems with tracking their weights.

Here's a short video [presentation](https://www.youtube.com/watch?v=r1dwkZt882o).

## Technologies

Project stack:

- Backend (API): Python with Flask - Deployed to Heroku
- DB: PostgreSQL (remotely integrated in Heroku)
- Frontend: React - Deployed to Vercel

## How does it work?

The App is simple:

- Create a NEW USER
- In the SCALE tab add your weight and the time of the weighing
- In the GRID tab you can see by filters, update, delete, and even export your weighings
- And in the CHART tab you can see a Graph with your weight over time

All of this is persistently stored in a relational database, so you can come back anytime and keep recording your weights.

## Dev environment

For local development it's required:

1. Python virtual environment (https://docs.python-guide.org/dev/virtualenvs/).

To work with python, in the api folder of the project you need to create a virtual environment to isolate dependencies from the rest of the machine.

- Install virtualenv via pip which creates a 'venv/' dir or whatever you call it:

```bash
  $ pip install virtualenv
```

- Test your installation:

```bash
  $ virtualenv --version
```

- **BASIC USAGE**:
- Create a virtual environment for a project:

```bash
  $ cd {{api_folder}}
  $ virtualenv venv
```

- To begin using the virtual environment, it needs to be activated:

```bash
  $ source venv/bin/activate
```

- To re-create my dev environment and install the same packages using the same versions (listed in _requirements.txt_):

```bash
  $ pip install -r requirements.txt
```

- If you are done working in the virtual environment for the moment, you can deactivate it:

```bash
  $ deactivate
```

2. Create a .envrc file also on the api folder with configuration for environment variables, such as:

```
  export FLASK_ENV=development
  export APP_SETTINGS=config.DevConfig
  export DATABASE_URL={{DB:///DB_NAME}}
  export SECRET_KEY={{MY_SECRET_KEY}}
```

- _(Replace the {{ }} placeholders with corresponding data)_.

- You can Generate SECRET_KEY in console, then export it as environment variable:

```bash
  $ python3
  $ import secrets
  $ secrets.token_urlsafe(32)
```

3. Set up the DB (this project uses PostgreSQL) and provide DATABASE_URL to the environment variable.

- Steps to init Postgres _(1- start Postgres service, 2- start db server and open “postgres” database)_:

```bash
  $ brew services start postgresql
  $ psql postgres
```

- To stop Postgres service:

```bash
  $ brew services stop postgresql
```

- To create local DB:
  Uncomment this line in **app.py**: db.create_all() >>> ONLY ONCE!! - THEN COMMENT OUT AGAIN

4. To init dev environment:

In the api folder, run:

```bash
  $ flask run
```

Finally, init the React App from the frontend folder:

```bash
  $ cd frontend
  $ npm i
  $ npm start
```

## Can I see it? Can I use it??

OF COURSE!

Here's the link to the latest version of the App: [WeighMe](https://weighme.vercel.app/) (React frontend deployed in Vercel, decoupled from [the API](https://weighme-api.herokuapp.com/) in Heroku).

Enjoy your Weighings!

_If you were using the version 1.0, [here it is](https://weighme.herokuapp.com/), deployed altogether in Heroku - NOT MANTEINED -._
