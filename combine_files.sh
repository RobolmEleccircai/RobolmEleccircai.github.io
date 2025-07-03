#!/bin/bash

# This script will search for all .css, .js, .html, and .md files in the current directory
# and subdirectories, then combine their contents into a single output file named "combined_output.txt".
# Each file's content will be clearly separated with a header to identify the file.

# Ensure that the script will be executed from the terminal, with execution permissions added

# Usage instructions (displayed before the script runs):
# 1. Grant execute permissions to the script using the following command:
#    chmod +x combine_files.sh
# 2. Run the script with the following command:
#    ./combine_files.sh
# 3. After the script finishes, you will find the merged content in "combined_output.txt".

# Define the output file
output_file="combined_output.txt"

# Create an empty file or clear its contents if it already exists
> "$output_file"

# Loop through all the files with specified extensions in the current directory and subdirectories
for file in $(find . \( -iname "*.css" -o -iname "*.js" -o -iname "*.html" -o -iname "*.md" \)); do
    # Add a clear identifier for each file's content
    echo "--- ${file} start ---" >> "$output_file"
    
    # Append the content of each file to the output file
    cat "$file" >> "$output_file"
    
    # Add an end identifier after the content of the file
    echo "--- ${file} end ---" >> "$output_file"
done

# Display a message to indicate the script is done
echo "Merge complete! All file contents have been saved to $output_file"
