// @refresh reload
import { Suspense } from 'solid-js'
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start'

import './css/props.colors-palette.css'
import './css/props.colors-semantic.css'
import './root.css'

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Emeraldwalk Design</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <A href="/">Index</A>
            <A href="/button">Button</A>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
