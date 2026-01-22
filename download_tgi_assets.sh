#!/bin/bash
mkdir -p public/images/tgi

# Hero - Fuji Autumn
curl -A "Mozilla/5.0" -L -o public/images/tgi/hero-fuji.jpg "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2070&auto=format&fit=crop"

# Welcome - Modern Cabin
curl -A "Mozilla/5.0" -L -o public/images/tgi/welcome-cabin.jpg "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop"

# Banner - Dark Wood/Interior
curl -A "Mozilla/5.0" -L -o public/images/tgi/banner-wood.jpg "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"

# Gallery Thumbnails
curl -A "Mozilla/5.0" -L -o public/images/tgi/gallery-1.jpg "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=800&auto=format&fit=crop"
curl -A "Mozilla/5.0" -L -o public/images/tgi/gallery-2.jpg "https://images.unsplash.com/photo-1528360983277-13d9b152c6d4?q=80&w=800&auto=format&fit=crop"
curl -A "Mozilla/5.0" -L -o public/images/tgi/gallery-3.jpg "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?q=80&w=800&auto=format&fit=crop"
curl -A "Mozilla/5.0" -L -o public/images/tgi/gallery-4.jpg "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop"
