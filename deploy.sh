#!/bin/sh
set -eu
cd "$(dirname "$0")"
rm -rf docs
hyper8 -b .
mkdir docs
cp -R .hyper8_build/. docs/
: > docs/.nojekyll
printf 'softwaredeafelopment.ustp.at\n' > docs/CNAME

mkdir -p docs/assets/logos
cp .site-assets/logos/*.png docs/assets/logos/
find docs -name index.html | while IFS= read -r f; do
    grep -q '</footer>' "$f" || continue
    grep -q 'class="sd-logos"' "$f" && continue
    root=$(printf '%s' "${f#docs/}" | sed 's|[^/]*$||; s|[^/]*/|../|g')
    SD_FOOTER=$(sed "s|@ROOT@|$root|g" .site-assets/footer.html) \
        perl -0777 -pi -e 's|</footer>|$ENV{SD_FOOTER}\n</footer>|' "$f"
done
pages=$(grep -rl 'class="sd-logos"' docs --include=index.html | wc -l | tr -d ' ')
[ "$pages" -gt 0 ] || { echo "deploy.sh: Logo-Footer wurde in keine Seite eingefügt" >&2; exit 1; }

echo "deploy.sh: docs/ aktualisiert ($(find docs -type f | wc -l | tr -d ' ') Dateien, Logo-Footer auf $pages Seiten)"
