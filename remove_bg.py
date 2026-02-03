from PIL import Image
import os

def remove_background(input_path, output_path, target_color, tolerance=30):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        new_data = []
        target_r, target_g, target_b = target_color
        
        for item in datas:
            r, g, b, a = item
            
            # Check if pixel is close to the target blue color
            if (abs(r - target_r) < tolerance and 
                abs(g - target_g) < tolerance and 
                abs(b - target_b) < tolerance):
                new_data.append((r, g, b, 0)) # Make Transparent
            else:
                new_data.append(item)
        
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Saved transparent image to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

# Target Color: #1e35a1 -> RGB(30, 53, 161)
target_blue = (30, 53, 161)
# Also try simpler blue if that's what it is, but let's stick to the brand color first.
# The screenshot showed a very blue box.

input_file = r"c:\Users\Gabriel H\Documents\Mineiro\Site_Mineiro\img\logo-mineiro.png"
# Overwrite or save distinct? Let's overwrite to fix the site immediately.
output_file = r"c:\Users\Gabriel H\Documents\Mineiro\Site_Mineiro\img\logo-mineiro.png"

remove_background(input_file, output_file, target_blue, tolerance=60)
