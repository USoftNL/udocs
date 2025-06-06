import os

def add_id_frontmatter_to_md_files(root_folder):
    for dirpath, _, filenames in os.walk(root_folder):
        for filename in filenames:
            if filename.lower().endswith('.md'):
                filepath = os.path.join(dirpath, filename)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                # Check if already has frontmatter
                if content.lstrip().startswith('---'):
                    continue
                # Get filename without extension
                id_value = os.path.splitext(filename)[0]
                frontmatter = f"---\nid: {id_value}\n---\n\n"
                # Write new content
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(frontmatter + content)
                print(f"Added id frontmatter to: {filepath}")

if __name__ == "__main__":
    add_id_frontmatter_to_md_files("docs")
