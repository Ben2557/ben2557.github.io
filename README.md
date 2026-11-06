# Portfolio — Benjamin Bruat

Site statique (HTML, CSS, JavaScript) sans outil de build ni dépendance.
Il remplace l'ancien portfolio hébergé sur WordPress.com.

## Structure

```
index.html      Accueil : profil, compétences, expériences, projets, formations, contact
parcours.html   Travaux du BTS SIO : matières, dossier E6, TP, PPE, missions et fiches de poste (SOSIM, Rougeot)
veille.html     Veille technologique et juridique
base.css        Reset et fondations
style.css       Jetons de design (couleurs, typographie, espacements) et composants
app.js          Menu mobile et année du pied de page
assets/img/     Images optimisées (WebP)
assets/docs/    PDF (CV, cahiers des charges, comptes rendus)
```

## Modifier le site en local

1. Ouvrir le dossier dans VS Code (ou tout éditeur).
2. Lancer un petit serveur local pour prévisualiser :
   `python -m http.server 8000` puis ouvrir http://localhost:8000
3. Modifier les fichiers HTML/CSS, recharger la page.

Les couleurs et les polices se changent dans les variables `:root` de `style.css`.

## Formulaire de contact (Formspree)

Le formulaire de `index.html` envoie les messages via [Formspree](https://formspree.io) (offre gratuite).

1. Créer un compte Formspree puis un nouveau formulaire : Formspree fournit une adresse du type `https://formspree.io/f/abcdwxyz`.
2. Dans `index.html`, remplacer `VOTRE_ID_FORMSPREE` dans l'attribut `action` du formulaire par cet identifiant.
3. Publier. Les messages arrivent sur l'adresse e-mail du compte Formspree.

Le champ `_gotcha` est un piège anti-spam : il reste invisible et vide pour un humain.
Si l'envoi échoue, la page invite à écrire directement par e-mail.

## Publier gratuitement sur GitHub Pages

1. Créer un dépôt public sur GitHub, par exemple `Ben2557/portfolio`
   (ou `Ben2557.github.io` pour avoir l'URL racine).
2. Dans ce dossier :
   ```
   git init
   git add .
   git commit -m "Refonte du portfolio"
   git branch -M main
   git remote add origin https://github.com/Ben2557/portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : Settings → Pages → Source « Deploy from a branch »,
   branche `main`, dossier `/ (root)`, puis Save.
4. Le site est en ligne quelques minutes plus tard sur
   `https://ben2557.github.io/portfolio/`.
5. Chaque `git push` suivant met le site à jour automatiquement.

Alternatives gratuites équivalentes : Cloudflare Pages ou Netlify
(connecter le dépôt GitHub, aucun réglage de build nécessaire).

## Nom de domaine (optionnel)

Settings → Pages → Custom domain, puis créer un enregistrement CNAME
chez le registrar vers `ben2557.github.io`. GitHub fournit le HTTPS.
