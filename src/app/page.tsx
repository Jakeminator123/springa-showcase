import { SAJTMASKIN_BUILDER_URL } from "@/lib/site";

const img = {
  hero: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=2400&q=80",
  run: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
  pine: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
  rock: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  mist: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  trail: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
  lake: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
};

const beats = [
  { km: "Start", title: "Grusvägen vaknar", body: "Luften är sval och lite salt. Det här är stämning, inte en GPX-fil." },
  { km: "Skog", title: "In mellan tallarna", body: "Barr dämpar ljudet. Ljuset kommer i stråk. Inget exakt avstånd utlovat." },
  { km: "Rötter", title: "Fotarbete som lek", body: "Kortare steg, blicken framåt. Terrängen styr tempot mer än klockan." },
  { km: "Häll", title: "Skogen öppnar sig", body: "Klippa, vind och en glimt av vatten. En bild, inte en uppmätt etapp." },
];

const loops = [
  {
    tag: "Morgon",
    title: "Tallvarvet",
    feel: "Kort · lätt",
    body: "En tänkt första kaffepuls: smal stig, mossa, solstråk. Tiden är en känsla, inte ett facit.",
  },
  {
    tag: "Teknisk",
    title: "Hällmarkspulsen",
    feel: "Rötter · klippa",
    body: "Mer fotarbete: mörk skog som slår om till öppet ljus. Inget tidskrav, ingen tävling.",
  },
  {
    tag: "Lugn",
    title: "Nära vattnet",
    feel: "Låg puls",
    body: "Ett mjukare pass i skyddad skog. Byggt för utandning, inte för Strava-segment.",
  },
];

