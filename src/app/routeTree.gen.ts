/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './../routes/__root'
import { Route as AuthenticatedImport } from './../routes/_authenticated'
import { Route as AnonymousImport } from './../routes/_anonymous'

// Create Virtual Routes

const AuthenticatedIndexLazyImport = createFileRoute(
    '/_authenticated/'
)()
const AuthenticatedSearchProductsLazyImport = createFileRoute(
  '/_authenticated/search-products',
)()
const AuthenticatedSearchManufacturesLazyImport = createFileRoute(
  '/_authenticated/search-manufactures',
)()
const AuthenticatedManufacturesLazyImport = createFileRoute(
  '/_authenticated/manufactures',
)()
const AnonymousLoginLazyImport = createFileRoute('/_anonymous/login')()

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AnonymousRoute = AnonymousImport.update({
  id: '/_anonymous',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexLazyRoute = AuthenticatedIndexLazyImport.update({
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any).lazy(() =>
  import('./../routes/_authenticated/index.lazy').then((d) => d.Route),
)

const AuthenticatedSearchProductsLazyRoute =
  AuthenticatedSearchProductsLazyImport.update({
    path: '/search-products',
    getParentRoute: () => AuthenticatedRoute,
  } as any).lazy(() =>
    import('./../routes/_authenticated/search-products.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedSearchManufacturesLazyRoute =
  AuthenticatedSearchManufacturesLazyImport.update({
    path: '/search-manufactures',
    getParentRoute: () => AuthenticatedRoute,
  } as any).lazy(() =>
    import('./../routes/_authenticated/search-manufactures.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedManufacturesLazyRoute =
  AuthenticatedManufacturesLazyImport.update({
    path: '/manufactures',
    getParentRoute: () => AuthenticatedRoute,
  } as any).lazy(() =>
    import('./../routes/_authenticated/manufactures.lazy').then((d) => d.Route),
  )

const AnonymousLoginLazyRoute = AnonymousLoginLazyImport.update({
  path: '/login',
  getParentRoute: () => AnonymousRoute,
} as any).lazy(() =>
  import('./../routes/_anonymous/login.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_anonymous': {
      id: '/_anonymous'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AnonymousImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_anonymous/login': {
      id: '/_anonymous/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AnonymousLoginLazyImport
      parentRoute: typeof AnonymousImport
    }
    '/_authenticated/manufactures': {
      id: '/_authenticated/manufactures'
      path: '/manufactures'
      fullPath: '/manufactures'
      preLoaderRoute: typeof AuthenticatedManufacturesLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/search-manufactures': {
      id: '/_authenticated/search-manufactures'
      path: '/search-manufactures'
      fullPath: '/search-manufactures'
      preLoaderRoute: typeof AuthenticatedSearchManufacturesLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/search-products': {
      id: '/_authenticated/search-products'
      path: '/search-products'
      fullPath: '/search-products'
      preLoaderRoute: typeof AuthenticatedSearchProductsLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexLazyImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AnonymousRoute: AnonymousRoute.addChildren({ AnonymousLoginLazyRoute }),
  AuthenticatedRoute: AuthenticatedRoute.addChildren({
    AuthenticatedManufacturesLazyRoute,
    AuthenticatedSearchManufacturesLazyRoute,
    AuthenticatedSearchProductsLazyRoute,
    AuthenticatedIndexLazyRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_anonymous",
        "/_authenticated"
      ]
    },
    "/_anonymous": {
      "filePath": "_anonymous.tsx",
      "children": [
        "/_anonymous/login"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/manufactures",
        "/_authenticated/search-manufactures",
        "/_authenticated/search-products",
        "/_authenticated/"
      ]
    },
    "/_anonymous/login": {
      "filePath": "_anonymous/login.lazy.tsx",
      "parent": "/_anonymous"
    },
    "/_authenticated/manufactures": {
      "filePath": "_authenticated/manufactures.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/search-manufactures": {
      "filePath": "_authenticated/search-manufactures.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/search-products": {
      "filePath": "_authenticated/search-products.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.lazy.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
