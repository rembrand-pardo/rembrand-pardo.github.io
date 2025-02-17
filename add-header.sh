#!/bin/bash
# Script to Automatically Add License Headers to All .js Files in my project

read -r -d '' HEADER << 'EOF'
/*
 * Copyright (c) 2025 Rembrand Pardo
 * Unauthorized copying, modification, or redistribution is strictly prohibited.
 * Violators will face legal action.
 */
EOF


TARGET_DIR="src"
FILE_PATTERN="*.js"

# Loop through each file and check for header
find "$TARGET_DIR" -type f -name "$FILE_PATTERN" | while read -r file; do
  # Check if the header exists
  if ! grep -q "Rembrand Pardo" "$file"; then
    echo "Adding header to: $file"
    # Create a temporary file with header and original content
    (echo "$HEADER"; echo ""; cat "$file") > "${file}.tmp"
    mv "${file}.tmp" "$file"
  fi
done

echo "Header addition complete."
