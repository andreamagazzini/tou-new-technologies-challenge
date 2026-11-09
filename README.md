# ToU — New Technologies Challenge

Live-session decks for Tomorrow University **New Technologies** challenges.

**Private repository** — source is not public. Do **not** enable GitHub Pages unless you intentionally want a public URL (Pages sites are world-readable even when the repo is private on most plans).

## Present without publishing

From your machine:

```bash
git clone git@github.com:andreamagazzini/tou-new-technologies-challenge.git
cd tou-new-technologies-challenge
python3 -m http.server 8080
```

Open `http://localhost:8080/` (landing) or go straight to a session, e.g.  
`http://localhost:8080/challenges/internet-of-things/kick-off/`

In class: press `F` for fullscreen, `S` for speaker notes, `Esc` for overview.

## Structure

```text
challenges/
  internet-of-things/
    kick-off/          ← IoT Kick-Off (Reveal.js)
    # discussion/      ← add later
    # reflection/      ← add later
  # other-challenge/   ← add later
```

## Adding another session

1. Create `challenges/<challenge-slug>/<session-slug>/index.html`.
2. Link it from the challenge hub and the root landing page.
3. Commit and push to `main`.

## Sharing with co-facilitators

Add them as GitHub collaborators on this private repo (Settings → Collaborators). They clone and present locally — no public leak.
