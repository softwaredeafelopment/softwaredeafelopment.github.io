#!/bin/sh
set -eu
cd "$(dirname "$0")"
rm -rf docs
hyper8 -b .
mkdir docs
cp -R .hyper8_build/. docs/
: > docs/.nojekyll
printf 'softwaredeafelopment.ustp.at\n' > docs/CNAME
echo "deploy.sh: docs/ aktualisiert ($(find docs -type f | wc -l | tr -d ' ') Dateien)"
