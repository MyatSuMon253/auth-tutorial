import CardWrapper from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
};

export default LoginForm;
