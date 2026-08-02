import os
import re

directory = 'd:/Lost_Projects/affiliate-website-updates'

author_map = {
    'Arjun Mehta': 'Abhay Gupta',
    'Riya Sharma': 'Dev Kumar Sharma',
    'Rahul Desai': 'Aditya Patwa',
    'Kavya Iyer': 'Dev Kumar Sharma',
    'Vikram Singh': 'Aditya Patwa',
    'Sneha Rao': 'Aditya Patwa',
    'Sneha': 'Aditya Patwa'
}

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content

    for old_author, new_author in author_map.items():
        content = content.replace(f'name="{old_author}"', f'name="{new_author}"')
        content = content.replace(f'>{old_author}<', f'>{new_author}<')
        content = content.replace(f'{old_author} is', f'{new_author} is')
        content = content.replace(f'by {old_author}', f'by {new_author}')

    pattern = re.compile(r'(<a\s+[^>]*>.*?(?:Check Price|Buy on Amazon|Check Latest Price).*?</a>)', re.DOTALL)
    
    parts = pattern.split(content)
    new_content = ""
    for i in range(len(parts)):
        if i % 2 == 1: 
            if i + 1 < len(parts) and 'Product prices and availability are accurate as of the date/time indicated' in parts[i+1][:250]:
                new_content += parts[i]
            else:
                new_content += parts[i] + '\n            <p className="text-[10px] text-muted-foreground text-center mt-2 leading-tight">\n              Product prices and availability are accurate as of the date/time indicated and are subject to change.\n            </p>'
        else:
            new_content += parts[i]

    if new_content != original_content:
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
            if fix_file(path):
                changed_files.append(path)

print('Changed files:', len(changed_files))
