import { collection, getDocs, query } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react'
import { db } from '../firebase/config';

export const Shop = createContext();

const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        (async () => {
            const queryCollectionProducts = query(collection(db, "productos"));
            const queryCollectionCategories = query(collection(db, "categorias"));
            const queryCollectionOrders = query(collection(db, "ordenes"));
            const querySnapshot = await getDocs(queryCollectionProducts);
            const querySnapshotCategories = await getDocs(queryCollectionCategories);

            const productsDB = []
            querySnapshot.forEach((doc) => {
                const product = { id: doc.id, ...doc.data() };
                productsDB.push(product);
            })

            const categoriesDB = []
            querySnapshotCategories.forEach((doc) => {
                const category = { id: doc.id, ...doc.data() };
                categoriesDB.push(category);
            })

            setProducts([...productsDB]);
            setCategories([...categoriesDB]);
        })()

    }, [])


    const addToCart = (product) => {
        const productInCart = checkInCart(product);

        if (productInCart) {
            productInCart.quantity++;
            const filteredCart = cart.filter(elemento => elemento.id !== productInCart.id);
            filteredCart.push(productInCart);
            setCart(filteredCart);

            const newTotal = total + productInCart.price;
            setTotal(newTotal);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);

            const newTotal = total + product.price;
            setTotal(newTotal);
        }
    }

    const checkInCart = (productToCheck) => {
        return cart.find(elemento => elemento.id === productToCheck.id);
    }

    const removeFromCart = (product) => {
        const filteredCart = cart.filter(elemento => elemento.id !== product.id);
        setCart(filteredCart);

        const newTotal = total - (product.price * product.quantity);
        setTotal(newTotal);
    }

    return (
        <Shop.Provider value={{ products, categories, cart, total, addToCart, removeFromCart }}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider