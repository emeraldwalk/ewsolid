import { For, lazy } from 'solid-js'
import { listGradeBooks } from '../utils'

export const GradeBookList = lazy(async () => {
  const gradeBookList = await listGradeBooks()

  return {
    default: function GradeBookList() {
      return (
        <div>
          <ul>
            Gradebooks
            <For each={gradeBookList}>{({ name }) => <li>{name}</li>}</For>
          </ul>
        </div>
      )
    },
  }
})
