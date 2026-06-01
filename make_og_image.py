from PIL import Image

SRC = "public/images/logo_full.png"
DST = "public/images/logo_og.png"
OG_W, OG_H = 1200, 630
PADDING = 80  # 상하좌우 최소 여백

src = Image.open(SRC).convert("RGBA")

# 로고가 들어갈 최대 크기 (여백 제외)
max_w = OG_W - PADDING * 2
max_h = OG_H - PADDING * 2

# 비율 유지하며 축소
scale = min(max_w / src.width, max_h / src.height)
new_w = int(src.width * scale)
new_h = int(src.height * scale)
logo = src.resize((new_w, new_h), Image.LANCZOS)

# 흰 배경 캔버스에 가운데 배치
canvas = Image.new("RGBA", (OG_W, OG_H), (255, 255, 255, 255))
x = (OG_W - new_w) // 2
y = (OG_H - new_h) // 2
canvas.paste(logo, (x, y), logo)

# PNG로 저장 (원본은 그대로)
canvas.convert("RGB").save(DST, "PNG", optimize=True)
print(f"Saved: {DST}  ({OG_W}x{OG_H}, logo {new_w}x{new_h} at ({x},{y}))")
