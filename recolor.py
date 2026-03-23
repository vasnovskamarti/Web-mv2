import sys
from PIL import Image

def recolor_logo(image_path, color_hex):
    # Convert hex to RGB tuple
    color_hex = color_hex.lstrip('#')
    rgb = tuple(int(color_hex[i:i+2], 16) for i in (0, 2, 4))
    
    img = Image.open(image_path).convert("RGBA")
    
    # Extract data
    data = img.getdata()
    new_data = []
    
    # Recolor: keep original alpha but set RGB to new color
    for item in data:
        # item is (R, G, B, A)
        if item[3] > 0: # If pixel is not fully transparent
            # Calculate brightness of the original pixel to preserve some details (if it's not a monochrome flat logo)
            # Or just replace it completely if it is intended to be a flat 1 color logo
            # For a flat logo replacement:
            new_data.append((rgb[0], rgb[1], rgb[2], item[3]))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(image_path)
    print(f"Logo {image_path} recolored to {color_hex}.")

if __name__ == "__main__":
    recolor_logo(sys.argv[1], sys.argv[2])
