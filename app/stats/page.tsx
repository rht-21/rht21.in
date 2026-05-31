import { cookies } from "next/headers";
import { isValidToken, STATS_COOKIE } from "@/lib/stats-auth";
import { getStats } from "@/lib/redis";
import StatsDashboard from "./StatsDashboard";

export const dynamic = "force-dynamic";
export const metadata = { title: "Stats", robots: { index: false } };

const StatsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) => {
  const cookieStore = await cookies();
  const authed = isValidToken(cookieStore.get(STATS_COOKIE)?.value);
  const { error } = await searchParams;

  if (!authed) {
    return (
      <main className="shell flex min-h-[70vh] flex-col items-center justify-center">
        <form
          action="/api/stats-login"
          method="POST"
          className="border-border bg-card/40 flex w-full max-w-sm flex-col gap-4 rounded-2xl border p-6"
        >
          <div>
            <p className="section-label">Protected</p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight">
              Visitor stats
            </h1>
          </div>
          <input
            type="password"
            name="passphrase"
            required
            autoFocus
            placeholder="Passphrase"
            className="border-border bg-background/60 placeholder:text-muted-foreground focus:border-primary/60 focus:ring-primary/15 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-4"
          />
          {error && (
            <p className="text-destructive text-sm">
              Wrong passphrase. Try again.
            </p>
          )}
          <button
            type="submit"
            className="bg-foreground text-background rounded-xl px-5 py-3 text-sm font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
          >
            Unlock
          </button>
        </form>
      </main>
    );
  }

  const stats = await getStats();
  return <StatsDashboard stats={stats} />;
};

export default StatsPage;
