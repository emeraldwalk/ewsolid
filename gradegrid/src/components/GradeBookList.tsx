import PocketBase from 'pocketbase'
import { For } from 'solid-js'

const pb = new PocketBase('http://127.0.0.1:8090')


// fetch a paginated records list
const resultList = await pb.collection('gradebooks').getList(1, 50, {
  filter: `created >= "2022-01-01 00:00:00" && name != 'someField2'`,
})

console.log(resultList.items)

// // you can also fetch all records at once via getFullList
// const records = await pb.collection('gradebooks').getFullList({
//   sort: '-created',
// })

export function GradeBookList() {
  return (
    <div>
      <ul>
        <For each={resultList.items}>{({ name }) => <li>{name}</li>}</For>
      </ul>
    </div>
  )
}
