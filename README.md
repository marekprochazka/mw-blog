# Why tf this exists?
- No idea

![idk](https://i.giphy.com/w0mylo7p4OXUQ.webp)


# Run dev:
```bash
  bun run dev
```

# Utility scripts
## add [shadcn](https://www.shadcn-vue.com/) components
```bash
  ./bin/add [component-name]
```

## update-gallery
- takes contents of `./public/assets/gallery` and updates `./composables/_data/images.ts`
```bash
  python ./bin/update-gallery.py
```

## convert to webp
```bash
  cd <directory-with-images-to-convert>
  for i in *.<extension>; do cwebp -q 80 "$i" -o "${i%.<extension>}.webp"; rm "$i"; done
```







