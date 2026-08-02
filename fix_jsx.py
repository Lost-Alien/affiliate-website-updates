import os
import re

directory = 'd:/Lost_Projects/affiliate-website-updates'

# Match the a tag and the following p tag
pattern = re.compile(r'(<a\s+[^>]*>.*?(?:Check Price|Buy on Amazon|Check Latest Price).*?</a>)\s*(<p className="text-\[10px\][^>]*>.*?Product prices and availability.*?<\/p>)', re.DOTALL)

def wrap_with_fragment(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # We only wrap if not already wrapped
    # Wait, the simplest way is to just wrap it:
    # <> \1 \n \2 </>
    # But let's check if it's already wrapped to be safe
    
    def replacer(match):
        a_tag = match.group(1)
        p_tag = match.group(2)
        # return wrapped
        return f'<>\n{a_tag}\n{p_tag}\n</>'
        
    new_content = pattern.sub(replacer, content)

    # But wait, what if it's already wrapped? We run this once, so it's fine.
    
    if new_content != original_content:
        # Avoid double wrapping if run multiple times
        new_content = new_content.replace('<>\n<>\n', '<>\n').replace('\n</>\n</>', '\n</>')
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

changed_files = []
for root, dirs, files in os.walk(directory):
    if '.git' in root or 'node_modules' in root or '.next' in root:
        continue
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            if wrap_with_fragment(path):
                changed_files.append(path)

print('Wrapped files:', len(changed_files))
