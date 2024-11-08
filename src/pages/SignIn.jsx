import LoginForm from "../component/fragments/LoginForm";
import AuthLayout from "../component/layout/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout type="sign in">
      <LoginForm />
    </AuthLayout>
  );
};

export default SignIn;
