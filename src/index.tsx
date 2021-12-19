import '~/resources/styles/index.scss';

import ReactDOM from 'react-dom';
import App from '~/components/App';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('~/resources/styles/validate.scss');
}

ReactDOM.render(<App />, document.getElementById('root'));
