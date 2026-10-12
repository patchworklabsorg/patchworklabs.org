import type { ReactNode } from "react";
import Placeholder from "@/components/your-data/placeholder";

// "What delete actually deletes": nine kinds of data, and what happens to
// each one when you delete your account. Rows stack into cards on phones.

type Outcome = "gone" | "deleted" | "counted" | "kept";

const outcomeStyle: Record<Outcome, string> = {
  gone: "border-violet bg-violet-soft",
  deleted: "border-teal bg-teal-soft",
  counted: "border-sky bg-sky-soft",
  kept: "border-orchid bg-orchid-soft",
};

const rows: {
  what: string;
  outcome: Outcome;
  label: string;
  why: ReactNode;
}[] = [
  {
    what: "Your ID images",
    outcome: "gone",
    label: "already gone",
    why: (
      <>
        We delete them{" "}
        <Placeholder kind="WINDOW">ID images after a pass</Placeholder> after
        you pass the check, so they are usually gone before you ask to delete
        anything. If you did not pass:{" "}
        <Placeholder kind="DECISION">ID images when a check does not pass</Placeholder>
        .
      </>
    ),
  },
  {
    what: "Your account and profile",
    outcome: "deleted",
    label: "deleted",
    why: "Nothing makes us keep it.",
  },
  {
    what: "Your parent or guardian’s contact details",
    outcome: "deleted",
    label: "deleted",
    why: "We only need them while a member under 18 takes part.",
  },
  {
    what: "Your demographic answers",
    outcome: "counted",
    label: "added to totals, then deleted",
    why: "General ranges from your answers go into the totals. Then the encrypted record is destroyed.",
  },
  {
    what: "Your ID check records",
    outcome: "kept",
    label: "kept for a set time",
    why: (
      <>
        To stop fraud and to follow the law. We keep them for{" "}
        <Placeholder kind="WINDOW">verification audit records</Placeholder>,
        then destroy them.
      </>
    ),
  },
  {
    what: "Grant and money records",
    outcome: "kept",
    label: "kept for a set time",
    why: (
      <>
        Tax law, audits, and our funders&rsquo; rules make us keep these. We
        keep them for{" "}
        <Placeholder kind="WINDOW">financial and grant records</Placeholder>,
        then destroy them.
      </>
    ),
  },
  {
    what: "What you did in our programs",
    outcome: "counted",
    label: "added to totals",
    why: "General facts go into the totals. Then the link to you is cut.",
  },
  {
    what: "Records a funder requires",
    outcome: "kept",
    label: "kept, then added to totals",
    why: (
      <>
        Only when a funder&rsquo;s contract requires it, and only for{" "}
        <Placeholder kind="WINDOW">funder-required records</Placeholder>. Then
        they go into the totals too.
      </>
    ),
  },
  {
    what: "The Knot and its record",
    outcome: "kept",
    label: "kept",
    why: (
      <>
        A one-way fingerprint, a yes/no flag, and the grants you got. It does
        not hold your name. Kept for{" "}
        <Placeholder kind="DECISION">how long the Knot is kept</Placeholder>.
      </>
    ),
  },
];

export default function RetentionTable() {
  return (
    <div className="patch mt-8 bg-paper p-2 sm:p-4">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          What happens to each kind of data when you delete your account
        </caption>
        <thead className="hidden sm:table-header-group">
          <tr className="border-b-2 border-ink-soft/40 text-sm text-ink-soft">
            <th scope="col" className="px-3 py-2 font-medium">
              Kind of data
            </th>
            <th scope="col" className="px-3 py-2 font-medium">
              When you delete
            </th>
            <th scope="col" className="px-3 py-2 font-medium">
              Why, and for how long
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.what}
              className="block border-b border-dashed border-ink-soft/40 px-3 py-4 last:border-b-0 sm:table-row sm:p-0"
            >
              <th
                scope="row"
                className="font-display block font-bold sm:table-cell sm:px-3 sm:py-3 sm:align-top"
              >
                {row.what}
              </th>
              <td className="block pt-2 sm:table-cell sm:px-3 sm:py-3 sm:align-top">
                <span
                  className={`inline-block rounded-lg border px-2.5 py-0.5 text-sm font-semibold text-ink ${
                    outcomeStyle[row.outcome]
                  }`}
                >
                  {row.label}
                </span>
              </td>
              <td className="block pt-2 text-ink-soft sm:table-cell sm:px-3 sm:py-3 sm:align-top">
                {row.why}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
