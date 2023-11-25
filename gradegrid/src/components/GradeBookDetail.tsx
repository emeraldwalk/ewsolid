import { createResource } from 'solid-js'
import { getGradeBook } from '../utils'

export interface GradeBookDetailProps {
  id: string
}

export function GradeBookDetail({ id }: GradeBookDetailProps) {
  const [data] = createResource(id, getGradeBook)
  return <div>{data()?.name}</div>
}
