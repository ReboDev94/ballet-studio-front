import { Button, Card, Divider, Loading } from '@/common/components';
import { Link } from 'react-router-dom';

const ConfirmAccount = () => {
  return (
    <Card className="shadow-none bg-transparent">
      <Card.Body>
        <h1 className="text-center font-bold text-3xl tracking-wide">
          Estamos confirmando la cuenta por favor espere.
        </h1>

        <div className="flex justify-center mt-7">
          <Loading variant="base" size="lg" />
        </div>

        {/*  <Divider />
        <Link to="/auth/login">
          <Button type="button" block>
            Volver
          </Button>
        </Link> */}
      </Card.Body>
    </Card>
  );
};

export default ConfirmAccount;
