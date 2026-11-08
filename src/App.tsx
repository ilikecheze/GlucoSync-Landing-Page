import { FormEvent, ReactNode, useState } from 'react'

const Icon = ({ children }: { children: ReactNode }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
    {children}
  </svg>
)

const icons = {
  watch: <Icon><rect x="7" y="5" width="10" height="14" rx="3"/><path d="M9 5V2h6v3M9 19v3h6v-3M9.5 12h1.5l1.2-2.3 1.5 4.5 1-2.2h1"/></Icon>,
  spark: <Icon><path d="m12 3 1.2 4.1L17 9l-3.8 1.9L12 15l-1.2-4.1L7 9l3.8-1.9L12 3Z"/><path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3ZM5 13l.8 2.2L8 16l-2.2.8L5 19l-.8-2.2L2 16l2.2-.8L5 13Z"/></Icon>,
  pulse: <Icon><path d="M3 12h4l2-5 3.5 10 2.5-7 2 2h4"/><path d="M12 21C7 18.4 3 15.2 3 10.2A4.2 4.2 0 0 1 10.5 7L12 8.7 13.5 7A4.2 4.2 0 0 1 21 10.2C21 15.2 17 18.4 12 21Z"/></Icon>,
  music: <Icon><path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></Icon>,
  shield: <Icon><path d="M12 3 4.5 6v5.2c0 4.7 3.1 8.1 7.5 9.8 4.4-1.7 7.5-5.1 7.5-9.8V6L12 3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></Icon>,
}

const steps = [
  { n: '01', title: 'Connect', body: 'Pair Apple Watch or Health Connect to stream your heart rate live.', icon: icons.watch },
  { n: '02', title: 'Generate', body: 'Choose your length, genres, tempo preference and BPM range.', icon: icons.spark },
  { n: '03', title: 'Begin your session', body: 'Press start and let the music respond to your body’s rhythm.', icon: icons.pulse },
]

const tracks = [
  ['Holocene', 'Bon Iver', '5:36', '74', 'A spacious opener for a gradual warm-up.'],
  ['Sunset Lover', 'Petit Biscuit', '3:58', '91', 'A steady pulse that lifts without rushing.'],
  ['Intro', 'The xx', '2:07', '100', 'Clean rhythm to settle into the session.'],
  ['Weightless', 'Marconi Union', '8:00', '60', 'A slow close to ease the body toward rest.'],
]

