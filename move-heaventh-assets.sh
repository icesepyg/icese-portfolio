#!/usr/bin/env bash
set -euo pipefail

# Base project directory (one level up from scripts/)
BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TARGET_DIR="$BASE_DIR/public/assets/heaventh"

echo "Target dir: $TARGET_DIR"
mkdir -p "$TARGET_DIR"

FILES=(
  "heaventh-banner.jpg"
  "heaventh-mug.jpg"
  "heaventh-poster.jpg"
  "heaventh-stickers.jpg"
  "heaventh-tshirt.jpg"
  "heaventh-presentation-1.jpg"
  "heaventh-presentation-2.jpg"
  "heaventh-presentation-3.jpg"
  "heaventh-presentation-4.jpg"
  "heaventh-presentation-5.jpg"
)

# Common locations to search for the files (adjust if your files live elsewhere)
SEARCH_DIRS=(
  "$BASE_DIR"
  "$BASE_DIR/assets"
  "$BASE_DIR/public"
  "$BASE_DIR/public/assets"
  "$BASE_DIR/src"
  "$HOME/Downloads"
  "$HOME"
)

moved_any=false

for file in "${FILES[@]}"; do
  found=false
  for dir in "${SEARCH_DIRS[@]}"; do
    src="$dir/$file"
    if [ -f "$src" ]; then
      echo "Moving: $src -> $TARGET_DIR/"
      mv -v "$src" "$TARGET_DIR/"
      found=true
      moved_any=true
      break
    fi
  done
  if [ "$found" = false ]; then
    echo "Warning: $file not found in search dirs"
  fi
done

if [ "$moved_any" = true ]; then
  echo "Move complete. Files now in: $TARGET_DIR"
else
  echo "No files were moved. Please ensure the listed files exist and re-run the script."
fi