const faqs = [
  {
    q: "Vilka skor passar bäst?",
    a: "Trailsko med grepp om det är blött. Den här sidan säljer inga skor och testar inga modeller.",
  },
  {
    q: "Är det nybörjarvänligt?",
    a: "Skärgårdsstig kan vara mjuk eller teknisk samma dag. Gå först om du inte känner marken.",
  },
  {
    q: "Vad ska jag ta med?",
    a: "Vatten, lager efter väder, och respekt för privat mark. Inga öppettider, ingen utlånad utrustning.",
  },
  {
    q: "Finns det en officiell karta?",
    a: "Nej. Distanserna i originalet såg uppmätta ut. Här är de medvetet ostämplade.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[var(--bark)]/10 bg-[var(--fog)]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="display text-sm font-semibold tracking-tight">
            Springa
          </a>
          <nav className="hidden gap-5 text-sm text-[var(--needles)] md:flex">
            <a href="#darfor">Därför</a>
            <a href="#kanslan">Känslan</a>
            <a href="#rundor">Rundor</a>
            <a href="#faq">Tips</a>
          </nav>
          <a
            href="#rundor"
            className="rounded-full bg-[var(--bark)] px-3 py-2 text-xs text-[var(--fog)] sm:text-sm"
          >
            Utforska rundorna
          </a>
        </div>
        <nav className="flex gap-4 overflow-x-auto px-4 pb-2 text-xs text-[var(--needles)] md:hidden">
          <a href="#darfor">Därför</a>
          <a href="#kanslan">Känslan</a>
          <a href="#rundor">Rundor</a>
          <a href="#faq">Tips</a>
        </nav>
      </header>

      <main id="top">
        <section className="relative min-h-[88vh] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="photo-veil absolute inset-0" />
          <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--lime)]">
              Exempelprojekt · editorial outdoor
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl text-white sm:text-6xl">
              Spring där tallskogen möter skärgårdsluften.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/85">
              En visuell guide till känslan av mossstig, rot och häll — inte en förening,
              inte en uppmätt led, inte en bokning. Bilderna är stock. Distanserna är
              stämning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#rundor" className="rounded-full bg-[var(--lime)] px-5 py-3 text-center text-sm font-semibold text-[var(--bark)]">
                Utforska rundorna
              </a>
              <a href="#faq" className="rounded-full border border-white/40 px-5 py-3 text-center text-sm text-white">
                Läs tipsen först
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-3 px-4 py-8 sm:grid-cols-3 sm:px-6">
          {[
            ["Dagens spår", "En tänkt slinga mot ljuset"],
            ["Terräng", "mossa · häll · vatten"],
            ["Klockslag", "tidig morgon, om ljuset vill"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-3xl bg-white/70 p-5 ring-1 ring-[var(--bark)]/8">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--moss)]">{k}</p>
              <p className="mt-2 text-lg">{v}</p>
            </div>
          ))}
        </section>

        <section id="darfor" className="scroll-mt-24 mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--moss)]">Därför springer man här</p>
            <h2 className="mt-3 text-3xl sm:text-5xl">Skogen ger passet rytm, inte ett varumärke.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--needles)]">
              Originalet beskrev en konkret skärgårdsö med kilometrar och mejladress.
              Den här revivalen behåller doften och ljuset, men släpper påståenden som
              inte är uppmätta.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                ["Mjuka stigar med teknisk puls", "Barr och rötter ger ett levande steg — utan asfaltens monotoni."],
                ["Häll, tall och havsljus", "Terrängen växlar. Det är filmiskt. Det är inte en certifierad led."],
                ["Lugn eller fart", "Välj återhämtning eller mer flås. Ingen tidtabell."],
              ].map(([t, b]) => (
                <li key={t} className="border-l-2 border-[var(--lime)] pl-4">
                  <p className="font-medium">{t}</p>
                  <p className="mt-1 text-sm text-[var(--needles)]">{b}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.run} alt="" className="h-full min-h-72 w-full rounded-[2rem] object-cover" />
        </section>

        <section id="kanslan" className="scroll-mt-24 bg-[var(--bark)] py-16 text-[var(--fog)]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--lime)]">Känslan av rundan</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-5xl">Från första steget till utsikten.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
              En runda andas, svänger och öppnar sig. Etapperna nedan är scener, inte
              milstolpar från en klocka.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {beats.map((beat) => (
                <article key={beat.title} className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--lime)]">{beat.km}</p>
                  <h3 className="mt-2 text-2xl">{beat.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{beat.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="rundor" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--moss)]">Föreslagna löpupplevelser</p>
          <h2 className="mt-3 max-w-2xl text-3xl sm:text-5xl">Välj efter puls och dagsform.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--needles)]">
            Originalet hade kilometertal och minuter. De är borttagna som sanning.
            Anpassa efter väder, markläge och hur väl du känner området.
          </p>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {loops.map((loop) => (
              <article key={loop.title} className="flex flex-col rounded-[2rem] bg-white p-6 ring-1 ring-[var(--bark)]/8">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--clay)]">{loop.tag}</p>
                <h3 className="mt-3 text-2xl">{loop.title}</h3>
                <p className="mt-1 text-sm text-[var(--moss)]">{loop.feel}</p>
                <p className="mt-3 flex-1 text-sm leading-6 text-[var(--needles)]">{loop.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="galleri" className="bg-[#e7eedc] py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--moss)]">Vindö i rörelse</p>
            <h2 className="mt-3 text-3xl sm:text-5xl">Morgondimma och stigar som drar.</h2>
            <p className="mt-4 max-w-2xl text-sm text-[var(--needles)]">
              Unsplash-bilder, samma visuella register som originalet. Inte egna foton
              från en specifik stig.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[img.pine, img.rock, img.mist, img.trail].map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="" className="h-56 w-full rounded-3xl object-cover" />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--moss)]">Bra att veta</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Innan du ger dig ut</h2>
          <div className="mt-8 divide-y divide-[var(--bark)]/10">
            {faqs.map((item) => (
              <details key={item.q} className="py-4">
                <summary className="cursor-pointer text-lg font-medium">{item.q}</summary>
                <p className="mt-2 text-sm leading-6 text-[var(--needles)]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.lake} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="photo-veil absolute inset-0" />
          <div className="relative mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
            <h2 className="text-3xl sm:text-5xl">Vill du bygga en liknande sida för ett lopp eller community?</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Skapa första versionen med Sajtmaskin. Den här sidan är en återskapad
              showcase — originalet fanns live, källkoden fanns inte.
            </p>
            <a
              href={SAJTMASKIN_BUILDER_URL}
              className="mt-7 inline-block rounded-full bg-[var(--lime)] px-6 py-3 text-sm font-semibold text-[var(--bark)]"
            >
              Skapa första versionen med Sajtmaskin
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--bark)]/10 bg-[var(--fog)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-[var(--needles)]">
            Springa är ett exempelprojekt. Ingen förening, ingen karta, ingen mejl.
          </p>
          <a href={SAJTMASKIN_BUILDER_URL} className="text-sm text-[var(--moss)] underline-offset-4 hover:underline">
            Baserad på ett exempel skapat med Sajtmaskin · Skapa din egen
          </a>
        </div>
      </footer>
    </>
  );
}
