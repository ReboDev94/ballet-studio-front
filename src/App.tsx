import { AppRouter } from '@/router';
import { Toaster } from 'react-hot-toast';
import { DEFAULT_TOAST_OPTIONS } from './common/constants';

function App() {
  return (
    <>
      <AppRouter />;
      <Toaster {...DEFAULT_TOAST_OPTIONS} />
    </>
  );
}

export default App;
