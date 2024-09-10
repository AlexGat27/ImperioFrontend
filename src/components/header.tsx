import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import { useLogoutMutation } from '@/utils/query-options/auth.ts'

export const Header = () => {
  const logoutMutation = useLogoutMutation()

  return (
    <header className="border-b p-4 flex justify-between items-center">
      <nav>
          <Link className="font-medium hover:underline m-2" to={"/"}>Пользователи</Link>
          <Link className="font-medium hover:underline m-2" to={"/manufactures"}>Производители</Link>
          <Link className="font-medium hover:underline m-2" to={"/search-manufactures"}>Поиск производителей</Link>
          <Link className="font-medium hover:underline m-2" to={"/search-products"}>Поиск продукции</Link>
      </nav>
      <Button onClick={() => logoutMutation.mutate()} size="sm" variant="ghost">
        Выйти
      </Button>
    </header>
  )
}
