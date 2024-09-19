import os
import datetime

SOURCE = './public/assets/gallery/'

TARGET = './composables/_data/images.ts'

BASE = """// This file is generated automatically by bin/update-gallery.py
// Do not edit it manually
// Last update: %s
export type Img = {
  src: string;
  title: string;
  alt: string;
};

export const images: Img[] = [
    %s
];
"""

def get_name(file):
    return file.split('/')[-1].split('.')[0]

filelist = []
for root, dirs, files in os.walk(SOURCE):
    for file in files:
    	filelist.append(os.path.join(root,file).replace('./public',''))

with open(TARGET, 'w') as f:
    images = []
    for file in filelist:
        name = get_name(file)
        images.append(f"{{ src: '{file}', title: '{name}', alt: '{name}' }}")
    f.write(BASE % (datetime.datetime.now(), ',\n    '.join(images)))
    print('Gallery updated')