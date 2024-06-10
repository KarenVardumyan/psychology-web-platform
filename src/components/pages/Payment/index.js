import { useParams } from 'react-router-dom';

function Payment() {
  const { selectedUserUid } = useParams();
  console.log('////////////       ', selectedUserUid)
  return (
    <div>payment</div>
  )
};

export default Payment;