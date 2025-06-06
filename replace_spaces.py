import os
import re

def normalize_fragment(link_target):
    if '#' in link_target:
        pre, sep, post = link_target.partition('#')
        post = post.lower().replace('+', '-')
        return f"{pre}#{post}"
    return link_target

def process_markdown_file(filepath):
    with open(filepath, "r", encoding="utf-8") as file:
        content = file.read()

    # Matches '](something#fragment)'
    pattern = re.compile(r'(\]\([^\)#]*#[^)#]+\))')

    def replacer(match):
        before = match.group(0)              # e.g. ](foo.md#My+Section)
        link_target = before[2:-1]           # strip ]( and )
        new_target = normalize_fragment(link_target)
        return f"]({new_target})"

    new_content = pattern.sub(replacer, content)

    if content != new_content:
        with open(filepath, "w", encoding="utf-8") as file:
            file.write(new_content)
        print(f"Updated: {filepath}")

def walk_docs_and_update_fragments(root_dir="docs"):
    for dirpath, _, filenames in os.walk(root_dir):
        for fname in filenames:
            if fname.endswith(".md"):
                process_markdown_file(os.path.join(dirpath, fname))

if __name__ == "__main__":
    walk_docs_and_update_fragments()
