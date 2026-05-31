"use client";

import { useRouter } from "next/navigation";
import type { VisitStats } from "@/lib/redis";

const fmtDate = (iso: string) =>
  new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

const StatsDashboard = ({ stats }: { stats: VisitStats }) => {
  const router = useRouter();
  const max = Math.max(1, ...stats.days.map((d) => d.count));
  const today = stats.days[0];

  const logout = async () => {
    await fetch("/api/stats-login", { method: "DELETE" });
    router.refresh();
  };

  return (
    <main className="shell py-16 sm:py-24">
      <div className="flex items-center justify-between">
        <div>
          <p className="section-label">Visitor stats</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight">
            Unique visitors
          </h1>
        </div>
        <button
          onClick={logout}
          className="text-muted-foreground hover:text-foreground border-border hover:bg-muted rounded-full border px-4 py-2 text-sm transition-colors"
        >
          Log out
        </button>
      </div>

      {!stats.configured && (
        <p className="border-border text-muted-foreground mt-6 rounded-xl border border-dashed p-4 text-sm">
          Redis isn&apos;t configured yet. Add{" "}
          <code className="text-foreground">UPSTASH_REDIS_REST_URL</code> and{" "}
          <code className="text-foreground">UPSTASH_REDIS_REST_TOKEN</code> to
          your environment.
        </p>
      )}

      {/* Summary cards */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Stat label="All time" value={stats.total} />
        <Stat label="Today" value={today?.count ?? 0} />
        <Stat label="Days tracked" value={stats.days.length} />
      </div>

      {/* Date-wise breakdown */}
      <div className="mt-12">
        <p className="section-label mb-4">By day</p>
        {stats.days.length === 0 ? (
          <p className="text-muted-foreground text-sm">No visits recorded yet.</p>
        ) : (
          <ul className="flex flex-col">
            {stats.days.map((d) => (
              <li
                key={d.date}
                className="border-border/60 flex items-center gap-4 border-b py-3"
              >
                <span className="text-muted-foreground w-44 shrink-0 text-sm tabular-nums">
                  {fmtDate(d.date)}
                </span>
                <span className="bg-muted relative h-2 flex-1 overflow-hidden rounded-full">
                  <span
                    className="bg-primary absolute inset-y-0 left-0 rounded-full"
                    style={{ width: `${(d.count / max) * 100}%` }}
                  />
                </span>
                <span className="w-12 shrink-0 text-right text-sm font-medium tabular-nums">
                  {d.count}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

const Stat = ({ label, value }: { label: string; value: number }) => (
  <div className="border-border bg-card/40 rounded-2xl border p-5">
    <p className="section-label">{label}</p>
    <p className="mt-2 text-3xl font-semibold tabular-nums">
      {value.toLocaleString()}
    </p>
  </div>
);

export default StatsDashboard;
