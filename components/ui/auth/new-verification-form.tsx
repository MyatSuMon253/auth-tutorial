"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { CircleLoader } from "react-spinners";
import CardWrapper from "./card-wrapper";

const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    console.log(token);
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/login"
      showSocial={false}
    >
      <div className="w-full flex items-center justify-center">
        <CircleLoader />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
