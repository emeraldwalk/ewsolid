import { For } from 'solid-js'
import { Title } from 'solid-start'
import styles from './palette.module.scss'
function* range(start: number, end: number) {
  for (let i = start; i <= end; ++i) {
    yield i
  }
}

export default function Palette() {
  return (
    <main>
      <Title>Palette</Title>
      <h1>Palette</h1>
      <div>
        <For each={[...range(1, 9)]}>
          {(i) => (
            <div
              class={styles.swatch}
              style={{
                color: `var(--color-gray-${i > 3 ? 1 : 9})`,
                ['background-color']: `var(--color-gray-${i})`,
              }}>
              gray-{i}
            </div>
          )}
        </For>
      </div>
    </main>
  )
}
