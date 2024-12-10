"use client";
import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import useCurrentUser from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div>
      {JSON.stringify(user)}
      <Button onClick={onClick}>Sign Out</Button>
    </div>
  );
};

export default SettingsPage;
