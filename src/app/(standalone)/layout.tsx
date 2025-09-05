import Image from "next/image";
import Link from "next/link";

import { UserButton } from "@/features/auth/components/user-button";
import DashboardBackground from "./dashboard-background";


interface StandloneLayoutProps {
  children: React.ReactNode;
};

const StandloneLayout = ({ children }: StandloneLayoutProps) => {
  return ( 
    <DashboardBackground>
    <main className="">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[73px]">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" height={56} width={152} />
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div>
      </div>
    </main>
    </DashboardBackground>
  );
}
 
export default StandloneLayout;