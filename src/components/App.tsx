import { Provider as ReduxProvider } from 'react-redux';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import store, { history } from '~/store';
import AppRoutes from './AppRoutes';
import Layout from './common/Layout';

const App = () => (
  <ReduxProvider store={store}>
    <Router history={history}>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  </ReduxProvider>
);

export default App;
