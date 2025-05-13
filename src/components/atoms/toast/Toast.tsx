import styled from '@emotion/styled';

const ToastContainer = styled.div`
  position: fixed;
  bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 1.6rem 3.2rem;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  opacity: 0.9;
  z-index: 1000;
`;

const Toast = ({ message }: { message: string }) => {
  return <ToastContainer>{message}</ToastContainer>;
};

export default Toast;
