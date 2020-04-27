import { renderReact } from 'hypernova-react';

const withHypernova = displayName => Component => (
    renderReact(displayName, Component)
)

export default withHypernova
