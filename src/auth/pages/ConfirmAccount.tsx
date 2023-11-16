import { useEffect, useMemo, useState } from 'react';
import { Button, Card, Divider, Loading } from '@/common/components';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import {
  ERROR_CONFIRM_ACCOUNT,
  LOADING_CONFIRM_ACCOUNT,
  SUCCESS_CONFIRM_ACCOUNT,
} from '../constants';
import { useAppDispatch } from '@/store/hooks';
import { confirmEmailThunk } from '@/store/modules/auth/thunks';

type Confirm = 'loading' | 'success' | 'error';
const ConfirmAccount = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [confirm, setConfirm] = useState<Confirm>('loading');

  const message = useMemo(() => {
    if (confirm === 'loading') return LOADING_CONFIRM_ACCOUNT;
    if (confirm === 'success') return SUCCESS_CONFIRM_ACCOUNT;
    if (confirm === 'error') return ERROR_CONFIRM_ACCOUNT;
  }, [confirm]);

  const confirmAccountFn = async () => {
    await dispatch(
      confirmEmailThunk({
        email: searchParams.get('email') as string,
        token: params['token'] as string,
      }),
    )
      .unwrap()
      .then(() => setConfirm('success'))
      .catch(() => setConfirm('error'));
  };

  useEffect(() => {
    if (searchParams.get('email') && params['token']) confirmAccountFn();
    else navigate('/auth/login');
  }, []);

  return (
    <Card className="shadow-none bg-transparent">
      <Card.Body>
        <h1 className="text-center font-bold text-3xl tracking-wide">
          {message}
        </h1>

        {confirm === 'loading' && (
          <div className="flex justify-center mt-7">
            <Loading variant="base" size="lg" />
          </div>
        )}
        {confirm === 'success' ||
          (confirm === 'error' && (
            <>
              <Divider />
              <Link to="/auth/login">
                <Button type="button" block>
                  Volver
                </Button>
              </Link>
            </>
          ))}
      </Card.Body>
    </Card>
  );
};

export default ConfirmAccount;
