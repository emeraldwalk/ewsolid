import PocketBase from 'pocketbase'
import type { GradeBook } from '../data'
import { SESSION_COOKIE_KEY } from '../config'

export function getPb(): PocketBase {
  const pb = new PocketBase('http://127.0.0.1:8090')
  pb.authStore.loadFromCookie(document.cookie, SESSION_COOKIE_KEY)
  if (!pb.authStore.isValid) {
    window.location.pathname = '/signin'
  }
  return pb
}

export function listGradeBooks(): Promise<GradeBook[]> {
  return getPb().collection('gradebooks').getFullList<GradeBook>()
}

export function getGradeBook(id: string): Promise<GradeBook> {
  return getPb().collection('gradebooks').getOne<GradeBook>(id)
}
