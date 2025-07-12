# Font Files Directory

Place your custom font files here in the following formats for maximum browser compatibility:

## Berthold Font Family
- Berthold-Regular.woff2
- Berthold-Regular.woff  
- Berthold-Regular.ttf
- Berthold-Bold.woff2
- Berthold-Bold.woff
- Berthold-Bold.ttf

## Univers Font Family
- Univers-Regular.woff2
- Univers-Regular.woff
- Univers-Regular.ttf
- Univers-Medium.woff2
- Univers-Medium.woff
- Univers-Medium.ttf
- Univers-Bold.woff2
- Univers-Bold.woff
- Univers-Bold.ttf

## File Format Priority (for browser compatibility):
1. **WOFF2** - Modern browsers (smallest file size, best compression)
2. **WOFF** - Older modern browsers  
3. **TTF** - Fallback for older browsers

## Font Loading Best Practices:
- Files are loaded in order of declaration in @font-face
- `font-display: swap` ensures text remains visible during font load
- Always include fallback fonts in your font-family declarations
