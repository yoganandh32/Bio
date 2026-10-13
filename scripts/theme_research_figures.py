"""Recolor diagram pixels without resizing, redrawing, OCR, or generated content.

A monotone affine map per channel maps white to site charcoal and black to
ivory. Every source pixel retains its position; corresponding fill and legend
colors receive exactly the same transform. Originals remain untouched.
The experimental photograph is intentionally not transformed.
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
BACKGROUND = (23, 28, 28)
FOREGROUND = (236, 235, 225)
SOURCES = {
    'defense-immersion-setup.jpeg': 'defense-immersion-themed.png',
    'defense-layered-model.png': 'defense-layered-themed.png',
}

for source, output in SOURCES.items():
    original = Image.open(ROOT / 'images' / source).convert('RGBA')
    # Flatten transparency against the original slide's white background.
    white = Image.new('RGBA', original.size, (255, 255, 255, 255))
    white.alpha_composite(original)
    rgb = white.convert('RGB')
    lut = [round(FOREGROUND[c] + (BACKGROUND[c] - FOREGROUND[c]) * v / 255)
           for c in range(3) for v in range(256)]
    themed = rgb.point(lut)
    themed.save(ROOT / 'images' / output, optimize=True)
    assert themed.size == original.size
    # Verify every output channel equals the fixed lookup of its source channel.
    for c, (before, after) in enumerate(zip(rgb.split(), themed.split())):
        assert after.tobytes() == before.point(lut[c*256:(c+1)*256]).tobytes()
    print(f'{source} -> {output}: {themed.width} x {themed.height}, pixel mapping verified')
