import { html } from 'lit';
import '../src/badge-dashboard.js';

export default {
  title: 'BadgeDashboard',
  component: 'badge-dashboard',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <badge-dashboard
      style="--badge-dashboard-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </badge-dashboard>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
