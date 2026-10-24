import type { ReactNode } from "react";

// "What delete actually deletes": every kind of data, whether it is in your
// download, and what happens to it when you delete your account. Rows stack
// into cards on phones. The download column follows Weave's Takeout
// (docs/KYC.md, "Takeout").

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
  download: boolean;
  why: ReactNode;
}[] = [
  {
    what: "Your ID images",
    download: false,
    outcome: "gone",
    label: "already gone",
    why: (
      <>
        We delete them 7 days after you pass the check, so they are usually gone before you ask to delete
        anything. If you did not pass, or we asked you for a new photo, we delete them 30 days after that
        check ends.
      </>
    ),
  },
  {
    what: "Your account and profile",
    download: true,
    outcome: "deleted",
    label: "deleted",
    why: "Nothing makes us keep it.",
  },
  {
    what: "Your Thread Count",
    download: false,
    outcome: "deleted",
    label: "deleted",
    why: "An internal trust score that our staff read. It is not in your download. We delete it with your account.",
  },
  {
    what: "Your parent or guardian’s contact details",
    download: true,
    outcome: "deleted",
    label: "deleted",
    why: "We only need them while a member under 18 takes part.",
  },
  {
    what: "Your demographic answers",
    download: false,
    outcome: "counted",
    label: "added to totals, then deleted",
    why: "General ranges from your answers go into the totals. Then the encrypted record is destroyed.",
  },
  {
    what: "Your ID check records",
    download: true,
    outcome: "kept",
    label: "kept for a set time",
    why: (
      <>
        To stop fraud and to follow the law. We keep them for 3 years after
        you delete your account, then destroy them. If you are blocked from
        our programs for fraud, we keep the evidence while the block stands.
      </>
    ),
  },
  {
    what: "Your US residency check",
    download: false,
    outcome: "kept",
    label: "kept, with no link to you",
    why: (
      <>
        The yes or no result, the US state, and the type of document. We keep
        it like your ID check records, with no link to you. The document itself
        follows the rules for ID images, and we delete it when you delete your
        account.
      </>
    ),
  },
  {
    what: "Grant and money records",
    download: true,
    outcome: "kept",
    label: "kept, then made anonymous",
    why: (
      <>
        Tax law, audits, and our funders&rsquo; rules make us keep these. We
        keep them in full for 7 years, or longer when a funder&rsquo;s
        contract says so. Then we remove your details. The amount, the
        program, and the year stay, with no name.
      </>
    ),
  },
  {
    what: "What you did in our programs",
    download: true,
    outcome: "counted",
    label: "added to totals",
    why: "General facts go into the totals. Then the link to you is cut.",
  },
  {
    what: "Records a funder requires",
    download: true,
    outcome: "kept",
    label: "kept, then added to totals",
    why: (
      <>
        Only when a funder&rsquo;s contract requires it, and only for as long
        as that contract requires. Then they go into the totals too.
      </>
    ),
  },
  {
    what: "The Knot and its record",
    download: false,
    outcome: "kept",
    label: "kept",
    why: (
      <>
        A one-way fingerprint, a yes/no flag, and the grants you got. It does
        not hold your name. Kept for ever, with no end date: the one-grant-per-program limit and the block
        flag both depend on it, and a block flag never fades.
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
              In your download?
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
              <td className="block pt-2 text-sm text-ink-soft sm:table-cell sm:px-3 sm:py-3 sm:align-top sm:text-base sm:text-ink">
                <span className="sm:hidden">In your download: </span>
                {row.download ? "Yes" : "No"}
              </td>
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
