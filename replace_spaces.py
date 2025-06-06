import os
import re

admonition_map = {
    '[!TIP]': 'tip',
    '[!NOTE]': 'note',
    '[!INFO]': 'info',
    '[!WARNING]': 'warning',
    '[!CAUTION]': 'danger',
}

# Match: block starting with '> [!TAG]' and continuing with '> ...' lines
admonition_block_re = re.compile(
    r"""
    ^>[ ]?\[!(TIP|NOTE|INFO|WARNING|CAUTION)\][ ]?(.*)\n    # first line, group(1) is type, group(2) is rest
    ((^>[ ].*\n?)*)                                         # subsequent '> ...' lines, group(3)
    """,
    re.MULTILINE | re.VERBOSE
)

def replace_admonitions(content):
    def _replace(match):
        admonition_type = admonition_map.get(f'[!{match.group(1)}]', 'note')
        # Gather all lines: first line content and then all '> ...' lines after
        lines = []
        # First line (content after '> [!TAG]')
        if match.group(2).strip():
            lines.append(match.group(2).strip())
        # Next lines
        if match.group(3):
            for line in match.group(3).splitlines():
                lines.append(line[2:].strip() if line.startswith('> ') else line[1:].strip())
        # Build output block
        out = f"\n:::{admonition_type}\n\n" + "\n".join(lines) + "\n\n:::\n"
        return out

    return admonition_block_re.sub(_replace, content)

def process_markdown_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    new_content = replace_admonitions(content)
    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated: {filepath}")

def walk_docs_and_update(root_dir="docs"):
    for dirpath, _, filenames in os.walk(root_dir):
        for fname in filenames:
            if fname.endswith(".md"):
                process_markdown_file(os.path.join(dirpath, fname))

if __name__ == "__main__":
    walk_docs_and_update()
