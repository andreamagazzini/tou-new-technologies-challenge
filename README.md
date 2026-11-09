# ToU — New Technologies Challenge

Live-session decks for Tomorrow University **New Technologies** challenges.

**Private repository** + **shared password gate** on the published site.

## Password gate

All pages redirect to `login.html` until the shared password is entered (stored for the browser tab session only).

Default shared password:

```text
tou-ntc-live
```

Change it:

```bash
# 1) pick a new password and hash it
printf '%s' 'your-new-password' | sha256sum

# 2) put the hex digest into assets/auth-config.js → passwordHash
# 3) commit + push
```

**Honest limit:** this is a classroom gate on a static site (GitHub Pages has no server-side auth). It stops casual visitors with the URL. A determined person can still read the static files. Keep the repo private and share the password only in Slack / class.

## Enable GitHub Pages (one-time)

Private repos need **GitHub Pro** (or Team) for Pages.

1. Open [Settings → Pages](https://github.com/andreamagazzini/tou-new-technologies-challenge/settings/pages)
2. **Build and deployment** → Source: **Deploy from a branch**
3. Branch: `main` / folder: `/ (root)` → Save
4. Site URL will be:
   `https://andreamagazzini.github.io/tou-new-technologies-challenge/`

Visitors hit the login screen first.

If Pages is greyed out, the account is on the free plan — upgrade, or say if you want a password-protected Vercel deploy instead.

## Present locally (no Pages needed)

```bash
git clone git@github.com:andreamagazzini/tou-new-technologies-challenge.git
cd tou-new-technologies-challenge
python3 -m http.server 8080
```

Open `http://localhost:8080/` → password → decks.  
`F` fullscreen · `S` speaker notes · `Esc` overview.

## Structure

```text
login.html
challenges/
  internet-of-things/
    kick-off/          ← IoT Kick-Off (Reveal.js)
    # discussion/      ← add later
    # reflection/      ← add later
  # other-challenge/   ← add later
```

## Adding another session

1. Create `challenges/<challenge-slug>/<session-slug>/index.html`.
2. Include `auth-config.js` + `auth.js` and call `TouAuth.requireAuth()` in `<head>`.
3. Link it from the challenge hub and the root landing page.
4. Push to `main`.
