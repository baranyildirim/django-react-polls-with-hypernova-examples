# Example 2: Use Hypernova and leverage the built in renderReact on the front end as well.
This is an example implementation of a fully React-rendered frontend in Django using Hypernova and Create React App.

- In this example to rely fully on `renderReact` provided by Hypernova to initialize components
- Components that are used are wrapped in `renderReact` and exported to both Hypernova and client side
- We dont use the template tag `react_print`
- We remove the DRTT placeholder by adding `no_placeholder=1` to the template tag `render_react`

## Installation

### Django
1. Clone repo
2. Create and activate virtualenv `python -m venv venv && source venv/bin/activate`
3. Install packages `poetry install`
5. Run migrations and load data
```
cd django_project
./manage.py migrate
./manage.py loaddata data/questions.json
```

### Frontend dev-server (Create React App)
1. Install packages: `cd frontend && npm i`

### Hypernova SSR (Server Side Rendering) server
Hypernova is installed along with the frontend dev-server


## Running

1. Start by compiling assets `cd frontend && npm run build`
2. Then start the hypernova server `cd frontend && node hypernova-bootstrap.js` (and keep it running)
3. Finally start the django server: `cd django_project && ./manage.py runserver`

Now open [http://localhost:8000/](http://localhost:8000/) to see a fully working example.

## Credits
This is a fork of [https://github.com/mikaelengstrom/django-react-polls-example](https://github.com/mikaelengstrom/django-react-polls-example)
