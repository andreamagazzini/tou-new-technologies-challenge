# ToU — New Technologies Challenge

Live-session decks for Tomorrow University **New Technologies** challenges.

Hosted on GitHub Pages:

**https://andreamagazzini.github.io/tou-new-technologies-challenge/**

## Structure

```text
challenges/
  internet-of-things/
    kick-off/          ← IoT Kick-Off (Reveal.js)
    # discussion/      ← add later
    # reflection/      ← add later
  # other-challenge/   ← add later
```

## Local preview

Open any `index.html` in a browser, or from the repo root:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080/`.

## Presenting

1. Open the session URL (or local file).
2. Press `F` for fullscreen, `S` for speaker notes, `Esc` for overview.
3. Arrow keys / space to advance.

## Adding another session

1. Create `challenges/<challenge-slug>/<session-slug>/index.html`.
2. Link it from the challenge hub and the root landing page.
3. Push to `main` — Pages updates automatically.
