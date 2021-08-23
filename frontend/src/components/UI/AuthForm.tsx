import classes from './AuthForm.module.scss';

interface AuthFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit, children }) => {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default AuthForm;
