import React from 'react'; // , { useCallback, useRef }

// import { FormHandles } from '@unform/core';
// import { Form } from '@unform/web';

// import { FiMail } from 'react-icons/fi';
// import { useHistory } from 'react-router-dom';

// import { useAuth } from '../../hooks/AuthContext';
import { Container, LogInContainer } from './styles';

// import Button from '../../components/Button';
// import Input from '../../components/Input';
import Header from '../../components/Header';

interface SignInFormData {
  email: string;
}

const LogIn: React.FC = () => {
  // const formRef = useRef<FormHandles>(null);
  // const { signIn } = useAuth();
  // const history = useHistory();

  // const handleSubmit = useCallback(
  //   async (data: SignInFormData) => {
  //     try {
  //       await signIn({
  //         email: data.email,
  //       });

  //       history.push('/dashboard');
  //     } catch (err) {
  //       history.push('/');
  //     }
  //   },
  //   [history, signIn],
  // );

  return (
    <>
      <Container>
        <LogInContainer>
          <Header title="LogIn" firstPage />
          {/* <Form ref={formRef} onSubmit={handleSubmit}>
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Button type="submit">LogIn</Button>
          </Form> */}
        </LogInContainer>
      </Container>
    </>
  );
};

export default LogIn;