export default function App() {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true) }

  return (
    <main>
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="GlucoSync home">
          <span className="brand-mark"><span/><span/><span/><span/></span>
          <span>GlucoSync</span>
        </a>
        <div className="nav-links">
          <a href="#how">How it works</a><a href="#features">Features</a><a href="#faq">FAQ</a>
        </div>
        <a className="button button-small" href="#signup">Get early access <span>→</span></a>
      </nav>

      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><i/> Your rhythm, rebalanced</div>
            <h1>Feel better, one <em>beat</em> at a time.</h1>
            <p className="lede">Align your natural rhythms with curated soundscapes. GlucoSync uses live heart rate and music tempo entrainment to guide you toward a calmer, more balanced state.</p>
            <div className="hero-actions">
              <a className="button" href="#signup">Join the preview <span>→</span></a>
              <a className="text-link" href="#how"><span className="play">▶</span> See how it works</a>
            </div>
            <p className="micro"><span>✓</span> Wellness, not diagnosis &nbsp;&nbsp; <span>✓</span> Built around your preferences</p>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="phone">
              <div className="phone-top"><span>9:41</span><i/></div>
              <div className="phone-logo"><span className="brand-mark tiny"><span/><span/><span/><span/></span> GlucoSync</div>
              <p className="session-label">CURRENT SESSION</p>
              <h3>Find your flow</h3>
              <div className="pulse-ring">
                <span className="heart">♥</span><strong>78</strong><small>LIVE BPM</small>
              </div>
              <div className="target"><span>Target BPM</span><strong>80</strong></div>
              <div className="wave">{Array.from({length: 24}).map((_, i) => <i key={i}/>)}</div>
              <button type="button" className="start">▶ &nbsp; Start entrainment</button>
              <p className="phone-note">30 min session</p>
            </div>
            <div className="float-card live"><span>{icons.pulse}</span><div><small>LIVE HEART RATE</small><strong>In sync</strong></div></div>
            <div className="float-card calm"><span>♬</span><div><small>NOW PLAYING</small><strong>Calm focus</strong></div></div>
          </div>
        </div>
      </header>

      <section className="section how" id="how">
        <div className="wrap">
          <div className="section-head"><div><p className="kicker">A simple ritual</p><h2>From pulse to playlist</h2></div><p>Set your intention. GlucoSync handles the pacing, while you stay present in your body.</p></div>
          <div className="steps">{steps.map((s) => <article className="step" key={s.n}><span className="step-num">{s.n}</span><div className="icon-box">{s.icon}</div><h3>{s.title}</h3><p>{s.body}</p></article>)}</div>
        </div>
      </section>

      <section className="section features" id="features">
        <div className="wrap">
          <p className="kicker">Designed around you</p><h2>Rhythm, made personal.</h2>
          <div className="feature-grid">
            <article className="feature feature-dark"><div className="feature-icon">{icons.pulse}</div><div><p className="tag">RESPONSIVE SESSIONS</p><h3>See your heart rate, live.</h3><p>Track live BPM against your target, with a clear timer and drift alerts when your rhythm moves away. Choose optional heart-rate alerts and haptic feedback, and pause anytime.</p></div><div className="mini-chart"><span>72</span><svg viewBox="0 0 360 90"><path d="M0 54 C30 54 34 20 65 38S110 68 138 45s44-7 58 4 28 1 43-16 37 0 50 12 38 4 71-4"/></svg></div></article>
            <article className="feature"><div className="feature-icon">{icons.music}</div><p className="tag">YOUR MUSIC, BETTER PACED</p><h3>AI playlists that fit the moment.</h3><p>Real songs selected by genre, duration, tempo and BPM range. Choose familiar favorites or what’s trending now, with explicit-content control.</p><div className="genre-chips"><span>Ambient</span><span>Piano</span><span>Nature</span><span>Electronic</span><span>+3</span></div></article>
            <article className="feature"><div className="feature-icon">{icons.shield}</div><p className="tag">GENTLE BY DESIGN</p><h3>Guide the body toward calm.</h3><p>Music tempo entrainment creates a steady cue for your nervous system, supporting a shift toward a rest-and-digest state during downtime or movement.</p><div className="balance"><span>ACTIVE</span><div><i/></div><span>CALM</span></div></article>
          </div>
        </div>
      </section>

      <section className="section playlist">
        <div className="wrap playlist-grid">
          <div className="playlist-copy"><p className="kicker">Built for every session</p><h2>A playlist with a purpose.</h2><p>Every track is chosen to create a gradual arc—not just match a mood. Lengths add up to your session, and each selection comes with a reason.</p><ul><li>Normal or Trending catalog styles</li><li>Custom BPM range and tempo preference</li><li>Explicit lyric controls</li></ul><p className="library">Or start quickly with ready-made sets: ambient, piano, nature, electronic, classical, jazz and lo-fi.</p></div>
          <div className="playlist-card">
            <div className="playlist-title"><div><p>YOUR 30-MINUTE SET</p><h3>Steady morning</h3></div><span>74–100 BPM</span></div>
            {tracks.map((t, i) => <div className="track" key={t[0]}><span className="track-num">{String(i + 1).padStart(2, '0')}</span><div className="album">{i === 0 ? '◐' : i === 1 ? '≈' : i === 2 ? '×' : '○'}</div><div className="track-name"><strong>{t[0]}</strong><span>{t[1]} · {t[4]}</span></div><div className="track-data"><strong>{t[3]}</strong><span>BPM</span></div><time>{t[2]}</time></div>)}
            <div className="playlist-foot"><span>19:41 shown · generator completes your chosen duration</span><span>♬</span></div>
          </div>
        </div>
      </section>

      <section className="section profile">
        <div className="wrap profile-card">
          <div className="profile-visual"><div className="profile-ring">{icons.shield}</div><span className="dot d1"/><span className="dot d2"/><span className="dot d3"/></div>
          <div><p className="kicker">Personal, with perspective</p><h2>Your context shapes the tempo.</h2><p>Your optional health profile—age, sex, resting heart rate, relevant heart history, medications, athletic baseline, diabetes-related autonomic issues, symptoms and recent recovery—helps keep tempo changes gradual and sessions inside a safer BPM range.</p><div className="notice"><strong>This tailors the music—not your care.</strong><span>GlucoSync does not diagnose, monitor, prevent or treat any condition. Speak with a qualified clinician about health concerns.</span></div></div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="wrap faq-grid"><div><p className="kicker">Questions, answered</p><h2>Good to know.</h2><p>Thoughtful technology should be easy to understand.</p></div><div className="questions">
          <details open><summary>Is GlucoSync a medical device?<span>+</span></summary><p>No. GlucoSync is a wellness tool. It does not diagnose, treat or replace professional medical care.</p></details>
          <details><summary>How does the live session work?<span>+</span></summary><p>Connect Apple Watch or Health Connect, choose a duration and target BPM, then start. You’ll see live BPM, your target, session time and optional drift and haptic alerts.</p></details>
          <details><summary>Can I use it during a workout?<span>+</span></summary><p>Yes. Choose your preferred intensity and BPM range. Your profile can help the playlist build and ease intensity more gradually.</p></details>
          <details><summary>Do I need a smartwatch?<span>+</span></summary><p>A compatible watch enables live heart-rate features. You can still explore curated, session-tuned music without one.</p></details>
        </div></div>
      </section>

      <section className="signup" id="signup">
        <div className="wrap signup-inner"><div><p className="kicker">Coming soon</p><h2>Find your rhythm early.</h2><p>Join the email preview for calm product updates and first access when GlucoSync is ready.</p></div>
          <form onSubmit={submit}>{sent ? <p className="success">You’re on the list. We’ll be in touch.</p> : <><label><span className="sr-only">Email address</span><input required type="email" placeholder="Email address"/></label><button type="submit">Join the preview <span>→</span></button><small>No noise. Just meaningful updates.</small></>}</form>
        </div>
      </section>

      <footer><div className="wrap footer-inner"><a className="brand" href="#top"><span className="brand-mark light"><span/><span/><span/><span/></span><span>GlucoSync</span></a><p>Curated soundscapes for your natural rhythm.</p><p>© 2025 GlucoSync. Wellness, thoughtfully paced.</p></div></footer>
    </main>
  )
}
