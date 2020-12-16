# Aplikacija za vođenje zgrade

Ovom web-aplikacijom povećava se interakcija svih suvlasnika zgrade, te na taj način osvještava briga za zajedničko vlasništvo, na način da se ono obnavlja, uređuje, predlažu ideje i vode glasovanja.
Korisnici aplikacije su predstavnik stanara i stanari vlasnici. U daljnjem razvoju i ostali dionici provedenih i izglasanih projekta.

## Predstavnik stanara

Definira zgradu, upravlja bazom stanara (poziva, dodaje i briše stanare), bazom projekata i imovinom.

## Stanari - vlasnici

Pozvani su od predstanika stanara, te vrše svoju registraciju. Sudjeluju u glasanju za projekte, komentiraju projekte, ocijnjuju ih, komentiraju vodstvo zgrade i cijelo svoje i zajedničko vlasništvo.

## Projekt

Projekte predlažu i glasaju za njih stanari vlasnici, te komentiraju iste.

## Komentar

Komentar se dodijeljuje predstavniku stanara i projektima.

# Web aplikacija - ZGRADARI
## Stack
Izgrađena je na forntendu react js i bootstrap, te backend graphql, aws amplify stack-u.

## Daljni razvoj
Za daljni razvoj javite se na domeniko.divjak@gmail.com

### TODOs 
Učenje i dobra zabava.
Marketing web-aplikacije
Proširenje funkcionalnosti baze
Razvoj na nativnim mobilnim platformama
Razvoj vođenja radova
Evaluiranje ponuda radova
Reklame za ponude radova
Izrade ponuda izvođača
Prihvaćanje i izvršavanje ponuda
Naplačivanje posredničke provizije
Vođenje dokumentacije i BIM-a zgrade
Vođenje i upravljanje pričuvom

### DONE
TRENUTNO STANJE APLIKACIJE DOSTUPNO [OVDJE](https://dev.d3hycocxzbzsx2.amplifyapp.com/)

Postavljen amplify stack
Definirana pocetna baza na graphgl-u
Početna stranica za dodavanje Predstavnika stanara


### Bilješke
Dodati u AWS Amplify u App settings Rewrites and redirects - kako bi proradio react-router-dom 
[
    {
        "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>",
        "target": "/index.html",
        "status": "200",
        "condition": null
    }
]