import { createRoot } from 'react-dom/client'

import { RelayProvider } from './providers/relay'

import { DataBrowserRouter, Route } from 'react-router-dom'
import { PostsEntrypointLoader, PostsEntrypointContainer } from './pages/posts'
import { PostEntrypointLoader, PostEntrypointContainer } from './pages/post'
import { ThemeProvider } from './providers/mantine'

createRoot(document.getElementById('root')!).render(
  <RelayProvider>
    <ThemeProvider>
      <DataBrowserRouter>
        <Route
          path='/posts'
          loader={PostsEntrypointLoader}
          element={<PostsEntrypointContainer />}
        >
          <Route
            path=':id'
            loader={PostEntrypointLoader}
            element={<PostEntrypointContainer />}
          />
        </Route>
      </DataBrowserRouter>
    </ThemeProvider>
  </RelayProvider>
)
