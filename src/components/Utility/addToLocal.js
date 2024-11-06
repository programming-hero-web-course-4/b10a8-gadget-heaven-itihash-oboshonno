import { toast } from "react-toastify";

const theCartIdHolder = () => {
    const storedListStr = localStorage.getItem('cart'); // add kora string ta nilam local theke
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr); // string ta ke abar json obj banalam
        return storedList;
    } else {
        return [];
    }
}

const addingIdToCart = (id) => {
    const existingList = theCartIdHolder();
    existingList.push(id);
    const storedListStr = JSON.stringify(existingList);
    localStorage.setItem('cart', storedListStr);
    toast.success('Item Added to your Cart!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

const theWishListIdHolder = () => {
    const storedListStr = localStorage.getItem('wish-list'); // add kora string ta nilam local theke
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr); // string ta ke abar json obj banalam
        return storedList;
    } else {
        return [];
    }
}

const addingIdtoWishList = (id) => {
    const existingList = theWishListIdHolder();
    if (existingList.includes(id)) {
        toast.error('This product already exists in your Wishlist!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    } else {
        existingList.push(id);
        const storedListStr = JSON.stringify(existingList);
        localStorage.setItem('wish-list', storedListStr);
        toast.success('Added Item to your Wishlist!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    
}

const removingIdFromCart = (id) => {
    const checkCartStr = localStorage.getItem('cart');
    const checkCart = JSON.parse(checkCartStr);
    if (checkCart.includes(id)) {
        const index = checkCart.indexOf(id);
        if (index > -1) {
            checkCart.splice(index, 1);
            const storedListStr = JSON.stringify(checkCart);
            localStorage.setItem('cart', storedListStr);
            toast.info('Item Removed from your Cart!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
}

const removingIdFromWishList = (id) => {
    const checkWishStr = localStorage.getItem('wish-list');
    const checkWish = JSON.parse(checkWishStr);
    if (checkWish.includes(id)) {
        const index = checkWish.indexOf(id);
        if (index > -1) {
            checkWish.splice(index, 1);
            const storedListStr = JSON.stringify(checkWish);
            localStorage.setItem('wish-list', storedListStr);
            toast.info('Item Removed from your Wishlist!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
    }
}



export { addingIdToCart, addingIdtoWishList, theCartIdHolder, theWishListIdHolder, removingIdFromCart, removingIdFromWishList }