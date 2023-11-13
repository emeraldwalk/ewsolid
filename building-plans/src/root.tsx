// @refresh reload
import { Suspense } from 'solid-js'
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
  useLocation,
} from 'solid-start'
import './root.css'

const BASE_URL = import.meta.env.BASE_URL

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Emeraldwalk - Building</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="icon" href={`${BASE_URL}icons/icon-48x48.png`} />
      </Head>
      <Body>
        <ErrorBoundary>
          <nav>
            <A href={BASE_URL}>Home</A>
            <A href={`${BASE_URL}scene/rabbit-house`}>Rabbits</A>
          </nav>
          <Suspense>
            <main>
              <Routes>
                <FileRoutes />
              </Routes>
            </main>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  )
}
