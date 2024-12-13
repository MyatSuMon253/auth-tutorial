"use client";

import FormSuccess from "@/components/form-success";
import RoleGate from "@/components/ui/auth/role-gate";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";

const AdminPage = () => {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.USER}>
          <FormSuccess message="You are allowed to see this content" />
        </RoleGate>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
