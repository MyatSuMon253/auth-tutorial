"use client";

import { settings } from "@/actions/settings";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import { useTransition } from "react";

const SettingsPage = () => {
  const { update } = useSession();
  const [isPending, startTransaction] = useTransition();

  const onClick = () => {
    startTransaction(() => {
      settings({
        name: "updated name!",
      }).then(() => update());
    });
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Settings</p>
      </CardHeader>
      <CardContent>
        <Button onClick={onClick} disabled={isPending}>
          Update name
        </Button>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
