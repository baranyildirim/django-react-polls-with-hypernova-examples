# Django React Polls with Hypernova examples

This repo contains a couple of examples on how you implement a fully React-rendered frontend in Django using Hypernova and Create React App.

## Examples provided:

### [Example 1: Integrate Hypernova with the built in DRTT (Django React Templatetags) ReactDOM.hydration](./example_1_with_drtt_hydration)
In this example we use Hypernova as normal on the backend but with a manual ReactDOM.hydrate on the client side (based on the DRTT component render queue).

**Pros:**
- Will still work if the Hypernova service is unreachable
- A more resiliant solution

**Cons:**
- We dont take fully adventage of `hypernova-react` by providing our own hydration
- Props are stored in several places, both in the rendered html and in the component render queue in DRTT
- We need to target the Hypernova provided placeholder when we hydrate, instead of the DRTT provided placeholder

### [Example 2: Use Hypernova and leverage the built in renderReact on the front end as well.](./example_2_with_builtin_hydration)
In this example we take fully advantage of Hypernova, where we use the Hypernova HOC renderReact to initialize components on the frontend.

**Pros:**
- Does not require `react_print` to initialize the components, since we already export them wrapped in `renderReact` HOC they will be automatically initialized
- We only use the placeholder div provided by Hypernova and skip the DRTT provided one (by adding `no_placeholder` in the `react_render` template tag)
- A arguably cleaner solution

**Cons:**
- If the SSR service is unreachable the components wont work
