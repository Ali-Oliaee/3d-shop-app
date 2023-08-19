import { useState } from 'react';
import HomeScreen from './src/screens/home';
import Product1Screen from './src/screens/product1';


export default function App() {
  const [page, setPage] = useState<string>('home')

  return (
    <>
      {page === 'home' && <HomeScreen setPage={setPage}/>}
      {page === 'product1' && <Product1Screen setPage={setPage}/>}
      {page === 'product2' && <HomeScreen setPage={setPage}/>}
    </>
  );
}
