import React from "react";
import { Button } from "react-bootstrap";
import Header from "../home/Header";
import Footer from "../home/Footer";
import Post from "./Post";

const posts = [
  {
    title: "Iskustvo kupovine stana",
    content:
      "Napokon potpisan predugovor o kupoprodaji, pa hajdemo u banku pokrenuti proces kreditiranja. Banka provjerava sve živo (poslodavca, kupca, itd), doslovno svaku crticu ZK uloška. U ZK ulošku stoji Zabilježba, još jedan Prigovor na zabilježbu i Sudski spor. Banka zahtjeva sve Z-xxxx/yy dokumente na uvid. Zbog na imanja pravnog interesa niste ih u mogućnosti ishoditi, a niti imate pojma o tome. Tada, umjesto da kampirate pred zgradom i četke stanare da vam daju kopiju tih dokumenata provjerite zgradu na Zgradarima i preuzmete od predstavnika stanara tražene dokumente. Bez višetjedne pauze Vaša kupnja ide dalje.",
    dateCreated: "listopad 2020",
    creator: "DDIV",
  },
  {
    title: "Puštanje grijanja",
    content:
      "Kada ste upisani suvlasnik, što je vidljivo na ZK ulošku, predstavnik stanara Vas poziva na Zgradare. U odjeljku Dokumentacija, vidljivi su Vam tlocrti zgrade (dobiveni iz Arhive grada), upute gdje Vam se protežu instalacije, okna, nosivi zidovi i sl. Predstavnik stanara je upravo učitao dokument rasporeda čišćenja snijega, upute u slučaju potresa, važne kontakte domara, kotlovničara i sl. Tu vidite i dokument o puštanju grijanja i vrijeme kad možete zamijeniti dotrajale radijatore. Nemate nikakvog stresa pred nadolazeću zimu, i pritisak da s upitnim domarom na silu dogovarate i mijenjate ventile, jer oni baš sutra puštaju grijanje, a baš Vaš stan je kritičan. Stoga, molim Vas pripremite 2.000,00 kuna da to odradimo za Vas, da se ostali stanari ne smrzavaju.",
    dateCreated: "studeni 2020",
    creator: "DDIV",
  },
  {
    title: "Adaptacija stana - sve van!",
    content:
      'Ovaj slučaj izlazi iz domene Zgradara i ulazi u kompliciranu kaljužu komunalnih struktura (reciklažna dvorišta, teoretski, zaprimaju minimalne količine, doslovno teretni prostor automobila za određeni otpad u polugodišnjem roku. U praksi, budite neprimjetni, donosite umjereno, dok Vas do prijetnje "ne zapišu"). Kako ne bi zvali " Dečke od riječi" ili " Besplatan odvoz otpada" jer ništa od toga nije besplatno i besplatno ne postoji, jer ako je besplatno - onda to plaćaju drugi. Uglavnom, na Zgradarima, na Vašim korisničkim stranicama u odjeljku Obavijesti nalazite informacije o odvozu glomaznog otpada, šute i sl, odgovarajuće brojeve komunalnih službi i registriranih tvrtki.',
    dateCreated: "prosinac 2020",
    creator: "DDIV",
  },
  {
    title: "Adaptacija stana - zatvaranje vode",
    content:
      "Kako bi izbjegli neugodnosti jutarnjeg nedostatka vode, zbog radova na Vašoj vertikali, par dana prije u odjeljku Obavijesti, napisali ste okvirno vrijeme zatvaranja vertikale. Vašu obavijest predstavnik stanara je kroz Zgradare poslao mobilnu obavijest, SMS i e-mail drugim stanarima. Predstavnik stanara, rezervirao je domara i kotlovničara da asistiraju pri zatvaranju i višeminutnom, polaganom, otvaranju dotoka vode u vertikalu. Iskusne vodoinstalatere preporučila Vam je aplikacija Zgradari, tamo su bili izlistani vodoinstalateri koji su odličan posao odradili Vašem susjedu. Dečki su bili kompetentni, brzi, te je i cijena bila zadovoljavajuća. A moglo je zvučati i ovako: dolaze dečki, jedan štema i vrti koloture ventila, drugi namata slinavu kudelju. Najednom se sjete zatvoriti vertikalu, skače vozač autobusa u šaht, zatvara krivi, pa brzinski otvara, ovaj mota. Dolazi kotlovničar, brzo zatvara i toplu, dok nitko nije skužio. Kuca privi susjed - hej, što to radite. Trajalo je kratko pa je ipak nekako prošlo. Vi pojma nemate da ste najgori susjed, a nije Vas tamo niti bilo. Zgradari će Vam pomoći u svoj toj organizaciji.",
    dateCreated: "prosinac 2020",
    creator: "DDIV",
  },
  {
    title: "Adaptacija stana - struja",
    content:
      'Nakon još jednog potresa u nizu na zagrebačkom i širem području, svaka "Hiltica" je nerado viđeni alat u zgradi. Vaš posao mora ići dalje, Vaša banka ne čeka s ratama, vaši komunalni i vodni doprinosi i dalje se naplaćuju, plin, grijanje, odvoz otpada i struja također. Zove vas predstavnik stanara - koliko još mislite raditi, ne bi li možda malo stali dok se ne smiri jer su ljudi iscrpljeni. Odgovor je jasan, ali neka svatko za sebe odgovori. Ono što mu možete odgovoriti je da pokrene anketu unutar Zgradara i alocira budžet iz pričuve, pa neka Iscrpljeni pokreče fasadu od grafita, pokupe lišće i pometu dvorište. Neka glasuju za budžet zgrade, diskutiraju troškove, sve to unutar Zgradara. Dotle vaš provjereni električar postavlja nove kablove, a u Zgradarima dan prije najavljuje bučnije radove. Na kraju, vi ocjenjujete njegov rad, te je ocjena i komentar vidljiv u odjeljku Majstori.',
    dateCreated: "siječanj 2020",
    creator: "DDIV",
  },
  {
    title: "Socijalno osjetljiva energetska obnova",
    content:
      'Socijalno-pravno-fizikalni interes. Biti socijalno osjetljiv i povećati kvalitetu zajedničkog življenja je temelj ove platforme. Evo nekoliko osjetljivih pitanja. Smije li predstavnik stanara braniti nešto što je on sebi napravio ili okoristio. Kako etažirati zgradu i znati koliko je točno tvoje. Kako s malom pričuvom napraviti velike stvari. Uložiti li ili ne veliku svotu novaca u energetsku efikasnost, pa je "dobivati" nazad u komadićima. Pričuva je 0.54% godišnje od vrijednosti nekretnine - vrijednost je rasla ali pričuva nije. Parkiranje i opstruiranje zajedničkog ne etažiranog vlasništva. Veliki stanar ima jacuzzi i psa, a mali tuš kadu - zajedničko brojilo vode po broju prijavljenih članova. Crveni križ donosi hranu u milijunski stan. Rušen nosivi zid, statika i osiguranje od potresa',
    dateCreated: "siječanj 2021",
    creator: "DDIV",
  },
];

const BlogOverview = () => {
  return (
    <div>
      <Header />
      <h1>ZGRADARI POMAŽE U ...</h1>

      {posts.map((post, index) => (
        <Post key={post.id ? post.id : index} post={post} />
      ))}
      <Footer />
    </div>
  );
};

export default BlogOverview;
