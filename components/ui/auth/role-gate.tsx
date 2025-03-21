"use client";

import FormError from "@/components/form-error";
import { useCurrentRole } from "@/hooks/use-current-role";
import React from "react";

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: string;
}

const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content!" />
    );
  }

  return <div>{children}</div>;
};

export default RoleGate;
