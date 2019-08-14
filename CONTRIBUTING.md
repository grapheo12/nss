# Contribution Guidelines

For integrity and safety reasons, willing contributors are not added as Collaborators. No push access is given.

# Contribution WorkFlow

To contribute follow the steps in order:

1. Report a bug / Suggest an idea by raising an issue.
2. Fork this repository.
3. Assign yourself or others to issue. This is done to remove duplicate works.
4. Work from a separate branch in your fork.
5. Raise a Pull Request with proper description of the changes made.

# Local Setup

You must have Python3 and NodeJS installed previously. We are using `virtualenv` for dependancy management in the backend and `yarn` for the same in the frontend. So you need to install them too.

To install all dependancies run:

```
# In the nss-backend dir
> virtualenv nss
> source nss/bin/activate
> pip install requirements.txt

# In the nss-frontend dir
> yarn install
```

Copy the `nss-backend/.env.template` as `.env` in that directory itself. Then edit the Environment Variables according to your needs.

For database, we will be using MySQL, but it does not matter which database you use for testing. Be sure to mention the proper `DATABASE_URI` in the `.env` file.

The frontend and the backend have to be run separately.
To start the backend, run:

```
> python manage.py run
```

To start the frontend, run:

```
> yarn start
```