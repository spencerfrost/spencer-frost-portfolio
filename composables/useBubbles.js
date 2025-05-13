// Composable to generate precomputed bubble data for SSR/client consistency
export function useBubbles(NUM_BUBBLES = 25) {
  const colors = [
    'bg-rosewater',
    'bg-flamingo',
    'bg-pink',
    'bg-mauve',
    'bg-red',
    'bg-maroon',
    'bg-peach',
    'bg-yellow',
    'bg-green',
    'bg-teal',
    'bg-sky',
    'bg-sapphire',
    'bg-blue',
    'bg-lavender',
  ]
  const bubbles = []
  for (let i = 0; i < NUM_BUBBLES; i++) {
    let appear = i < Math.floor(NUM_BUBBLES * 0.25) ? Math.random() * -0.05 : Math.random()
    let pop
    if (i >= Math.floor(NUM_BUBBLES * 0.75)) {
      pop = 1
    } else if (appear === 0) {
      // Bubbles visible on load last longer
      pop = 0.3 + Math.random() * 0.2 // 0.3 - 0.5
    } else {
      pop = Math.min(1, appear + (0.05 + Math.random() * 0.1))
    }
    let left,
      top,
      size,
      valid,
      attempts = 0
    do {
      if (Math.random() < 0.8) {
        left =
          Math.random() < 0.5 ? Math.random() * 20 : 80 + Math.random() * 20
      } else {
        left = Math.random() * 100
      }
      top = Math.random() * 100
      size = 80 + Math.random() * 120
      valid = true
      for (const b of bubbles) {
        const dx = left - b.left
        const dy = top - b.top
        const dist = Math.sqrt(dx * dx + dy * dy)
        const avgSizePercent = (size + b.size) / 2 / 16
        if (dist < avgSizePercent) {
          valid = false
          break
        }
      }
      attempts++
    } while (!valid && attempts < 10)
    const distFromCenter = Math.abs(left - 50) / 50
    const minOpacity = 0.15
    const maxOpacity = 0.4
    const opacity = minOpacity + (maxOpacity - minOpacity) * distFromCenter
    bubbles.push({
      id: i,
      size,
      left,
      top,
      color: colors[Math.floor(Math.random() * colors.length)],
      appearScrollPoint: appear,
      popScrollPoint: pop,
      opacity,
      rotation: (Math.random() - 0.5) * 20,
    })
  }
  return bubbles
}
