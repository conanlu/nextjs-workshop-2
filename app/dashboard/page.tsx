import { TypographyH2, TypographyP, TypographyTable } from "@/components/ui/typography";
import { type Database } from "@/lib/schema";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


import { RockTable } from "@/app/dashboard/rocktable";
import { RefreshButton } from "@/app/dashboard/refresh";

// STEP 1: Fetch data from Supabase and display in the form of RockTable component
export default async function Dashboard() {

  // Create supabase server component client and obtain user session from stored cookie
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // this is a protected route - only users who are signed in can view this route
    redirect("/");
  }

  // TODO: Fetch data from your Supabase table of rocks

  return (
    <>
      <TypographyH2>Rocks Dashboard</TypographyH2>

      {/* TODO: Use your RockTable component*/}


       {/* TODO (much later): Add your RefreshButton component */}

    </>
  );
}
