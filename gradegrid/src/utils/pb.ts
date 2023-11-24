import PocketBase from 'pocketbase'
import type { GradeBook } from '../data'
import { SESSION_COOKIE_KEY } from '../config'

export function getPb(): PocketBase {
  const pb = new PocketBase('http://127.0.0.1:8090')
  pb.authStore.loadFromCookie(document.cookie, SESSION_COOKIE_KEY)
  return pb
}

export function listGradeBooks() {
  return getPb().collection('gradebooks').getFullList<GradeBook>()
}
