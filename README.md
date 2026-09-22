# Software Deafelopment – Video-Site

## Online

Die Seite läuft unter **https://softwaredeafelopment.ustp.at**
(https://softwaredeafelopment.github.io leitet dorthin weiter). Gehostet wird über
GitHub Pages aus dem Ordner `docs/` dieses Repos (Branch `main`).

Nach Änderungen an Texten, Videos oder Untertiteln:

```
./deploy.sh
git add -A && git commit -m "Update site" && git push
```

`deploy.sh` löscht `docs/`, baut die Site mit hyper8, kopiert `.hyper8_build/` nach
`docs/` und legt `docs/.nojekyll` sowie `docs/CNAME` an. `docs/` muss vor dem Bauen
weg sein, sonst liest hyper8 den Ordner als weiteres Kapitel ein.

**Wichtig:** `docs/CNAME` darf nicht gelöscht werden, sonst verliert die Seite die
Custom Domain. Die `base_url` der Site steht in `site.eno`.

Kurze Anleitung, wie die Site aufgebaut ist und wie man sie am Server laufen lässt.

## Was ist das?

Die Site ist mit **hyper8** gemacht. Das ist ein kleines Programm, das aus Ordnern mit
Videos und Textdateien eine fertige Website baut (nur HTML, CSS, JS und die Videos –
kein Backend, keine Datenbank). Die fertige Site liegt im Ordner `.hyper8_build` und
kann von jedem Webserver ausgeliefert werden.

Infos zu hyper8: https://simonrepp.com/hyper8

## Ordnerstruktur

```
hyper8-site/
├── site.eno                  base_url der Site
├── collection.eno            Titel + Text der Startseite
├── grundlagen-einfuhrung/    ein Kapitel
│   ├── collection.eno        Titel + Reihenfolge des Kapitels
│   ├── was-ist-programmieren/
│   │   ├── video.eno         Titel, Reihenfolge, Beschreibung des Videos
│   │   ├── video01.mp4       das Video
│   │   ├── video01.srt       Untertitel
│   │   └── poster.jpg        Vorschaubild
│   └── was-ist-ein-programmiercode/
├── python-basics/
├── erste-schritte/
├── kommentare/
├── datentypen-variablen/
├── input/
├── schleifen/
├── .hyper8_build/            die fertig gebaute Site (wird von hyper8 erzeugt, nicht im Repo)
├── docs/                     Kopie von .hyper8_build für GitHub Pages
├── LICENSE                   CC BY-SA 4.0
└── docker-compose.yml        nginx, der .hyper8_build ausliefert
```

Jeder Ordner = ein Kapitel. Jeder Unterordner = ein Video.
Die `.eno`-Dateien sind einfache Textdateien, z.B. `video.eno`:

```
title: Was ist Programmieren?
sort_number: 1

poster:
file = poster.jpg

subtitles:
file = video01.srt
label = Deutsch
language = de

-- description
Hier steht die Beschreibung, die unter dem Video angezeigt wird.
-- description
```

`sort_number` bestimmt die Reihenfolge. Die Beschreibung steht zwischen den beiden
`-- description`-Zeilen. Leerzeile = neuer Absatz.

## Site am Server laufen lassen (nur ausliefern)

Wenn nur die fertige Site online sein soll, braucht man hyper8 nicht. Es reicht ein
Webserver, der den Ordner `.hyper8_build` ausliefert. Mit Docker:

```
cd hyper8-site
docker compose up -d
```

Dann läuft die Site auf Port 8080 (siehe `docker-compose.yml`, Port kann man dort
ändern). Ohne Docker geht auch jeder andere Webserver (nginx, Apache, Caddy …), einfach
`.hyper8_build` als Document Root nehmen.

## Etwas ändern und neu bauen

Wenn man Texte, Videos oder Untertitel ändert, muss die Site neu gebaut werden.
Dafür braucht man hyper8.

Installation am Mac:

```
brew tap simonrepp/hyper8
brew install hyper8
```

Für Linux gibt es Downloads auf https://simonrepp.com/hyper8.

Bauen:

```
hyper8 -b hyper8-site
```

Das schreibt die fertige Site nach `hyper8-site/.hyper8_build`. Beim ersten Mal
dauert es länger, weil alle Videos und Bilder verarbeitet werden. Danach merkt sich
hyper8 das im Ordner `.hyper8_cache` und ist schnell.

Wer lieber mit einer Oberfläche arbeitet: `hyper8 hyper8-site` (ohne `-b`) startet
einen Editor im Browser.

Zum Ausprobieren ohne Server: `hyper8 -b -p hyper8-site` baut und öffnet die Site
gleich im Browser.

## Typische Aufgaben

- **Beschreibung ändern:** `video.eno` des Videos bearbeiten, neu bauen.
- **Neues Video:** neuen Unterordner im passenden Kapitel anlegen mit `video.eno`,
  `video01.mp4`, `video01.srt`, `poster.jpg`. `sort_number` vergeben, neu bauen.
- **Neues Kapitel:** neuen Ordner mit `collection.eno` anlegen (Vorlage: eines der
  bestehenden Kapitel), darin die Video-Ordner, neu bauen.
- **Vorschaubild ändern:** `poster.jpg` austauschen, neu bauen.

## Hinweise

- `.hyper8_cache` muss nicht mitgegeben werden, hyper8 baut ihn selbst neu.
- Die feste Adresse der Site steht in `site.eno` (`base_url: https://…`). Ohne sie
  meldet hyper8 beim Bauen, dass Embeds und Feeds fehlen.
- Browser cachen die Vorschaubilder gern. Nach einem neuen Build ggf. mit Shift neu laden.
