import CardWrapper from "@/components/ui/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops Something went wrong!"
      backButtonHref="/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
