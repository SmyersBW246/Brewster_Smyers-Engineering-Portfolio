export const intro = "Brewster’s Desk is a personal dashboard I built with AI coding tools. It runs on my laptop, shows up on an iPad that sits on my desk, and pulls my classes, homework, quizzes and three email inboxes into one place. A Claude assistant sits in the middle of it. Every morning it writes me a newspaper called The 7 AM Edition. I wanted to see what it is like to live inside a system like this, not just read about one.";

export const modes = [
  {
    "id": "day",
    "label": "Daytime",
    "time": "07:00 to 23:00, while I’m using it",
    "title": "Everything in one glance.",
    "image": "images/desk/desk-day.webp",
    "caption": "Daytime, mid-afternoon on a class day. Real screenshot.",
    "alt": "Brewster's Desk in daytime mode: frosted widgets for upcoming classes, homework, tasks and email over a soft wallpaper, with a Claude chat bar along the bottom.",
    "body": [
      "During the day the Desk is a working screen. Today’s classes, what is due in the next 24 hours, upcoming quizzes and exams, my own tasks and the inbox all sit on one page. A “Do now” card picks the three things that matter most right now, so I don’t have to sort through everything to find them.",
      "The chat bar along the bottom is a real Claude Code session. I can type or talk to it to add a task, ask for a study plan before a quiz, or have it draft a reply to an email. It can change my task list. It cannot send anything for me."
    ]
  },
  {
    "id": "sleep",
    "label": "Sleep mode",
    "time": "After 3 idle minutes",
    "title": "A quiet screen that still keeps watch.",
    "image": "images/desk/desk-sleep.webp",
    "caption": "Sleep mode showing the “Do next” widget. Real screenshot.",
    "alt": "Brewster's Desk in sleep mode: a dark StandBy-style screen with a large clock and a single widget showing one piece of information.",
    "body": [
      "When I stop touching it, the iPad goes dark and turns into a StandBy-style display. A large clock stays up and a single widget cycles every 12 seconds: up next, do next, next test, inbox, music, weather, markets and headlines. It is meant to be read from across the room.",
      "It still pays attention. A new email slides in over the screen, and a class that starts in 10 minutes gets a heads-up. One tap wakes the full dashboard. The idea is ambient awareness: the information is there when I glance at it, and it does not demand my attention when I don’t."
    ]
  },
  {
    "id": "night",
    "label": "Night mode",
    "time": "23:00 to 07:00",
    "title": "A bedside clock that knows tomorrow.",
    "image": "images/desk/desk-night.webp",
    "caption": "Night mode, opened with the preview button at 4:30 PM. Real screenshot.",
    "alt": "Brewster's Desk in night mode: a dim bedside clock with tomorrow's first class, essentials and any quiz or exam alerts.",
    "body": [
      "The iPad is visible from my bed, so at 11 PM the Desk dims to a night clock. It shows the time, tomorrow’s first commitments and any quiz or exam coming up, with an alarm and an optional music link that never plays on its own.",
      "Night mode is the part I think about most. A screen that runs all day can easily become one more thing pulling at you. This one is designed to do less at night, not more: close out the day, tell me what tomorrow needs, then get out of the way."
    ]
  }
];

export const edition = {
  "lead": "The Desk also produces something I read away from it. Every morning at about 7:00, an email newspaper called The 7 AM Edition lands in my inbox. It has a ranked game plan for the day’s homework, what to wear in Lewisburg and back home in Marblehead, the markets, AI news, world headlines, the Patriots, and a short note on my own projects.",
  "steps": [
    ["06:40 · Prep, no AI", "A script starts the dashboard if needed, waits for the morning Moodle check and study plan, and gathers weather, markets, news, my agenda and the last day of email into data files."],
    ["06:56 · Claude writes", "Claude reads those files and writes only the words: the coaching note, the blurbs, which stories to run. It follows a written style guide that lives in the project, not in a prompt I retype."],
    ["~07:00 · Script checks and sends", "A separate script checks the writing against rules a program can verify, renders the issue and sends it exactly once. Every send is logged."],
    ["07:20 · Fallback, no AI", "If the laptop slept through or Claude was unavailable, a plain backup briefing goes out instead, built only from my own records."]
  ],
  "note": "Splitting it this way was the most useful engineering decision in the project. The AI does the part it is good at, writing, while ordinary code handles the parts that must be predictable: gathering data, checking the result and making sure exactly one email goes out."
};

export const email = [
  "The Desk connects to my Bucknell, Gmail and Outlook inboxes and refreshes them every five minutes. Instead of showing three cluttered lists, it screens them. Email from real people, deadlines, RSVPs and packages are marked important, along with whether I have already answered. Newsletters get summarized in the morning paper so I can skip reading each one.",
  "My first version did more. It trashed promotions, cleared old sign-in codes after an hour and deleted newsletters once they were summarized. Then it trashed a newsletter I actually wanted to read. That was a small mistake, but it changed how I think about these tools. I retired every automatic email action. Now the system reads and summarizes. Anything that moves, deletes or sends an email takes my own click."
];

export const rules = [
  ["Reads freely, acts carefully.", "The assistant can research, plan and change things that are easy to undo, like tasks and study blocks. Sending, deleting and anything public waits for me."],
  ["Scripts check the AI’s work.", "Wherever a result has to be right, ordinary code validates it before anything happens."],
  ["Always a fallback.", "If the AI part fails, a plain version without AI still runs, so the morning briefing never just disappears."],
  ["Local first.", "It runs on my own laptop. The iPad reaches it over a private network, and nothing is exposed to the public internet."],
  ["One source of truth.", "The dashboard, the chat, the newspaper and the scheduled jobs all read and write one shared record, so they can’t disagree with each other."]
];

export const unknowns = [
  "I’m optimistic about this. Having my schedule, deadlines and inbox screened and summarized before I wake up has made mornings calmer, and building it taught me more about APIs, scheduling, failure handling and interface design than any single class project so far.",
  "I also know how new this is. The Desk went live in November 2026, and there are no settled answers yet for a lot of what it raises. How much access should an assistant have to someone’s email? What happens to privacy when other people’s messages to me pass through an AI model they never agreed to? When a system makes a reasonable-looking decision for you, how do you notice the times it is wrong? And does a screen that always knows what is next help me focus, or does it make it easier to stop planning for myself?",
  "I don’t think anyone has those answered yet, including me. For now my approach is to keep a human click on anything that can’t be undone, keep a version that works without AI, and keep paying attention to how it actually changes the way I work."
];

export const ending = "Engineering teams are starting to build tools like this into how they work. I want to arrive at an internship having already lived with one: knowing where it helps, where it breaks, and where a person still needs to make the call.";
