import { useAuth0 } from '@auth0/auth0-react'
import { createContext, useEffect, useState } from 'react'
import { Configuration, TodosApi } from './generated'

type ApiContextType = {
  todosApi: TodosApi | null
}

type ApiProviderProps = {
  children: React.ReactNode
}

export const ApiContext = createContext<ApiContextType | null>(null)

export function ApiProvider({ children }: ApiProviderProps) {
  const { getAccessTokenSilently } = useAuth0()
  const [todosApi, setTodosApi] = useState<TodosApi | null>(null)

  useEffect(() => {
    ;(async () => {
      const token = await getAccessTokenSilently()
      const config = new Configuration({
        basePath: import.meta.env.VITE_API_BASE_URL,
        accessToken: token,
      })
      setTodosApi(new TodosApi(config))
    })()
  }, [getAccessTokenSilently])

  return (
    <ApiContext.Provider value={{ todosApi }}>{children}</ApiContext.Provider>
  )
}
