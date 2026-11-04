// Trage hier nach der Freischaltung deine Amazon-Partner-ID ein, z. B. "meinname-21".
const CONFIG={tag:""};

// Produkte: [Name, Worauf du achten solltest, Suchbegriff bei Amazon]
const K={
aussen:{t:"Außenpflege",i:"Waschen, trocknen, schützen: So bleibt der Lack lange schön.",p:[
["Autoshampoo, pH-neutral","Schont Wachs und Versiegelung. Spülmittel gehört nicht ans Auto.","autoshampoo ph neutral"],
["Zwei-Eimer-Set mit Schmutzfilter","Der Einsatz hält Sand am Eimerboden, damit er nicht zurück an den Handschuh kommt.","autowaschen eimer set grit guard"],
["Mikrofaser-Trockentuch","Große, flauschige Tücher saugen viel auf. Wasche sie ohne Weichspüler.","mikrofaser trockentuch auto"],
["Sprühwachs oder Lackversiegelung","Schneller Schutz mit Abperleffekt. Die Haltbarkeit hängt vom Produkt ab.","sprühwachs auto lack"]]},
innen:{t:"Innenraum",i:"Kunststoff, Leder und Polster sauber halten, ohne dass es glänzt oder klebt.",p:[
["Innenraumreiniger für Kunststoff","Matte Pflege ohne Silikonglanz wirkt hochwertiger und blendet nicht.","kunststoff innenraumreiniger auto matt"],
["Lederpflege und Lederreiniger","Erst reinigen, dann pflegen. Teste neue Mittel an einer versteckten Stelle.","autositz lederpflege set"],
["Polsterreiniger","Sparsam dosieren und gut trocknen lassen, damit sich kein Geruch bildet.","polsterreiniger auto textil"],
["Handstaubsauger fürs Auto","Wichtig sind lange Düsen für Ritzen und ein Akku, der für das ganze Auto reicht.","akku handstaubsauger auto"]]},
felgen:{t:"Felgen und Reifen",i:"Bremsstaub löst sich am besten mit dem richtigen Mittel und weichen Bürsten.",p:[
["Felgenreiniger, säurefrei","Schonender für Lack und Alu. Beachte die Einwirkzeit auf der Flasche.","felgenreiniger säurefrei"],
["Felgenbürste","Weiche Borsten und ein langer Griff erreichen auch die Innenseite.","felgenbürste weich"],
["Reifenpflege","Matt oder leicht glänzend, je nach Geschmack. Auf Gummi nichts Fettiges auftragen.","reifenpflege auto"]]},
zubehoer:{t:"Zubehör",i:"Praktisches für unterwegs und für die Garage.",p:[
["Digitaler Reifendruckprüfer","Der richtige Luftdruck spart Sprit und erhöht die Sicherheit. Die Sollwerte stehen in der Tür oder im Tankdeckel.","reifendruckprüfer digital"],
["Starthilfekabel","Achte auf genug Querschnitt und Länge für dein Auto. Diesel brauchen mehr.","starthilfekabel"],
["Handyhalterung fürs Auto","Wichtig sind ein fester Halt und eine Position, die die Sicht nicht verdeckt.","handyhalterung auto"],
["Kompressor für Reifen","Prüfe die Leistung und ob der Schlauch bis zu allen Reifen reicht.","auto kompressor reifen 12v"]]}};


const ICONS={
aussen:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6C24 6 12 20 12 29a12 12 0 0 0 24 0C36 20 24 6 24 6z"/><path d="M18 30a6 6 0 0 0 6 6"/></svg>',
innen:'<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="4"/><path d="M7 24h13M28 24h13M24 28v13"/></svg>',
felgen:'<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="5"/><path d="M24 7v12M24 29v12M7 24h12M29 24h12M12 12l8 8M28 28l8 8M36 12l-8 8M20 28l-8 8"/></svg>',
zubehoer:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 34a16 16 0 1 1 32 0"/><path d="M24 34l8-12"/><circle cx="24" cy="34" r="2.5"/><path d="M10 40h28"/></svg>'};

const az=q=>"https://www.amazon.de/s?k="+encodeURIComponent(q)+(CONFIG.tag?"&tag="+encodeURIComponent(CONFIG.tag):"");
document.querySelectorAll("[data-q]").forEach(a=>{a.href=az(a.dataset.q)+"";if(CONFIG.tag)a.textContent+=" *";});
const h=document.getElementById("hinweis");
if(h&&CONFIG.tag)h.textContent="Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Mit * markierte Links sind Werbelinks.";
const l=document.getElementById("liste");
if(l){
  const key=new URLSearchParams(location.search).get("k");const kk=K[key]?key:"aussen";const c=K[kk];document.getElementById("kic").dataset.i=kk;
  document.title=c.t+" | Autopflege-Kompass";
  document.getElementById("kt").textContent=c.t;document.getElementById("ki").textContent=c.i;
  c.p.forEach(([n,t,q])=>{
    const li=document.createElement("li");
    const d=document.createElement("div");
    const b=document.createElement("b");b.textContent=n;
    const s=document.createElement("span");s.textContent=t;
    d.append(b,s);
    const a=document.createElement("a");a.className="btn";a.href=az(q);a.rel="sponsored noopener";a.target="_blank";
    a.textContent=CONFIG.tag?"Bei Amazon ansehen *":"Bei Amazon ansehen";
    li.append(d,a);l.append(li);
  });
}

document.querySelectorAll("[data-i]").forEach(e=>{e.innerHTML=ICONS[e.dataset.i]||""});
