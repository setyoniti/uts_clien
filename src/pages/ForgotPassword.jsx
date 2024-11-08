import FormLupaPassword from "../component/fragments/FormLupaPassword";
import AuthLayout from "../component/layout/AuthLayout";

const ForgotPassword = () => {
  return (
    <AuthLayout type="forgot">
      <FormLupaPassword/>
    </AuthLayout>
  );
};

export default ForgotPassword;
