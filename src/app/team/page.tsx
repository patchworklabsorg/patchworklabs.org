import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team",
  description:
    "The people behind Patchwork Labs: makers, organizers, and volunteers building a home for the next generation of makers.",
};

type TeamMember = {
  name: string;
  pronouns?: string;
  role: string;
  email?: string;
  bio: string[];
  patchColor: string;
  /** Path under /public, e.g. "/team/jasper-headshot.jpg". Falls back to initials. */
  photo?: string;
};

// TODO: Dom — need full name + bio. YC (Infrastructure Lead) removed for
// now — re-add once there's a name and bio.
const team: TeamMember[] = [
  {
    name: "Jasper Mayone",
    pronouns: "he/they",
    role: "Founder & Operations Director",
    patchColor: "bg-grape-soft",
    photo: "/team/jasper-card.jpg",
    bio: [
      "Jasper is the Founder & Operations Director of Patchwork Labs, a nonprofit built to bring creativity back into the world and support the next generation of makers.",
      "A computer science major at Wentworth Institute of Technology in Boston, Jasper is an organizer and big-picture thinker who’s happiest turning ideas into real projects. That instinct is what led them to start Patchwork Labs, where they steer both the mission and the day-to-day operations.",
      "Jasper is also a passionate advocate for a safer internet, contributing to open source projects focused on web security and privacy. Among them is phish.directory, a free and open source phishing directory, where Jasper serves as lead maintainer.",
      "When they’re not building something, you’ll find Jasper reading, out in the great outdoors, taking photos, cooking, or programming for fun.",
    ],
  },
  {
    name: "Kieran Klukas",
    pronouns: "he/him",
    role: "Secretary",
    patchColor: "bg-teal-soft",
    photo: "/team/kieran-v2.png",
    bio: [
      "Kieran is the Secretary for Patchwork Labs. He is currently studying Cyber Operations and Computer Engineering at Cedarville University. With a huge passion for robotics and hardware, you can usually find him either tinkering with a board or fixing up his homelab. Solving the little problems in life is his passion, which leads to many a weekend project.",
    ],
  },
  {
    name: "Adam Sidwa",
    role: "Project Ganymede Administrator",
    email: "adam.sidwa@patchworklabs.org",
    patchColor: "bg-orchid-soft",
    photo: "/team/adam-headshot.jpg",
    bio: [
      "Adam is an avid scout, backpacking for 21 days at Philmont and attending National Jamboree this summer. He’s also an avid sailor, on the water since he was 6 and founder of his school’s sailing team.",
      "When he’s not scouting, sailing, or at school, he’s working on personal projects: developing his combat robot, building a SaaS app, and running Project Ganymede. He’s heading into his junior year at Fairfield Warde High School.",
    ],
  },
  {
    name: "Dom",
    role: "Board Member",
    patchColor: "bg-violet-soft",
    photo: "/team/dominic-headshot.jpg",
    bio: ["Full bio coming soon."],
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export default function Team() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6">
      <section className="py-12 sm:py-14">
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
          The team
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Patchwork Labs is run by makers, for makers. A small volunteer team
          stitches the whole thing together.
        </p>
      </section>

      <section className="grid gap-6 pb-20 sm:grid-cols-2">
        {team.map((member, i) => (
          <article
            key={member.name}
            className={`patch p-6 ${member.patchColor} ${
              i % 2 === 0 ? "patch-tilt-l" : "patch-tilt-r"
            }`}
          >
            <div className="flex items-center gap-4">
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={`Photo of ${member.name}`}
                  width={160}
                  height={160}
                  className="stitch h-20 w-20 shrink-0 rounded-xl object-cover"
                />
              ) : (
                <div className="stitch flex h-20 w-20 shrink-0 items-center justify-center bg-paper font-display text-2xl font-bold text-grape">
                  {initials(member.name)}
                </div>
              )}
              <div>
                <h2 className="font-display text-xl font-bold">
                  {member.name}
                  {member.pronouns && (
                    <span className="ml-2 text-sm font-normal text-ink-soft">
                      {member.pronouns}
                    </span>
                  )}
                </h2>
                <p className="text-sm font-medium text-ink-soft">
                  {member.role}
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm text-ink-soft">
              {member.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {member.email && (
              <p className="mt-4 text-sm">
                <a
                  href={`mailto:${member.email}`}
                  className="font-medium text-grape hover:underline"
                >
                  {member.email}
                </a>
              </p>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
