'use client';

import UserDashboardLayout from "./UserDashboardLayout";

export default function UserDashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserDashboardLayout>{children}</UserDashboardLayout>;
}
