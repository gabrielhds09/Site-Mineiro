import os

# Paths
css_path = 'css/style.css'
html_path = 'index.html'
output_path = 'index_bundle.html'

try:
    # Read CSS
    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()

    # Read HTML
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Create Style Block
    style_block = f"<style>\n{css_content}\n</style>"

    # Replace Link Tag
    # We look for the specific link tag used in index.html
    target_tag = '<link rel="stylesheet" href="css/style.css?v=13">'
    
    if target_tag in html_content:
        final_html = html_content.replace(target_tag, style_block)
        print("Link tag found and replaced.")
    else:
        # Fallback if there are spaces or attributes differ slightly
        print("Exact link tag not found, appending style to head.")
        final_html = html_content.replace('</head>', f'{style_block}\n</head>')

    # Write Output
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(final_html)

    print(f"Successfully created {output_path} with embedded CSS.")

except Exception as e:
    print(f"Error: {e}")
